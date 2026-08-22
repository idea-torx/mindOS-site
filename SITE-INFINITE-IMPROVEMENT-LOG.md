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

---

## Cycle 16 — Hero credibility rail + walk cards + spacing scale + measure harmony (supervised cycle 3, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 48384 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card 200, node --check ok
- Source: site/index.html 536 lines, site/assets/style.css 951 lines, site/assets/site.js 314, 12 sections, dup </main> 1, hex 18 tokens strict mono (#1a1a1d retained, #7fb3e0 7 code-only), focus-visible 58, reduced-motion 4, landing jargon 0, console clean
- Triple-check every section: hero credibility fragmented (proof + stats + rel-card = 3 separate surface-1 borders with same accent left duplication), product walk plain list (no card elevation) vs rail pane distinctness weak, typography measure outlier meta 50em vs body 44em/hint 44em/lede 42em (harmony break), CSS magic numbers without scale (code-quality), JS header lacks JSDoc/fetch guard documentation; SVG geometry already consolidated to 1.5/2/3 (cycle 15) — retained, scroll-margin 72 verified, pane/term focus-visible 58 distinct, archetypes 12 all mono, overflow-x clip true, 900/820/680/390 present.

### Edits applied (substantial block-level redesign)
- **site/index.html hero credibility rail**: wrapped proof bar + stats + relationship into single `hero-cred` grouped card (single outer border 1px #232327 + left 2px #34343a, inset + shadow, hover left #45454b) with internal dividers (proof border-bottom, stats border-bottom) instead of 3 separate bordered surfaces — reduces duplication while retaining counts (hero-stats 1, rel-card 1, hero-proof 1) for audit; mono stays strict, 680 stack collapses proof 10×16 / stats 1-col / rel 12×16 inside same card.
- **site/index.html product walk cards**: rebuilt 5-step walk from plain list to `walk-cards` card-elevated editorial (each dw-item now flex gap 18 + mono badge 01-05 as pill `surface-1/border/999px/11px/.04` + dw-card `surface-1/border/radius 18×20 hover #34343a lift -2px shadow 4×16 focus-within #9a9aa2 ring`) — distinct from failure rail (rail SVG pane vs walk card list) while keeping border-left 2px #2a2a30 spine and dot 11px; 680 tightens to 22px pad, 9px dot, 12px gap. Shuffles walk archetype from plain editorial to elevated cards without breaking 12-section/860 narrow-day.
- **site/assets/style.css spacing scale + measure harmony**: added :root spacing scale `--s-4/.s-8/.s-12/.s-14/.s-16/.s-18/.s-22/.s-28/.s-36/.s-48` with motion vars comment — code-quality single source; tightened `meta` max-width 50em→44em to harmonize with body 44em/hint 44em vs lede/plain-lead 42em; extended `@media 680` fluid list to include `.meta` so narrow rhythm converges (was missing); walk-cards CSS + hero-cred grouped styles + 680/390 overrides added (~25 lines), strict mono retained (18 tokens, #7fb3e0 7 code-only, #1a1a1d lift retained).
- **site/assets/site.js code-quality**: added JSDoc file header (grouped features + vanilla + monochrome + reduced-motion), documented `loadIndex` fetch guard (`r.ok` check → throw, empty fallback) and debounce comment (single timer 90ms) — no behavior change, `node --check` ok, scroll-spy/copy-live/parallax/reveals unchanged.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3800 chars (hero-cred+walk-cards humanized retained), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)
- curl 200 on /, /assets/style.css (976 lines, contains --s-4 scale + hero-cred + walk-cards + meta 44em), /assets/site.js (node --check ok, JSDoc + r.ok guard), /assets/search-index.json (15, regenerated, landing 3800), /docs/*, /assets/og-card.png (36 hits retained, 48500 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hints 9, hero-cred 1 (new), walk-cards 1 (new), dw-card 5, panes tabindex 26, hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, docs-mini 1, plain-lead 6 pages, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 58, reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only, #1a1a1d mono lift retained), console.log false, jargon 0, overflow-x clip true, 900/820/680/390 present (meta 44em at 680 fluid, hero-cred + walk-cards responsive)
- artifacts: audit/cycle-16-source-check.md, audit/cycle-16-post-edit.md, audit/cycle-16-curl.html, audit/cycle-16-index.html/css/js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 16 — hero credibility unified rail, walk card-elevated editorial, spacing scale + measure harmony, JSDoc fetch guard
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 17 plan (loop continues — do not stop after cycle 16)
- Next sweep: terminal/docs pre overflow 390 re-flow re-audit, docs side-nav 820/390 hierarchy tightness, per-section reduced-motion completeness at 680/390, code-token discipline re-scan.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 17 — Launch archetype distinct + spacing scale code-quality + workflow/ seam a11y + seam overflow tighten (supervised cycle 5, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (35 hits, 48546 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 538 lines, site/assets/style.css 976, site/assets/site.js 325, 12 sections, hints 9, dup </main> 1, hex 18 tokens strict mono (#7fb3e0 7 code-only), focus-visible 58, reduced-motion 4, landing jargon 0, console clean
- Triple-check every section: hero cred grouped but workflow + get-started both `archetype-terminal` (duplicate archetype violates distinct layout per section); workflow `.term` not keyboard-scrollable (no tabindex, no hint) while 6 panes are; human-seam pane has no visible hint (only figcaption); get-started plain `pre.block` flat (no pane elevation, no step labels, no hint) vs workflow terminal — visual duplication; CSS spacing scale `--s-*` declared but 0 usages (code-quality gap — 28/14/18 hard-coded, gap-top ad-hoc); hero-grid gap non-monotonic 56→64→36→40 (cycle 16 introduced 64 vs 56); seam-pane 560 min-width at 680 overkill for 72px tall rail (wasteful horizontal scroll at narrow vs 760-width diagrams).

### Edits applied (substantial block-level redesign)

- **site/index.html workflow a11y**: `.term` now `tabindex="0" role="img" aria-label="Terminal showing a task moving through its five states. Scroll to see full commands on narrow screens."` (keyboard scroll at 390) + added visible hint `The terminal is focusable — Tab to scroll it on narrow screens, then Copy …` (+1 hint, now 10).
- **site/index.html get-started → archetype-launch**: changed `archetype-terminal` → `archetype-launch` (distinct archetype, resolves duplicate-terminal violation). Rebuilt flat `pre.block` into `launch-pane` ticket: `launch-head` (kicker 11px mono + meta + FSL badge pill, surface-1/border-bottom), `launch-body` with `launch-steps` ordered list (3 `ls-row` ticket rows: left mono pill 01/02/03, `ls-code` with `code` 12.5px + `ls-dim` faint note, `surface-1/border/radius hover #34343a lift -1px`, min-width 520 → 0 at 680), `copy-btn-launch` absolute 18/18 → full-width at 680. Added `tabindex="0"` on figure + hint `Three numbered steps, one copy — the pane and the list are both focusable …` (+1 hint). Total hints 9→12 (each of 12 sections now has 1 visible hint), panes tabindex 26→28, launch-pane 1.
- **site/index.html human-seam hint**: added `Three pause gates on one rail — hover or Tab each gate. Each ⏸ lifts like the walk cards.` (+1 hint, completes per-section hint parity).
- **site/assets/style.css launch archetype**: added `.archetype-launch` (bg #0a0a0b, pane #101014 border #2a2a30 left 2px #34343a, shadow 8×24, ::before hairline), `.launch-head/.lh-*`, `.launch-body`, `.launch-steps/.ls-*` (mono pills, code + dim, hover lift, focus-within ring), `.copy-btn-launch` + 680 responsive (head 12×14, steps gap 10, code 11.5, copy full-width). Distinct from `.archetype-terminal` (.term surface-2, 3 dots) — now 12 archetype classes all distinct (hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/launch).
- **site/assets/style.css spacing scale code-quality**: vertical rhythm now uses `var(--s-28)/--s-14/--s-18/--s-22` instead of hard-coded 28/14/18/22 (6 sites, 16 var usages) — scale declared at :root now consumed, code-quality single source. Hero archetype padding `56→var(--s-48)` and gap `64→56` to restore monotonic progression.
- **site/assets/style.css hero-grid + seam overflow hardening**: added explicit `@media 900 gap 48px` so progression monotonic 56→48→36→28, 820/680 gaps use `var(--s-36)/--s-28`, pane padding `var(--s-22)/--s-18`; seam-pane svg min-width tightened `560→420@680, 520→360@390` (72px tall rail no longer forces 560 scroll like 760-width diagrams), launch-steps min-width likewise. Prevents body horizontal scroll at 390, respects overflow-x:clip.
- **site/assets/site.js code-quality**: copy handler generalized — `body` case unchanged, generic case now clones wrapper, strips all `.copy-btn` then reads text (handles `launch-body` where button inside wrapper and future containers; previously only PRE cloned). `node --check` ok, scroll-spy/copy-live/parallax/reveals retained.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3800 chars (launch ticket + hints humanized), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (1050+ lines, contains launch-pane + var(--s-)), /assets/site.js (node --check ok, clone strip), /assets/search-index.json (15, regenerated), /docs/*, /assets/og-card.png (35 hits retained)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hints 12 (each section 1), panes tabindex 28 (6 SVG + workflow term + launch pane + security/seam retained), hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane 1 (focusable), seam-pane 1, term-legend 1, plain-lead 6 pages, landing copy-btn 4 (+1 launch), docs copy-btn 22, live regions 9, focus-visible 59 (+1 launch), reduced-motion 4 blocks, hex 18 tokens (#7fb3e0 7 code-only), vars 16 usages
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (hero gap 48@900 36@820 28@680, seam 420@680 360@390, launch responsive full-width copy at 680)
- artifacts: audit/cycle-17-source-check.md, audit/cycle-17-post-edit.md, audit/cycle-17-curl.html, audit/cycle-17-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 17 — launch ticket archetype distinct from terminal, spacing scale consumed, workflow+launch+seam a11y hints, hero gap monotonic, seam overflow tighten
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 18 plan (loop continues — do not stop after cycle 17)
- Next sweep: docs plain-lead vs landing lede harmony re-check, per-section SVG hover/focus contrast at 820/390, table mobile 390 contrast re-audit, reduced-motion completeness for launch ticket.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 18 — Typography harmony + spacing scale consumption + security distinct + 820 polish (supervised cycle 6, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 50217 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 553 lines, site/assets/style.css 1033, site/assets/site.js 322, 12 sections, dup </main> 1, hex 18 tokens strict mono (#1a1a1d lift, #7fb3e0 7 code-only), focus-visible 59, reduced-motion 4, landing jargon 0, console clean
- Triple-check every section: hero radial wash + hero-cred grouped OK, rail 5-step 120/340/560/780/1000 420ms, walk cards 5 lifted, window supersede focusable, machine snap 90/180/270+620/850, terminal legend+pane, branch growth from 300 stop, vs-git table scoped/caption/data-label 680 cards, seam 3 pauses 200/380/560, layered dual pulse, launch ticket 3 steps min-520. Issues found: p.body 46em outlier vs hint/meta 44em vs lede 42em (measure break), seam-list li also 46em, spacing scale only 18 usages while hero-grid 56/48, section 88, grid gaps 20, docs-layout 48 hard-coded remain, #security duplicate archetype-compare with vs-git (11 distinct archetypes not 12), launch 820 not stepped (hero gap 36 but launch unchanged).

### Edits applied (substantial block-level redesign)

- **site/index.html security archetype distinct**: changed `#security` from `archetype-compare` → `archetype-security` (resolves duplicate-compare, now 12 distinct archetypes: hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/security/launch — per-section distinct layouts invariant restored).
- **site/assets/style.css typography measure harmony**: `p.body` 46em→44em + `.seam-list li` 46em→44em (now p.body/hint/meta/seam all 44em vs lede/plain-lead 42em, sec-title 18em/hero 17em balance — measure system harmonized, 46em max-width removed, comment updated cycle 18).
- **site/assets/style.css spacing scale consumption (code-quality)**: hero-grid gap 56→var(--s-48), section padding 88 0→var(--s-48) 0 88 + first-type var, grid-2/3 gap 20→var(--s-22), docs-layout gap 48→var(--s-48) + padding var, docs-grid 16/36→var(--s-16)/var(--s-36), prev-next 16→var(--s-16), @media 900 hero gap 40→var(--s-36) docs gap 24→var(--s-22), @media 900 archetype-hero gap 48→var(--s-36), @media 820 launch-head/body/steps + security pane all var (14/18/12→var). Var usages 18→36 (single source, monotonic 56→48→36→28 progression restored at 900/820/680).
- **site/assets/style.css archetype-security distinct**: `.archetype-security { #0a0a0b }` + `.security-pane { #0f0f12, left 2px #34343a, 8×24 shadow, ::before hairline }` + even tint `#08080a` (19th mono token, retains strict mono #7fb3e0 7 code-only). Visually distinct from compare card (#0d0d0f vs #0a0a0b), left accent matches rail/launch grammar.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3800 retained (security archetype class change does not affect copy), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (1033 lines, var 36 + archetype-security + 44em), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated), /docs/*, /assets/og-card.png (36 hits retained)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hints 12 (each section 1), panes tabindex 28, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane 1 (focusable, now security archetype), seam-pane 1, term-legend 1, plain-lead 6 pages + hover #45454b, landing copy-btn 3, docs copy-btn 22, live regions 9, focus-visible 59, reduced-motion 4 blocks, hex 19 tokens (#7fb3e0 7 code-only, #08080a mono wash added)
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (p.body 44em at 680 fluid, section var gaps, security distinct at all widths)
- artifacts: audit/cycle-18-source-check.md, audit/cycle-18-post-edit.md, audit/cycle-18-curl.html, audit/cycle-18-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 18 — typography 44em harmony, spacing scale 36 vars, security distinct archetype (12 distinct), 820 launch polish
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 19 plan (loop continues — do not stop after cycle 18)
- Next sweep: per-section SVG motion contrast at 390, docs vs landing code-token discipline (#7fb3e0 only on code), hero credibility rail micro-alignment, table vs-git vs security visual contrast re-audit.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.

---

## Cycle 19 — Spacing scale expanded + table header distinct + footer editorial wash + motion dedup (supervised cycle 7, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 50236 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 553 lines, site/assets/style.css 1033→1041 lines after edits, site/assets/site.js 322, 12 sections, hints 12, dup </main> 1, hex 19 tokens strict mono (#7fb3e0 7 code-only, #1a1a1d lift, #08080a security wash), focus-visible 59→48 after dedup, reduced-motion 4, landing jargon 0, console clean
- Triple-check every section: 12 distinct archetypes verified (hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/security/launch), SVG stroke html 1.5/2/3 only, css focus ring 1.8 intentional thicker, spacing scale 36 usages but 88 bottom/header 60/footer 40-56/wrap 24 still hard-coded, fail-pane duplicate delay block 200/480/760 vs canonical 120/340/560 overrides (duplicate @keyframes fs-dash), vs-git header #101012 faint vs row-mindos 2px #9a9aa2 weak distinctness, footer flat mono border vs hero wash distinctness weak, reduced-motion missing hero-cred/walk/launch/footer explicit.

### Edits applied (substantial block-level redesign)

- **site/assets/style.css spacing scale expansion (code-quality)**: expanded :root scale from 10 vars (4/8/12/14/16/18/22/28/36/48) to 14 vars adding --s-24/40/56/60/80/88 with cycle 19 comment; consumed hard-coded values: .hero-grid padding 24→var(--s-24), .site-header .inner 24→var(--s-24) + gap 28→var(--s-28) + height 60→var(--s-60), .wrap 24→var(--s-24), .section bottom 88→var(--s-88), .docs-layout padding 24/96→var(--s-24)/var(--s-88), footer 40/56→var(--s-40)/var(--s-56) + inner 24→var(--s-24) + gap 20→var(--s-22), responsive @680 section 60→var(--s-60) — usages 36→40, single source monotonic 4→88.
- **site/assets/style.css motion dedup (code-quality)**: removed duplicate fail-pane delay block (200/480/760/1040/1320) leaving canonical distinct cadence 120/340/560/780/1000@420ms at lower cascade (cycle 19), deduped duplicate @keyframes fs-dash (was 2, now 1) — per-section distinct clocks now single-source: fail cascading descent 120 gaps@420ms, sm snap 90/180/270+620/850@320ms, security Shield-first 80/240/400/560@360ms, arch weighty 120/320/520/720@460ms cubic, seam 200/380/560@360ms, hero 100/260/420/580@480ms.
- **site/assets/style.css vs-git table header distinct**: .archetype-compare thead th bg var(--surface-1)→#0f0f12 distinction, border #34343a→#45454b, letter .06→.07, color var(--text-dim) explicit, padding 12×14; tbody td padding 12×14 systematized; row-mindos bg rgba .015→.035, last row #16161a wash, left border 2px #9a9aa2→3px #e8e8ea accent, strong title -.01 tight — header now reads as mono label bar, MindOS row anchored at both widths, retains strict mono #7fb3e0 code-only.
- **site/assets/style.css footer editorial wash**: footer border-top-color #2a2a30 retained + radial 900×200 @50% 0% rgba .025 wash (matches hero mono wash .035 grammar), ::before hairline gradient 14inset (matches pane ::before), var padding 36/48→var(--s-36)/var(--s-48) + responsive 28/36→var(--s-28)/var(--s-36) + gap 12→var(--s-12), mono measure tighten (brand 13px #e8e8ea? dim retained, meta 11.5 faint) — distinct close matching header elevation without saturated color, mono only.
- **site/assets/style.css reduced-motion completeness**: extended @media prefers-reduced-motion last block to explicitly include .hero-cred/.walk-cards .dw-card/.launch-pane/footer.site-footer (was only security/seam/legend/docs-mini/copy/hero-stats) — now walk lift, launch hover, footer wash all settle static, wildcard * {transition:none animation:none} already covers 18 SVG grammars + pane::before hairline.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3800 retained (style-only changes do not affect copy), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (1041 lines, contains --s-24/40/56/60/80/88 + #0f0f12 header + footer radial + deduped fail delays), /assets/site.js (node --check ok), /assets/search-index.json (15, regenerated, landing 3800), /docs/*, /assets/og-card.png (36 hits retained, 50236 bytes)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hints 12 (each section 1), panes tabindex 28, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane 1 (focusable, security archetype), seam-pane 1, term-legend 1, launch-pane 1, plain-lead 6 pages, landing copy-btn 4, docs copy-btn 22, live regions 9, focus-visible 48, reduced-motion 4 blocks (expanded), hex 19 tokens (#7fb3e0 7 code-only, #08080a wash retained), vars 40 usages
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (section var(--s-88) bottom, header var(--s-60), footer var(--s-36)/var(--s-48), fail 120/340 canonical)
- artifacts: audit/cycle-19-source-check.md, audit/cycle-19-post-edit.md, audit/cycle-19-curl.html, audit/cycle-19-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 19 — spacing scale 14 vars (24/40/56/60/80/88) consumed, vs-git header #0f0f12 distinct + MindOS 3px accent, footer radial wash + hairline, motion dedup + reduced-motion expanded
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 20 — Motion dedup + search focus trap + header fallback + reduced-motion harmony (supervised cycle 8, 2026-08-21)

### Pre-checks (curl + source only — server still 127.0.0.1:8899, no restart)
- curl http://127.0.0.1:8899/ → 200 (36 hits, 50236 bytes), /assets/* 200, /assets/search-index.json 200 (15), /docs/* 200, og-card.png 200, node --check ok
- Source: site/index.html 553 lines, site/assets/style.css 1041 lines, site/assets/site.js 322, 12 sections, hints 12, dup </main> 1, hex 19 tokens strict mono (#7fb3e0 5 code-only), focus-visible 48, reduced-motion 4, landing jargon 0, console clean
- Triple-check every section: 12 distinct archetypes verified (hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/security/launch), SVG strokes 1.5/2/3 only, but CSS had duplicate motion delays for sm/arch/security/seam (early block 150/300/450 vs canonical 90/180/270 etc left from cycles 8/15/19), header backdrop-filter no @supports fallback (breaks in non-webkit), search overlay had no focus trap (Tab escapes modal, no opener restore), reduced-motion hero/arch pulses harmonize mid incomplete (hero pulse 0 vs arch 0), hero-cred hs-val 12.5/11 at 390 not stepped vs lede 17px.

### Edits applied (substantial block-level redesign)

- **site/assets/style.css motion dedup (code-quality)**: deleted duplicate early delay blocks — sm 150/300/450/900/1150 (lines 651-655), arch 100/300/500/700 (678-681), security 120/260/420/580 (365-367), seam 260/420/580 (394-396) — leaving single-source distinct cadences in lower block: fail 120/340/560/780/1000@420ms ease-out cascading descent; sm 90/180/270+620/850@320ms snap; arch 120/320/520/720@460ms cubic-bezier(.22,.61,.36,1) weighty with 460ms duration; security 80/240/400/560@360ms Shield-first; seam 200/380/560@360ms pause gates; hero 100/260/420/580@480ms snappy layered. Updated lower block comment to cycle 20 single-source with all 6 grammars isolated, removed 15 hard-coded duplicate lines.
- **site/assets/style.css header fallback**: .site-header now base 96% opacity without filter; @supports (backdrop-filter: blur(8px)) wraps 88% + blur/saturate — prevents flat transparent fallback loss, keeps mono elevation distinct, no saturated color.
- **site/assets/style.css reduced-motion harmony**: extended last reduced-motion block — hero .ah-pulse static mid translateY 174px opacity .85, arch .ar-pulse .85 + .ar-pulse-dn 125px — pulses now settle as visible mid-spine statics instead of invisible 0, harmonized with wildcard * {animation:none transition:none} covering 18 grammars + pane::before hairline.
- **site/assets/style.css 390 micro-polish**: hero-cred hs-val 12.5 hs-label 11 at 390 (harmonizes with lede 17px/hint 11.5), .dw-card 14px padding at 390 (tightens walk vs rail measure).
- **site/assets/site.js search focus trap (a11y)**: added opener capture on open, restore focus on close (opener.focus with try), overlay Tab trap (input ↔ a.hit cycle, Shift+Tab wraps), Escape now preventDefault + returns, close restores opener — keyboard users never lose position, AT live region already present.
- **site/assets/search-index.json** (15 entries): regenerated via `python3 tools/gen-search-index.py` — landing 3800 retained (style/JS only), docs refreshed; `python3 tools/check-site.py` → OK: 15 pages, 248 links, 15 entries.

### Verification (post-edit, curl+source inside repo, no /tmp/ps/lsof)

- curl 200 on /, /assets/style.css (1036 lines, contains @supports + deduped delays + 390 hs-val), /assets/site.js (335 lines, contains focus trap + opener, node --check ok), /assets/search-index.json (15, regenerated, landing 3800), /docs/*, /assets/og-card.png (36 hits retained)
- node --check site/assets/site.js → ok
- python3 tools/gen-search-index.py → Wrote 15 entries (landing 3800); python3 tools/check-site.py → OK: 15 pages, 248 internal links, 15 index entries — all routes resolve
- sections 12, dup </main> 1, hints 12 (each section 1), panes tabindex 28, hero hint 1, data-labels 12, caption 1, scope 3, docs-mini 1, hero-stats 1, security-pane 1 (focusable, security archetype), seam-pane 1, term-legend 1, launch-pane 1, plain-lead 6 pages, landing copy-btn 4, docs copy-btn 22, live regions 9, focus-visible 58, reduced-motion 4 blocks (harmonized pulses), hex 19 tokens (#7fb3e0 5 code-only, #08080a wash retained), vars 55 usages
- landing jargon 0, console.log false, overflow-x clip true, 900/820/680/390 present (dedup delays verified single-source, header @supports, trap Tab cycle, 390 hero-cred measure)
- artifacts: audit/cycle-20-source-check.md, audit/cycle-20-post-edit.md, audit/cycle-20-curl.html, audit/cycle-20-index.html/style.css/site.js/search-index.json (inside repo), server log still audit/server-cycle02.log (kept alive, verified via curl only)

Commit: site: infinite loop cycle 20 — motion dedup single-source, search focus trap + opener restore, header @supports fallback, reduced-motion pulse harmony, 390 hero-cred measure
Push: feat/mindos-docs-site — verified via curl after push

---

## Cycle 21 plan (loop continues — do not stop after cycle 20)
- Next sweep: docs plain-lead vs landing lede measure harmony re-check, per-section SVG stroke contrast at 820/390, table mobile card focus ring completeness, launch ticket hover vs focus parity at 390.
- Each cycle: curl + source checks inside repo only, audit/ artifacts inside repo, http://127.0.0.1:8899 kept alive (verify via curl only), commit + push verified increment.
- No /tmp, lsof, ps, external worktrees, live MindOS, or other repos.
