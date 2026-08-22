# Cycle 06 — source audit (repo-local, no /tmp)
Date: 2026-08-21 cycle 6
Server: http://127.0.0.1:8899 (curl only, kept alive from cycle 2 — no lsof/ps)

## curl (repo-local, before + after)
- GET / : 200 (47643 bytes, 35 MindOS hits, humanized hero present)
- GET /assets/style.css : 200 (790 lines, docs-mini present)
- GET /assets/site.js : 200 (314 lines, node --check ok)
- GET /assets/search-index.json : 200 (15 entries, landing humanized)
- GET /assets/og-card.png : 200
- GET /docs/index.html : 200 (site-nav id + aria-controls fixed)

## structure
- sections 12 (expected 12)
- dup </main> 1 (expected 1)
- reveal elements 45 (+1 docs-mini vs 44 in cycle 5)
- hint paragraphs 8
- panes with tabindex for 390 keyboard scroll 6 (fail/mem/sm/rec/arch + seam; security pane focusable) — tabindex="0" count 22 incl svg states
- data-label cells 12 (expected 12)
- docs-mini strip 1 (browse 3 tiles: concepts/architecture/cli-reference + All 13 link)
- hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, row-mindos 1
- focus-visible selectors 25
- prefers-reduced-motion blocks 4 (includes docs-mini)
- breakpoints: 900 (hero collapse), 820 (pane/term smoothing), 680 (pane scroll + table cards + dm single col), 390 (wrap 16, hero 28, pane 520)
- site-nav id present on landing + all 14 docs pages; menu-toggle aria-controls="site-nav" present on both

## search-index drift (primary finding)
- Previous landng entry stale: contained "durable local operating system", "control plane", "execution truth", "temporal facts", "fencing epoch" — 4 jargon hits, 0 of humanized phrases
- html already humanized since cycle 1: "AI agents lose track", "memory they share", "runs on your machine", "1 file", "5 states", "rehearse → undo"
- tools/gen-search-index.py was missing (referenced in site/README.md but not on disk). check-site still passed because it only checks url coverage, not text drift.
- Fix: recreated tools/gen-search-index.py (repo-local, no external deps, strips header/footer/search noise, decodes entities) and regenerated site/assets/search-index.json. Landing entry now 3796 chars starting "MindOS: a memory and proof-of-work layer..." with all 5 new phrases present, 0 old jargon.

## monochrome
- hexes: ['#08130d', '#0a0a0b', '#0d0d0f', '#0e0e11', '#0f0f12', '#101012', '#101014', '#16161a', '#232327', '#2a2a30', '#34343a', '#3a3a40', '#45454b', '#5f5f66', '#7fb3e0', '#9a9aa2', '#e8e8ea']
- Strict mono: #7fb3e0 confined to code flags (.term/.block/.term-legend code) only. No saturated color outside code. #45454b rail bump stays mono gray.
- jargon scan (execution truth / temporal facts / provenance / control plane / fencing epoch): 0 in html
- console.log in js: False

## overflow / a11y
- overflow-x: clip on html/body present: True
- pane/term/table-wrap overflow-x:auto + thin scrollbar + webkit thumb: True
- 820 breakpoint present: True, 390 present: True
- pane svg min-width 560→520 at 390 inside wrapper (no body scroll): True
- site-nav id + aria-controls fixes landing + docs/index (previously broken ref)
- docs-mini tiles are plain anchors with focus-visible ring via global rule + border-color hover

## links
- fragment ids resolve: #problem/#product/#memory/#safety/#workflow/#recovery/#vs-git/#human-seam/#architecture/#security/#get-started + #main all present; data-nav 5 active
- docs hrefs exist (248 internal links): 0 broken
- search index covers all 15 pages (including landing + 14 docs): 0 missing
- mark spec: no legacy circle cx 16 dot found
