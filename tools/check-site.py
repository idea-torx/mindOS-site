#!/usr/bin/env python3
"""Static site checks: routes, internal links, search index freshness."""
import json, os, re, sys

ROOT = os.path.join(os.path.dirname(__file__), "..", "site")
errors = []

pages = []
for dirpath, _, files in os.walk(ROOT):
    for f in files:
        if f.endswith(".html"):
            pages.append(os.path.join(dirpath, f))

# collect all internal hrefs/srcs
refs = set()
for p in pages:
    html = open(p).read()
    rel = os.path.relpath(p, ROOT)
    for m in re.finditer(r'(?:href|src)="([^"#]+)(?:#[^"]*)?"', html):
        u = m.group(1)
        if u.startswith(("http", "mailto:", "data:", "//")):
            continue
        refs.add((rel, u))

for rel, u in sorted(refs):
    target = os.path.normpath(os.path.join(ROOT, os.path.dirname(rel), u))
    if not os.path.exists(target):
        errors.append("broken link: %s -> %s" % (rel, u))

# every docs sidebar page exists & is indexed
idx = json.load(open(os.path.join(ROOT, "assets", "search-index.json")))
idx_urls = {e["url"] for e in idx}
for p in pages:
    u = os.path.relpath(p, ROOT)
    if u.startswith("docs/") and u not in idx_urls:
        errors.append("not in search index: %s" % u)

# mark spec sanity: no legacy dot-mark anywhere
for p in pages:
    html = open(p).read()
    if "circle cx='16' cy='16'" in html or 'circle cx="16" cy="16"' in html:
        errors.append("legacy dot-mark found in %s" % os.path.relpath(p, ROOT))

if errors:
    print("\n".join(errors))
    sys.exit(1)
print("OK: %d pages, %d internal links, %d index entries — all routes resolve" % (len(pages), len(refs), len(idx)))
