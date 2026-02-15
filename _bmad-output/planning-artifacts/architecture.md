---
stepsCompleted:
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
lastStep: 8
status: 'complete'
completedAt: '2026-02-15'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - docs/product-brief.md
  - _bmad-output/research/top-dev-websites-analysis.md
  - _bmad-output/brainstorming/brainstorming-session-2026-02-15.md
workflowType: 'architecture'
project_name: 'github-page'
user_name: 'Max'
date: '2026-02-15'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
33 FRs across 8 categories. The architectural weight is unevenly distributed:
- **Content Display (FR1-5):** Standard template rendering — no architectural complexity. Structured data → Astro components.
- **Bilingual Support (FR6-9):** MPA routing with content separation. Affects project structure (duplicate pages, shared layouts, content files per language).
- **CSS Toggle (FR10-14):** The core interactive island. Requires: View Transitions API integration, CSS loading/unloading mechanism, button state management, `prefers-reduced-motion` handling. Most architecturally significant feature.
- **Typography (FR15-16):** System font stack vs. self-hosted custom font. Tied to toggle state. Font loading strategy matters for performance budget.
- **Navigation (FR17-22):** Keyboard shortcut system is a second interactive island. Needs event listener management, focus management, help overlay. Must not conflict with browser/screen reader shortcuts.
- **Contact & Downloads (FR23-26):** Static links and PDF serving from `/public`. Zero complexity.
- **Accessibility (FR27-30):** WCAG AAA is the highest bar. Drives contrast ratios, focus indicators, landmark structure, aria-live regions (Phase 2).
- **Deployment (FR31-33):** Astro static generation + GitHub Actions. Well-documented path, low risk.

**Non-Functional Requirements:**
18 NFRs, with performance and accessibility being the most constraining:
- **Performance (NFR1-6):** <200KB page weight, <1s FCP, <300ms toggle transition, async font loading. These are achievable for a static site but require discipline — no CSS framework bloat, no unnecessary JS.
- **Accessibility (NFR7-12):** AAA contrast (7:1), 44px touch targets, 200% zoom support, visible focus indicators. Shapes every UI decision.
- **Compatibility (NFR13-15):** Latest 2 versions of Chrome/Firefox/Safari. View Transitions degrades gracefully. Site works without JS.
- **Maintainability (NFR16-18):** Content in structured data files, <30s build, new language = new content files only.

**Scale & Complexity:**

- Primary domain: Static front-end / web craft
- Complexity level: Low
- Estimated architectural components: ~8 (layout, content sections, CSS toggle island, keyboard nav island, bilingual routing, font loading, build pipeline, deployment)

### Technical Constraints & Dependencies

- **Astro 5** as framework (decided in PRD)
- **Bun** as package manager and build tool (not npm/node)
- **GitHub Pages** as hosting target (static files only, no server-side)
- **GitHub Actions** for CI/CD pipeline
- **Self-hosted fonts** from `/public/fonts/` (no external CDN)
- **PDF CVs** served statically from `/public`
- **No backend in Phase 1** — Phase 2 introduces Railway SSE for visitor counter
- **View Transitions API** — no polyfill, progressive enhancement only

### Cross-Cutting Concerns Identified

- **Bilingual content management** — Every content section exists in FR and EN. Content structure must enforce parity between languages.
- **Progressive enhancement** — Affects toggle, navigation, typography, and layout. The raw state must be intentional, not broken.
- **Performance budget** — 200KB ceiling touches font loading, CSS size, image decisions, and JS island size.
- **Accessibility (AAA)** — Contrast, focus, landmarks, and keyboard navigation affect every visible component.
- **Toggle state coherence** — CSS toggle affects typography, layout, button appearance, and potentially dark mode (Phase 2). State must propagate consistently.

## Starter Template Evaluation

### Primary Technology Domain

Static front-end / web craft — Astro 5 MPA with client-side islands for interactive features.

### Starter: Existing Astro "Basics" Template (Already Initialized)

The project is already scaffolded at `/app` using the Astro basics starter with Bun.

**Current State:**
- Astro 5.17.1 with TypeScript strict
- Default project structure (assets, components, layouts, pages)
- Empty `astro.config.mjs` — no integrations, no site URL, no output config yet
- Default Welcome component and Layout — will be replaced entirely

**Architectural Decisions Provided by Starter:**

- **Language & Runtime:** TypeScript strict mode, ES modules (`"type": "module"`)
- **Styling Solution:** None — vanilla CSS only. Correct for this project (progressive enhancement, no CSS framework)
- **Build Tooling:** Astro's built-in Vite pipeline, Bun as package manager
- **Testing Framework:** None — to be decided
- **Code Organization:** `src/pages/` file-based routing, `src/components/`, `src/layouts/`
- **Development Experience:** Astro dev server with HMR

**What Still Needs Configuration:**
- `site` URL for GitHub Pages
- `output` mode (static is default — correct)
- `base` path if deployed to subdirectory
- View Transitions integration
- Bilingual routing structure (`/` FR, `/en/` EN)
- Content data files location and format

**Rationale:** The basics starter is the right choice. Third-party templates (AstroWind, Astroship, etc.) all bundle Tailwind CSS and opinionated layouts — directly conflicting with the progressive enhancement identity of this project. A clean slate is exactly what's needed.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
1. CSS Toggle Mechanism — CSS Layers with lazy loading
2. Content Data Format — TypeScript files
3. Bilingual Routing — Astro native i18n
4. GitHub Pages Base Path — Root domain

**Important Decisions (Shape Architecture):**
5. Font Loading Strategy — Preload + font-display: swap
6. Toggle Button Readiness — Disabled until styled CSS loaded

**Deferred Decisions (Post-MVP):**
- Dark mode implementation (Phase 2)
- SSE visitor counter architecture (Phase 2)
- Additional language routing for Serbian (Phase 3)

### Frontend Architecture

**CSS Toggle Mechanism: CSS Layers + Lazy Loading + Button Gate**
- `@layer base, styled;` — base always applies, styled gated behind `html[data-styled]`
- `base.css` is render-blocking (<1KB) — structural resets, base typography
- `styled.css` loaded non-render-blocking via `media="print" onload="this.media='all'"`
- Toggle button starts disabled, enabled via `load` event on styled CSS
- View Transitions API triggers radial animation on `[data-styled]` swap
- `prefers-reduced-motion` → instant swap, no animation
- Rationale: Zero toggle latency, true progressive enhancement, Lighthouse-optimal FCP

**Content Data Format: TypeScript Files**
- Shared `Content` interface enforces FR/EN parity at compile time
- `src/content/fr.ts` and `src/content/en.ts` export typed content objects
- No parsing dependency, full intellisense, compiler catches missing translations
- Adding a language = new `.ts` file conforming to the interface (NFR17)
- Rationale: Type safety, zero runtime cost, natural for a TS-strict project

**Font Loading Strategy: Preload + Swap**
- `<link rel="preload" as="font" href="/fonts/[font].woff2" crossorigin>` in `<head>`
- `font-display: swap` in styled CSS `@font-face`
- Font downloads during idle time alongside styled CSS
- When toggle fires, font is already cached — zero visual flash
- Rationale: Invisible preload within 200KB budget, instant styled state

**Bilingual Routing: Astro Native i18n**
- `i18n` config in `astro.config.mjs`: `defaultLocale: 'fr'`, `locales: ['fr', 'en']`
- FR at `/`, EN at `/en/`
- Single page templates, content resolved by locale
- Prepares for Phase 3 Serbian (`/sr/`, `/sr-cyrl/`) without structural changes
- `hreflang` tags handled by Astro i18n utilities
- Rationale: Framework-native, future-proof, DRY templates

### Infrastructure & Deployment

**GitHub Pages: Root Domain**
- `site: 'https://<username>.github.io'` in Astro config
- No `base` path needed — clean URLs
- Static output via `astro build` (default output mode)
- GitHub Actions workflow for automated build → deploy to `gh-pages` branch
- Rationale: Cleanest URL structure, no path prefixing complexity

### Decision Impact Analysis

**Cross-Component Dependencies:**
- CSS layers → font loading (font rules live in styled layer)
- i18n routing → content files (locale determines which TS file to import)
- Lazy CSS loading → toggle button (button gated on CSS load event)
- View Transitions → CSS toggle (animation wraps the `[data-styled]` swap)

## Implementation Patterns & Consistency Rules

### Naming Patterns

**File Naming:**
- Astro components: PascalCase — `CssToggle.astro`, `KeyboardNav.astro`, `SkillsList.astro`
- TypeScript files: kebab-case — `content-types.ts`, `fr.ts`, `en.ts`
- CSS files: kebab-case — `base.css`, `styled.css`
- Directories: kebab-case — `src/components/`, `src/content/`, `src/layouts/`

**Code Naming:**
- Variables/functions: camelCase — `isStyled`, `toggleCss()`, `getCurrentLocale()`
- CSS custom properties: kebab-case with prefix — `--cv-color-text`, `--cv-font-body`
- Data attributes: kebab-case — `data-styled`, `data-section`

### CSS Conventions

- Layer order: `@layer base, styled;` — declared once in `base.css`
- Base layer selectors: Plain element selectors + minimal utility classes — `h1`, `a`, `.skip-link`
- Styled layer selectors: Always scoped under `html[data-styled]` — `html[data-styled] h1`
- No BEM, no CSS modules — selectors stay simple for a site this size
- Custom properties: Defined in `:root` for base, overridden in `html[data-styled]` for styled state
- No `!important` — layers handle specificity

### Component Organization

Flat structure — project is small enough that feature folders add noise:

```
src/
  components/
    CssToggle.astro       # Toggle button island
    KeyboardNav.astro     # Keyboard shortcuts island
    Header.astro          # Header with lang switch
    Section.astro         # Reusable content section wrapper
    SkillsList.astro
    ExperienceList.astro
    ProjectsList.astro
    LinksList.astro
  content/
    types.ts              # Content interface
    fr.ts                 # French content
    en.ts                 # English content
  layouts/
    Base.astro            # Single layout for all pages
  pages/
    index.astro           # FR page
    en/
      index.astro         # EN page
  styles/
    base.css              # Render-blocking, @layer base
    styled.css            # Lazy-loaded, @layer styled
```

### Content TypeScript Structure

```typescript
// types.ts — single source of truth
interface Content {
  meta: { title: string; description: string; lang: string }
  links: Array<{ label: string; url: string; icon?: string }>
  skills: { expertise: string[]; experience: string[]; curiosity: string[] }
  experience: Array<{ role: string; company: string; period: string; description: string }>
  projects: Array<{ name: string; url: string; description: string }>
  cv: { label: string; href: string }
}
```

Compiler enforces parity — if you add a field in `types.ts`, both `fr.ts` and `en.ts` must implement it.

### Accessibility Patterns

- Every page: `<html lang="fr">` or `<html lang="en">` — set by i18n
- Landmarks: `<header>`, `<main>`, `<nav>`, `<footer>` — no ARIA roles duplicating native semantics
- Headings: Strict hierarchy — one `<h1>` per page, sections use `<h2>`, subsections `<h3>`
- Skip link: First focusable element, always present: `<a href="#main" class="skip-link">`
- Focus indicators: Never `outline: none`. Custom visible focus style in base layer (works in both states)
- Toggle button: `<button>` (never `<div>`), `aria-pressed="true|false"`, `disabled` until styled CSS loaded
- Language switch: `<a>` to the other locale page (not a button — it's navigation)
- Keyboard shortcuts: Only active when no input/textarea focused. `?` overlay uses `role="dialog"` + focus trap

### Client-Side Script Patterns

- All scripts: `<script>` tags in Astro components (not external `.js` files) — Astro bundles them
- Progressive enhancement guard: Every script checks capability before acting
  ```typescript
  // Always guard View Transitions
  if (!document.startViewTransition) {
    // Instant fallback
  }
  ```
- No global state object — toggle state lives in the DOM (`data-styled` attribute on `<html>`)
- Event listeners: Added in component scripts, not in layout. Each island owns its listeners.

### Enforcement Guidelines

**All AI Agents MUST:**
- Follow file naming conventions exactly (PascalCase .astro, kebab-case everything else)
- Never write CSS outside the layer system
- Never use `!important`
- Always use semantic HTML elements before ARIA
- Always guard JS features with capability checks
- Never add dependencies without explicit discussion

## Project Structure & Boundaries

### Complete Project Directory Structure

```
app/
├── astro.config.mjs              # Astro config: site URL, i18n, integrations
├── tsconfig.json                 # TypeScript strict config
├── package.json                  # Bun scripts: dev, build, preview
├── bun.lock
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions: build → gh-pages
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   │   └── [custom-font].woff2   # Self-hosted font (styled state)
│   └── cv/
│       ├── cv-fr.pdf             # French CV
│       └── cv-en.pdf             # English CV
├── src/
│   ├── components/
│   │   ├── CssToggle.astro       # Toggle button island (client:load)
│   │   ├── KeyboardNav.astro     # Keyboard shortcuts island (client:load)
│   │   ├── Header.astro          # Name, title, lang switch, toggle
│   │   ├── Section.astro         # Reusable section wrapper with id/heading
│   │   ├── LinksList.astro       # GitHub, LinkedIn, email, networks
│   │   ├── SkillsList.astro      # Three-tier skills hierarchy
│   │   ├── ExperienceList.astro  # Professional experience timeline
│   │   ├── ProjectsList.astro    # Project links with descriptions
│   │   └── CvDownload.astro      # CV download buttons (FR/EN)
│   ├── content/
│   │   ├── types.ts              # Content interface (single source of truth)
│   │   ├── fr.ts                 # French content
│   │   └── en.ts                 # English content
│   ├── layouts/
│   │   └── Base.astro            # HTML shell: head, meta, CSS links, body
│   ├── pages/
│   │   ├── index.astro           # FR page (defaultLocale)
│   │   └── en/
│   │       └── index.astro       # EN page
│   └── styles/
│       ├── base.css              # @layer base — render-blocking, <1KB
│       └── styled.css            # @layer styled — lazy-loaded, gated by [data-styled]
└── dist/                         # Build output (gitignored)
```

### Architectural Boundaries

**Component Boundaries:**
- Layout (`Base.astro`) — Owns the HTML shell, `<head>`, CSS link strategy, font preload, meta tags. No content logic.
- Page (`index.astro`, `en/index.astro`) — Resolves locale, imports correct content file, passes data to components. No layout or styling logic.
- Content components (`SkillsList`, `ExperienceList`, etc.) — Pure display. Receive typed props, render semantic HTML. No data fetching, no side effects.
- Interactive islands (`CssToggle`, `KeyboardNav`) — Own their `<script>` tags and event listeners. Communicate via DOM attributes only (`data-styled` on `<html>`). No shared JS state.

**CSS Boundaries:**
- `base.css` — Reset, structural styles, skip-link, focus indicators, system font stack. Applies always.
- `styled.css` — Full design, custom font `@font-face`, colors, spacing, layout polish. Only applies when `html[data-styled]` is set.
- No component-scoped `<style>` in `.astro` files — all CSS lives in the two layer files for predictable cascade.

**Content Boundary:**
- `types.ts` is the contract. Components import the type, pages import the data.
- Content files (`fr.ts`, `en.ts`) export `Content` objects. No logic, no formatting, no HTML.
- Components handle presentation. Content files handle data.

### Requirements to Structure Mapping

| FR Category | Component(s) | Files |
|---|---|---|
| Content Display (FR1-5) | `Section`, `SkillsList`, `ExperienceList`, `ProjectsList`, `LinksList` | `src/components/*.astro` |
| Bilingual Support (FR6-9) | `Header` (lang switch), page routing | `src/pages/`, `src/content/`, `astro.config.mjs` |
| CSS Toggle (FR10-14) | `CssToggle` | `src/components/CssToggle.astro`, `src/styles/` |
| Typography (FR15-16) | `Base` layout (font preload) | `src/layouts/Base.astro`, `public/fonts/` |
| Navigation (FR17-22) | `KeyboardNav`, `Section` (ids) | `src/components/KeyboardNav.astro` |
| Contact & Downloads (FR23-26) | `LinksList`, `CvDownload` | `src/components/*.astro`, `public/cv/` |
| Accessibility (FR27-30) | All components + `Base` layout | Cross-cutting |
| Deployment (FR31-33) | GitHub Actions | `.github/workflows/deploy.yml` |

### Data Flow

```
Build time:
  astro.config.mjs (i18n) → pages resolve locale → import content/{lang}.ts → pass to components → static HTML

Client time:
  page loads → base.css (blocking) → HTML visible (raw state)
  → styled.css (lazy) + font (preload) load in background
  → CssToggle enables → user clicks
  → View Transition → html[data-styled] set → styled layer activates
  → KeyboardNav listens for shortcuts
```

### Development Workflow

- `bun run dev` — Astro dev server, HMR, both languages available at `/` and `/en/`
- `bun run build` — Static generation to `dist/`, both locale pages generated
- `bun run preview` — Preview production build locally
- Deploy: Push to `main` → GitHub Actions runs `bun run build` → deploys `dist/` to `gh-pages` branch

## Architecture Validation Results

### Coherence Validation ✅

All technology choices are compatible and mutually reinforcing. CSS layers work with lazy loading, Astro i18n handles bilingual routing natively, TypeScript content files integrate with Astro's build pipeline, and View Transitions API is used directly (not via Astro's navigation component).

**Correction applied:** No `<noscript>` styled CSS fallback. No-JS users see raw state by design — the `media="print"` trick handles this without a `<noscript>` tag. Without JS, `onload` never fires, styled CSS stays `media="print"` (print-only).

**View Transitions clarification:** Use `document.startViewTransition()` raw browser API for same-page CSS toggle. Astro's `<ViewTransitions />` component is for page navigation — not applicable here.

### Requirements Coverage ✅

All 33 functional requirements and 18 non-functional requirements have explicit architectural support. No gaps found.

### Implementation Readiness ✅

- All critical decisions documented with rationale
- Implementation patterns comprehensive for project scope
- Project structure maps 1:1 to requirements
- Component boundaries clearly defined
- No ambiguity that would cause agent conflicts

### Architecture Completeness Checklist

- [x] Project context analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped
- [x] Critical decisions documented with rationale
- [x] Technology stack fully specified (Astro 5.17, TypeScript strict, Bun)
- [x] CSS architecture defined (layers + lazy loading + button gate)
- [x] Content architecture defined (TypeScript files + shared interface)
- [x] Routing architecture defined (Astro i18n)
- [x] Deployment architecture defined (GitHub Pages + Actions)
- [x] Naming conventions established
- [x] CSS conventions established
- [x] Accessibility patterns defined
- [x] Client-side script patterns defined
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Requirements to structure mapping complete
- [x] Data flow documented

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Progressive enhancement is architecturally enforced, not optional
- CSS layer system makes the raw/styled boundary impossible to violate accidentally
- TypeScript content interface prevents translation drift
- Zero external dependencies beyond Astro
- Every decision reinforces the project's identity

**Deferred to Phase 2+:**
- Dark mode toggle
- SSE visitor counter (Railway)
- Testing framework
- OG images per language
- Structured data / Person schema
- Serbian language support

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Refer to this document for all architectural questions
- Use `document.startViewTransition()` API directly, not Astro's `<ViewTransitions />` component
- All CSS in `base.css` or `styled.css` — no component-scoped styles
- Content files are data only — no HTML, no logic, no formatting
