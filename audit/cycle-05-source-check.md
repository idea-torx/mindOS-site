# Cycle 05 — source audit (repo-local, no /tmp)
Date: 2026-08-21 cycle 5
Server: http://127.0.0.1:8899 (curl only)

## curl
- GET / : 200 (46591 bytes, 35 MindOS hits)
- GET /assets/style.css : 200
- GET /assets/site.js : 200 (node --check ok)
- GET /assets/search-index.json : 200

## structure
- sections 12 (expected 12)
- dup </main> 1 (expected 1)
- reveal elements 44
- hint paragraphs 8
- panes with tabindex for 390 keyboard scroll 5 (fail/mem/sm/rec/arch + seam = 6 incl security pane focusable)
- data-label cells 12 (expected 12)
- focus-visible selectors 25
- prefers-reduced-motion blocks 4
- breakpoints: ['max-width: 1120px', 'max-width: 1120px', 'max-width: 820px', 'max-width: 680px', 'max-width: 680px', 'max-width: 680px', 'max-width: 680px', 'max-width: 1120px', 'max-width: 1120px', 'max-width: 620px', 'max-width: 900px', 'max-width: 480px', 'max-width: 680px', 'max-width: 860px', 'max-width: 680px', 'max-width: 680px', 'max-width: 820px', 'max-width: 680px', 'max-width: 390px', 'max-width: 820px', 'max-width: 680px', 'max-width: 680px']

## monochrome
- hexes: ['#08130d', '#0a0a0b', '#0d0d0f', '#0e0e11', '#0f0f12', '#101012', '#101014', '#16161a', '#232327', '#2a2a30', '#34343a', '#3a3a40', '#45454b', '#5f5f66', '#7fb3e0', '#9a9aa2', '#e8e8ea']
- jargon check (execution truth / temporal facts etc): 0
- console.log in js: False

## overflow
- overflow-x: clip on html/body present: True
- pane scrollbar styling present: True
- 820 breakpoint present: True
- 390 breakpoint present: True
- pane svg min-width rules: True / True

## links
- fragment ids resolve: all nav data-nav present
- docs hrefs exist: all 9 checked
