# Cycle 07 — source audit (repo-local, no /tmp)
Date: 2026-08-21 cycle 7
Server: http://127.0.0.1:8899 (curl only, kept alive — no lsof/ps)

## curl (repo-local, before)
- GET / : 200 (47643 bytes, 35 MindOS hits, humanized hero present)
- GET /assets/style.css : 200 (790→810 lines after plain-lead, docs-mini retained)
- GET /assets/site.js : 200 (314 lines, node --check ok)
- GET /assets/search-index.json : 200 (15 entries, landing humanized, stale docs snippets)
- GET /docs/index.html : 200
- GET /docs/concepts.html : 200
- GET /assets/og-card.png : 200

## structure (pre-edit, curl+source only)
- sections 12 (expected 12)
- dup </main> 1 (expected 1)
- reveal elements 45, hint paragraphs 8
- panes tabindex 6 + seam/security focusable, data-labels 12, caption 1, scope 3
- hero-stats 1, security-pane 1, seam-pane 1, term-legend 1, docs-mini 1, row-mindos 1
- focus-visible 25, prefers-reduced-motion 4, breakpoints 900/820/680/390 present
- hex strict mono (17 tokens, #7fb3e0 code-only), jargon 0 in landing, docs jargon 5-4-1-3 files (intentional runtime grounding)

## queued weakness (from SITE-INFINITE-IMPROVEMENT-LOG.md cycle 7 plan)
- Docs readability vs landing plain-style alignment: concepts/architecture/memory/docs-index still jargon-dense without plain bridge — intentional for runtime grounding but search snippets mirror dense phrasing, new readers landing from search hit wall of terms (fencing epoch, temporal facts, control plane) before plain meaning.
- SVG motion timing per section already tuned to 120/340/560 stagger (cycle 4-5), but docs code/terminal overflow at 390 needs hardening inside article wrapper (no body scroll) and plain-lead vertical rhythm systematized.

## checks
- python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries
- node --check site/assets/site.js → ok
- overflow-x: clip true, pane svg 560→520 at 390 inside wrapper, thin scrollbar present
- landing jargon 0, mono strict, console clean
