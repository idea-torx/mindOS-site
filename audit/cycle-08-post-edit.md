# Cycle 8 — post-edit verification (2026-08-21)

Server kept alive (verify via curl only, no lsof/ps, no /tmp): curl http://127.0.0.1:8899/ → 200 (35 hits), /assets/style.css 200, /assets/site.js 200, /assets/search-index.json 200 (15), /docs/* 200
node --check site/assets/site.js → ok
python3 tools/gen-search-index.py → Wrote 15 entries (landing 3796 retained)
python3 tools/check-site.py → OK: 15 pages, 248 links, 15 index entries

## Edits applied (substantial block-level redesign)
- **site/assets/style.css motion micro-audit**: per-section distinct cadence — rail 120/340/560/780/1000 @420ms ease-out cascading; machine 90/180/270 + 620/850 @320ms tight mechanical snap (was 120/260/400); security Shield-first 80/240/400/560 @360ms deliberate lock (was 120/260/420/580 dup of hero); arch weighty 120/320/520/720 @460ms cubic-bezier(.22,.61,.36,1) (was 100/300/500/700); seam gates 200/380/560 @360ms (was 260/420/580); hero retained 100/260/420/580 @480ms snappy layered; each grammar distinct clock + easing.
- **Table mobile contrast at 680+390**: at 680 cards border #232327→#34343a (+ shadow inset), MindOS card #34343a→#45454b + bg #16161a + td border #2a2a30, data-label #5f5f66→var(--text-dim) #9a9aa2 for skimming; at 390 extra lift card #3a3a40 + MindOS #5f5f66, td 13px + label 10.5px #9a9aa2.
- **Docs side-nav focus-visible**: added .docs-side a:focus-visible (surface-1 bg + text + 2px #e8e8ea ring offset 1), .doc-tile/.dm-tile:focus-visible (border #9a9aa2 ring), .on-this-page a:focus-visible — count 28→32.
- **Hero vs plain-lead measure**: h1.hero 16em→17em to converge toward sec-title 18em + lede/plain-lead shared 42em; at 680 all three (h1.hero, sec-title, lede/plain-lead) go max-width:none together for consistent narrow rhythm.

## Verification numbers
- css 854 lines (+35), html 535 lines (unchanged 535), js 314 (314)
- sections 12, dup </main> 1, panes tabindex 6, data-labels 12, caption 1, scope 3, hint 8, docs-mini 1, hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, plain-lead 6 pages
- hex strict mono 17 tokens (no saturated outside code, #7fb3e0 code-only): []
- focus-visible 32, reduced-motion 4 blocks, landing jargon 0, console.log false, overflow-x clip true, 820+390 breakpoints present
- curl 200 retained, 35 MindOS hits, /assets/* contains new motion + table + focus + measure strings

## Artifacts inside repo (no /tmp)
- audit/cycle-08-source-check.md, audit/cycle-08-post-edit.md, audit/cycle-08-curl.html, audit/cycle-08-index.html/style.css/site.js/search-index.json
- server log audit/server-cycle02.log kept alive via curl only
