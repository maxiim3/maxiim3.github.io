# Story Quality Gate

Use this protocol after BMAD story creation and before BMAD development.

## Purpose

Decide whether a generated story is ready for implementation.

No development should start if this gate fails.

## Step 1 — Read inputs

Read:

- the generated story
- `.ai/protocols/00-router.md`
- `.ai/context/project.md`
- `.ai/context/architecture.md`
- `.ai/context/conventions.md`
- `.ai/context/commands.md`

Read only relevant source files if needed to verify feasibility.

## Step 2 — Required story checks

The story must include:

- clear goal
- user-visible expected behavior
- non-goals
- acceptance criteria
- technical constraints
- likely affected areas
- validation commands
- edge cases
- risks or rollback notes if relevant
- explicit statement of what should not change
- public links/assets affected, if any
- localization impact for `en`, `fr`, and `sr-lat`, if any

## Step 3 — Blockers

Return `FAIL` if any of these are true:

- acceptance criteria are vague
- expected behavior is ambiguous
- story implies refactor but does not say so
- story touches auth, permissions, DB, or state without explicit constraints
- no validation command is provided
- validation command does not exist in `package.json` or `.ai/context/commands.md`
- UI behavior cannot be manually verified
- story mixes multiple unrelated goals
- success criteria depend on hidden assumptions
- the implementation scope is larger than the story title suggests

## Step 4 — Caution flags

Return `PASS WITH CAUTION` if any of these are true:

- more than 4 files likely affected
- shared state touched
- API contract touched
- tests are missing or hard to add
- feature touches critical user journey
- story touches CV links, public assets, OG metadata, `/linktree`, build output, or language switching
- story is clear but regression risk is non-trivial

## Step 5 — Dev complexity classification

Classify the implementation:

- Tier 1 — Mechanical
- Tier 2 — Localized
- Tier 3 — Cross-cutting
- Tier 4 — Architectural / risky

Use `.ai/protocols/00-router.md`.

## Step 6 — Output format

Return:

```txt
Story gate: PASS / PASS WITH CAUTION / FAIL

Dev complexity:
Recommended dev model:
Recommended reasoning effort:
Review required: yes/no
Review level: L1 / L2 / L3
Subagents required: yes/no

Reasons:
- ...

Required clarifications:
- ...

Safe next command:
<explicit BMAD dev command, if configured>
```

## Rule

If the gate is `FAIL`, do not run any BMAD development command.
