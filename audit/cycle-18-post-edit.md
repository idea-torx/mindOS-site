# Cycle 18 — Post-edit verification (supervised cycle 6)
Date: 2026-08-21
Server: http://127.0.0.1:8899 kept alive (curl only, no lsof/ps)

## Curl (post-edit, inside repo only)
- / => 200 36 hits (archetype-security distinct, p.body 44em, spacing scale 36 vars)
- /assets/style.css 200 1033 lines (var 36, security distinct, section var)
- /assets/site.js 200 322 lines node --check ok (JSDoc + fetch guard retained)
- /assets/search-index.json 200 15 entries regenerated
- /docs/* 200 check-site OK 15 pages 248 links

## Source counts (post-edit)
- sections 12, dup </main> 1, hints 12 (each section 1), tabindex 28 (6 SVG + term + launch + security/seam)
- archetypes 12 distinct: hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/security/launch (security now own, was duplicate compare)
- var(--s-) 36 (was 18, doubled — hero-grid, section, grid-2/3, docs-layout, docs-grid, prev-next, 900/820/680 all consume scale)
- p.body max-width 44em harmony with hint 44em/meta 44em/lede 42em — 46em max-width removed (seam-list also 44em)
- focus-visible 59, reduced-motion 4 blocks (hero/rail/window/machine/branch/layered + security/seam/legend/docs-mini/copy + launch 820)
- hex 19 tokens #08080a new (security even #08080a) + #1a1a1d lift, #7fb3e0 7 code-only guard retained — strict mono
- jargon 0, console.log 0, overflow-x clip true, 900/820/680/390 present

## Edits applied (substantial block-level redesign)
- site/index.html: #security archetype-compare → archetype-security (12th distinct archetype, resolves duplicate-compare violation)
- site/assets/style.css:
  - typography measure harmony: p.body 46→44em + seam-list li 46→44em (now 44em system with hint/meta, lede 42em)
  - spacing scale full consumption: hero-grid 56→var(--s-48), section padding 88→var(--s-48) 0 88, grid-2/3 20→var(--s-22), docs-layout 48→var(--s-48), docs-grid 16/36→var(--s-16)/var(--s-36), prev-next 16→var(--s-16), hero-grid 900/820/680 gaps all var (40/48→var(--s-36)/var(--s-28)), 820 launch 10→var polish + security pane padding var
  - archetype-security distinct: #0a0a0b wash, security-pane left 2px #34343a shadow 8x24, even tint #08080a, ::before hairline, launch 820 stepped
  - var usages 18→36 (code-quality single source), comment updated cycle 18
- site/assets/search-index.json: regenerated via python3 tools/gen-search-index.py — landing 3800 retained, docs 2198, check-site OK
- no /tmp, lsof, ps, external worktrees — repo-local audit/ only

## Screenshots / layout
- panes keyboard-scrollable, hero 820 max-460 centered, seam 420@680 360@390, launch 520→0 responsive, table cards #34343a/#3a3a40, security left accent distinct from compare card
