# Story 5.1: GitHub Actions Deployment Workflow

Status: in-progress

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a developer,
I want commits to main to automatically build and deploy the site,
so that updates go live without manual deployment steps.

## Acceptance Criteria

### 1. GitHub Actions Workflow File Created

**Given** the GitHub Actions workflow needs to be created
**When** I create `.github/workflows/deploy.yml`
**Then** it triggers on push to `main` branch
**And** it uses `oven-sh/setup-bun` for Bun setup
**And** it installs dependencies with `bun install`

### 2. Build Runs Successfully in CI

**Given** the build process needs to run
**When** the workflow executes
**Then** it runs `bun run build` (which executes `astro build`)
**And** static files are generated in the `dist/` directory
**And** both French (`/index.html`) and English (`/en/index.html`) pages are built

### 3. Deployment to gh-pages Branch

**Given** deployment to GitHub Pages is required
**When** the build completes successfully
**Then** the workflow deploys the `dist/` directory to the `gh-pages` branch
**And** it uses `JamesIves/github-pages-deploy-action@v4` for deployment
**And** deployment only occurs if the build succeeds

### 4. Workflow Permissions Configured

**Given** the workflow needs proper permissions
**When** configuring the workflow
**Then** it has `contents: write` permission for deploying to gh-pages
**And** it has `pages: write` and `id-token: write` if using the official pages API

### 5. Build Failures Halt Deployment

**Given** build failures need to be caught
**When** the build fails (TypeScript errors, missing files, etc.)
**Then** the workflow fails and does NOT deploy
**And** the failure is visible in the GitHub Actions tab
**And** the live site remains at the previous working version

### 6. Repository GitHub Pages Settings Configured (Manual)

**Given** GitHub Pages needs to be enabled
**When** I configure the repository settings
**Then** GitHub Pages is set to deploy from the `gh-pages` branch (root)
**And** HTTPS is enforced (GitHub Pages default)

## Tasks / Subtasks

- [ ] Task 1: Create GitHub Actions workflow file (AC: #1, #2, #3, #4, #5)
  - [x] 1.1 Create `.github/workflows/` directory
  - [x] 1.2 Create `.github/workflows/deploy.yml` using template below
  - [x] 1.3 Verify workflow YAML syntax is valid (no indentation errors)
  - [ ] 1.4 Commit and push to trigger the workflow

- [ ] Task 2: Enable GitHub Pages in repository settings (AC: #6) — manual
  - [ ] 2.1 Go to `https://github.com/maxiim3/maxiim3.github.io/settings/pages`
  - [ ] 2.2 Set source to "Deploy from a branch"
  - [ ] 2.3 Select branch `gh-pages`, folder `/root`
  - [ ] 2.4 Click Save
  - [ ] 2.5 Confirm HTTPS is enforced (checkbox)

- [ ] Task 3: Verify deployment succeeds (post-push)
  - [ ] 3.1 Check GitHub Actions tab — workflow must show green ✅
  - [ ] 3.2 Verify `gh-pages` branch is created/updated with `dist/` content
  - [ ] 3.3 Confirm `https://maxiim3.github.io` loads the French site
  - [ ] 3.4 Confirm `https://maxiim3.github.io/en/` loads the English site
  - [ ] 3.5 Confirm all assets load (CSS, fonts, favicon, PDFs, nostr.json)

## Dev Notes

### Epic 5 Context

Story 5.1 is the first story in Epic 5 (Automated Deployment Pipeline). This story establishes the CI/CD pipeline that makes the site publicly accessible.

**Epic 5 progression:**
- **Story 5.1: GitHub Actions Deployment Workflow ← THIS STORY**
- Story 5.2: Production Build Configuration & Verification

**FR coverage this story:**
- FR31: Site generates as fully static files
- FR32: Automatic deployment via GitHub Actions
- FR33: Site accessible at the GitHub Pages URL

### Key Technical Facts — Read Before Implementing

#### 1. Project Root — NOT `/app`

The project is at the **root level** of the repository, not in `/app`. This was confirmed across all previous stories. The `astro.config.mjs`, `package.json`, and `bun.lock` are all at the repository root.

```
/  ← repository root = project root
├── astro.config.mjs
├── package.json
├── bun.lock
├── src/
├── public/
└── dist/  ← build output
```

The workflow must check out and build from the root — **no `working-directory` override needed.**

#### 2. Bun Version — Use `oven-sh/setup-bun@v2`

The official Bun GitHub Action is `oven-sh/setup-bun`. Use version `v2` (latest stable). Use `bun-version: latest` or pin to `1.x` for stability.

```yaml
- uses: oven-sh/setup-bun@v2
  with:
    bun-version: latest
```

Do NOT use `actions/setup-node` for Bun. They are different runtimes.

#### 3. Deployment Action — `JamesIves/github-pages-deploy-action@v4`

This is the standard branch-based deployment action. It:
- Creates the `gh-pages` branch if it doesn't exist
- Pushes only the `dist/` folder contents (not the full source)
- Automatically handles the `.nojekyll` file (but ours is already in `public/` so it'll be in `dist/`)
- Preserves HTTPS and custom domain settings

```yaml
- uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    branch: gh-pages
```

The `.nojekyll` file at `public/.nojekyll` (created in Story 4.3) is already present in `dist/` after build. The deploy action will include it automatically. No need to set `clean: false` or any special `.nojekyll` config.

#### 4. Permissions Required

For `JamesIves/github-pages-deploy-action@v4`, the workflow needs `contents: write` to push to the `gh-pages` branch:

```yaml
permissions:
  contents: write
```

This is set at the job level or workflow level.

#### 5. Build Output Verification

After `bun run build`, the `dist/` directory should contain:
```
dist/
├── index.html          ← French site (root)
├── en/
│   └── index.html      ← English site
├── .nojekyll           ← from public/.nojekyll
├── .well-known/
│   └── nostr.json      ← from public/.well-known/ (Story 4.3)
├── cv/
│   ├── cv-fr.pdf
│   └── cv-en.pdf
├── fonts/
│   └── inter-var.woff2
├── favicon.svg
├── favicon.ico
└── styles/             ← NOTE: CSS is in public/styles/ NOT src/styles/
    ├── base.css
    └── styled.css
```

**CRITICAL:** CSS files are at `public/styles/base.css` and `public/styles/styled.css` (not `src/styles/`). Confirmed across all previous stories. They are static files copied verbatim to `dist/styles/`.

#### 6. Branch Strategy

- `main` branch: Source code (trigger for CI)
- `gh-pages` branch: Deployed static site (auto-managed by the Action)
- Current development branch is `v2` (per git status) — the workflow triggers on `main`

**Note:** If development is on `v2`, push to `main` when ready to deploy. The workflow only triggers on `main`.

#### 7. `bun run build` Characteristics

- Runs `astro build` under the hood
- TypeScript errors fail the build (strict mode) — this is the safety gate
- Build time: target < 30 seconds (NFR18)
- No external API calls during build (pure static)
- Generates both FR and EN pages due to Astro i18n config

### Complete Workflow YAML

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

# Allow the job to push to gh-pages branch
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Build site
        run: bun run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

This is the complete, minimal, correct workflow. Do not add caching, environment variables, or other complexity unless explicitly needed.

### Project Structure Notes

**Files to CREATE:**
```
.github/
  workflows/
    deploy.yml    ← NEW (the GitHub Actions workflow)
```

**Files already in place (no changes needed):**
- `astro.config.mjs` — `site: 'https://maxiim3.github.io'` already configured ✅
- `package.json` — `build: "astro build"` script exists ✅
- `public/.nojekyll` — created in Story 4.3, prevents Jekyll processing ✅
- `public/.well-known/nostr.json` — created in Story 4.3 ✅
- `public/cv/cv-fr.pdf`, `public/cv/cv-en.pdf` — from Story 4.1 ✅

**Repository settings (manual action):**
- GitHub Pages → Source: "Deploy from a branch" → `gh-pages` / root

### Architecture Compliance

| Rule | Compliance |
|------|------------|
| No new npm/bun dependencies | ✅ GitHub Actions only — no `package.json` changes |
| All CSS in public/styles/ | N/A — no CSS changes |
| Flat component structure | N/A — no Astro components |
| Progressive enhancement | N/A — deployment config only |
| No server-side code | ✅ Static generation confirmed |
| `bun run build` succeeds | Must verify locally before committing workflow |
| TypeScript strict | ✅ Enforced by build — fails CI on TS errors |

### Technical Requirements

#### `bun run build` local pre-check

Before committing the workflow, verify the build passes locally:

```bash
bun run build
# Should complete without errors
# Check dist/ output:
ls dist/
ls dist/en/
ls dist/.well-known/
```

If the local build fails, **do not commit the workflow** — fix the build first. CI can only deploy what builds successfully.

#### First Deploy Sequence

1. Create `.github/workflows/deploy.yml`
2. `git add .github/workflows/deploy.yml`
3. `git commit -m "5.1"`
4. `git push origin main` (or merge v2 → main)
5. Watch Actions tab at `https://github.com/maxiim3/maxiim3.github.io/actions`
6. After green, enable Pages in repo settings (if not already done)
7. Wait 1-2 minutes for DNS propagation
8. Verify at `https://maxiim3.github.io`

### Library & Framework Requirements

**No new dependencies.** GitHub Actions are referenced by action name in the YAML — they are not npm packages and don't touch `package.json` or `bun.lock`.

### Testing Requirements

**Local pre-flight:**
```bash
bun install          # Ensure deps are clean
bun run build        # Verify build completes without errors
ls dist/index.html   # FR page exists
ls dist/en/index.html  # EN page exists
bun run preview      # Optional: verify locally at localhost:4321
```

**CI verification (post-push to main):**
1. GitHub Actions tab shows green workflow run
2. `gh-pages` branch contains the `dist/` content
3. `https://maxiim3.github.io` loads (may take 1-2 min after first deploy)
4. `https://maxiim3.github.io/en/` loads
5. CSS toggle, keyboard shortcuts, download links all functional

### Previous Story Intelligence

**From Story 4.3 (most recent, 2026-02-19):**
- CSS is at `public/styles/` (confirmed — NOT `src/styles/`)
- `public/.nojekyll` already exists — prevents Jekyll from blocking `.well-known/`
- `scripts/verify-nip05.sh` exists for post-deploy Nostr verification
- Build command: `bun run build`
- Commit pattern: short story number, e.g. `"5.1"` for this story
- Project root confirmed at repository root (not `/app`)

**From Story 4.1 (CV Download):**
- PDF files at `public/cv/cv-fr.pdf` and `public/cv/cv-en.pdf` — will be in `dist/cv/` after build

**From earlier stories:**
- `public/.nojekyll` absence caused potential issues with `.well-known/` — now fixed
- The deploy action creates `gh-pages` branch automatically if it doesn't exist
- GitHub Pages automatically adds `Access-Control-Allow-Origin: *` to all served files

### Git Intelligence

**Recent commits:**
- `38ea47e` — `4.3` — NIP-05 nostr.json, .nojekyll, verify script
- `919e903` — `4.2` — Professional links, touch targets
- `33d172b` — `4.1` — CvDownload component, PDFs
- `eb9242d` — `3.2, 3.3, add 6, story 4.1`

**Pattern to follow:**
- Commit message: `"5.1"`
- Current branch: `v2` — merge or push to `main` to trigger deployment

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 5.1: GitHub Actions Deployment Workflow]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 5: Automated Deployment Pipeline]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure & Deployment]
- [Source: _bmad-output/planning-artifacts/architecture.md#Development Workflow]
- [Source: astro.config.mjs — site: 'https://maxiim3.github.io', output: static (default)]
- [Source: package.json — "build": "astro build", runtime: bun]
- [Source: _bmad-output/implementation-artifacts/4-3-nip-05-self-hosted-nostr-identity.md — project root confirmed, .nojekyll exists]
- [Source: oven-sh/setup-bun — official Bun GitHub Action]
- [Source: JamesIves/github-pages-deploy-action@v4 — branch-based Pages deployment]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

### Completion Notes List

- Created `.github/workflows/deploy.yml` with exact template from Dev Notes
- YAML syntax validated via Python yaml parser
- Local `bun run build` succeeds — both `/index.html` (FR) and `/en/index.html` (EN) generated
- Build completes in ~393ms
- Subtask 1.4 (commit/push), Task 2 (manual GitHub Pages settings), and Task 3 (post-deploy verification) require user action
- **Code review fixes applied:**
  - Added `concurrency` group (`pages`, `cancel-in-progress: true`) to prevent parallel deploy race conditions
  - Added `actions/cache@v4` step caching `~/.bun/install/cache` keyed on `bun.lock` hash
  - Pinned `bun-version` to `"1.x"` (was `latest`) for build stability
  - Added comment explaining why `pages: write`/`id-token: write` are intentionally absent

### File List

- `.github/workflows/deploy.yml` — NEW (GitHub Actions deployment workflow)
