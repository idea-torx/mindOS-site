# Cycle 12 post-edit (repo-local verification, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (912 lines, hero/arch focus parity + kicker 680 + footer stacked border + 390 docs-side 12.5px + plain-lead hover + dm-tile #1a1a1d), /assets/site.js (node --check ok), /assets/search-index.json (15, landing 3795, regenerated), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries
- sections 12, dup </main> 1, hint 9 (hero +1, 44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 47, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (kicker 12px at 680, 11px at 390; docs-side 12.5px at 390; footer stacked border at 680)
- arch/hero focus parity: ah-layer:focus-visible + ar-layer:focus-visible now both translateY(-3px) + stroke + ring (parity with hover lift), plain-lead hover lift added
- artifacts: audit/cycle-12-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)
