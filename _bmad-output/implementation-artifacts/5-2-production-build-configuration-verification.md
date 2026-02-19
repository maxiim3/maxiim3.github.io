# Story 5.2: Production Build Configuration & Verification

Status: in-progress

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to access the live site at the GitHub Pages URL,
so that I can view the developer's portfolio.

## Acceptance Criteria

### 1. Astro Config Has Correct GitHub Pages Settings

**Given** the Astro config needs GitHub Pages settings
**When** I verify `astro.config.mjs`
**Then** the `site` URL is set to `https://maxiim3.github.io`
**And** no `base` path is configured (using root domain)
**And** the build output directory is `dist/` (default)

### 2. Production Build Succeeds Locally

**Given** the production build needs to succeed
**When** I run `bun run build` locally
**Then** the build completes in under 30 seconds (NFR18)
**And** no TypeScript errors occur
**And** all assets are generated correctly

### 3. Generated Site Is Fully Static

**Given** the generated site needs to be static
**When** I inspect the `dist/` output
**Then** it contains only static HTML, CSS, JS, and asset files
**And** no server-side code or API routes exist
**And** both `/index.html` (FR) and `/en/index.html` (EN) are generated

### 4. GitHub Pages Repository Settings Configured

**Given** GitHub Pages needs to be enabled
**When** I configure the repository settings
**Then** GitHub Pages is set to deploy from the `gh-pages` branch
**And** HTTPS is enforced

### 5. Live Site Is Accessible and Functional

**Given** the site needs to be accessible
**When** a visitor navigates to the GitHub Pages URL
**Then** the French site loads at the root URL (`https://maxiim3.github.io`)
**And** the English site loads at `/en/`
**And** all assets (CSS, fonts, PDFs, nostr.json) load correctly
**And** no CORS or mixed content errors occur

### 6. Performance Metrics Meet Targets

**Given** performance metrics need to be verified
**When** I run Lighthouse on the deployed site
**Then** Performance score is > 90 on mobile (NFR1)
**And** First Contentful Paint is < 1 second (NFR2)
**And** Total page weight is < 200KB excluding PDFs (NFR3)
**And** Accessibility score is 100 (AAA compliance)

## Tasks / Subtasks

- [x] Task 1: Verify Astro config is correct (AC: #1)
  - [x] 1.1 Confirm `site: 'https://maxiim3.github.io'` in `astro.config.mjs`
  - [x] 1.2 Confirm no `base` path is set
  - [x] 1.3 Confirm `output` is default (static)

- [x] Task 2: Run local production build and verify output (AC: #2, #3)
  - [x] 2.1 Run `bun run build` — must complete without errors
  - [x] 2.2 Verify `dist/index.html` exists (French page)
  - [x] 2.3 Verify `dist/en/index.html` exists (English page)
  - [x] 2.4 Verify `dist/.well-known/nostr.json` exists
  - [x] 2.5 Verify `dist/cv/cv-fr.pdf` and `dist/cv/cv-en.pdf` exist
  - [x] 2.6 Verify `dist/fonts/` contains the Inter font file
  - [x] 2.7 Verify `dist/styles/base.css` and `dist/styles/styled.css` exist
  - [x] 2.8 Verify `dist/.nojekyll` exists
  - [x] 2.9 Verify no server-side or API files in output
  - [x] 2.10 Measure build time — must be < 30 seconds

- [ ] Task 3: Preview production build locally (AC: #5)
  - [ ] 3.1 Run `bun run preview` — server starts at localhost:4321
  - [ ] 3.2 Navigate to `/` — French site loads correctly
  - [ ] 3.3 Navigate to `/en/` — English site loads correctly
  - [ ] 3.4 Verify CSS toggle works (raw → styled → raw)
  - [ ] 3.5 Verify keyboard shortcuts work (1-5, t, l, ?)
  - [ ] 3.6 Verify CV download links work
  - [ ] 3.7 Verify language switch navigates between FR/EN
  - [ ] 3.8 Verify all links section (GitHub, LinkedIn, email) works

- [ ] Task 4: Push to main and trigger deployment (AC: #4)
  - [ ] 4.1 Merge `v2` branch into `main` (or push to `main`)
  - [ ] 4.2 Verify GitHub Actions workflow triggers and completes green
  - [ ] 4.3 Verify `gh-pages` branch is updated

- [ ] Task 5: Configure GitHub Pages settings (AC: #4) — manual
  - [ ] 5.1 Go to `https://github.com/maxiim3/maxiim3.github.io/settings/pages`
  - [ ] 5.2 Set source to "Deploy from a branch"
  - [ ] 5.3 Select branch `gh-pages`, folder `/root`
  - [ ] 5.4 Confirm HTTPS is enforced
  - [ ] 5.5 Wait 1-2 minutes for DNS propagation

- [ ] Task 6: Verify live site (AC: #5, #6)
  - [ ] 6.1 Navigate to `https://maxiim3.github.io` — French site loads
  - [ ] 6.2 Navigate to `https://maxiim3.github.io/en/` — English site loads
  - [ ] 6.3 Verify all CSS, fonts, and assets load (no 404s in console)
  - [ ] 6.4 Verify CSS toggle works on live site
  - [ ] 6.5 Verify CV PDF downloads work
  - [ ] 6.6 Verify `.well-known/nostr.json` is accessible with CORS headers
  - [ ] 6.7 Run Lighthouse audit on mobile — Performance > 90
  - [ ] 6.8 Run Lighthouse audit — Accessibility = 100
  - [ ] 6.9 Check total page weight < 200KB (excluding PDFs)
  - [ ] 6.10 Verify FCP < 1 second on mobile

## Dev Notes

### Epic 5 Context

Story 5.2 is the second and final story in Epic 5 (Automated Deployment Pipeline). Story 5.1 created the GitHub Actions workflow file. This story verifies the entire deployment pipeline works end-to-end and the live site meets all production requirements.

**Epic 5 progression:**
- Story 5.1: GitHub Actions Deployment Workflow — `in-progress` (workflow file created, needs push to main)
- **Story 5.2: Production Build Configuration & Verification ← THIS STORY**

**FR coverage this story:**
- FR31: Site generates as fully static files
- FR32: Automatic deployment via GitHub Actions (verification)
- FR33: Site accessible at the GitHub Pages URL

**NFR coverage this story:**
- NFR1: Lighthouse Performance > 90 on mobile
- NFR2: FCP < 1 second
- NFR3: Page weight < 200KB (excluding PDFs)
- NFR4: No render-blocking resources in no-CSS state
- NFR13: Full functionality in Chrome, Firefox, Safari (latest 2 versions)
- NFR18: Build completes < 30 seconds

### Key Technical Facts — Read Before Implementing

#### 1. Project Root — NOT `/app`

The project is at the **root level** of the repository. The architecture doc mentions `/app` but all subsequent stories confirmed the migration to root. All config files (`astro.config.mjs`, `package.json`, `bun.lock`) are at repository root.

```
/  ← repository root = project root
├── astro.config.mjs
├── package.json
├── bun.lock
├── src/
├── public/
└── dist/  ← build output
```

#### 2. Astro Config — Already Correct

`astro.config.mjs` already has the correct settings:
```javascript
site: 'https://maxiim3.github.io',
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
  prefixDefaultLocale: false,
}
```

No `base` path. No explicit `output` (defaults to `'static'`). **No changes should be needed** — this task is verification, not creation.

#### 3. CSS Files Location — `public/styles/` NOT `src/styles/`

CSS files are at `public/styles/base.css` and `public/styles/styled.css`. They are static files copied verbatim to `dist/styles/` during build. This has been confirmed across ALL previous stories. The architecture doc mentions `src/styles/` but this was corrected early in implementation.

#### 4. Expected `dist/` Output Structure

```
dist/
├── index.html          ← French site (root)
├── en/
│   └── index.html      ← English site
├── .nojekyll           ← from public/.nojekyll
├── .well-known/
│   └── nostr.json      ← NIP-05 Nostr identity (Story 4.3)
├── cv/
│   ├── cv-fr.pdf       ← French CV (Story 4.1)
│   └── cv-en.pdf       ← English CV (Story 4.1)
├── fonts/
│   └── inter-var.woff2 ← Self-hosted Inter font (Story 1.3)
├── favicon.svg
├── favicon.ico
└── styles/
    ├── base.css        ← Render-blocking, @layer base
    └── styled.css      ← Lazy-loaded, @layer styled
```

#### 5. Branch Strategy

- `v2` branch: Current development branch (all work so far)
- `main` branch: Deployment trigger — GitHub Actions runs on push to `main`
- `gh-pages` branch: Auto-managed by `JamesIves/github-pages-deploy-action@v4`

The workflow only triggers on pushes to `main`. To deploy, `v2` must be merged into `main`.

#### 6. Story 5.1 Status

Story 5.1 created `.github/workflows/deploy.yml` and is marked `in-progress`. The workflow file exists but has not been pushed to `main` yet (all work is on `v2`). Story 5.2 includes the actual push/merge to trigger the first deployment.

#### 7. This Is Mostly a Verification Story

Unlike previous stories that create new files and components, this story is primarily about:
1. **Verifying** existing configuration is correct
2. **Running** the build locally and inspecting output
3. **Pushing** to `main` to trigger deployment
4. **Configuring** GitHub Pages settings (manual, in browser)
5. **Testing** the live site meets performance/accessibility targets
6. **Fixing** any issues found during verification

Only create or modify files if issues are found during verification. Do NOT add features or refactor code.

### Project Structure Notes

**Files to VERIFY (no changes unless issues found):**
```
astro.config.mjs          ← site URL, i18n config
package.json              ← build script
.github/workflows/deploy.yml  ← CI/CD pipeline (created in 5.1)
public/.nojekyll           ← Prevents Jekyll processing
public/.well-known/nostr.json  ← NIP-05 identity
public/styles/base.css     ← Render-blocking CSS
public/styles/styled.css   ← Lazy-loaded CSS
public/cv/cv-fr.pdf        ← French CV
public/cv/cv-en.pdf        ← English CV
public/fonts/              ← Inter variable font
```

**Files to INSPECT (build output):**
```
dist/                      ← Entire build output directory
```

**No new files should be created** unless a bug is found during verification.

### Architecture Compliance

| Rule | Compliance |
|------|------------|
| No new npm/bun dependencies | ✅ Verification only — no `package.json` changes |
| All CSS in public/styles/ | ✅ Verify during build output inspection |
| Static output only | ✅ Must confirm no SSR/API routes in dist/ |
| Astro config correct | ✅ Already set — verify only |
| Build < 30 seconds | ✅ Previous build was ~393ms |
| TypeScript strict | ✅ Enforced by build — will fail on TS errors |

### Technical Requirements

#### Local Build Verification Commands

```bash
# Clean build
bun run build

# Verify output structure
ls -la dist/
ls -la dist/en/
ls -la dist/.well-known/
ls -la dist/cv/
ls -la dist/styles/
ls -la dist/fonts/

# Check page weight (excluding PDFs)
du -sh dist/ --exclude='*.pdf'

# Preview locally
bun run preview
# Then navigate to http://localhost:4321 and http://localhost:4321/en/
```

#### Deployment Commands

```bash
# Merge v2 into main (from v2 branch)
git checkout main
git merge v2
git push origin main

# Or if preferred, push current branch as main
git push origin v2:main
```

#### Post-Deployment Verification

```bash
# Check live site (after GitHub Pages propagation)
curl -sI https://maxiim3.github.io | head -20
curl -sI https://maxiim3.github.io/en/ | head -20
curl -s https://maxiim3.github.io/.well-known/nostr.json | head -5

# Verify CORS headers on nostr.json
curl -sI https://maxiim3.github.io/.well-known/nostr.json | grep -i 'access-control'
```

#### Lighthouse Audit

Run Lighthouse in Chrome DevTools (Incognito, mobile simulation):
1. Navigate to `https://maxiim3.github.io`
2. Open DevTools → Lighthouse tab
3. Select: Mobile, Performance + Accessibility + Best Practices + SEO
4. Run audit
5. Targets: Performance > 90, Accessibility = 100, FCP < 1s

### Library & Framework Requirements

**No new dependencies.** This story does not add any code — it verifies existing code works in production.

### Testing Requirements

**Pre-deployment (local):**
- `bun run build` completes without errors
- `dist/` contains all expected files (see structure above)
- `bun run preview` shows working site at localhost
- CSS toggle, keyboard shortcuts, language switch all work in preview

**Post-deployment (live):**
- Both language versions load at correct URLs
- All assets load (no 404s in browser console)
- CSS toggle animation works
- CV PDFs download correctly
- NIP-05 endpoint returns correct JSON with CORS headers
- Lighthouse: Performance > 90, Accessibility = 100

### Previous Story Intelligence

**From Story 5.1 (GitHub Actions Deployment Workflow):**
- `.github/workflows/deploy.yml` created with concurrency group, Bun cache, pinned `bun-version: "1.x"`
- Workflow uses `JamesIves/github-pages-deploy-action@v4` with `folder: dist`, `branch: gh-pages`
- Local build passed at ~393ms — well within 30s target
- Subtasks remaining from 5.1: push to main, enable Pages in settings, verify deployment
- Dev agent was Claude Opus 4.6

**From Story 4.3 (NIP-05):**
- `public/.nojekyll` exists — prevents GitHub Pages Jekyll processing
- `public/.well-known/nostr.json` exists with correct hex key and relays
- `scripts/verify-nip05.sh` exists for post-deploy NIP-05 verification
- CSS confirmed at `public/styles/` (NOT `src/styles/`)

**From Story 4.1 (CV Download):**
- `public/cv/cv-fr.pdf` and `public/cv/cv-en.pdf` exist
- CvDownload component uses `download` attribute on `<a>` tags

### Git Intelligence

**Recent commits (on v2 branch):**
- `50f0b6a` — `5.1` — GitHub Actions deploy workflow
- `38ea47e` — `4.3` — NIP-05 nostr.json, .nojekyll
- `919e903` — `4.2` — Professional links
- `33d172b` — `4.1` — CvDownload, PDFs
- `eb9242d` — `3.2, 3.3, add 6, story 4.1`

**Commit message pattern:** Short story number, e.g. `"5.1"`, `"4.3"`

**Branch status:** All work is on `v2`. Has never been merged to `main` yet. The first merge to `main` will trigger the first deployment.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 5.2: Production Build Configuration & Verification]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 5: Automated Deployment Pipeline]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure & Deployment]
- [Source: _bmad-output/planning-artifacts/architecture.md#Development Workflow]
- [Source: _bmad-output/planning-artifacts/architecture.md#Project Structure & Boundaries]
- [Source: astro.config.mjs — site, i18n config]
- [Source: package.json — build script, dependencies]
- [Source: .github/workflows/deploy.yml — CI/CD pipeline]
- [Source: _bmad-output/implementation-artifacts/5-1-github-actions-deployment-workflow.md — previous story context]

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4.6

### Debug Log References

### Completion Notes List

### File List

**Verified (no changes needed):**
- `astro.config.mjs` — site URL, i18n config, static output confirmed
- `.github/workflows/deploy.yml` — CI/CD pipeline confirmed
- `public/.nojekyll` — exists
- `public/.well-known/nostr.json` — exists
- `public/cv/cv-fr.pdf` — exists
- `public/cv/cv-en.pdf` — exists
- `public/fonts/inter-var.woff2` — exists (291KB)
- `public/styles/base.css` — exists
- `public/styles/styled.css` — exists

**Modified (code review fixes):**
- `src/layouts/Base.astro` — H1: localized title/description props; H2: anti-FOUC `is:inline`
- `src/components/CvDownload.astro` — M1: localized download link labels
- `src/components/KeyboardNav.astro` — M2: localized keyboard shortcuts overlay
- `src/pages/index.astro` — pass meta/locale props to Base, CvDownload, KeyboardNav
- `src/pages/en/index.astro` — pass meta/locale props to Base, CvDownload, KeyboardNav
- `_bmad-output/implementation-artifacts/sprint-status.yaml` — L1: epic-4 status corrected to done

### Senior Developer Review (AI)

**Date:** 2026-02-19
**Reviewer:** Claude Opus 4.6 (adversarial code review)

**Issues Found:** 3 High, 4 Medium, 1 Low
**Issues Fixed:** 2 High, 3 Medium, 1 Low
**Issues Deferred:** 1 High (H3 — font size exceeds NFR3, requires subsetting), 1 Medium (M3 — `<time>` datetime needs content type restructuring)

**H3 Note:** `inter-var.woff2` is 291KB alone. Total dist (excl. PDFs) is ~346KB, exceeding NFR3's 200KB target. Fix requires font subsetting tooling — outside scope of this verification story. Recommend addressing in a follow-up.
