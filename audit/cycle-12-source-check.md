# Cycle 12 source check (pre-verify after edits, curl+source inside repo, no /tmp/ps/lsof)

- curl http://127.0.0.1:8899/ → 200 (36 hits, 48176 bytes), /assets/style.css 200, /assets/site.js 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 536 lines (hero hint +1), site/assets/style.css 912 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex 18 tokens (#1a1a1d new via dm-tile hover, #7fb3e0 7 code-only), focus-visible 47, reduced-motion 4, landing jargon 0, console clean
- Server still 127.0.0.1:8899 from cycle 2 (no restart, verified via curl only), audit/server-cycle02.log retained

