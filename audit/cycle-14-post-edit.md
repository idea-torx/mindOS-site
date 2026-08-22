# Cycle 14 post-edit (repo-local verification, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (937 lines, 820 plain-lead/gloss/hint + docs-layout/dm-tiles 820 tighten + branch/window 820 #34343a + 390 #3a3a40 + pre.block focus-visible/within), /assets/site.js (node --check ok), /assets/search-index.json (15, landing 3795, regenerated), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries
- sections 12, dup </main> 1, hint 9, panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 45 (pre.block +1 + 820 pre.block:focus-visible), reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift retained)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (plain-lead 15px at 820, hint 12.5 at 820, branch/window #34343a at 820 #3a3a40 at 390, pre.block focus-visible parity with term)
- 820 intermediate now harmonized (docs-layout 36 gap, dm-tiles 10 gap, plain-lead/gloss/hint scaled) so 900→680 no longer jumps; branch/window SVG contrast now distinct at each breakpoint
- artifacts: audit/cycle-14-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)
