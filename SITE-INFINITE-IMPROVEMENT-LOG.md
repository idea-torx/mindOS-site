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

## Cycle 3 plan (loop continues)
- Full audit sweep: links (internal anchors + docs), console, reveals, reduced-motion, mobile 390 / tablet 820 pane overflow; screenshot captures via Playwright into audit/ (repo-local)
- SVG timing fine-tune + per-section contrast audit + focus-visible outline contrast check
- Do not stop after one plan — each cycle commits and pushes verified increment
