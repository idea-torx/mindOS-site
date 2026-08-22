# cycle 21 post-edit — walk cards focusable + rec-cards distinct + spacing vars + 820 hero-cred

Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof):
- curl 200 on /, /assets/style.css (1055 lines, contains dw-card:focus-visible + rec-card + vars 59), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3800), /docs/*, /assets/og-card.png
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 links, 15 entries — all routes resolve
- sections 12, dup </main> 1, hints 12, panes tabindex 35 (+5 walk +2 rec), dw-card focusable 5, rec-card 2, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane 1, seam-pane 1, term-legend 1, launch-pane 1, plain-lead 6 pages, landing copy-btn 4, docs copy-btn 22, live regions 9, focus-visible 62 (+4 rec/dw), reduced-motion 4 blocks (rec-cards harmonized), hex 19 tokens (#7fb3e0 7 code-only), vars 59
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (rec-cards 1col at 680, dw-card left accent 2px, 820 hero-stats gap 10, walk stagger 80/160/240/320/400)
- artifacts: audit/cycle-21-* inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)
