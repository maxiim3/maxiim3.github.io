# Token Measurement Protocol

Use this protocol to estimate token and cost usage for an agentic operation.

## Purpose

Measure approximate token/cost deltas before and after a workflow step.

## Fast method

Before the operation, run the configured aggregate command if available:

```bash
opencode stats --days 1 --models 10 --project ""
```

After the operation, run it again:

```bash
opencode stats --days 1 --models 10 --project ""
```

Compare the two outputs.

If the command is unavailable or blocked, skip measurement and report `measurement unavailable` with the reason.

## Caveat

This is an approximate method because `opencode stats --days 1` is aggregate-based. It may include other activity during the same time window.

## More precise method

If a session ID is available, export it:

```bash
opencode export <sessionID> --sanitize
```

Use the exported JSON to inspect session-level usage.

## Required output

Return:

```txt
Token measurement mode: aggregate / session export

Baseline:
- input tokens:
- output tokens:
- cache read tokens:
- cache write tokens:
- total tokens:
- cost:

Final:
- input tokens:
- output tokens:
- cache read tokens:
- cache write tokens:
- total tokens:
- cost:

Approximate delta:
- input tokens:
- output tokens:
- cache read tokens:
- cache write tokens:
- total tokens:
- cost:

Model breakdown:
- ...

Warning:
- normal / unusually high / measurement unreliable
```

## Interpretation rules

Flag as unusually high if:

- total token delta is much larger than comparable previous runs
- one model dominates usage unexpectedly
- output tokens are high because the agent produced excessive prose
- repeated tool calls suggest poor context routing
- several agents duplicated the same inspection work
