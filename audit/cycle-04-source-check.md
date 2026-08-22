# Cycle 04 — source check (pre-edit sweep, curl + source only, no /tmp/ps/lsof)

Server: http://127.0.0.1:8899 (python3 -m http.server --bind 127.0.0.1 --directory site, still same pid from cycle 2 — re-verified 200)

## curl
- GET / : 200 — 33 MindOS hits, 12 sections
- GET /assets/style.css : 200
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 (15 entries)
- GET /docs/* : 200, og-card.png 200

## Source inventory (pre-edit, inherited from cycle 3 post-edit)
- site/index.html 524 lines, site/assets/style.css 678, site/assets/site.js 315
- 12 sections, archetypes hero/rail/seam/walk/window/machine/terminal(2)/branch/compare(2)/layered/seam distinct
- term-legend 1, seam-pane 1, security-pane focusable, mm-change focusable, hints 8, dup </main> 1
- Hex strict mono, jargon 0, no console.log

## Issues found (audit sweep for cycle 4)
1. #vs-git table: at 390px three columns cramped (font 14px, padding 10px) — horizontal scroll needed despite .table-wrap overflow; header contrast low at mobile; accessibility missing scope/caption/data-label for card fallback.
2. Typography measure: sec-title not using text-wrap balance — long headings can orphan at narrow; kicker tracking .08em slightly tight vs body measure; body max 44em fine but at 680 no reduction.
3. Motion: fail rail stagger 120-1000 good but sm-pane stagger still 150ms default + recovery handoff 1.1s felt rushed vs branch draw 900ms.
4. Footer: border #232327 identical to page borders — no distinct separation from compare/layered sections; meta text not mono distinct.
5. Pane responsive rule for svg min-width applied to all panes except hero/security — but table card layout not yet handled.
