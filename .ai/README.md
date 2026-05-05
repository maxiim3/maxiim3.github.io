# Agentic BMAD Protocols

This folder contains a lightweight governance layer for BMAD-based agentic coding workflows.

The goal is to improve quality, reduce unnecessary token usage, and route each step to the right model/effort level.

## Intended workflow

1. Use `.ai/protocols/10-create-story.md` before creating a BMAD story.
2. Use `.ai/protocols/20-story-quality-gate.md` after story creation and before development.
3. Use `.ai/protocols/30-dev-story.md` to develop the story.
4. Use `.ai/protocols/40-implementation-review.md` after implementation.
5. Use `.ai/protocols/90-token-measurement.md` to estimate token/cost deltas.

## Files

- `AGENTS.md`: root-level instructions for Codex/OpenCode-style agents.
- `.ai/context/*`: project-specific context packs.
- `.ai/protocols/*`: executable playbooks for routing, story creation, dev, review, and token measurement.
- `.ai/templates/run-log.md`: optional manual log template for evals.

## Core principle

Do not use the strongest model by default.

Use strong models to resolve ambiguity, architecture, risk, and hidden complexity. Use smaller or faster models when the task is already well-scoped.
