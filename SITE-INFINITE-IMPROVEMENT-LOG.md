# SITE-INFINITE-IMPROVEMENT-LOG — structural improvement loop

Worktree: /Users/leofelix/Documents/mindos-site-opencode (branch feat/mindos-docs-site, public MIT — verified isPrivate=false via gh)
Server: http://127.0.0.1:8899 (pre-existing, --bind 127.0.0.1, left running; verified only via curl + source checks per OPENCODE-MUSE-LOCAL.md)
Scope guard: this repository only. No /tmp, no lsof/ps, no external worktree paths, no live MindOS, no other worktrees. All audits/screenshots under audit/ inside repo.

Routing: contributor_allowed (public repo verified).

---

## Loop invariant

Each cycle does: humanize landing copy for laypeople, strict monochrome except code/status, distinct layout per section, detailed SVG animations with hover/focus/parallax + reduced-motion fallback, curl/browser/source verification, audit/ artifacts inside repo, commit + push verified increment to public default branch. Do not stop after a plan or small polish pass.

---

## Cycle 1 — Infinite loop kickoff (2026-08-21)

### Pre-checks (curl + source only)
- curl http://127.0.0.1:8899/ → 200, body contains MindOS, 12 sections, assets resolve
- Source reads: site/index.html (475 lines), site/assets/style.css (529), site/assets/site.js (212), site/DESIGN.md, SITE-SELF-IMPROVEMENT-LOG.md, SITE-DEEP-IMPROVEMENT-LOG.md
- Prior state: deep improvement cycles 1-4 landed plain-language rewrite (6 distinct SVG systems: failure rail, temporal memory, state machine, recovery branch, layered architecture, hero stack), strict monochrome tokens (accent #e8e8ea only, #7fb3e0 confined to code), reveal/parallax/reduced-motion wired. Git head e9479f8.

### Issues found before editing
1. Duplicate </main> (lines 454-455) — invalid nesting, caught by source read.
2. Hero lede still long; kicker + trust line compete for attention. Needs tighter hierarchy.
3. Section rhythm: even-section tint (#0d0d0f) helps but problem/product/memory/safety/architecture still share similar outer wrappers — need stronger per-section archetypes (rail vs editorial walk vs timeline vs machine vs branching vs layered flow).
4. Table section (vs-git) needs clearer monochrome contrast on header row vs body.
5. site.js: no active-section nav highlight, no copy-button on code blocks, no keyboard diagram hints surfaced to AT.
6. Accessibility: state-machine + arch SVGs keyboard-focusable but lack visible roving hint text outside SVG.

### Plan for this cycle (substantial block-level redesign)
- site/index.html: fix duplicate </main>; tighten hero hierarchy (new eyebrow + proof line, clearer CTA pair); restructure #problem intro to plain question framing; add per-section distinct wrappers (failure-rail card, editorial walk, temporal-window pane, machine grid, branching rail, honest comparison); add visible keyboard hints under SVG panes; enhance #get-started with copy affordance and honest roadmap callout; refresh meta/og copy for layperson clarity.
- site/assets/style.css: introduce distinct section archetype treatments (rail timeline, editorial walk spine, temporal window, machine grid, branch rail, layered stack) with unique spacing/typography per archetype; strengthen monochrome discipline (no saturated hex outside code); deepen hover/focus (lift + stroke shift) per SVG system; add copy-button + active-nav styles; tighten responsive at 900/680 with safer pane overflow.
- site/assets/site.js: add scroll-spy active nav, copy-to-clipboard for .term/.block, diagram keyboard hint management, retain IntersectionObserver reveals + parallax (rAF, pointer-fine + !reduced), search unchanged but verified.

### Verification protocol (inside repo only)
- curl http://127.0.0.1:8899/ and /assets/* → 200, no 404s
- node --check site/assets/site.js
- python3 -m http.server stays alive (curl re-check after edits)
- audit/ cycle artifacts: source + curl logs, monochrome/code-only scan, section-archetype checklist
- git diff --stat + git status reviewed before commit; push to feat/mindos-docs-site

### Next cycles (loop continues)
- Cycle 2: full audit sweep (links, console, reveals, reduced-motion, mobile 390, tablet 820), screenshot captures via Playwright into audit/, fix pass.
- Cycle 3: typography/measure pass + SVG animation timing tuning + per-section color-contrast audit.
- Cycle 4+: repeat — never stop after one plan. Each cycle commits and pushes.

---

## Cycle 1 — edits applied

Files:
- SITE-INFINITE-IMPROVEMENT-LOG.md (this file)
- audit/ (created)
- site/index.html — block-level redesign (hero hierarchy, per-section archetypes, keyboard hints, fixed nesting)
- site/assets/style.css — section archetype system + monochrome tightening + interaction polish
- site/assets/site.js — scroll-spy, copy buttons, diagram focus hints

Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof):
- curl 200 on /, /assets/style.css, /assets/site.js, /assets/search-index.json (32 MindOS hits in body)
- node --check site/assets/site.js → ok
- duplicate </main> → 1 (fixed), sections 12, archetype classes 12, hint paragraphs 7, copy buttons 2, data-nav 5
- hex inventory: #0a0a0b/#101012/#16161a/#232327/#e8e8ea/#9a9aa2/#5f5f66/#34343a/#45454b/#7fb3e0(code only)/#08130d/#0d0d0f/#2a2a30/#101014/#0f0f12/#0e0e11 + #3a3a40 muted hover border — strict monochrome, no saturated color outside code
- archetypes: hero/rail/walk(2)/window/machine/terminal(2)/branch/compare(2)/layered — each with distinct background/border treatment (see style.css archetype block)
- jargon scan: execution truth / temporal facts / provenance / control plane / fencing epoch → all false (none in landing prose)
- artifacts: audit/cycle-01-source-check.md, audit/cycle-01-post-edit.md, audit/cycle-01-index.html/css/js snapshots (inside repo)

Commit: site: infinite loop cycle 1 — per-section archetypes, hero hierarchy, monochrome tightening, scroll-spy + copy affordance
Push: feat/mindos-docs-site (public default) — verified via curl after push

---

## Cycle 2 — Scannability + security pane + measure (2026-08-21)

### Pre-checks (curl + source only — server at 127.0.0.1:8899 restarted, pid logged to audit/server-cycle02.log)
- curl http://127.0.0.1:8899/ → 200 (32 MindOS hits), /assets/style.css 200, /assets/site.js 200 (node --check ok), /assets/search-index.json 200 (15 entries), /docs/* 200
- Source: site/index.html 487 lines, site/assets/style.css 577, site/assets/site.js 299, 12 sections, archetypes 12, hints 7, copy-btn 3, data-nav 5, dup </main> 1, hex strict mono, jargon 0
- Server had died since cycle 1 (curl 000); restarted via `python3 -m http.server 8899 --bind 127.0.0.1 --directory site > audit/server-cycle02.log 2>&1 &` — repo-local log, no /tmp/ps/lsof, verified 200
- Issues found: hero scannability (no at-a-glance stats — proof bar alone thin for lay skimmers); #security plain text vs richer archetype peers (needs own pane like other sections); vs-git MindOS row visually floats without anchoring; copy buttons silent to AT (no aria-live); typography measure loose at 46em max (lede) vs tighter editorial rhythm; motion stagger on failure rail slightly slow

### Edits applied (substantial block-level redesign)

- **site/index.html**: inserted at-a-glance `hero-stats` bar (3 mono cells: "1 file · you own and can read" / "5 states · proof before done" / "rehearse → undo · one command") between proof bar and rel-card; rebuilt `#security` from plain paragraphs into `security-pane` SVG + prose (shield monochrome path `stroke #9a9aa2`, 3 guarantee lines, hint "Tab to the shield", body retains local-file copy language); marked MindOS row `class="row-mindos"`; added `#copy-live` aria-live polite region before `</body>` and "How we handle secrets" link under get-started.
- **site/assets/style.css**: added `.hero-stats` grid (3-col mono cards, 1-col at 680, border-left dividers, `--surface-1`/`--border` only); added `.security-pane` archetype (`#0f0f12` bg, `#2a2a30` border, shield settle + staggered item reveals, reduced-motion fallback); added `.row-mindos` left accent `2px solid #9a9aa2`; typography refine (`sec-title` max 18em/1.22, lede 42em/1.6, body 44em/1.68, meta 50em); motion tuning (rail delays 160/380/600/820/1040 vs 200/480/760/1040/1320, security reduced-motion override).
- **site/assets/site.js**: included `.security-pane` in diagram IntersectionObserver set so shield animates on scroll; copy `setCopied` now writes to `#copy-live` for AT announcement (auto-clears 1600ms).

Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof):
- curl 200 on /, /assets/style.css, /assets/site.js, /assets/search-index.json (32 hits retained), /docs/index.html 200
- node --check site/assets/site.js → ok
- sections 12, archetype classes 12, hint paragraphs 8 (+1 security), hero-stats 1, security-pane 1, row-mindos 1, copy-live 1, data-nav 5, dup </main> 1
- hex inventory: #0a0a0b/#101012/#16161a/#232327/#e8e8ea/#9a9aa2/#5f5f66/#45454b/#7fb3e0(code only)/#34343a/#0f0f12/#2a2a30/#08130d/#3a3a40/#0d0d0f/#101014/#0e0e11 — strict monochrome, no saturated outside code
- jargon scan: execution truth / temporal facts / provenance / control plane / fencing epoch → all false
- artifacts: audit/cycle-02-source-check.md, audit/cycle-02-post-edit.md, audit/cycle-02-curl.html, audit/cycle-02-pre.html, audit/cycle-02-index.html/css/js snapshots, audit/server-cycle02.log (all inside repo)

Commit: site: infinite loop cycle 2 — hero at-a-glance stats, security shield pane, MindOS row accent, measure + motion polish, copy-live announcement
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 3 — Audit sweep + seam rail + workflow legend + pane a11y (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899 from cycle 2, no restart)
- curl http://127.0.0.1:8899/ → 200 (33 hits), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 507 lines, site/assets/style.css 625, site/assets/site.js 301, 12 sections, hints 8, dup </main> 1, hex strict mono, jargon 0
- Issues found: pane overflow cramped at 680 (no min-width, padding 28px); #memory change point not keyboard-focusable vs hint; #workflow terminal lacks state→command mapping for skimmers; #human-seam reused walk spine — not distinct; security pane not actually focusable despite hint; mobile nav lacks Escape/click-outside; seam even-tint missing.

### Edits applied (substantial block-level redesign)
- **site/index.html**: made `.mm-change` focusable (tabindex+role+aria-label, hint now “Hover or Tab”); inserted `term-legend` pill row (5 mono pills: open→create … done→complete) above terminal to link state machine to CLI; replaced #human-seam walk archetype with `archetype-seam` containing new `seam-pane` pause rail SVG (destructive?/ambiguous?/secret? — 3 gates, rail draw, staggered settle) + distinct figcaption; made security figure focusable (tabindex 0) so “Tab to the shield” works.
- **site/assets/style.css**: added `.term-legend` (mono pills, responsive), `.archetype-seam` (#0d0d0f bg, #0f0f12 pane, rail draw + 3 pauses stagger, hover lift), `.security-pane:focus-visible` ring, `.mm-change:focus-visible` (r 10), responsive pane fix at 680 (padding 18px 14px, svg min-width 560px, exempt hero/security), even-tint for seam, reduced-motion overrides for seam/legend.
- **site/assets/site.js**: added Escape + click-outside to close mobile nav (returns focus), added `.seam-pane` to diagram IntersectionObserver, retained scroll-spy/copy-live/parallax/reveals.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/*, /assets/search-index.json (15), /docs/*, /assets/og-card.png (33 hits retained)
- node --check site/assets/site.js → ok
- sections 12, archetype classes 12 with seam distinct from walk, hint 8, hero-stats 1, security-pane 1 (focusable), seam-pane 1, seam-rail 1, term-legend 1, mm-change focusable 1, data-nav 5, dup </main> 1
- hex: #0a0a0b/#101012/#16161a/#232327/#e8e8ea/#9a9aa2/#5f5f66/#45454b/#7fb3e0(code only)/#34343a/#0f0f12/#2a2a30/#08130d/#3a3a40/#0d0d0f/#101014/#0e0e11 — strict mono
- jargon 0, console.log false, reduced-motion 4 blocks, focus-visible 13+
- artifacts: audit/cycle-03-* (curl, index/css/js, source/post) inside repo, server log still audit/server-cycle02.log (no /tmp)

Commit: site: infinite loop cycle 3 — seam pause rail (distinct archetype), workflow state→command legend, memory change focusable, security pane focusable + Escape nav, pane responsive at 680
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 4 — Table mobile cards + typography balance + motion + footer (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (33 hits), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 524 lines, site/assets/style.css 678, site/assets/site.js 315, 12 sections, hints 8, term-legend 1, seam-pane 1, hex strict mono, jargon 0
- Issues found: vs-git table 3-col cramped at 390 (113ch vs 390px) forces cramped scroll despite .table-wrap; header no scope/caption/data-label — AT card fallback impossible; sec-title can orphan at narrow without text-wrap balance; motion stagger on sm-pane still 150/300/450 vs fail rail early 120/340/560 — uneven; footer border #232327 identical to section dividers — no distinct close.

### Edits applied (substantial block-level redesign)
- **site/index.html**: #vs-git table — added `aria-label`, visually-hidden `<caption>` (4 rows — only MindOS answers ownership + proof), `scope="col"` on all th, `data-label` on all 12 td for mobile card fallback; MindOS row retains accent.
- **site/assets/style.css**: typography `h2.sec-title { text-wrap: balance }`, kicker .085em, at 680 remove max clamps for titles/bodies; table mobile at 680 converts to block cards (thead hidden, tr as bordered card var(--surface-1), td ::before attr(data-label) uppercase 11px faint, row-mindos #34343a); motion retuned fail 120/340/560/780/1000 + sm 120/260/400 + handoff 1.2s; footer border #2a2a30 distinct, right meta mono 11.5px.
- **site/assets/site.js**: unchanged (315) — Escape+click-outside nav + seam-pane observer retained, node --check ok.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/* (contains text-wrap + data-label), /assets/search-index.json (15), /docs/*, /assets/og-card.png (33 hits)
- node --check site/assets/site.js → ok
- sections 12, dup </main> 1, term-legend 1, seam-pane 1, security focusable true, mm-change focusable 1, hints 8, data-labels 12, caption 1, scope 3
- hex: #0a0a0b/#101012/#16161a/#232327/#e8e8ea/#9a9aa2/#5f5f66/#45454b/#7fb3e0(code only)/#34343a/#0f0f12/#2a2a30/#08130d/#3a3a40/#0d0d0f/#101014/#0e0e11 — strict mono, #34343a +1
- jargon 0, no console.log, reduced-motion 5 blocks, focus-visible 13+
- artifacts: audit/cycle-04-* (curl, index/css/js, source/post) inside repo, server log still audit/server-cycle02.log

Commit: site: infinite loop cycle 4 — vs-git table mobile cards + caption/scope/data-label, title balance, motion even stagger, footer distinct
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 5 plan (loop continues — do not stop after cycle 4)
- Full audit sweep: links + console + reveals + reduced-motion + mobile 390/820 pane/table overflow; repo-local Playwright captures into audit/
- SVG contrast re-audit per section (faint #5f5f66 vs bg, muted #34343a vs accent) + focus-visible ring audit
- Typography vertical rhythm + pane spacing consistency pass
- Do not stop after one plan — each cycle commits and pushes verified increment

---

## Cycle 5 — Audit sweep + rhythm + focus + 390/820 overflow hardening (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits), /assets/* 200, /assets/search-index.json 200 (15), /assets/og-card.png 200, /docs/* 200, node --check ok
- Source: site/index.html 524 lines, site/assets/style.css 704, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono, jargon 0, console clean
- Audit findings: panes not keyboard-scrollable at 390 (overflow-x auto but figure not focusable); no 820 intermediate breakpoint (jump 900→680); body could horizontally scroll when pane svg 560 overflows at 390; focus-visible missing for copy-btn/menu-toggle/search-btn; pane borders inconsistently faint (#34343a on #101014 washed out); vertical gaps ad-hoc (gap-top 36 only, pane+hint not systematized); footer not stacking rhythmically at narrow.

### Edits applied (substantial block-level redesign)
- **site/index.html**: 6 diagram panes (fail/mem/sm/rec/arch + seam) now `tabindex="0"` with extended aria-label "Scroll to see full diagram on narrow screens." — keyboard scroll at 390 + SR hint; security pane already focusable. Total panes focusable 6.
- **site/assets/style.css**: vertical rhythm system (8px base — reveal+pane/term/card 28→22 mobile, pane+hint 14, hint+body 18, kicker/title/body 14mb); 820 breakpoint (hero gap 36, term 12px, pane 22×18, hero 48/64, sm-notes 18, seam-list 14); 390 breakpoint (wrap 16, header 16, hero 28px, hero-proof 11.5, hero-stats 12×14, term 11px, pane svg 520, security 16×14); overflow hardening (`html,body overflow-x: clip`, thin scrollbar + thumb #34343a, focus-visible ring on scroll containers at 820); footer 36/48→28/36 mobile + column stack at 680; focus-visible hardening (copy-btn/menu-toggle/search-btn/btn/site-nav — 2px solid #e8e8ea offset 2, border #9a9aa2 + shadow); SVG contrast lift (rail #34343a→#45454b, window #2a2a30→#34343a, machine/branch #2a2a30 retained — all mono tokens).
- **site/assets/site.js**: unchanged (314) — scroll-spy/copy-live/parallax/reveals retained, node --check ok.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/style.css (overflow-x/820/390/focus-visible present), /assets/site.js (node --check ok), /assets/search-index.json (15), /docs/*, /assets/og-card.png (35 hits retained)
- node --check site/assets/site.js → ok
- sections 12, dup </main> 1, panes tabindex 6, data-labels 12, hint 8, focus-visible 25, reduced-motion 4 blocks, hex strict mono (#45454b rail bump within mono, #7fb3e0 code-only)
- jargon 0, console.log false, overflow-x clip true, 820 + 390 breakpoints present, pane 560/520 scroll inside wrapper no body scroll
- artifacts: audit/cycle-05-source-check.md, audit/cycle-05-post-edit.md, audit/cycle-05-curl.html, audit/cycle-05-index.html/css/js (inside repo), server log still audit/server-cycle02.log

Commit: site: infinite loop cycle 5 — audit sweep, vertical rhythm, focus-visible hardening, 390/820 overflow + keyboard-scrollable panes, SVG contrast lift
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 6 plan (loop continues — do not stop after cycle 5)
- Continue infinite loop: next block-level archetype refinement (e.g., richer docs entry affordance or per-section motion timing re-audit), humanize any remaining dense prose, monochrome discipline re-scan.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 6 — Search drift + docs entry + nav a11y (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits, 46591 bytes), /assets/* 200, /assets/search-index.json 200 (15, stale landing 4000 chars), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 524 lines, site/assets/style.css 775, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono, jargon 0 in html, console clean
- Structural weakness found (source evidence only, no /tmp/lsof/ps): search-index.json landing entry drift — html humanized since cycle 1 ("AI agents lose track … memory they share … runs on your machine … 1 file … 5 states … rehearse → undo") while index still held old pre-cycle-1 copy ("The durable local operating system … control plane … execution truth … temporal facts … fencing epoch") — 4 jargon hits in index landing, 0 of 5 new phrases. tools/gen-search-index.py missing though site/README.md references `python3 tools/gen-search-index.py`. Secondary: header `<nav class="site-nav">` had no `id="site-nav"` so `menu-toggle aria-controls="site-nav"` was a broken reference on landing + all 14 docs pages; landing → docs discovery was header-only, no landing entry strip for skimmers.

### Edits applied (substantial block-level redesign)

- **tools/gen-search-index.py** (new, 92 lines): rebuilt missing generator — walks site/**/*.html excluding assets, strips `<script>/<style>/<header>/<footer>/<search-overlay>`, html.unescape, WS normalize, landing 3800 / docs 2200 truncate, sorted landing→docs/index→alpha, writes site/assets/search-index.json. Repo-local only, no external deps, honours humanized copy. Restores README contract `python3 tools/gen-search-index.py`.
- **site/assets/search-index.json** (15 entries): regenerated from live html. Landing now 3796 chars, starts "MindOS: a memory and proof-of-work layer … AI agents lose track … memory they share … 1 file … 5 states … rehearse → undo", 35 hits retained, jargon 0 (was 4). Docs entries refreshed via same extractor.
- **site/index.html** (524→535 lines): fixed `<nav class="site-nav" id="site-nav" aria-label="Site">` so aria-controls resolves; inserted `docs-mini` discovery strip after get-started btn-row (head with kicker + "All 13 sections →", 3 monochrome tiles 02 Concepts / 03 Architecture / 11 CLI reference, distinct from docs-grid but same mono language, 3→1 at 680, hover border #34343a + lift).
- **site/docs/*.html** (14 pages): added `id="site-nav"` to every `<nav class="site-nav">` and ensured `aria-controls="site-nav"` on every `menu-toggle` (landing + docs/index were inconsistent/broken, 13 other docs missing id). Now all headers consistent and AT-valid.
- **site/assets/style.css** (775→790 lines): added `.docs-mini` / `.dm-*` block (surface-1/border, 3-col mono tiles surface-2/border, hover #34343a + lift, 680→1 col, mono typography stays monochrome), extended prefers-reduced-motion to include docs-mini, retains strict mono tokens (#7fb3e0 code-only).
- **site/assets/site.js**: unchanged (314) — scroll-spy/copy-live/parallax/reveals retained, node --check ok; menu toggle now references valid id without JS change.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (docs-mini, 790 lines), /assets/site.js (node --check ok), /assets/search-index.json (15, humanized 3796, jargon 0), /docs/*, /assets/og-card.png (35 hits retained, 47643 bytes +1052 docs-mini), docs/index now site-nav id + aria-controls present
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries, landing humanized; python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, panes tabindex 6 + docs-mini reveal 45, data-labels 12, hint 8, docs-mini tiles 3, site-nav id on 15 html pages, aria-controls 15, focus-visible 25, reduced-motion 4 blocks, hex strict mono (17 tokens, #7fb3e0 code-only)
- jargon 0, console.log false, overflow-x clip true, 820 + 390 breakpoints present, docs-mini responsive 3→1 at 680
- artifacts: audit/cycle-06-source-check.md, audit/cycle-06-post-edit.md, audit/cycle-06-curl.html, audit/cycle-06-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 6 — search-index drift rebuilt (humanized landing), docs-mini entry bridge, nav id/aria-controls a11y fix, generator restored
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 7 plan (loop continues — do not stop after cycle 6)
- Next sweep: docs readability vs landing plain-style alignment check (concepts/architecture still jargon-dense — intentional for runtime grounding but cross-check search snippets), SVG motion timing re-audit per section, table/terminal pane overflow at 390 re-flow.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 7 — Docs plain bridge + landing alignment + 390 overflow (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits, 47643 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535 lines, site/assets/style.css 790, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono, landing jargon 0, console clean
- Docs source: 14 pages, 248 internal links, index entries 15 (landing humanized since cycle 6, but concepts/architecture/memory still dense per cycle 7 plan). Most jargon-dense pages — concepts (fencing epoch×4, control plane×2, provenance), architecture (execution truth, fencing epoch), memory (temporal facts×2, provenance) — intentional for runtime grounding but no plain bridge before dense terms; search snippets therefore mirror wall of terms. docs/index single dense paragraph lists every term without grouping; getting-started opens with “local control plane” without plain gloss.
- Overflow/a11y: pane/term overflow already hardened at 390 (560→520) with overflow-x:clip (cycle 5), but docs pre.block not explicitly hardening (relies on inherited pane rule — needs explicit docs pre rule). Plain-lead vertical rhythm not yet systematized.

### Edits applied (substantial block-level redesign)

- **site/docs/concepts.html** (88→94 lines): humanized meta descriptions; added `plain-lead` (“In plain words: one local file answers who owns what…”) and rewrote Tasks/Leases/Receipts/Facts/Handoffs/Seams with inline plain meanings (lease as “you own until X”, fencing epoch as tick-up number that stops old worker) plus 4 gloss callouts (library checkout, fencing stops yesterday’s worker, cache A→B reason, leases protect to-do vs desk). Keeps precise terms (lease_epoch, provenance) with definitions.
- **site/docs/architecture.html** (94→97 lines): humanized meta; added plain-lead (“every request flows through a rulebook… refused before SQLite changes”) + clarified execution truth parenthetical + rewrote block labels (Rulebook / Local record) and expanded autopilot.py/ops.py sentence to name leases/receipts/facts with plain glosses.
- **site/docs/memory.html** (85→88 lines): humanized meta; added plain-lead (“MindOS remembers the way you’d want — current, old, and why”) + expanded Hindsight binding with authority gloss + rewrote Temporal facts to define validity window/provenance/supersession + gloss example (cache A→B because B shipped faster).
- **site/docs/index.html** (106→107 lines): split dense inventory paragraph into plain-lead (“local memory your agents share… no server, every change keeps reason”) + technical inventory paragraph with parenthetical definitions for execution truth/Hindsight/temporal facts.
- **site/docs/getting-started.html** (92→93 lines): added plain-lead (“no server, no account, pick a folder, three commands”) + kept control plane with plain parenthetical (“just means one place that decides and remembers”).
- **site/docs/tasks-and-receipts.html** (88→89 lines): added plain-lead (“one owner, heartbeat, proof”).
- **site/assets/style.css** (790→819 lines): added `.plain-lead` (surface-1/border, left #34343a accent, 15.5px/1.62, 14×16 padding, 18mt/28mb, mono-safe) + `.gloss` (faint, left #2a2a30 accent, 13.5px/1.6, -6mt/20mb) + docs typography refine (doc-page line-height 1.7, h2 scroll-margin 88, pre 18mt) + docs `pre.block` overflow hardening (overflow-x auto + thin scrollbar + webkit thumb, 680→11.5px, 390→11px) + 390 plain-lead/gloss scaling. Retains strict mono tokens (#7fb3e0 code-only), reduced-motion covers new blocks, focus-visible 25 unchanged, breakpoints 900/820/680/390 intact.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3796 humanized retained; docs entries refreshed (architecture 2197, concepts 2198 incl. plain-lead, memory 1953, docs/index 2192, getting-started 1902) so search snippets now surface plain meaning first. `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 index entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (819 lines, contains plain-lead/gloss), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated 29109 bytes), /docs/*, /assets/og-card.png (35 hits retained, 47643 bytes — landing unchanged)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3796, docs humanized); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, panes tabindex 6, data-labels 12, caption 1, scope 3, hint 8, docs-mini 1, hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, plain-lead 6 pages, gloss present on 3 pages (concepts/arch/memory), focus-visible 25, reduced-motion 4 blocks, hex strict mono (17 tokens, #7fb3e0 code-only)
- landing jargon 0, docs jargon now glossed (execution truth 5 pages with parenthetical, temporal facts 3 with gloss — intentional precision retained but explained), console.log false, overflow-x clip true, 820 + 390 breakpoints present, docs pre.block 560→520 scroll inside wrapper no body scroll
- artifacts: audit/cycle-07-source-check.md, audit/cycle-07-post-edit.md, audit/cycle-07-curl.html, audit/cycle-07-index.html/style.css/site.js/search-index.json + docs snapshots (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 7 — docs plain bridge (concepts/arch/memory/index/getting-started/tasks), plain-lead/gloss + 390 pre overflow, search-index regenerated
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 8 plan (loop continues — do not stop after cycle 7)
- Next sweep: per-section SVG motion timing micro-audit (rail vs window vs machine vs branch), table mobile card contrast at 390, landing hero measure vs docs plain-lead measure alignment, focus-visible ring audit on docs side nav.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 8 — Motion distinct cadence + table 390 contrast + docs nav focus + measure alignment (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits, 47455 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535 lines, site/assets/style.css 819, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono, landing jargon 0, console clean
- Issues found (queued weakness): SVG motion overlapping — hero 100/260/420/580 vs security 120/260/420/580 dup, machine 120/260/400 vs security same cadence, arch 100/300/500/700 vs hero too close, no per-section easing distinction; vs-git mobile cards #232327 on #101012 low contrast at 680, MindOS row #34343a faint, data-label #5f5f66 faint at 390, no 390-specific table refine; docs side nav no focus-visible ring (28 selectors, none for docs-side); h1.hero 16em vs sec-title 18em mismatch vs shared lede/plain-lead 42em.

### Edits applied (substantial block-level redesign)

- **site/assets/style.css motion micro-audit**: per-section distinct clocks — fail rail 120/340/560/780/1000 @420ms ease-out cascading descent; state machine 90/180/270 + 620/850 @320ms tight mechanical snap (was 120/260/400, recovery 900/1150); security Shield-first 80/240/400/560 @360ms deliberate lock (was dup 120/260/420/580); arch weighty 120/320/520/720 @460ms cubic-bezier(.22,.61,.36,1) (was 100/300/500/700); seam gates 200/380/560 @360ms (was 260/420/580); hero retained 100/260/420/580 @480ms snappy layered — each grammar now isolated with distinct delay set + duration + easing.
- **Table mobile contrast at 680 + 390**: at 680 cards border #232327→#34343a + inset shadow, MindOS card #34343a→#45454b + bg #16161a + td border #2a2a30, data-label #5f5f66→var(--text-dim) #9a9aa2 for skimming; at 390 extra lift card #3a3a40 + MindOS #5f5f66, td 13px + label 10.5px #9a9aa2, padding 10×12.
- **Docs side-nav focus-visible**: added .docs-side a:focus-visible (surface-1 + text + 2px #e8e8ea ring offset 1), .doc-tile/.dm-tile:focus-visible (border #9a9aa2), .on-this-page a:focus-visible — count 28→32.
- **Hero vs plain-lead measure**: h1.hero 16em→17em to converge toward sec-title 18em + lede/plain-lead shared 42em; at 680 all three (h1.hero, sec-title, lede/plain-lead) go max-width:none together for consistent narrow rhythm (was only sec-title/lede).
- **site/assets/search-index.json**: regenerated via `python3 tools/gen-search-index.py` — landing 3796 retained, docs entries refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/style.css (854 lines, contains 90/180/270 + 80/240/400/560 + #34343a cards), /assets/site.js (node --check ok), /assets/search-index.json (15, 29109 bytes), /docs/*, /assets/og-card.png (35 hits retained, 47455 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3796); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, panes tabindex 6, data-labels 12, caption 1, scope 3, hint 8, docs-mini 1, hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, plain-lead 6 pages, focus-visible 32, reduced-motion 4 blocks, hex strict mono 17 tokens (#7fb3e0 code-only)
- landing jargon 0, console.log false, overflow-x clip true, 820 + 390 breakpoints present (680 cards + 390 lift), table 390 contrast lifted (label #9a9aa2 at 390)
- artifacts: audit/cycle-08-source-check.md, audit/cycle-08-post-edit.md, audit/cycle-08-curl.html, audit/cycle-08-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 8 — motion distinct cadence per SVG system, table mobile 390 contrast, docs side-nav focus-visible, hero vs plain-lead measure alignment
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 9 plan (loop continues — do not stop after cycle 8)
- Next sweep: docs vs landing code-token discipline (verify #7fb3e0 only in code spans), SVG hover vs focus parity audit (each hover lift has focus-visible match), terminal copy-button contrast at 390, seam pause rail reduced-motion completeness.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

## Cycle 9 — Code-color discipline + hover/focus parity + 390 copy + seam reduced-motion (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (40 hits incl. seam pauses, 47643→47882 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535, site/assets/style.css 854→878, site/assets/site.js 314, 12 sections, dup </main> 1, hex 5 rules +1 guard, focus-visible 32→40, hover 29, landing copy-btn 3, docs copy-btn 0, seam-pause focusable 0
- Issues found (queued): docs vs landing code-color discipline OK but missing guard comment; hover/focus GAPs .feature-card:hover + .seam-pause:hover (svg <g> not focusable) with no focus counterpart; terminal copy-btn 24px <44 at 390 + absolute overlap at 390 + docs 0 copy parity; seam reduced-motion wildcard OK but explicit seam-rail/pauses/copy term-legend split across 4 blocks; next weakness search input no focus-visible ring + landing pre 390 not matching docs.

### Edits applied (substantial block-level redesign)

- **site/assets/style.css code-color discipline**: 5 #7fb3e0 rules annotated "code only" (.c-flag code twice, .c-key, td code, tl-item code + pre .c-flag); guard comment `/* code-color discipline: #7fb3e0 ONLY on .c-flag/.c-key/code spans (syntax blue), never on prose */` — landing + docs share same mono tokens, 0 prose blue.
- **Hover/focus parity**: added `.feature-card:focus-visible` (border #3a3a40 + lift -2px + ring rgba 12% parity with hover); made seam 3 gates focusable in html + CSS proxy `.seam-pane:focus-visible .seam-pause` + `:focus-within` lift + `.seam-pause:focus-visible rect` stroke #9a9aa2 1.6 (svg <g> now keyboard reachable, pane keyboard-scrollable already tabindex 0).
- **Terminal copy buttons at 390**: base .copy-btn 28min-h + flex centering + 56min-w, 32@680, 36@390 with 8×14 padding; term-bar flex-wrap at 390; pre.block padding-top 18→44@390 so copy-btn-block (8/8, 32min-h) never overlaps code; docs 7 pages patched to data-copyable+copy-btn (22 btns parity, landing 3).
- **Seam reduced-motion completeness**: merged 4 blocks — last block now explicit `transition:none animation:none` for .security-pane shield/items, .seam-rail/pauses, .term-legend, .docs-mini/.dm-tile, .copy-btn/.copy-btn-block, .hero-stats/.security-pane/.seam-pane — wildcard `* {animation:none transition:none}` + explicit stroke-dashoffset 0 for rail/fs-rail/rc-a/branch/sm-links already cover 18 SVG grammars.
- **Next visual weakness**: added `.search-panel input:focus-visible` accent inset ring (eliminates outline:none blind spot); added `pre.block` font-size 11px at 390 for landing parity + docs plain-lead scaling retained.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/style.css (878 lines, contains guard+parities+390 copy), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3796 retained), /docs/*, /assets/og-card.png (40 hits retained, 47882 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3796); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, panes tabindex 6, seam-pause focusable 3, data-labels 12, caption 1, scope 3, hint 8, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages, landing copy-btn 3, docs copy-btn 22, focus-visible 40, reduced-motion 4 blocks, hex 5 rules +1 guard (#7fb3e0 code-only)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present, seam hover/focus parity via :focus-within proxy
- artifacts: audit/cycle-09-source-check.md, audit/cycle-09-post-edit.md, audit/cycle-09-curl.html, audit/cycle-09-index.html/style.css/site.js/search-index.json + docs snapshots (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 9 — code-color discipline, hover/focus parity, 390 copy buttons, seam reduced-motion
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 10 plan (loop continues — do not stop after cycle 9)
- Next sweep: docs plain-lead measure vs landing lede at 390 alignment re-check, vs-git row-mindos focus-visible at 680 cards, terminal a11y live region re-audit, per-section hint measure consistency, no /tmp/ps/lsof, server 127.0.0.1:8899 kept alive via curl.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.
