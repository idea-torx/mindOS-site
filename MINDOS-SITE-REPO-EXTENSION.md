# MindOS website repository extension

The website must live in its own separate private GitHub repository: `idea-torx/mindOS-site`.

Keep the site repository independent from the MindOS runtime repository. It may contain product documentation and grounded explanatory content, but never copy live databases, receipts, Claude memory, Hindsight exports, credentials, or machine-local installation reports.

Before final commit:
- Add a complete site README explaining MindOS — Autopilot v2, the relationship to the runtime repository, local development, content source map, and FSL-1.1-MIT product licensing context.
- Add a `CONTENT-SOURCES.md` mapping every major claim/section to the source docs or code file used.
- Add a `PRODUCT-CONTEXT.md` with the full canonical product model: execution truth, Hindsight binding, temporal facts, sessions/context, profiles/skills/cron, receipts, migration, recovery, rollback, and the honest boundary between shipped, installed, and planned functionality.
- Keep all product copy aligned with the runtime repository's README, ARCHITECTURE, INSTALL, SECURITY, ROADMAP, and CHANGELOG.
- Add normal website CI and repository ignores. No deployment workflow.
- Run all site checks, responsive screenshots/audit, secret/PII scan, and verify no live-state artifacts are tracked.
- Create the private repository with `gh repo create idea-torx/mindOS-site --private` if absent, set origin, push the verified branch, and verify URL/visibility/commit through `gh`.
- Do not modify the separate `idea-torx/mindOS` runtime repository from this worker.
