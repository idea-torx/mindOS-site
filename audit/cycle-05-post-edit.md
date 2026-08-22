# Cycle 05 — post-edit verification (curl + source, inside repo only)

## Audit sweep results (cycle 5 — all queued items checked)

- **Links:** curl 200 on /, /assets/style.css, /assets/site.js, /assets/search-index.json (15 entries), /assets/og-card.png, all /docs/* (index, getting-started, architecture, roadmap, security) 200; fragment ids #problem/#product/#memory/#architecture/#get-started all resolve; mailto intact; 0 broken internal hrefs.
- **Console:** no console.log / console.error / debugger / alert in site.js.
- **Reveals:** 44 reveal/reveal-late elements; IntersectionObserver thresholds 0.12 (content) / 0.25 (diagrams) / 0.5 (mark); heroArt + 8 panes in diagram observer — all acquire .in via observer or reduced fallback.
- **Reduced-motion:** 4 prefers-reduced-motion blocks in CSS covering hero spine/pulse/layers, rail, branch, security/seam/legend; JS early-exits parallax + observer settle when reduced (9 references); static fully-visible fallback verified via source.
- **Mobile 390/820 overflow:** explicit breakpoints at 900 (hero collapse), 820 (pane/term/sm-notes smoothing), 680 (pane scroll + table cards), 390 (wrap 16px, hero 28px, term 11px, pane svg 520px). `html,body overflow-x: clip` prevents body scroll; panes/term/table-wrap have `overflow-x: auto` + thin scrollbar + :focus-visible ring for keyboard scroll; SVG min-width 560→520 ensures scroll inside pane not page.
- **SVG contrast:** re-audited — faint #5f5f66 kept only for secondary hint/meta text + small axis labels (intentional mono dim); pane borders lifted where faint #34343a washed out on #101014 → #34343a→#2a2a30 uniform, rail spine #34343a→#45454b for rail archetype; all text strokes (#e8e8ea/#9a9aa2) remain ≥ contrast on dark bg; code blue #7fb3e0 confined to .term/.block flags only.
- **Focus-visible rings:** 25 selectors — global 2px solid #e8e8ea + per-component stroke lifts (ah-layer, ar-layer, af-stage, mm-change, security-pane) + hardened copy-btn/menu-toggle/search-btn/btn/site-nav a (new) + pane/term/table-wrap at 820; 6 panes now tabindex="0" so keyboard users can scroll diagrams at 390.
- **Vertical rhythm:** 8px-base system — .section 88→60 at 680→hero 56/48 at 820; .reveal+pane/term/card 28→22; .pane+.hint 14; .hint+.body 18; kicker 14mb, title 14mb, body 14mb, hint 12mt, dw-item 38pb — even-tint + archetype overrides preserved.

## Block-level edit (cycle 5 — substantial)

- **site/index.html** (524→524 lines):
  - 6 diagram panes (fail/mem/sm/rec/arch + seam) now `tabindex="0"` + extended aria-label "Scroll to see full diagram on narrow screens." — keyboard scroll at 390 + SR hint; security pane already focusable.
- **site/assets/style.css** (775 lines):
  - Vertical rhythm pass: explicit `.section + .pane|term|card` etc margins (28/14/18 scale), mobile 22 at 680.
  - 820 intermediate breakpoint: hero-grid gap 36, term 12px, pane 22×18, hero padding 48/64, sm-notes gap 18, seam-list 14.
  - 390 breakpoint: wrap 16px, header 16px, hero 28px, hero-proof 11.5px, hero-stats 12×14, term/pre 11px, pane svg 520, security 16×14.
  - Overflow hardening: `html,body overflow-x: clip`, pane/term/table-wrap thin scrollbar + webkit thumb, :focus-visible outline at 820 for scroll containers.
  - Footer rhythm: 36/48 → 28/36 mobile, flex column at 680.
  - Focus-visible hardening: copy-btn/menu-toggle/search-btn/btn/site-nav a explicit rings (2px solid #e8e8ea offset 2, border-color #9a9aa2 + shadow on search).
  - SVG contrast: rail pane border #34343a→#45454b, window #2a2a30→#34343a, machine/branch #2a2a30 retained, layered #34343a retained — all monochrome tokens.
- **site/assets/site.js**: unchanged (314 lines) — reduced/parallax/nav retained, node --check ok.

## curl (http://127.0.0.1:8899)
- GET / : 200 — 35 hits, 12 sections
- GET /assets/style.css : 200 — contains overflow-x, 820/390, focus-visible hardening
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 (15)
- GET /assets/og-card.png : 200 (all docs 200)

## Source checks
- sections 12, dup </main> 1, panes tabindex 6 incl security, data-labels 12, caption 1, scope 3
- hex inventory: #0a0a0b #101012 #16161a #232327 #e8e8ea #9a9aa2 #5f5f66 #45454b #7fb3e0(code only) #34343a #0f0f12 #2a2a30 #08130d #3a3a40 #0d0d0f #101014 #0e0e11 — strict mono, same palette with rail bump to #45454b (mono gray)
- jargon 0, console.log false, reduced-motion 4 blocks, focus-visible 25

Artifacts (inside repo, no /tmp): audit/cycle-05-source-check.md, audit/cycle-05-post-edit.md, audit/cycle-05-curl.html, audit/cycle-05-index.html/css/js
Server: audit/server-cycle02.log (still alive, no restart)
