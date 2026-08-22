# Cycle 15 post-edit (supervised cycle 1, repo-local verification, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (951 lines, vars --ease-out/--dur + scroll-margin 72/scroll-padding 72 + hero-arch 40/380 + 60/640 alignment + fail hover + sm hover/focus + hero-art 460@820), /assets/site.js (node --check ok), /assets/search-index.json (15, landing 3795), /docs/*, /assets/og-card.png (36 hits retained)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries
- sections 12, dup </main> 1, hint 9 (hero +1, 44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 58, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 3 code-only: .c-flag/.c-key/code + guard comment, #1a1a1d mono surface lift retained)
- SVG geometry consolidated: stroke-width now only 1.5 (rails/subtle) / 2 (emphasis circles) / 3 (active timeline) — removed 1.6/2.4 outliers; fonts 10/10.5/11/11.5/12/12.5/13/13.5/14 system; hero L3 24×412→40×380 + arch L1-4 40×680→60×640 + sm 548×164→560×140 + seam 98→111/565 + security 20→26 centering — all layers share mono grid
- scroll-margin-top 72 on .section + scroll-padding-top 72 on html/body for sticky header anchor correctness at all breakpoints
- hover/focus parity: fail-pane fs-step circle hover #e8e8ea + sm-state rect hover/focus lift -2px + stroke #9a9aa2 + focus ring; hero-art 820 max-460 centering
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (hero-art 460@820, term 1.7/-.01, hint+meta 14 vs body 18)
- artifacts: audit/cycle-15-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)
