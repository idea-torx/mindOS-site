# Cycle 04 — post-edit verification (curl + source, inside repo only)

## Block-level edit (cycle 4 — typography + table scannability + motion + footer)
- **site/index.html** (524 → 525 lines):
  - #vs-git: added `aria-label` on table, `<caption visually-hidden>` describing 4 rows, `scope="col"` on all th, `data-label` on all 12 td (3 per row) for mobile card stacking without breaking table semantics; MindOS row retains `#9a9aa2` accent.

- **site/assets/style.css** (678 → 704 lines):
  - Typography: `h2.sec-title { text-wrap: balance }`, `.kicker { letter-spacing .085em }`, at 680 remove max-width clamp on titles/bodies for better measure on narrow.
  - Table mobile: at 680 converts table to block cards — thead visually hidden, tr as bordered cards (`var(--surface-1)` bg, `var(--border)` radius), td with `::before { content: attr(data-label) }` uppercase 11px faint, recreates column labels per card; row-mindos border #34343a distinct.
  - Motion tuning: fail rail 120/340/560/780/1000 (even stagger), sm-pane states 120/260/400, recovery handoff 1.2s to breathe after branch draw.
  - Footer polish: border #2a2a30 distinct from page, right meta span now mono 11.5px #9a9aa2-adjacent spacing.

- **site/assets/site.js**: no functional change (315 lines) — node --check ok, Escape + click-outside nav + seam-pane observer from cycle 3 retained.

## curl (http://127.0.0.1:8899)
- GET / : 200 — 33 hits, 12 sections
- GET /assets/style.css : 200 — contains `text-wrap: balance` and `data-label` mobile rules
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 (15 entries)
- GET /assets/og-card.png : 200

## Source checks
- sections 12, dup </main> 1, term-legend 1, seam-pane 1, security focusable true, mm-change focusable 1, hints 8, data-labels 12, caption 1, scope col 3
- hex inventory: #0a0a0b #101012 #16161a #232327 #e8e8ea #9a9aa2 #5f5f66 #45454b #7fb3e0(code only) #34343a #0f0f12 #2a2a30 #08130d #3a3a40 #0d0d0f #101014 #0e0e11 — strict mono, #34343a +1 from table cards
- jargon 0, console.log false, reduced-motion 5 blocks, focus-visible 13+

## File sizes
     525 site/index.html (was 524)
     704 site/assets/style.css (was 678)
     315 site/assets/site.js (315 unchanged)
    1544 total

## Artifacts (inside repo, no /tmp)
- audit/cycle-04-source-check.md, audit/cycle-04-post-edit.md, audit/cycle-04-curl.html, audit/cycle-04-index.html/css/js
- server still audit/server-cycle02.log (same pid, no restart)

Result: table now scannable at 390 as cards, typography balanced, motion evenly staggered, footer distinct, strict monochrome retained, curl 200 clean.
