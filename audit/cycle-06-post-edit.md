# Cycle 06 — post-edit verification (curl + source, inside repo only)

## Audit sweep results (cycle 6 — drift + a11y + entry affordance)

- **Links:** curl 200 on /, /assets/style.css (790 lines), /assets/site.js (314, node --check ok), /assets/search-index.json (15 entries, humanized landing), /assets/og-card.png, all /docs/* 200; #problem/#product/#memory/#architecture/#get-started etc resolve; 248 internal links, 0 broken; 3 new docs-mini tiles (concepts/architecture/cli-reference → valid) + All 13 link.
- **Console:** no console.log / console.error / debugger / alert in site.js.
- **Reveals:** 45 reveal/reveal-late (was 44) — +1 docs-mini entry strip; thresholds 0.12 (content) / 0.25 (diagrams) / 0.5 (mark); heroArt + 8 panes (fail/mem/sm/rec/arch + seam/security) in dio observer — all acquire .in or reduced fallback. docs-mini uses .reveal so it participates without extra JS.
- **Reduced-motion:** 4 prefers-reduced-motion blocks covering hero spine/pulse/layers, rail, branch, security/seam/legend/docs-mini; JS early-exits parallax + observer settle when reduced (9 refs). docs-mini hover lift disabled under reduced (opacity 1 !important transform none).
- **Mobile 390/820 overflow:** breakpoints at 900/820/680/390 intact. docs-mini grid 3→1 at 680 via media query. html,body overflow-x:clip prevents body scroll; pane/term/table-wrap scroll internally. SVG min-width 560→520.
- **Search index drift fix:** primary structural weakness — index was 4000-char stale pre-humanized copy ("durable local operating system ... control plane ... execution truth ..."). Generator missing (tools/gen-search-index.py absent though site/README.md referenced it). Created python-only generator (strip SCRIPT/STYLE/NOISE<header/footer/search>, html.unescape, WS normalize, 3800/2200 truncate) and regenerated index. Landing now matches rendered copy: "AI agents lose track ... memory they share ... runs on your machine ... 1 file ... 5 states ... rehearse → undo" — verified 35 MindOS hits still intact, jargon 0.
- **Monochrome:** hex inventory unchanged strict mono (17 tokens, #7fb3e0 code-only). No saturated hex outside .term/.block. New docs-mini uses only --surface-1/--surface-2/--border + #34343a hover (mono).
- **Focus-visible:** 25 selectors — global + per-diagram stroke lifts + hardened copy-btn/menu-toggle/search-btn/btn/site-nav a + pane containers. Nav now has real id target for aria-controls so AT reference resolves.
- **Vertical rhythm:** 8px base retained — docs-mini placed at 28mt (gap-top scale) via margin-top 28, head 14mb, tiles gap 12, tile padding 14/16; consistent with reveal+pane 28 / pane+hint 14 system.

## Block-level edit (cycle 6 — substantial)

- **tools/gen-search-index.py** (new, 92 lines): repo-local indexer — walks site/**/*.html excluding assets, strips script/style/header/footer/search-overlay, decodes entities, truncates landing 3800 / docs 2200, sorts landing→docs/index→alpha, writes site/assets/search-index.json with sorted keys. No /tmp, no external deps.
- **site/assets/search-index.json** (15 entries): regenerated from live html. Landing entry now humanized (3796 chars, "a memory and proof-of-work layer" + hero + problem/product/memory/...). 0 jargon in landing text (was 4). All 14 docs entries refreshed but unchanged length. Verified via curl 200 after write.
- **site/index.html** (524→535 lines): fixed header `<nav class="site-nav" id="site-nav" aria-label="Site">` so `aria-controls="site-nav"` resolves (was broken ref); inserted `docs-mini` discovery strip after get-started btn-row (head with kicker + "All 13 sections →", 3 monochrome tiles 02 Concepts / 03 Architecture / 11 CLI reference, each with mono num + title + dim description, distinct from docs-grid but same language).
- **site/docs/*.html** (14 pages): added `id="site-nav"` to every `<nav class="site-nav">` and ensured `aria-controls="site-nav"` on every `menu-toggle` (landing + docs/index were inconsistent, 13 other docs missing id). Now all headers consistent and AT-valid.
- **site/assets/style.css** (775→790 lines): added `docs-mini` / `dm-*` block (surface-1/border, 3-col mono tiles, hover border #34343a + lift, 680→1 col), extended reduced-motion to include docs-mini, docs-mini uses gap-top scale (28mt).
- **site/assets/site.js**: unchanged (314 lines) — scroll-spy/copy-live/parallax/reveals retained, node --check ok. Menu toggle already reads aria-expanded, now references valid id.

## curl (http://127.0.0.1:8899)
- GET / : 200 — 35 hits, 12 sections, 47643 bytes (was 46591, +1052 docs-mini)
- GET /assets/style.css : 200 — contains docs-mini, 790 lines, overflow-x clip, 820/390, focus-visible 25
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 — 15 entries, landing humanized, 3796 chars, jargon 0
- GET /assets/og-card.png : 200 (all docs 200)
- GET /docs/index.html : 200 — site-nav id present, toggle aria-controls present

## Source checks
- sections 12, dup </main> 1, panes tabindex 6 + states (22 tabindex counts), data-labels 12, caption 1, scope 3
- hex: #0a0a0b #101012 #16161a #232327 #e8e8ea #9a9aa2 #5f5f66 #45454b #7fb3e0(code only) #34343a #0f0f12 #2a2a30 #08130d #3a3a40 #0d0d0f #101014 #0e0e11 — strict mono
- jargon 0, console.log false, reduced-motion 4 blocks, focus-visible 25
- docs-mini tiles 3, site-nav id on 15 html pages (1 landing + 14 docs), aria-controls 15

Artifacts (inside repo, no /tmp): audit/cycle-06-source-check.md, audit/cycle-06-post-edit.md, audit/cycle-06-curl.html, audit/cycle-06-index.html/.style.css/.site.js/.search-index.json, server still audit/server-cycle02.log (kept alive, verified via curl only)

Server: http://127.0.0.1:8899 kept alive — no restart, no lsof/ps, verified 200 before and after.
