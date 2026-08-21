# MindOS site — product context

Canonical product model for the marketing/docs site, aligned with the runtime
repository (`idea-torx/mindOS`). The site never copies live state; this file
states what the product is so copy stays honest.

## What MindOS is

MindOS (Autopilot v2) is the durable local operating system for Hermes and
cooperating AI agents: a shared control plane for execution state, memory,
temporal facts, handoffs, receipts, recovery, and agent coordination. It is
the v2 evolution of IdeatorX Autopilot. Primary surface: Hermes Agent.
Execution core: SQLite-backed Autopilot. Semantic brain: Hindsight shared bank.

## Execution truth

Tasks with projects, priorities, statuses, next actions, dependency edges,
impact analysis, dispatch planning, and metrics. Work is claimed via live
leases carrying monotonic fencing epochs; heartbeats keep leases alive;
renew extends without status change; release hands back without consuming
retry budget. Seam conflicts (same worktree path or same branch within a
project) are refused at claim time. Completions require hash-sealed receipts
(0600 evidence files + sha256 in the audit trail).

## Hindsight binding

Hindsight remains the semantic brain through an explicit, provider-neutral
binding. SQLite is the single execution authority; Hindsight is never copied
into it as a second one. Unreachable Hindsight degrades honestly (recorded
`absent`), and execution truth continues uninterrupted.

## Temporal facts

A provenance-linked fact graph of evolving triples with validity windows:
ownership, priorities, superseded decisions, blockers. BM25 retrieval with
temporal hybrid rerank (`fact-assert`, `facts`, `search-facts`).

## Sessions / context / profiles / skills / cron

Session sources and archives, Claude memory archives with provenance, profile
declarations, skill definitions, and cron job definitions are first-class
brain surfaces covered by sealed inventories and migration.

## Receipts and audit

Every transition lands in a global hash-chained audit stream.
`verify-chain` recomputes the chain and reports tampering, with
checkpoint-based truncation detection. Audit events are digest-only where
values could be sensitive. The secret guard blocks/redacts credential-shaped
values in all free-text fields, with an explicit, audited override only.

## Migration

Dry-run-first manifests across nine source kinds (Autopilot, Hindsight
binding, temporal sidecar, Claude memory sync, memory archives, sessions,
profiles/skills, cron definitions), byte-immutability-proven reads, orphan
quarantine with provenance, rollback journal, idempotent re-runs, one-command
rollback to pre-import state.

## Recovery

Guarded stale-lease sweeps (mid-sweep claims skipped and reported),
idempotent killed-session `resume` with full recall bundles, cross-agent
handoffs with recall digests and lineage, doctor health checks including FTS5
drift detection via fts5vocab.

## Honest boundary: shipped vs installed vs planned

- **Shipped** (in the runtime repo with verify coverage): everything listed
  under Roadmap → Shipped (v1), per ROADMAP.md.
- **Installed**: machine-local installation state (leases, receipts, homes)
  lives outside the repository and is never committed or described as
  repository content.
- **Planned**: hourly control tower, cross-agent probe hardening, policy
  expansion, parallel-home install, packaging — see ROADMAP.md "Next".
  Nothing planned is claimed as done anywhere on the site.

## Licensing

Source-available under FSL-1.1-MIT; MIT after the applicable two-year change
date. Not OSI open source during the FSL restriction period. The runtime
repository's own licensing context is FSL-1.1-MIT for product code.
