# mindOS-site — MindOS website & docs

Marketing site and documentation for **MindOS — Autopilot v2**, the durable
local operating system for Hermes and cooperating AI agents.

This repository is **website-only**. It is independent from the MindOS runtime
repository (`idea-torx/mindOS`), which owns the product: SQLite-backed
execution truth, Hindsight shared semantic memory binding, temporal facts,
leases, sealed receipts, handoffs, migration, recovery, and rollback. This repo
contains grounded explanatory content only — never live databases, receipts,
session archives, Hindsight exports, credentials, or machine-local state.

## Run locally

No dependencies, no build step:

```bash
cd site
python3 -m http.server 8741        # then open http://127.0.0.1:8741/
```

## Structure

- `site/index.html` — landing page (positioning, product model, architecture,
  workflow, recovery, vs-files+Git, security boundary, early-access CTA).
- `site/docs/` — documentation index + 13 sections with client-side search
  (`⌘K` or `/`), keyboard-navigable results.
- `site/assets/` — styles, JS (search/menu/mark animation), the sealed-ledger
  mark SVGs (canonical + small-size fallback + light/monochrome variants), and
  the generated `search-index.json`.
- `DESIGN.md` (under `site/`) — design tokens and the mark specification.
- `PRODUCT-CONTEXT.md` — canonical product model and the shipped/installed/
  planned honesty boundary.
- `CONTENT-SOURCES.md` — claim-by-claim source map into the runtime repo docs.

## Regenerating the docs search index

```bash
# index is generated from site/docs/*.html; see CONTENT-SOURCES.md
python3 tools/gen-search-index.py
```

## Checks

```bash
python3 tools/check-site.py         # link/route check (run from repo root)
```

## Licensing

Site content and code: FSL-1.1-MIT (MIT after the applicable two-year change
date), matching the runtime product's licensing context. MindOS itself is not
OSI open source during the FSL restriction period.
