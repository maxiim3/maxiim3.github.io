# BMAD Dev Story Protocol

Use this protocol to implement a BMAD story.

## Purpose

Develop the story with the smallest safe implementation and measurable validation.

## Step 1 — Token baseline

Read `.ai/context/commands.md` and run the configured OpenCode stats command if it is available.

Default:

```bash
opencode stats --days 1 --models 10 --project ""
```

Record the result as `token_baseline`. If the command is unavailable or blocked, record `token_baseline: skipped` and continue.

## Step 2 — Read story quality gate

Before development, read the latest Story Quality Gate result.

If the gate is `FAIL`:

- do not run development
- explain what must be fixed first

If the gate is `PASS WITH CAUTION`:

- proceed only with conservative implementation
- avoid refactor
- report risks clearly

If the gate is `PASS`:

- proceed normally within the story scope

## Step 3 — Read minimum context

Read:

- the story
- latest Story Quality Gate result
- `.ai/context/conventions.md`
- `.ai/context/commands.md`

Read additional source files only if needed.

## Step 4 — Development constraints

Follow these rules:

- implement only the story
- avoid opportunistic cleanup
- avoid broad refactors
- preserve existing conventions
- prefer minimal diff
- add or update tests only where relevant
- do not change public APIs unless required by the story
- do not silently change behavior outside the acceptance criteria
- do not mark work complete without validation

## Step 5 — Execute BMAD development

Run only a BMAD dev-story command that is explicitly configured or provided by the user.

If no command is available, stop and ask for the exact command. Do not invent a default command.

## Step 6 — Validate

Run the smallest relevant validation commands from `.ai/context/commands.md`.

Typical examples:

```bash
bun run build
```

Only run commands that exist in the project.

If validation fails:

- inspect the failure
- fix only what is needed
- rerun the relevant command
- report remaining failures if not fixable within scope

## Step 7 — Token delta

Run the OpenCode stats command again if `token_baseline` was captured.

Default:

```bash
opencode stats --days 1 --models 10 --project ""
```

Compare against `token_baseline`. If measurement was skipped, report why.

## Step 8 — Output format

Return:

```txt
Implementation complete: yes/no
Story ID/path:
Complexity tier:
Model/effort used:

Summary:
- ...

Files changed:
- ...

Validation:
- command: result

Token baseline:
Token final:
Approximate token delta:

Remaining risks:
- ...

Recommended review level: L1 / L2 / L3
Next required protocol: .ai/protocols/40-implementation-review.md
```
