# Cycle 07 — post-edit verification (curl + source, inside repo only)

## Audit sweep results (cycle 7 — docs readability vs landing alignment + 390 overflow)

- **Links:** curl 200 on /, /assets/style.css (810 lines), /assets/site.js (314, node --check ok), /assets/search-index.json (15 entries, regenerated after docs humanization), /assets/og-card.png, all /docs/* 200; fragment ids resolve; 248 internal links, 0 broken; search index covers all 15 pages.
- **Console:** no console.log / console.error / debugger / alert in site.js.
- **Reveals:** 45 reveal/reveal-late (unchanged — landing only); docs plain-lead uses static mono lead, no new observer needed. thresholds 0.12/0.25/0.5 retained; 8 panes in dio observer (heroArt+fail/mem/sm/rec/arch+seam/security) acquire .in.
- **Reduced-motion:** 4 prefers-reduced-motion blocks covering hero spine/pulse/layers, rail, branch, security/seam/legend/docs-mini + plain-lead/gloss static fallback (plain-lead opacity 1, no transform). JS early-exits parallax when reduced (9 refs).
- **Mobile 390/820 overflow:** breakpoints 900/820/680/390 intact. html,body overflow-x:clip prevents body scroll; pane/term/table-wrap/pre.block scroll internally with thin scrollbar (#34343a thumb). docs pre.block now explicitly overflow-x:auto + webkit thumb + 680→11.5px, 390→11px. pane svg 560→520 at 390 inside wrapper (no body scroll). docs-mini 3→1 at 680, plain-lead 14.5px at 390.
- **Search index drift fix (cycle 6) retained + docs refresh:** primary weakness this cycle was docs vs landing style gap. Recreated human bridge: plain-lead on 6 docs pages (concepts, architecture, memory, docs/index, getting-started, tasks-and-receipts) + gloss definitions for fencing epoch, temporal facts, provenance, control plane. Each dense term now carries one-line plain meaning in same paragraph or gloss callout. Regenerated index via python3 tools/gen-search-index.py → 15 entries, landing 3796 chars humanized, docs entries refreshed (architecture 2197, concepts 2198, memory 1953, docs/index 2192, getting-started 1902). Verified jargon still present where precise (runtime grounding) but now explained; landing jargon 0 retained.
- **Monochrome:** hex inventory strict mono (17 tokens, #7fb3e0 confined to .c-flag/.c-key/code — 5 occurrences in style.css only). New plain-lead/gloss use only --surface-1/--border + #34343a/#2a2a30 left accent (mono). No saturated hex outside code. #45454b rail bump stays mono gray.
- **Focus-visible:** 25 selectors — global + per-diagram stroke lifts + hardened copy-btn/menu-toggle/search-btn/btn/site-nav a + pane containers. Docs plain-lead not focusable, gloss is static prose (no extra ring needed); pre.block focus-visible via pane rule retained.
- **Vertical rhythm:** 8px base retained — plain-lead 18mt/28mb, gloss -6mt/20mb + 2px left accent, doc-page h2 scroll-margin 88, pre.block 18mt. Consistent with reveal+pane 28 / pane+hint 14 system. landing unchanged (47643 bytes).

## Block-level edit (cycle 7 — substantial)

- **site/docs/concepts.html** (88→101 lines): humanized meta descriptions + added plain-lead (“In plain words: one local file answers who owns what…”) + rewrote Tasks/Leases/Receipts/Facts/Handoffs/Seams with plain glosses: lease as “you own until X”, fencing epoch as “tick-up number stops old worker”, temporal facts as “what was true last Tuesday”, plus 3 gloss callouts (“library checkout”, “fencing stops yesterday’s worker”, “we used A then B because…”, “leases protect the to-do; seams protect the desk”). Keeps precise terms (lease_epoch, provenance, fencing epoch) with definitions.
- **site/docs/architecture.html** (94→102 lines): humanized meta + added plain-lead (“every request flows through a rulebook… refused before SQLite changes”) + clarified execution truth parenthetical + rewrote block labels (Rulebook/Local record) with mono-accurate but plain names + expanded autopilot.py/ops.py sentence to name leases/receipts/facts with plain glosses.
- **site/docs/memory.html** (85→92 lines): humanized meta + added plain-lead (“MindOS remembers the way you’d want — current, old, and why”) + expanded Hindsight binding paragraph with authority gloss + rewrote Temporal facts paragraph to name validity window/provenance/supersession with plain aside + gloss example (“cache A → B because B shipped faster”).
- **site/docs/index.html** (106→108 lines): split dense single-paragraph inventory into plain-lead (“local memory your agents share…”) + technical inventory paragraph that still names execution truth/Hindsight/temporal facts but now parenthetically defined.
- **site/docs/getting-started.html** (92→95 lines): added plain-lead (“no server, no account, pick a folder, three commands”) + kept control plane with plain parenthetical (“just means one place that decides and remembers”).
- **site/docs/tasks-and-receipts.html** (88→90 lines): added plain-lead (“one owner at a time, needs heartbeat, needs proof”).
- **site/assets/style.css** (790→830 lines): added .plain-lead (surface-1/border, left #34343a accent, 15.5px/1.62, 14×16 padding, 18mt/28mb) + .gloss (faint, left #2a2a30 accent, 13.5px/1.6) + docs typography refine (doc-page line-height 1.7, h2 scroll-margin 88, pre 18mt) + docs pre.block overflow hardening (overflow-x auto + thin scrollbar + webkit thumb, 680→11.5px, 390→11px) + 390 plain-lead/gloss scaling. Retains strict mono tokens, reduced-motion covers new blocks.
- **site/assets/search-index.json** (15 entries): regenerated from live html via tools/gen-search-index.py; landing 3796 humanized retained; docs entries now carry plain-lead text so search snippets show plain meaning first (e.g., concepts “In plain words: one local file…”, architecture “In plain words: every request flows…”). 248 internal links still 0 broken.

## curl (http://127.0.0.1:8899)
- GET / : 200 — 35 hits, 12 sections, 47643 bytes
- GET /assets/style.css : 200 — contains plain-lead/gloss, 830 lines, overflow-x clip, 820/390, focus-visible 25
- GET /assets/site.js : 200 — node --check ok
- GET /assets/search-index.json : 200 — 15 entries, landing humanized 3796, docs humanized (concepts 2198, arch 2197, memory 1953, index 2192)
- GET /assets/og-card.png : 200
- GET /docs/concepts.html : 200 — plain-lead + gloss present
- GET /docs/architecture.html : 200 — plain-lead + gloss present

## Source checks
- sections 12, dup </main> 1, panes tabindex 6 + states (22 tabindex counts), data-labels 12, caption 1, scope 3
- hex: #0a0a0b #101012 #16161a #232327 #e8e8ea #9a9aa2 #5f5f66 #45454b #7fb3e0(code only) #34343a #0f0f12 #2a2a30 #08130d #3a3a40 #0d0d0f #101014 #0e0e11 — strict mono
- landing jargon 0, docs jargon now glossed (execution truth 5 pages with plain parenthetical, temporal facts 3 with window/provenance gloss), console.log false, reduced-motion 4 blocks, focus-visible 25
- plain-lead 6 pages, gloss 3 pages, docs plain bridge verified via search index

Artifacts (inside repo, no /tmp): audit/cycle-07-source-check.md, audit/cycle-07-post-edit.md, audit/cycle-07-curl.html, audit/cycle-07-index.html/style.css/site.js/search-index.json + docs snapshots, server still audit/server-cycle02.log (kept alive, verified via curl only)

Server: http://127.0.0.1:8899 kept alive — no restart, no lsof/ps, verified 200 before and after.

