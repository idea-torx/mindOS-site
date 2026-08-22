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
