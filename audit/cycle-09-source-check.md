# Cycle 9 source check (2026-08-21, curl+source only, no /tmp/ps/lsof)
Server: http://127.0.0.1:8899 still running from cycle 2 (audit/server-cycle02.log)
## curl
- / -> 200 47643 bytes 35 MindOS hits
- /assets/style.css -> 200 854 lines
- /assets/site.js -> 200 node --check ok
- /assets/search-index.json -> 200 15 entries, landing 3796 humanized
- /docs/* -> 200 via check-site 15 pages 248 links
## source counts
- sections 12, dup </main> 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, panes tabindex 6, data-labels 12, docs-mini 1
- #7fb3e0 5 occurrences, all code spans (.c-flag/.c-key/td code/tl-item code/pre .c-flag) — code-only OK
- focus-visible selectors 32, hover selectors ~22
- hover/focus GAPs: .feature-card:hover no focus-visible, .seam-pause:hover no focus-visible (svg <g> not focusable)
- terminal copy: .copy-btn 11.5px 4x10 (~24px tall <44), .copy-btn-block absolute 10/10 overlaps code at 390, docs pre.block 0 copy buttons
- reduced-motion: 4 blocks, wildcard covers all 18 anims but seam explicit only in last block — completeness OK but consolidate
- breakpoints: 900/820/680/390 present
