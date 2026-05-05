# Implementation Review Protocol

Use this protocol after BMAD development.

## Purpose

Review the implementation without redoing the work.

## Step 1 — Select review level

Use the Story Quality Gate and development output.

### L1 — Cheap review

Use for Tier 1 and simple Tier 2.

Check:

- diff too large?
- unrelated files changed?
- tests missing?
- obvious bug?
- acceptance criteria covered?
- validation commands run?

### L2 — Strong review

Use for Tier 2 with risk, Tier 3, failed validation, or unexpectedly large diff.

Check:

- business logic correctness
- state consistency
- edge cases
- maintainability
- hidden regressions
- test quality
- API compatibility
- UI behavior consistency

### L3 — Multi-agent review

Use only for Tier 4 or critical changes.

Suggested specialized reviewers:

- regression reviewer
- architecture reviewer
- security/auth reviewer
- test coverage reviewer

Do not use L3 for small or mechanical tasks.

## Step 2 — Read inputs

Read:

- generated story
- Story Quality Gate result
- implementation summary
- validation output
- changed files only

Do not reread the entire repository unless necessary.

## Step 3 — Review checklist

Inspect:

- acceptance criteria coverage
- unexpected file changes
- public API changes
- security-sensitive changes
- DB or migration changes
- state management effects
- tests added/updated
- validation results
- UI behavior requiring manual check
- rollback risks

## Step 4 — Verdict

Use one verdict:

- `ACCEPT`
- `ACCEPT WITH RISKS`
- `REQUEST CHANGES`
- `REJECT`

## Step 5 — Output format

Return:

```txt
Review verdict: ACCEPT / ACCEPT WITH RISKS / REQUEST CHANGES / REJECT
Review level used: L1 / L2 / L3

Main risks:
- ...

Required fixes:
- ...

Optional improvements:
- ...

Need human UI check: yes/no
Need human code review: yes/no
Need stronger model review: yes/no

Final recommendation:
- merge / continue / fix / rollback
```
