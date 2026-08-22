# Cycle 18 — Source / triple-check audit (supervised cycle 6)
Date: 2026-08-21
Server: http://127.0.0.1:8899 (curl only, no lsof/ps)
Branch: feat/mindos-docs-site — public MIT (idea-torx/mindOS-site)

## Curl (pre-edit, inside repo only)
- / => 200 50217 bytes 36 hits
- /assets/style.css 200 1023 lines
- /assets/site.js 200 322 lines node --check ok
- /assets/search-index.json 200 15 entries
- /docs/* 200 check-site OK 15 pages 248 links

## Section archetype audit (12 sections)
1 hero archetype-hero #top — stacked + layered diagram, radial wash, hero-cred rail, 4 layers 40x380/72, spine 360 dash, pulse 4.2s, reduced-motion static
2 rail archetype-rail #problem — 5-step rail 60x260, delays 120/340/560/780/1000 420ms ease-out, pane border-left #45454b, focus parity via pane tabindex
3 walk archetype-walk #product — walk-cards 5 dw-card elevated, spine #2a2a30, dot 11px, hover #34343a lift -2px, 680 tighten
4 window archetype-window #memory — mem-pane #101014, mm-A/B supersede, change point focusable Tab, mm-pulse 2.6s breathing, 820 #34343a
5 machine archetype-machine #safety — sm-pane 5 states 88/120/140 + proven Done 140, delays 90/180/270/620/850 320ms snap, dashed recovery pulse, focus lift
6 terminal archetype-terminal #workflow — term + term-legend pills, copy btn, focus-visible ring, code #7fb3e0 only
7 branch archetype-branch #recovery — rec-pane #0e0e11, main 280 dash, branch 480 from stop 300, handoff travel 1.2s, guess dashed faint
8 compare archetype-compare #vs-git — table 4 rows scoped/caption/data-label, row-mindos focusable, 680 cards #34343a, 390 #3a3a40 label #9a9aa2
9 seam archetype-seam #human-seam — seam-pane rail 720 dash 700ms, 3 pauses 200/380/560 rect stroke 1.5, focus proxy via :focus-within
10 layered archetype-layered #architecture — arch-pane 60x640/64 layered 120/320/520/720 cubic, dual pulse dn/up 4.6s, answer dash up
11 compare archetype-compare #security — security-pane #0f0f12 Shield-first 80/240/400/560 360ms, 3 guarantees, focusable pane — DUPLICATE archetype with vs-git (needs distinct)
12 launch archetype-launch #get-started — ticket head kicker+meta+badge, 3 ls-row pills min 520→0 at 680, copy full-width 680, pane border-left #34343a shadow 8x24

## Typography measure (pre-edit)
- h1.hero 17em, sec-title 18em, lede 42em, plain-lead 42em, meta 44em, hint 44em — harmonized except p.body 46em outlier (needs 44em)
- kicker .085em, hint ::before ↳, text-wrap balance on sec-title

## Spacing scale code-quality
- :root --s-4..--s-48 declared, 18 var usages (rhythm 28/14/18/22, 820 pane etc) but hero-grid 56/48, section 88, grid gaps 20, docs-layout 48, pane 28/34 hard-coded remain unconsumed

## Monochrome tokens
- 18 tokens #0a0a0b..#e8e8ea + #1a1a1d lift, #7fb3e0 7 rules code-only (c-flag×2, c-key×2, td code×1, tl-item code×1, pre .c-flag) guard comment present — strict mono

## SVG geometry
- Stoke 1.5/2/3 only (1.8 focus emphasis, 2.2 mm-change focus), fonts 11/12/13.5, hero L 40×380 aligned, arch 60×640, sm proven 560×140 symmetric, seam 111/338/565 centered gutters, security 36 centered — all PASS cycle 15

## Spacing / responsive
- Breakpoints 900/820/680/390 present, overflow-x clip, panes keyboard-scrollable tabindex 28, hero 820 max-460, seam 420@680 360@390, launch 520→0, table cards, docs 11px pre 390

## Accessibility
- skip link, 12 hints, 28 tabindex panes, seam-pause 3 focusable, row-mindos tabindex, live regions 9, focus-visible 59, reduced-motion 4 blocks (hero/rail/window/machine/branch/layered + security/seam/legend/docs-mini/copy)

## Issues queued for this cycle (substantial)
1 p.body 46em outlier vs 44em system — measure harmony
2 spacing scale declared but hard-coded hero 56/48, section 88, gaps 20, docs 48 remain — code-quality consume
3 #security duplicate archetype-compare vs vs-git — needs distinct archetype-security
4 launch 820 not stepped vs hero 36 gap — tighten
