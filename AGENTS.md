# Repository Guidelines

## Project Structure & Module Organization

This is a Bun-powered React 19 portfolio site with Tailwind CSS. Main application code lives in `src/`: `src/index.tsx` boots the app, `src/App.tsx` selects the active concept, `src/concepts/` contains page-level portfolio concepts, `src/components/` contains reusable UI pieces, `src/hooks/` contains React hooks, `src/lib/` contains utilities, and `src/data/portfolio.ts` holds localized portfolio content. Static assets live in `public/`, including CV PDFs, icons, manifest, and robots file. Build and runtime helpers are at the root: `build.ts`, `serve-prod.ts`, `bunfig.toml`, and `tsconfig.json`.

## Build, Test, and Development Commands

- `bun install`: install dependencies from `bun.lock`.
- `bun dev`: start the hot-reloading development server via `bun --hot src/index.tsx`.
- `bun run build`: produce a production bundle in `dist/`, copy `public/`, inject favicon and manifest links, and create GitHub Pages fallback files.
- `bun start`: run the app with `NODE_ENV=production`.

There is currently no dedicated `test` script in `package.json`; add one before introducing automated tests.

## Coding Style & Naming Conventions

Use TypeScript with strict compiler settings. Prefer functional React components, named exports for shared helpers, and the `@/*` path alias for imports from `src`. Keep component filenames kebab-case when they represent page concepts or reusable UI modules, for example `v4-monograph-stars.tsx` and `get-strict-context.tsx`. Use 2-space indentation, JSX with the React automatic runtime, and concise utility composition through `cn`/`clsx`/`tailwind-merge` where appropriate. Keep portfolio copy and localized strings in `src/data/portfolio.ts` instead of scattering text through components.

## Testing Guidelines

No testing framework is configured yet. For new behavior, prefer focused tests close to the code they cover, using `*.test.ts` or `*.test.tsx` naming. If adding UI or interaction tests, document the runner in `package.json` and update this guide with the command. At minimum, run `bun run build` before opening a PR to catch TypeScript and bundling issues.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, lower-friction messages such as `Update wording and projects`, `Update CV`, and `add nostr and footer link`. Keep commits focused and describe the user-visible change. Pull requests should include a short summary, screenshots or screen recordings for visual changes, notes for content updates, and any linked issue or task. Mention the commands you ran, especially `bun run build`.

## Security & Configuration Tips

Do not commit local secrets or generated build output. Treat `dist/` as disposable output from `bun run build`. Keep public-facing documents in `public/` and verify filenames referenced by links before release.

# Agent Operating Instructions

Before working on BMAD stories, read the relevant protocol in `.ai/protocols`.

## Default workflow

1. For story creation, follow `.ai/protocols/10-create-story.md`.
2. Before development, follow `.ai/protocols/20-story-quality-gate.md`.
3. For development, follow `.ai/protocols/30-dev-story.md`.
4. After implementation, follow `.ai/protocols/40-implementation-review.md`.
5. For token tracking, follow `.ai/protocols/90-token-measurement.md`.

## Stable project context

Read only what is relevant:

- `.ai/context/project.md`
- `.ai/context/architecture.md`
- `.ai/context/conventions.md`
- `.ai/context/commands.md`

## Hard rules

- Do not refactor unrelated code.
- Do not change public APIs unless explicitly required.
- Prefer the smallest working change.
- Always report assumptions.
- Always report validation commands run.
- If a story is unclear, stop before development and request story clarification.
