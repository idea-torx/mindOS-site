#!/usr/bin/env python3
"""Generate site/assets/search-index.json from site HTML — repo-local only.

Extracts visible text from each page without nav/header/footer noise,
decodes entities, and truncates to a search-friendly length. The landing
entry therefore tracks the humanized copy (AI agents lose track ... memory
they share) instead of the old pre-cycle-1 control-plane copy.

No external deps. Run from repo root: python3 tools/gen-search-index.py
"""
import html
import json
import os
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1] / "site"
OUT = ROOT / "assets" / "search-index.json"

STRIP_TAGS = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")
SCRIPT_STYLE = re.compile(r"<(script|style).*?</\1>", re.S | re.I)

# remove header/nav/footer/search overlay noise before text extraction
NOISE = re.compile(
    r"<header.*?</header>|<footer.*?</footer>|<div class=\"search-overlay\".*?</div>",
    re.S | re.I,
)

TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
H1_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.S | re.I)
CANONICAL_RE = re.compile(r"<link rel=\"canonical\"[^>]*>", re.I)

def clean(s: str) -> str:
    s = SCRIPT_STYLE.sub(" ", s)
    s = NOISE.sub(" ", s)
    s = STRIP_TAGS.sub(" ", s)
    s = html.unescape(s)
    s = s.replace("\u00a0", " ")
    s = WS.sub(" ", s).strip()
    # strip decode artifacts
    s = s.replace(" — ", " — ")
    return s

def extract_page(path: pathlib.Path):
    raw = path.read_text(encoding="utf-8")
    rel = path.relative_to(ROOT).as_posix()  # e.g. index.html or docs/getting-started.html

    # title: prefer <h1> for docs, fallback to <title> trimmed
    m_h1 = H1_RE.search(raw)
    h1 = clean(m_h1.group(1)) if m_h1 else ""
    m_title = TITLE_RE.search(raw)
    title_raw = clean(m_title.group(1)) if m_title else h1
    # normalize title: "Getting started — MindOS docs" -> "Getting started"
    title = title_raw.split(" — ")[0].split(" - ")[0].strip()
    if rel == "index.html":
        title = "MindOS — landing"

    # section label: use h1 or title, for landing use Home
    if rel == "index.html":
        section = "Home"
    else:
        section = h1 or title

    text = clean(raw)
    # remove title duplication at start if present
    # truncate for search: landing gets more budget but still bounded
    limit = 3800 if rel == "index.html" else 2200
    if len(text) > limit:
        text = text[:limit].rsplit(" ", 1)[0] + "…"

    return {"title": title, "url": rel, "section": section, "text": text}

def main():
    pages = sorted(ROOT.rglob("*.html"))
    # keep only site pages (exclude audit snapshots that live under audit/, not site/)
    entries = []
    for p in pages:
        # skip assets if any html there (none)
        if "assets" in p.parts:
            continue
        entries.append(extract_page(p))

    # sort: landing first, then docs/index, then alphabetical docs
    def sort_key(e):
        if e["url"] == "index.html":
            return (0, e["url"])
        if e["url"] == "docs/index.html":
            return (1, e["url"])
        return (2, e["url"])
    entries.sort(key=sort_key)

    OUT.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(entries)} entries to {OUT.relative_to(ROOT.parent)}")
    for e in entries:
        print(f"  {e['url']:30s}  {e['title']:24s}  {len(e['text'])} chars")

if __name__ == "__main__":
    main()
