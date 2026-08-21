# Content sources

Every major claim/section on the site maps to a runtime-repository document
or code file. No invented metrics, commands, or capabilities.

## Landing page (`site/index.html`)

| Section | Source |
| --- | --- |
| Hero positioning ("durable local operating system…") | README.md intro; ARCHITECTURE.md overview line |
| Problem: claims without evidence / stale ownership / unrecoverable migrations | README.md (receipts, lease fencing epochs); INSTALL.md migration section |
| Product model: execution truth | ARCHITECTURE.md §autopilot.py; README.md Commands |
| Product model: Hindsight binding | ARCHITECTURE.md invariant 1; README.md "Shared semantic memory" |
| Product model: temporal facts | README.md `fact-assert`/`facts`/`search-facts`; ARCHITECTURE.md |
| Product model: recovery and portability | ARCHITECTURE.md §ops.py |
| Architecture diagram (four layers) | ARCHITECTURE.md Layers block |
| Fail closed / tamper-evident audit | ARCHITECTURE.md invariants 2–3; README.md `verify-chain` |
| Workflow terminal (create→claim→heartbeat→receipt→complete) | README.md Commands; fencing-epoch examples |
| Recovery section + recovery-rail terminal | INSTALL.md migration steps; ARCHITECTURE.md §ops.py; README.md brain-inventory |
| MindOS vs files + Git table | Contract brief; grounded per-row in README.md leases/receipts/resume/migrate-import/verify-chain |
| Security boundary | SECURITY.md v1 contract + secret guard |
| Install snippet | INSTALL.md Install |
| License / early-access copy | README.md licensing paragraph |

## Docs pages (`site/docs/*.html`)

| Page | Primary sources |
| --- | --- |
| getting-started.html | INSTALL.md, README.md Commands |
| concepts.html | README.md (leases, seams), ARCHITECTURE.md |
| architecture.html | ARCHITECTURE.md (full) |
| installation.html | INSTALL.md |
| migration.html | INSTALL.md migration, ARCHITECTURE.md §ops.py, README.md brain-inventory |
| memory.html | ARCHITECTURE.md, README.md facts/notes sections |
| tasks-and-receipts.html | README.md (lease lifecycle, renew/release, impact, critical-path) |
| agents-and-handoffs.html | README.md handoff/resume/recall-digest/secret-guard sections |
| recovery-and-rollback.html | ARCHITECTURE.md §ops.py, README.md recover/resume/migrate-rollback |
| security.html | SECURITY.md |
| cli-reference.html | README.md Commands; ARCHITECTURE.md §verify.py |
| faq.html | README.md licensing/boundary; ROADMAP.md honesty rule; SECURITY.md |
| roadmap.html | ROADMAP.md (verbatim structure: shipped/next) |

## Brand & visual system

| Asset | Source |
| --- | --- |
| Mark construction, variants, motion | MINDOS-EXACT-VISUAL-SPEC.md + brand review at commit `23fbf51` (BRAND-REVIEW.md §4–§7) |
| Tokens, type, restraint rules | site/DESIGN.md |
| Product context model | PRODUCT-CONTEXT.md (this repo), aligned to runtime README/ARCHITECTURE/SECURITY/ROADMAP |
