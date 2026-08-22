# Cycle 13 post-edit (repo-local verification, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (926 lines, hero radial + term readability + rel-card lift + docs-side wrap + rhythm 14/18 + focus polish), /assets/site.js (node --check ok), /assets/search-index.json (15, landing 3795, regenerated), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries
- sections 12, dup </main> 1, hint 9 (44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 44, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (term 1.7/-.01, hint+meta 14, plain-lead+gloss 18, hero-art+hint 14)
- rhythm polish: term-body 1.7/-.01 readability, term:focus-visible + :focus-within border distinct, rel-card hover lift -1px + shadow + focus-within #9a9aa2, docs-side anywhere wrap prevents overflow at narrow, archetype-hero radial 35% mono wash, .hint+.meta 14 override vs .hint+.body 18 distinct closeness
- artifacts: audit/cycle-13-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)
