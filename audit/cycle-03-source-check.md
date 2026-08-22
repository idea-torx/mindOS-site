# Cycle 03 — source check (pre-edit sweep, curl + source only, no /tmp/ps/lsof)

Server: http://127.0.0.1:8899 (python3 -m http.server --bind 127.0.0.1 --directory site, log audit/server-cycle02.log — still alive from cycle 2, re-verified 200)

## curl
- GET / : 200 — 33 MindOS hits, 12 sections, og-card.png 200
- GET /assets/style.css : 200 text/css
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 (15 entries)
- GET /docs/index.html, /docs/getting-started.html, /docs/architecture.html, /docs/roadmap.html, /docs/security.html, /docs/concepts.html : all 200
- Anchors: #architecture #get-started #main #memory #problem #product all resolve to existing ids (18 ids unique, no dup)

## Source inventory (pre-edit)
- site/index.html 507 lines → after edit 524
- site/assets/style.css 625 lines → 678
- site/assets/site.js 301 → 315
- Duplicate </main>: 1 (expected)
- hero-stats 1, security-pane 1, row-mindos 1, copy-live 1, data-nav 5, hints 8
- Hex inventory strict mono: #0a0a0b #101012 #16161a #232327 #e8e8ea #9a9aa2 #5f5f66 #45454b #7fb3e0(code only) #34343a #0f0f12 #2a2a30 #08130d #3a3a40 #0d0d0f #101014 #0e0e11 — no saturated outside code
- Jargon scan: execution truth / temporal facts / provenance / control plane / fencing epoch → all false
- console.log in js: false, reduced-motion blocks 4, focus-visible 10

## Issues found (audit sweep)
1. Pane overflow: at 680px, .pane padding 28px + svg viewBox 760 still scrolls but thumb cramped; no min-width rule for wide SVGs, hero-art min-width not exempted.
2. Memory change point (.mm-change) was not focusable — hint said “Hover the change point” but keyboard users could not Tab to it.
3. Workflow terminal is distinct but maps poorly to the 5-state machine above it; no explicit state→command legend for skimmers.
4. Human seam (#human-seam) reused walk archetype (same border/spine as #product) — not distinct from editorial walk; needs own pause-rail archetype.
5. Security pane figure not focusable despite hint “Tab to the shield” — shield svg child not tabbable and pane lacked tabindex.
6. Mobile nav: no Escape-to-close or click-outside-to-close — keyboard/pointer trap risk.
7. Even-tint: #human-seam as walk had even background but seam archetype missing even-tint override (would inherit tint incorrectly if changed).
