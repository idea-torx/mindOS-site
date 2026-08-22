# Cycle 01 — post-edit verification (curl + source, inside repo only)

## curl (http://127.0.0.1:8899 — pre-existing server)
- GET / : 200 — 32 hits
- GET /assets/style.css : 200
- GET /assets/site.js : 200
- GET /assets/search-index.json : 200

## Source checks
- node --check site/assets/site.js: ok
- duplicate </main>: 1 (expected 1)
- sections: 12 (12)
- archetype classes: 12 occurrences across sections
- hint paragraphs: 7 (expected 6+)
- copy buttons: 2 (expected 2)
- data-nav scroll-spy: 5 (expected 5)

## File sizes (lines)
     487 site/index.html
     577 site/assets/style.css
     299 site/assets/site.js
    1363 total

## Monochrome scan (css hex inventory)
{'#0a0a0b': 1, '#101012': 2, '#16161a': 1, '#232327': 2, '#e8e8ea': 7, '#9a9aa2': 7, '#5f5f66': 1, '#45454b': 1, '#7fb3e0': 4, '#34343a': 3, '#08130d': 1, '#3a3a40': 1, '#0d0d0f': 3, '#2a2a30': 4, '#101014': 1, '#0f0f12': 1, '#0e0e11': 1}

All palette entries are near-black/graphite/off-white/gray except #7fb3e0 syntax blue confined to .c-flag/.c-key/.c-ok (code/status only). #3a3a40 is muted gray hover border.

## Section archetypes
   1 archetype-branch
   2 archetype-compare
   1 archetype-hero
   1 archetype-layered
   1 archetype-machine
   1 archetype-rail
   2 archetype-terminal
   2 archetype-walk
   1 archetype-window

## Jargon scan (landing body)
{'execution truth': False, 'temporal facts': False, 'provenance': False, 'control plane': False, 'fencing epoch': False}

Result: no jargon in landing prose. Monochrome + per-section archetype + hover/focus/parallax + reduced-motion intact.
