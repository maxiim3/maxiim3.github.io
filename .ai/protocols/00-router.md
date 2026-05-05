# Protocol Router

Use this protocol before selecting a model, reasoning effort, or BMAD action.

## Goal

Classify the task and recommend the cheapest safe execution path.

## Step 1 — Identify task type

Choose exactly one:

- `story_creation`
- `story_quality_gate`
- `development`
- `implementation_review`
- `context_update`
- `token_measurement`

## Step 2 — Classify complexity tier

### Tier 1 — Mechanical

Use for:

- tests
- copy changes
- localized portfolio data updates
- public asset swaps with unchanged references
- small UI edits
- simple component extraction
- renaming
- repetitive migration
- documentation updates

Recommended model:

- fast / mini / normal
- low or medium reasoning

Review:

- L1 cheap review is usually enough.

### Tier 2 — Localized

Use for:

- bugfix in 1 to 4 files
- bounded UI feature
- simple integration
- isolated state change
- isolated API consumption
- route/static asset alignment
- metadata or linktree changes with public output impact

Recommended model:

- standard coding model
- medium or high reasoning

Review:

- L1 by default.
- L2 if validation fails or diff is larger than expected.

### Tier 3 — Cross-cutting

Use for:

- auth
- permissions
- database writes
- migrations
- real-time sync
- state architecture
- multi-domain changes
- build pipeline or deployment behavior
- localization model affecting all languages
- refactor affecting several areas

Recommended model:

- strong coding model
- high or extra high reasoning

Review:

- L2 strong review required.

### Tier 4 — Architectural / risky

Use for:

- unclear product behavior
- domain model change
- security-sensitive logic
- large refactor
- breaking API changes
- story with ambiguous acceptance criteria
- changes that may affect critical user journeys
- deployment strategy changes
- animation/performance changes that may affect first render

Recommended model:

- strongest available model
- extra high reasoning

Review:

- L2 required.
- L3 multi-agent review recommended for critical changes.

## Step 3 — Risk triggers

Upgrade complexity by one tier if any of these apply:

- auth or session handling
- RBAC or permission logic
- payment or billing logic
- database migrations
- destructive data operations
- privacy-sensitive data
- security-sensitive logic
- public API contract changes
- state management shared across screens
- changes across more than 5 files
- deletion of significant code
- unclear acceptance criteria
- changes to `build.ts`, `src/index.tsx`, public routing, CV links, OG metadata, or localized content structure
- UI changes affecting responsive layout, keyboard focus, or `prefers-reduced-motion`

## Step 4 — Output format

Return:

```txt
Task type:
Complexity tier:
Risk triggers:
Recommended model class:
Recommended reasoning effort:
Required protocol:
Review level required:
Can proceed now: yes/no
Reason:
```
