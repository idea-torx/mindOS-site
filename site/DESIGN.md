# MindOS site — design brief & tokens

## Positioning
MindOS (Autopilot v2) is the durable local operating system for Hermes and
cooperating AI agents. Audience: engineers and operators running autonomous
agent fleets who need execution truth, evidence, and recovery — not another
cloud SaaS brain.

## Visual language
Dark monochrome, Cursor-adjacent editorial restraint. Identity is MindOS:
quiet control-plane surfaces, real product concepts (leases, receipts,
handoffs, recovery rail, migration manifest), no neon, no gradients-as-brand.

### Tokens
```css
--bg:        #0a0a0b   /* near-black page */
--surface-1: #101012   /* graphite panel */
--surface-2: #16161a   /* raised card */
--border:    #232327   /* thin hairline */
--text:      #e8e8ea   /* off-white */
--text-dim:  #9a9aa2   /* secondary gray */
--text-faint:#5f5f66   /* tertiary */
--accent:    #7dd3a8   /* restrained sage-green (single purposeful accent) */
--accent-dim:#2c3a32   /* accent tint surface */
--danger:    #e07a6a   /* failure/recovery states only */
--radius: 10px; --radius-lg: 14px;
font: ui-sans-serif / Inter-like stack; weights 400/500 only.
code: ui-monospace stack.
```

### Rules
- Regular/medium weights; sentence case; no all-caps heroes, no wide tracking.
- Thin 1px borders on layered near-black surfaces; subtle depth via slightly
  lighter panels, not shadows-as-glow.
- One accent color used for status/links/focus rings only.
- Grid/diagram details echo the architecture layers (CLI → guarantees →
  SQLite home → migration).
- Focus-visible outlines in accent; contrast ≥ 4.5:1 body text.

## Content architecture
- `/` landing: positioning → problem → product model → architecture diagram →
  workflow (lease/receipt stream card) → recovery story → MindOS vs files+Git
  → license → waitlist CTA (no fake submission).
- `/docs/` index + 13 sections: getting-started, concepts, architecture,
  installation, migration, memory, tasks-and-receipts, agents-and-handoffs,
  recovery-and-rollback, security, cli-reference, faq, roadmap.
- Client-side search over a generated JSON index (title + headings + text),
  `⌘K` / `/` shortcut, keyboard navigable results.
- Every doc page links back to its repository source file.

## Content sources
See CONTENT-SOURCES.md. All copy grounded in README.md, ARCHITECTURE.md,
INSTALL.md, SECURITY.md, ROADMAP.md, CHANGELOG.md, STABILITY.md of this repo.

## Mark — the sealed ledger

Canonical 32×32 SVG, grid unit u=2, even coordinates, fills only (no strokes,
gradients, or shadows): three tapering strata (widths 22→18→14, each inset 2u
per side, 3.5u vertical gaps) plus a 6×6 accent seal square resting on the top
stratum's upper edge, right-aligned (right edge flush with stratum 3).

- Files: `assets/mindos-mark.svg` (canonical dark), `mindos-mark-16.svg`
  (≤20px fallback: two strata + seal), `mindos-mark-light.svg`,
  `mindos-mark-mono.svg` (all `#e8e8ea` dark / `#17171a` light when color is
  unavailable).
- Favicon: 32×32 tile `rx=7 fill #101012` with the small fallback scaled 0.75
  and centered, as a data URI.
- Colors: only token colors — strata `#9a9aa2`/`#e8e8ea`/`#7dd3a8`; light
  variant swaps to `#55555c`/`#17171a`; accent unchanged.
- Placement: header/nav 22px small-fallback form + "MindOS" text (mark never
  the sole name carrier); hero canonical mark at 28px above the kicker,
  left-aligned (hero stays typographic); docs nav identical; diagrams use the
  monochrome mark once max, as the CLI layer's origin node; footer 18px small
  form in `--text-faint` left of the license line; OG card `#0a0a0b` with the
  canonical mark at 96px on a 48px safe margin.
- Clear space: ≥ one stratum gap (≈3.5u, ~11% of mark size) on all sides.
  Minimum size 16px; below that, favicon form only.
- Motion: the only sanctioned animation is the seal-settle on `.mark-animated`
  renders >22px — strata fade in staggered 60ms apart (opacity-only), the seal
  starts 2px high and settles over 240ms `ease-out`. Marks ≤22px
  (`.mark-static`) never animate. `prefers-reduced-motion: reduce` renders
  fully settled, opacity 1, zero transforms.

