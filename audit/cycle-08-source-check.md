# Cycle 8 — source pre-check (2026-08-21)

Server: curl http://127.0.0.1:8899/ → 200 (35 hits, kept alive, no restart)
Assets: /assets/style.css 200, /assets/site.js 200 (node --check ok), /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200
Source: site/index.html 535 lines, site/assets/style.css 854, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono, landing jargon 0, console clean

## Queued weakness (Cycle 8 plan)
- per-section SVG motion timing micro-audit (rail vs window vs machine vs branch — currently overlapping 120/260 cadences)
- table mobile card contrast at 390 (card #232327 on #101012 too faint, MindOS row #34343a faint, data-label #5f5f66 too faint at 390)
- landing hero measure vs docs plain-lead measure alignment (h1.hero 16em vs sec-title 18em vs lede/plain-lead 42em)
- focus-visible ring audit on docs side nav (no ring, keyboard Tab invisible)

## Detail audit before edit
- Motion delays overlapping: hero 100/260/420/580 vs security 120/260/420/580 nearly identical; machine 120/260/400 vs security similar; arch 100/300/500/700 weight not distinct
- Table mobile at 680: cards var(--border) #232327 on var(--surface-1) #101012 — low contrast, no shadow; MindOS row #34343a border still faint; data-label #5f5f66 at 11px low contrast for scanning
- Table 390: no specific refine, same as 680
- Docs side nav: .docs-side a has hover/active but no :focus-visible ring (verified: focus-visible count 28, no docs-side entry)
- Hero measure: h1.hero 16em (in index.html inline style? via css 16em) vs sec-title 18em — 2em mismatch; lede 42em vs plain-lead 42em aligned but h1 not
- Hex tokens: []
- Reduced-motion: 4 blocks, focus-visible 32 selectors
