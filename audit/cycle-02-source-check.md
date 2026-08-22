# Cycle 02 — source checks (pre + post)

## Pre-checks (before edit, curl+source)
- curl 200 on /, /assets/style.css, /assets/site.js, /assets/search-index.json, /docs/index.html
- 32 MindOS hits in body, 12 sections, 7 hints, 3 copy-btn occurrences, 5 data-nav
- hex inventory strict monochrome (no saturated outside #7fb3e0 code), archetypes 12
- ids complete, missing anchors 0, jargon 0, duplicate </main> 1 (expected)

## Post-edit verification (after block-level edit)
- GET / : 200 (32 hits, 12 sections retained)
- GET /assets/style.css : 200 text/css
- GET /assets/site.js : 200 text/javascript, node --check ok
- GET /assets/search-index.json : 200 (15 entries)
- New elements: hero-stats 1, security-pane 1, row-mindos 1, copy-live 1, hints now 8 (+1 security)
- Sections 12, archetypes 12, data-nav 5, dup </main> 1
- hex inventory: #0a0a0b/#101012/#16161a/#232327/#e8e8ea/#9a9aa2/#5f5f66/#45454b/#7fb3e0(code)/#34343a/#0f0f12/#2a2a30/#08130d/#3a3a40/#0d0d0f/#101014/#0e0e11 — strict monochrome, no saturated outside code
- jargon scan: execution truth / temporal facts / provenance / control plane / fencing epoch → all false
- security-pane added to diagram observer list; copy-live aria-live added
