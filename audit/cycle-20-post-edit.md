# cycle 20 post-edit
- motion dedup: removed duplicate early delays for sm (150/300/450/900/1150), arch (100/300/500/700), security (120/260/420/580), seam (260/420/580) — now single-source lower distinct cadences (fail 120/340/560/780/1000@420, sm 90/180/270+620/850@320, arch 120/320/520/720@460 cubic, security 80/240/400/560@360, seam 200/380/560@360, hero 100/260/420/580@480)
- header @supports backdrop fallback (96 vs 88 opacity)
- search focus trap: Tab cycles input↔results, Escape prevents default + restores opener focus
- hero-cred 390 refine: hs-val 12.5 hs-label 11, reduced-motion pulses static mid (hero 174px, arch 125px)
- arch-layer transition-duration 460ms + cubic explicit
- verify: 12 sections, 12 archetypes distinct, hints 12, panes tabindex 28, copy-btn landing 4 docs 22, live 9, focus-visible 58, reduced 4, hex 19 strict mono #7fb3e0 5 code-only
