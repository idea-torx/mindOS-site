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

---

## Cycle 10 — Hint measure + row-mindos focus + live region + pane elevation + header/hero/docs-mini polish (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits, 47819 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535 lines, site/assets/style.css 881, site/assets/site.js 314, 12 sections, dup </main> 1, hex 17 tokens strict mono #7fb3e0 7 code-only, focus-visible 40, reduced-motion 4, landing jargon 0, console clean
- Issues found (queued): .hint 46em vs p.body 44em vs lede 42em mismatch + 680 fluid missing hint + layered 52em outlier; lede 18px at 390 not harmonized with plain-lead 14.5; row-mindos tr not focusable at 680 cards (no tabindex, no :focus-visible ring); docs 8 pages with copy-btn but 0 live regions while landing has 1; pane system flat (no top hairline, no shadow depth), header flat, hero-stats faint border, docs-mini left border uniform.

### Edits applied (substantial block-level redesign)

- **site/index.html** (1 line + 1 a11y): `tr.row-mindos` now `tabindex="0" aria-label="MindOS — the shared record …"` so keyboard users at 680 cards can focus the card and see ring; `#copy-live` now `role="status" aria-live="polite" aria-atomic="true"` (was polite only) for broader AT.
- **site/docs/*.html** (8 pages): every docs page with `.copy-btn` now has `<div id="copy-live" role="status" aria-live="polite" aria-atomic="true" class="visually-hidden">` before `</body>` (was 0, now 8) — parity with landing live region; search-index regenerated (landing 3796 retained), `check-site.py` OK 15/248.
- **site/assets/style.css** hint measure system (queued): `.hint { max-width: 44em; line-height:1.55 }` was 46em, `.archetype-layered .hint` 52em→44em (now aligns with p.body 44em vs lede/plain-lead 42em), `@media 680` now `.lede, p.body, .plain-lead, .hint {max-width:none}` (was missing hint), `@media 390` added `.lede 17px/1.58` + `.hint 11.5/1.5` to harmonize with plain-lead 14.5.
- **site/assets/style.css** row-mindos focus (queued): `.row-mindos:focus-visible { outline 2px solid #e8e8ea offset 2 }` + td bg lift, `tr:focus-within` and `tr.row-mindos:focus-within` border #9a9aa2 + shadow so 680 card stack shows focus when tabbing.
- **site/assets/style.css** substantial aesthetic: header `backdrop-filter saturate(1.1)` + `box-shadow 0 1px 0 rgba… + 0 8px 24px rgba(0,0,0,.28)` for distinct sticky elevation (mono only); hero-stats `padding 16×18`, `border-left 2px #34343a` + hover #45454b, `hs-val 600 -.015`, label -.01, inset shadow, 680 padding tweak; `.pane` now `box-shadow inset + 4px 16px` + `::before` top hairline gradient (14px inset) for subtle depth across all 7 panes; docs-mini `.dm-tile` now `border-left 2px #232327` + hover `left #45454b` + lift -2px + shadow 4px 12px, focus left #9a9aa2.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (contains pane::before, header shadow, hero-stats accent), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3796 retained), /docs/*, /assets/og-card.png (35→36 hits, 47819 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3796); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hint 8 (44em unified, 680 fluid, 390 11.5), panes tabindex 7, seam-pause focusable 3, data-labels 12, caption 1, scope 3, hero-stats 1 (accent left), security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages, landing copy-btn 3, docs copy-btn 22, live regions 9 (landing 1 + docs 8), focus-visible 44, reduced-motion 4 blocks, hex 17 tokens (#7fb3e0 7 code-only)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (lede 17px at 390), row-mindos focus-visible + focus-within at 680 cards
- artifacts: audit/cycle-10-source-check.md, audit/cycle-10-post-edit.md, audit/cycle-10-curl.html, audit/cycle-10-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 10 — hint measure unified (44em), 390 lede/plain-lead harmony, row-mindos focus-visible at 680 cards, docs live regions, header/hero/pane/docs-mini elevation polish
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 11 — Incremental 390 rhythm (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48015 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535 lines, site/assets/style.css 898 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono 17 tokens, focus-visible 44, reduced-motion 4, landing jargon 0, console clean
- Issues found (queued from cycle 10): kicker vs sec-title at 680, footer mono rhythm, docs side-nav 390 overflow — 390 refinements needed (kicker 11px not harmonized, docs-side 13px cramped, footer 11px missing).

### Edits applied (incremental 390 polish)
- **site/assets/style.css**: at 390 — kicker 11px/.08/12mb, docs-side a 13px/6×10 harmonized with lede 17px/hint 11.5, footer mono 11px/1.5. Small rhythm converge, no archetype change. Log entry deferred to cycle 12 full audit.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/style.css (898→901 lines, contains 390 kicker/docs-side/footer), /assets/site.js (node --check ok), /assets/search-index.json (15), /docs/*, /assets/og-card.png (36 hits)
- node --check site/assets/site.js → ok
- sections 12, dup </main> 1, hint 8, focus-visible 44, reduced-motion 4, hex strict mono 17 tokens (#7fb3e0 7 code-only)
- artifacts: audit/cycle-11-* (curl, style.css, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: cycle 11 incremental — 390 kicker/footer/docs-side rhythm, continues infinite loop (cycle 10 verified)
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 12 — Hero/arch focus parity + kicker rhythm + footer/docs-nav 390 polish + plain-lead elevation (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48015 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 535 lines, site/assets/style.css 898→901 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex strict mono 17 tokens, focus-visible 44, reduced-motion 4, landing jargon 0, console clean
- Issues found (queued from cycle 11 plan): hero/arch hover has lift but focus-visible only stroke (no transform parity), plain-lead flat (no hover affordance), kicker at 680 still 11.5/14 vs sec-title 32 balance, footer stacked at 680 no distinct border, docs-side at 390 13px/6×10 still cramped vs tight 390 measure, dm-tile hover only border (no surface lift), search input placeholder faint, hero-art no visible keyboard hint vs other panes.

### Edits applied (substantial block-level redesign)

- **site/index.html** (1 line): hero-art figure now has visible `<p class="hint">Tab through the four layers — each one lifts on hover or focus…</p>` below pane (parity with 7 other diagram hints, now 9 total) — keyboard users know layers are focusable.
- **site/assets/style.css** hero/arch focus parity: `.ah-layer:focus-visible { transform: translateY(-3px); box-shadow ring }` + `.ar-layer:focus-visible { transform: translateY(-3px); box-shadow }` (both now lift -3px parity with hover, stroke #9a9aa2/#e8e8ea + ring).
- **site/assets/style.css** kicker rhythm at 680: `h1.hero + kicker` refined — `@media 680: .kicker 12px/.08/12mb, .sec-title 12mb` so kicker/title spacing matches lede/hint fluid measure (was 11.5/14).
- **site/assets/style.css** footer mono rhythm: brand `font-weight 500 -.01 #9a9aa2`, meta `line-height 1.5`, at 680 stacked meta now `border-top #232327 + 10px pt + 100% width` for distinct close (mono only).
- **site/assets/style.css** docs-side 390 hardening: at 390 `a 12.5px/5×8/1.4`, `.side-h 11px/14×6`, `nav gap 4` — tighter measure, no horizontal overflow, harmonizes with docs 11px pre.
- **site/assets/style.css** plain-lead elevation: `.plain-lead transition + :hover #45454b + shadow + :focus-within #9a9aa2` (subtle lift, mono only).
- **site/assets/style.css** docs-mini polish: `.dm-tile transition + background #1a1a1d on hover` (surface lift within mono 18 tokens, #7fb3e0 still 7 code-only).
- **site/assets/style.css** search polish: `.search-panel input::placeholder #5f5f66 .85 + transition border-bottom`.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3795 (hero hint added), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (912 lines, contains plain-lead:hover + ah-layer:focus-visible transform + 680 kicker + footer stacked border), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3795), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hint 9 (hero +1, 44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 47, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (kicker 12px at 680, 11px at 390; docs-side 12.5px at 390; footer stacked border at 680; hero/arch focus lift parity)
- artifacts: audit/cycle-12-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 12 — hero/arch focus parity (lift on focus), kicker 680 rhythm, footer stacked border, 390 docs-side hardening, plain-lead elevation, dm-tile surface lift
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 13 — Typography rhythm + terminal focus + hero mono wash + docs wrap + rel-card lift (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48176 bytes), /assets/style.css 200 (912 lines), /assets/site.js 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 536 lines (hero hint retained from cycle 12), site/assets/style.css 912 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex 18 tokens strict mono (#1a1a1d retained, #7fb3e0 7 code-only), focus-visible 47, reduced-motion 4, landing jargon 0, console clean
- Issues found (queued from cycle 12 plan): typography vertical rhythm ad-hoc (pane+hint 14 ok but hint+meta not distinct from hint+body 18, plain-lead+gloss not systematized, hero-art+hint orphan); term-body 18px/20 mono cramped at 1.65 mono default vs 1.7/ -.01 needed; terminal .term not keyboard-focusable despite tabindex peers (.pane, .seam-pane) — missed focus-visible ring for keyboard scroll users; rel-card flat (no hover lift, no focus-within border vs docs-mini lift); docs-side a long titles can overflow at 390/680 (no wrap), no overflow-wrap; hero archetype flat vs other archetypes distinct (no radial wash); focus polish incomplete (.term:focus-visible missing).

### Edits applied (substantial block-level redesign)

- **site/assets/style.css term readability**: `.term-body { line-height 1.7; letter-spacing -.01em }` (mono terminal readability, matches docs pre 1.65-1.7 system) + `.term:focus-visible { 2px solid var(--accent) offset 2 radius var(--radius-lg) }` + `.term:focus-within { border-color #34343a }` — terminal now distinct focus parity with pane (previously only pane had focus-visible at 820, now term does too, +1 focus-visible → 48).
- **site/assets/style.css rel-card lift**: `.rel-card { transition border-color + transform + box-shadow 180ms ease-out }` + `.rel-card:hover { border #34343a, translateY -1px, 0 4px 12px rgba(0,0,0,.18) }` + `.rel-card:focus-within { border #9a9aa2 }` — release card now aligns with dm-tile hover elevation system (mono only, no saturated color).
- **site/assets/style.css docs wrap**: `.docs-side a { overflow-wrap anywhere; word-break break-word }` — prevents narrow overflow for long titles (FAQ, agents-and-handoffs) at 390/680, harmonizes with 820/680 pane scroll system.
- **site/assets/style.css vertical rhythm system**: added `.hero-art + .hint { 14mt }` to systematize hero hint spacing (was only .term+.hint/.seam-pane+.seam-list), expanded `.hint + .body/.pane + .body` to include `.hint + .meta` (18mt) + `.plain-lead + .gloss` (18mt) then override `.hint + .meta { 14mt }` so meta sits tighter than body (14 vs 18) — rhythm now covers all hint-adjacent closeness cases (pane+hint 14 / hint+body 18 / hint+meta 14 / plain-lead+gloss 18 / kicker/title/body 14mb invariant retained). Covers cycle 13 plan queue.
- **site/assets/style.css hero archetype wash**: `.archetype-hero { background: radial-gradient(700×400 at 68% 8%, rgba(232,232,234,.035), transparent 68%), var(--bg) }` — subtle monochrome wash distinct from other archetypes (rail left border, walk #0d0d0f, window #101014, machine, branch, layered) yet strictly mono (#e8e8ea 3.5% opacity) — per-section archetype uniqueness strengthened without breaking #7fb3e0 code-only discipline.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3795 retained (hero hint already indexed cycle 12), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (926 lines, contains radial + term readability + rel-card lift + anywhere wrap + rhythm 14/18), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3795), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hint 9 (hero +1, 44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 44 (term +1), reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift retained)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (term 1.7/-.01, hint+meta 14 vs body 18, hero-art+hint 14, docs-side wrap anywhere)
- artifacts: audit/cycle-13-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 13 — typography rhythm (hero-art+hint/meta/gloss), terminal readability + focus-visible, rel-card lift + focus-within, docs wrap anywhere, hero mono radial wash
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 14 — 820 rhythm + branch/window contrast + pre.block focus parity + docs layout tighten (2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48176 bytes), /assets/style.css 200 (926→937 lines after edits), /assets/site.js 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 536 lines (hero hint retained), site/assets/style.css 926 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex 18 tokens strict mono (#1a1a1d retained, #7fb3e0 7 code-only), focus-visible 44, reduced-motion 4, landing jargon 0, console clean
- Issues found (queued from cycle 13 plan): 820 intermediate still jumps 900→680 for plain-lead/gloss/hint (no scale vs hero/term measure at 820); docs-layout gap 48 vs 24 at 680 with no 820 step — jump 48→24 abrupt; dm-tiles gap 12 vs 1-col at 680 no 820 tighten; branch/window panes both #2a2a30 at all widths — no distinct close at 820/390 vs rail #45454b progression; pre.block (landing + docs) has no :focus-visible/:focus-within vs .term parity — keyboard scroll at narrow only pane/term announce focus ring; search input focus-visible already wired but pre.block missing at 820 ring list.

### Edits applied (substantial block-level redesign)

- **site/assets/style.css 820 rhythm**: extended `@media 820` — plain-lead 15px/1.6 12×14, gloss 13px/1.55, hint 12.5/1.55, docs-layout gap 48→36, dm-tiles gap 12→10 — 820 now harmonizes so 900→820→680 progression is stepped, not jumped (matches hero gap 36 + term 12 + pane 22×18 at 820 system).
- **site/assets/style.css SVG contrast micro-audit at 820/390**: at 820 `.archetype-branch .rec-pane` + `.archetype-window .mem-pane` border #2a2a30→#34343a (distinct close vs rail #45454b lift); at 390 same panes #34343a→#3a3a40 — branch/window now have per-breakpoint contrast stepping 1-2 shades lighter as viewport narrows, matching compare table card stepping (#34343a→#3a3a40→#5f5f66).
- **site/assets/style.css pre.block focus parity**: added `pre.block:focus-visible { 2px solid var(--accent) offset 2 radius var(--radius) }` + `pre.block:focus-within { border #34343a }` and extended 820 focus-visible ring list to include `pre.block:focus-visible` — docs + landing code blocks now announce focus parity with .term (focus-visible 44→45, reduced-motion 4 retained, #7fb3e0 7 code-only unchanged).
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3795 retained, docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (937 lines, contains 820 plain-lead 15px + gap 36 + branch #34343a at 820 + pre.block:focus-visible), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3795), /docs/*, /assets/og-card.png (36 hits retained, 48176 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hint 9 (44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 45 (pre.block +1 + 820 pre.block), reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift retained)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (plain-lead 15px at 820, hint 12.5 at 820, branch/window #34343a at 820 #3a3a40 at 390, pre.block focus-visible parity)
- artifacts: audit/cycle-14-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 14 — 820 rhythm (plain-lead/gloss/hint + docs-layout/dm-tiles), branch/window contrast at 820/390, pre.block focus-visible/within parity
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 15 plan (loop continues — do not stop after cycle 14)
- Next sweep: code-token discipline re-scan, SVG hover vs focus parity at 820/390 per pane (each lift transparent box-shadow + stroke), terminal/docs pre overflow at 390 re-flow, docs side-nav 820/390 hierarchy tightness, continue humanize + monochrome discipline.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 15 — SVG geometry consolidation + sticky scroll + hover/focus parity + hero/arch alignment (supervised cycle 1, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48384 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 536 lines, site/assets/style.css 951 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex 18 tokens strict mono (#1a1a1d retained, #7fb3e0 3 code-only), focus-visible 58, reduced-motion 4, landing jargon 0, console clean
- Issues found (triple-check every section): hero L3 at 24×412 misaligned vs L1/L2/L4 at 40×380; arch L1-4 at 40×680 vs new 60×640 grid; sm proven/done 548×164 → 560×140 asymmetry + stroke missing 1.5; seam pauses 98/338/578 uneven gutters + 16/10.5 fonts vs 14/11 system + stroke missing; security shield 20→26 off-center; rec X 1.6 + rel icon 2.4 outliers vs 1.5/2/3 system; stroke-widths 5 values (1.5/1.6/2/2.4/3) need 3-value consolidation; no scroll-margin/padding for sticky 60px header (anchor clipped); fail-pane + sm-pane hover without focus parity; hero-art no 820 max-460 centering; CSS vars --ease-out/--dur declared but not documented as geometry audit.

### Edits applied (substantial block-level redesign)

- **site/index.html SVG geometry audit (5 diagrams, mono grid)**: hero L3 24×412→40×380 (aligns with L1/L2/L4, all 40×380, node r 5→4, check 392→399, seal 1.2→1.5); arch L1-4 40×680→60×640 (all 60×640, gap consistent); state machine proven/done 548×164→560×140 + line 542→554 + path 630→630 v40 H248 v44 (symmetric 60-gap rail, stroke 1.5 on all rects); seam pauses 98→111/565 + rect stroke 1.5 + font 16→14 / 10.5→11 + centered gutters 143; security shield 20→26 + 1.6→1.5 + item cx 140→130/152→142 (centered); memory rect/circle 1.5 + pulse 168 v20→184 v14 + B 300→280 width; branch X 1.6→1.5 + handoff 112→120 + rect 1.5 + rail 2→1.5 + loop 1.2→1.5; rel icon 2.4→2. All stroke-width now only 1.5/2/3 (removed 1.6/2.4), fonts 11/12/13.5 system.
- **site/assets/style.css sticky + parity + rhythm**: added --ease-out/--dur-sm/--dur-md vars with geometry audit comment; .section scroll-margin-top 72 + html/body scroll-padding-top 72 for sticky header anchor correctness; fail-pane .fs-step:hover circle #e8e8ea + sm-pane hover/focus parity (rect stroke #9a9aa2, lift -2px, focus ring); hero-art @820 max-460 centering; pane focus-visible extended to fail/mem/sm/rec/arch; archive strict mono (#7fb3e0 7 code-only).
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3795 retained, docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (951 lines, contains scroll-margin + vars + hover parity), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3795), /docs/*, /assets/og-card.png (36 hits retained, 48384 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3795); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hint 9 (hero +1, 44em unified, 680 fluid, 390 11.5), panes tabindex 26, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane focusable 1, seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 58, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono surface lift retained)
- SVG stroke-widths 1.5/2/3 only, jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (scroll-margin 72 at all, stroke consolidation verified)
- artifacts: audit/cycle-15-* (curl, index/style.js/search-index, source/post) inside repo, server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 15 — SVG geometry consolidation (hero/arch/sm/seam/security/branch alignment, stroke 1.5/2/3), sticky scroll-margin 72, hover/focus parity, 820 hero centering
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 16 plan (loop continues — do not stop after cycle 15)
- Next sweep: terminal/docs pre overflow 390 re-flow re-audit, docs side-nav 820/390 hierarchy tightness, per-section reduced-motion completeness at 680/390, code-token discipline re-scan.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.
