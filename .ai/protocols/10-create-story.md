# BMAD Create Story Protocol

Use this protocol before creating a BMAD story.

## Purpose

Prepare, route, and measure a BMAD story creation task.

## Step 1 — Token baseline

Read `.ai/context/commands.md` and run the configured OpenCode stats command if it is available.

Default:

```bash
opencode stats --days 1 --models 10 --project ""
```

Record the result as `token_baseline`. If the command is unavailable or blocked, record `token_baseline: skipped` and continue.

## Step 2 — Read minimum required context

Read:

- `.ai/context/project.md`
- `.ai/context/architecture.md`
- `.ai/context/conventions.md`
- `.ai/context/commands.md`
- `.ai/protocols/00-router.md`

Do not read additional files unless clearly relevant.

## Step 3 — Pre-story complexity assessment

Classify the expected story using `.ai/protocols/00-router.md`.

Evaluate:

- number of domains affected
- number of files likely affected
- persistence impact
- auth / permission impact
- UI-only or business logic
- testability
- ambiguity level
- regression risk
- likely need for refactor
- whether acceptance criteria are already obvious

## Step 4 — Model recommendation

Return a recommendation before running BMAD.

Output:

```txt
Pre-story complexity:
Recommended model:
Recommended reasoning effort:
Story creation needs strong model: yes/no
Story must be reviewed before dev: yes/no
Dev can probably use cheaper model later: yes/no
Reason:
```

## Step 5 — Ask for confirmation

Do not run BMAD automatically unless the user explicitly asked for autonomous execution.

Ask for confirmation with the exact command that will be run.

## Step 6 — Create story

Run only a BMAD create-story command that is explicitly configured or provided by the user.

If no command is available, stop and ask for the exact command. Do not invent a default command.

## Step 7 — Token delta

Run the OpenCode stats command again if `token_baseline` was captured.

Default:

```bash
opencode stats --days 1 --models 10 --project ""
```

Compare against `token_baseline`. If measurement was skipped, report why.

## Step 8 — Final output

Return:

```txt
Story creation complete: yes/no
Complexity tier:
Model/effort used:
Token baseline:
Token final:
Approximate token delta:
Story path or ID:
Next required protocol: .ai/protocols/20-story-quality-gate.md
Risks:
```
