# SITE-DEEP-IMPROVEMENT-LOG

Supervised deep design/content loop per `MINDOS-SITE-DEEP-IMPROVEMENT.md`.
Worktree: `/Users/leofelix/Documents/mindos-site` (branch `feat/mindos-docs-site`).
Server: existing `http://127.0.0.1:8899` (PID 85162) stays alive throughout.

## Baseline audit (before cycle 1)

Reviewed every existing landing section: hero, problem, product model,
architecture, workflow, recovery, vs-git, security, get-started, footer, docs.

Baseline issues (drives the whole plan):

- P0 COLOR: green accent `#7dd3a8` used in logo marks, hero SVG, architecture
  SVG, receipts, buttons-adjacent states. Violates strict monotone rule.
- P0 JARGON: landing copy leads with "execution truth", "temporal facts",
  "leases with fencing epochs", "provenance-linked fact graph", "control plane",
  "sealed receipts" with no plain-language explanation. Fails the intelligent
  layperson goal and all 7 questions are only partially answered.
- P1 SAMENESS: problem / product / architecture / recovery are all the same
  rounded card grid. No distinct section archetypes.
- P1 MISSING SECTIONS: no failure-sequence timeline, no "day with MindOS"
  walkthrough, no animated temporal memory diagram, no state machine, no human
  seam, no branching recovery rail, no honest try-it/roadmap section.
- P1 ANIMATION: only a single spine pulse + link dots; no per-section motion
  grammar, no hover tooltips, no keyboard diagram controls.
- P2: hero title "Your agents forget. Your evidence shouldn't." is a repeated
  contrast formula; em-dashes appear in meta copy.

## Cycle 1 — copy rewrite (done)

Files: `site/index.html`.

- New hero: "AI agents lose track of their work. MindOS is the memory they
  share." Plain lede, no contrast formula, no jargon.
- Problem section rebuilt as a five-step animated failure sequence (SVG rail).
- "A day with MindOS" editorial walkthrough list (not cards), 5 steps from
  request to honest answer.
- "What MindOS remembers": temporal decision diagram (decision A superseded by
  B, change reason beside both, validity windows).
- "How work stays safe": five-state machine (open, claimed, running, proven,
  done) + claim-died recovery branch, with plain-language notes.
- Workflow: real terminal kept (code allowed) with a plain-words translation
  line under it.
- Recovery: branching rail SVG (worker A stops at last note, worker B
  continues; dashed "restart from zero" contrast branch).
- Honest comparison table rewritten as "If you keep work in…" (Markdown file,
  Git, chatbot, MindOS) with what each cannot tell you.
- New human-seam section: holds before irreversible steps, escalation, secrets
  never pass through.
- Architecture rebuilt as layered plain-language diagram (agents, rulebook,
  your local record, safe import tools) with dual-direction pulses.
- Security rewritten as "What MindOS will not do".
- Try-it section: three commands, "works today" vs "still being built" (honest
  roadmap link), no fake form.
- All engineering terms removed from landing prose; em-dashes removed from
  body text; titles use colon form.

## Cycle 2 — strict monochrome + SVG systems (done)

Files: `site/assets/style.css`, `site/assets/site.js`, all HTML + SVG assets.

- Removed every non-code color: `#7dd3a8` green and `#2c3a32` tint eliminated
  from all 15 HTML files, 4 SVG marks, favicon data URIs, and CSS tokens
  (accent now `#e8e8ea`, accent-dim `#232327`). `#7fb3e0` syntax blue and the
  gray danger token survive only inside terminal/code blocks (allowed).
- Links now off-white with quiet gray underline; focus rings off-white.
- Six distinct SVG systems with separate motion grammars:
  1. Failure sequence: rail draws down, steps stagger in, dashed repeat-loop.
  2. Temporal memory: decision window opens/closes on slow cycle, change pulse.
  3. State machine: links draw, states pop staggered, recovery dashed line
     breathes; hover/focus isolates states.
  4. Recovery rail: main line halts, branch grows from stop point, handoff dot
     travels; dimmed "guess" branch.
  5. Architecture: layered settle + request pulse down / answer pulse up on
     separate phases.
  6. Hero layered diagram (retained, relabeled in plain language).
- All diagram panes registered in site.js for IntersectionObserver activation.
- Reduced-motion: every system settles fully visible in one static frame.
- Keyboard: diagram groups are tabindex=0 with focus-visible strokes.

## Cycle 3 — audit (done)

Tool: `tools/audit-cycle.js` (Playwright chromium), screenshots in
`/Users/leofelix/Documents/mindos-site-audit-screens/cycle-*.png`.

Viewports: desktop-1440, tablet-820, mobile-390, reduced-motion-1440.

Results: 0 console errors, 0 page errors, 0 failed requests, 0 hidden reveals,
0 bad anchors on all four. `tools/check-site.py`: 15 pages, 246 internal
links, all resolve. Mobile 390px: no page-level horizontal overflow (only
scrollable code blocks, by design).

Vision audit of desktop full page: monochrome confirmed everywhere including
diagram nodes; no SVG overlap or breakage. Finding: weak section separation
(one long undifferentiated scroll).

## Cycle 4 — fixes (done)

- Added alternating section surface tint (`#0d0d0f` on even sections) and
  uppercase tracked kicker eyebrows for stronger section rhythm.
- Fixed title/meta em-dashes to colon form.
- Re-audited: all gates still pass (links, console, reveals, anchors, server).

## Gates

- check-site.py: PASS
- All pages and links resolve: PASS
- Search functional (index intact, ⌘K wired): PASS
- No unexplained jargon on landing: PASS (programmatic scan clean)
- Monochrome scan outside code/status: PASS (0 saturated hexes)
- ≥4 distinct SVG systems: PASS (6)
- Hover/focus + reduced motion verified: PASS
- Screenshots desktop/tablet/mobile/full: PASS (cycle-*.png)
- Zero console errors / failed requests: PASS
- Secret/PII scan: CLEAN
