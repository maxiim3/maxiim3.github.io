# Story 3.1: Table of Contents with Anchor Navigation

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to see a table of contents and jump to any section,
So that I can quickly navigate to the information I need.

## Acceptance Criteria

### ToC Section Listing

**Given** the table of contents needs to be created
**When** I add a ToC component to the page
**Then** it lists all main sections: Links, Skills, Experience, Projects, CV
**And** each ToC item is an anchor link (`<a href="#section-id">`)
**And** the links work in both raw and styled states

### Section Linkability

**Given** sections need to be linkable
**When** I verify the Section component
**Then** each section already has a unique `id` attribute (no changes needed — already implemented in Story 1.4)
**And** the IDs match the ToC anchor links: `#links`, `#skills`, `#experience`, `#projects`, `#cv`
**And** clicking a ToC link scrolls to the corresponding section

### ToC Accessibility

**Given** the ToC needs to be accessible
**When** I render the ToC
**Then** it uses semantic navigation markup (`<nav>`)
**And** it has `aria-label` matching the current language ("Table des matières" in FR, "Table of contents" in EN)
**And** it's keyboard navigable (tab through links with visible focus indicators)

### Smooth Scrolling with Reduced Motion Fallback

**Given** smooth scrolling may be desired
**When** a visitor clicks a ToC link in styled state
**Then** the browser scrolls smoothly to the target section
**And** the URL hash updates to reflect the current section
**And** `prefers-reduced-motion: reduce` users get instant jump (no smooth scroll)
**And** in raw state (no `data-styled`), scroll behavior is browser default

## Tasks / Subtasks

- [x] Task 1: Create `TableOfContents.astro` component (AC: ToC Section Listing, ToC Accessibility)
  - [x] 1.1 Create `src/components/TableOfContents.astro` with `lang` prop (type: `string`)
  - [x] 1.2 Define bilingual ToC items array based on `lang` ('fr' | other → 'en')
  - [x] 1.3 Render `<nav class="toc" aria-label={ariaLabel}>` wrapping an `<ol>`
  - [x] 1.4 Map items to `<li><a href="#id">label</a></li>` links
  - [x] 1.5 Verify component renders in both language contexts

- [x] Task 2: Integrate ToC into both page templates (AC: ToC Section Listing)
  - [x] 2.1 Import `TableOfContents` in `src/pages/index.astro` and `src/pages/en/index.astro`
  - [x] 2.2 Add `<TableOfContents lang={Astro.currentLocale || 'fr'} />` between `<Header>` and `<main>`
  - [x] 2.3 Verify ToC renders on FR and EN pages in dev server

- [x] Task 3: Add base CSS for ToC in `public/styles/base.css` (AC: ToC Section Listing, ToC Accessibility)
  - [x] 3.1 Add `.toc` selector inside `@layer base` with `margin-bottom: 1.5rem`
  - [x] 3.2 Override `.toc ol` to remove default list styles and add horizontal flex layout
  - [x] 3.3 Add `.toc a` styles for touch target compliance (min-height 44px)
  - [x] 3.4 Verify ToC is visible and functional in raw state

- [x] Task 4: Add styled CSS for ToC in `public/styles/styled.css` (AC: ToC Section Listing, Smooth Scrolling)
  - [x] 4.1 Add `html[data-styled] .toc` refinements inside `@layer styled`
  - [x] 4.2 Add `html[data-styled] { scroll-behavior: smooth; }` in `@layer styled`
  - [x] 4.3 Add `@media (prefers-reduced-motion: reduce)` override: `scroll-behavior: auto`
  - [x] 4.4 Verify smooth scroll activates in styled state, instant in raw state

- [x] Task 5: Testing and Validation (AC: all)
  - [x] 5.1 Test ToC renders on FR page (`/`) with French labels
  - [x] 5.2 Test ToC renders on EN page (`/en/`) with English labels
  - [x] 5.3 Test all 5 anchor links navigate to correct sections
  - [x] 5.4 Test URL hash updates on anchor click (browser default behavior)
  - [x] 5.5 Test keyboard Tab navigation through ToC links with visible focus ring
  - [x] 5.6 Test smooth scroll in styled state (no reduced motion preference)
  - [x] 5.7 Test instant jump in styled state with `prefers-reduced-motion: reduce` enabled
  - [x] 5.8 Test raw state: anchor links work (no smooth scroll — browser default)
  - [x] 5.9 Test with JS disabled — all ToC links still work (no JS required)
  - [x] 5.10 Run `bun run build` — zero TypeScript errors, both pages generated

## Dev Notes

### What This Story Adds

Story 3.1 opens Epic 3 (Enhanced Navigation & Keyboard Shortcuts). It is a **pure HTML + CSS story — no JavaScript required**. The ToC is static navigation using native browser anchor links.

**Epic 3 context:**
- **Story 3.1: Table of Contents with Anchor Navigation ← THIS STORY**
- Story 3.2: Keyboard Shortcuts System (1-5, t, l) — will build a `KeyboardNav.astro` island that uses section IDs from this story
- Story 3.3: Keyboard Shortcuts Help Overlay (`?` key) — extends the keyboard system

**FR coverage this story:**
- ✅ FR17: Visitor can navigate to any section via a table of contents ← **THIS STORY**
- ✅ FR22: Full keyboard navigation support (ToC links are keyboard-accessible)

**Important — no changes to Section.astro needed:** Section IDs (`links`, `skills`, `experience`, `projects`, `cv`) were established in Story 1.4 and are already correct. The ToC anchor links (`#links`, `#skills`, etc.) match these IDs exactly.

### Architecture Compliance

**From architecture.md — Component Organization:**

> Flat structure — project is small enough that feature folders add noise.
> All components in `src/components/`

**From architecture.md — CSS Conventions:**

> - No component-scoped `<style>` blocks in `.astro` files — all CSS in the two layer files
> - Base layer selectors: Plain element selectors + utility classes
> - Styled layer selectors: Always scoped under `html[data-styled]`

**From architecture.md — File Naming:**

> - Astro components: PascalCase — `TableOfContents.astro`

**From architecture.md — Accessibility Patterns:**

> - Landmarks: `<header>`, `<main>`, `<nav>`, `<footer>` — no ARIA roles duplicating native semantics
> - Focus indicators: Never `outline: none`. Custom visible focus style in base layer

**From architecture.md — Enforcement Guidelines:**

> - Follow file naming conventions exactly (PascalCase .astro)
> - Never write CSS outside the layer system
> - Always use semantic HTML elements before ARIA

| Rule | Compliance |
|------|------------|
| PascalCase Astro component | ✅ `TableOfContents.astro` |
| All CSS in `base.css` / `styled.css` | ✅ No `<style>` block in component |
| `<nav>` for navigation | ✅ Semantic `<nav aria-label="">` |
| No ARIA roles duplicating native semantics | ✅ `<nav>` is native, no `role="navigation"` needed |
| Focus indicators in base layer | ✅ Inherited from existing `:focus-visible` rule |
| Styled layer scoped under `html[data-styled]` | ✅ All styled selectors prefixed |
| No `!important` | ✅ CSS cascade and layers handle specificity |
| Smooth scroll with `prefers-reduced-motion` | ✅ Override to `auto` in media query |

### Technical Requirements — Complete Implementation

#### 1. `src/components/TableOfContents.astro` (NEW FILE)

```astro
---
/**
 * TableOfContents Component - Story 3.1
 * Static navigation with anchor links to all main content sections.
 * Bilingual: accepts lang prop for FR/EN label localization.
 * No JavaScript required — pure semantic HTML.
 */

interface Props {
  lang: string; // 'fr' or 'en'
}

const { lang } = Astro.props;

// Bilingual ToC items — IDs must match Section component id props in page templates
const tocItems = lang === 'fr'
  ? [
      { id: 'links', label: 'Liens' },
      { id: 'skills', label: 'Compétences' },
      { id: 'experience', label: 'Expérience' },
      { id: 'projects', label: 'Projets' },
      { id: 'cv', label: 'CV' },
    ]
  : [
      { id: 'links', label: 'Links' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'cv', label: 'CV' },
    ];

const ariaLabel = lang === 'fr' ? 'Table des matières' : 'Table of contents';
---

<nav class="toc" aria-label={ariaLabel}>
  <ol>
    {tocItems.map(item => (
      <li>
        <a href={`#${item.id}`}>{item.label}</a>
      </li>
    ))}
  </ol>
</nav>
```

**Why `<ol>` not `<ul>`:**
- Sections are ordered (1=Links, 2=Skills, etc.)
- Story 3.2 keyboard shortcuts 1-5 map to this same order
- An ordered list reinforces the 1–5 mental model for power users

**Why `lang` prop not `Astro.currentLocale` directly:**
- Follows the established pattern from `Header.astro` which also accepts `currentLocale` as a prop
- Explicit prop passing makes the component testable and reusable
- Aligns with architecture "Pages resolve locale, pass to components"

#### 2. Integration in `src/pages/index.astro` (MODIFY)

```astro
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import TableOfContents from '../components/TableOfContents.astro';
import Section from '../components/Section.astro';
import LinksList from '../components/LinksList.astro';
import SkillsList from '../components/SkillsList.astro';
import ExperienceList from '../components/ExperienceList.astro';
import ProjectsList from '../components/ProjectsList.astro';
import content from '../content/fr';
---

<Base>
  <Header currentLocale={Astro.currentLocale} />
  <TableOfContents lang={Astro.currentLocale || 'fr'} />

  <main id="main">
    <Section id="links" heading="Liens">
      <LinksList links={content.links} />
    </Section>
    <!-- ... rest unchanged ... -->
  </main>
</Base>
```

**Placement between Header and main:**
- UX spec: "Horizontal inline links in header area / Visible without scrolling on all viewports"
- Placing between `<header>` and `<main>` satisfies "visible without scrolling" and keeps it semantically independent from the main content
- The ToC `<nav>` is NOT inside `<main>` — it's a separate landmark at the same level
- This matches the landmark structure: `<header>` → `<nav class="toc">` → `<main>`

#### 3. Integration in `src/pages/en/index.astro` (MODIFY)

Same pattern with `lang={Astro.currentLocale || 'en'}`:

```astro
import TableOfContents from '../../components/TableOfContents.astro';
// ...
<TableOfContents lang={Astro.currentLocale || 'en'} />
```

#### 4. `public/styles/base.css` additions (MODIFY — inside `@layer base`)

Add AFTER the existing `.header-actions` block (after line ~89 in current file):

```css
/* Table of Contents Navigation */
.toc {
  margin-bottom: 1.5rem;
}

.toc ol {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.toc li {
  margin: 0;
}

.toc a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.25rem 0.75rem;
  text-decoration: underline;
}

.toc a:hover {
  text-decoration: none;
}
```

**Why these styles in base layer:**
- ToC must be functional and readable in raw state (no CSS toggle needed)
- Touch targets (44px) are accessibility requirements, always apply
- The `flex-wrap` ensures mobile-friendly wrapping
- `text-decoration: underline` in base ensures links are visually recognizable as links in raw state (browser default for `<a>` elements)

**Critical: The existing `ul, ol` reset in base.css (`margin: 0; padding: 0;`) already applies globally, but `.toc ol` explicitly resets `list-style` since the global reset doesn't handle that.**

#### 5. `public/styles/styled.css` additions (MODIFY — inside `@layer styled`)

Add AFTER the existing `html[data-styled] li` block (after line ~156 in current file):

```css
/* Table of Contents — Styled state */
html[data-styled] .toc {
  margin-bottom: var(--cv-space-xl);
  padding: var(--cv-space-md) 0;
  border-bottom: 1px solid var(--cv-color-border);
}

html[data-styled] .toc ol {
  gap: var(--cv-space-md);
}

html[data-styled] .toc a {
  color: var(--cv-color-accent);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.375rem 0.75rem;
  border-radius: 2px;
  transition: color 150ms ease-out;
}

html[data-styled] .toc a:hover {
  color: var(--cv-color-accent-hover);
  text-decoration: underline;
}

/* Smooth scroll — styled state only */
html[data-styled] {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html[data-styled] {
    scroll-behavior: auto;
  }
}
```

**Why `scroll-behavior: smooth` in styled layer only:**
- UX spec explicitly: "Section links: Smooth scroll behavior (`scroll-behavior: smooth` in styled layer)"
- Raw state intentionally uses instant jumps (browser default `auto`)
- This enforces the progressive enhancement principle: CSS brings the visual enhancement
- Architecture doc mandates: "Animations live exclusively in `@layer styled`. The raw layer has zero motion."

**Why `html[data-styled]` selector for `scroll-behavior`:**
- `scroll-behavior: smooth` on `html[data-styled]` correctly gates smooth scroll behind the CSS toggle
- When raw state (no `data-styled` attribute), `scroll-behavior` reverts to `auto` (browser default)
- `prefers-reduced-motion` override ensures instant scroll for sensitive users even in styled state

### Library & Framework Requirements

**NO new dependencies.** This story requires zero additional packages:
- Anchor links (`<a href="#id">`) — native HTML
- Smooth scrolling — CSS only (`scroll-behavior: smooth`)
- `prefers-reduced-motion` — CSS media query
- `<nav aria-label="">` — native HTML5

**Astro version:** Already using Astro 5.17.1 (from architecture.md). No upgrade needed.

**Build tooling:** `bun run build` — no changes to build process.

### File Structure Requirements

**Files to CREATE:**
```
src/
  components/
    TableOfContents.astro      # NEW — ToC component with bilingual labels
```

**Files to MODIFY:**
```
src/
  pages/
    index.astro                # MODIFY — Import + render TableOfContents
    en/
      index.astro              # MODIFY — Import + render TableOfContents

public/
  styles/
    base.css                   # MODIFY — Add .toc base styles inside @layer base
    styled.css                 # MODIFY — Add .toc styled styles + scroll-behavior
```

**Files NOT to modify:**
- `src/components/Section.astro` — Section IDs already correct from Story 1.4
- `src/layouts/Base.astro` — No changes needed
- `src/components/Header.astro` — ToC is a separate component, not in Header
- `src/components/CssToggle.astro` — No changes needed
- `src/content/fr.ts`, `src/content/en.ts` — ToC labels are hardcoded in the component (they mirror heading text, not content data)

**Sprint status to update:**
```
_bmad-output/
  implementation-artifacts/
    sprint-status.yaml         # UPDATE — epic-3: backlog → in-progress; 3-1-*: backlog → ready-for-dev
```

### Testing Requirements

**Manual Testing Checklist:**

1. **FR page (/):**
   - [ ] ToC renders with French labels: Liens, Compétences, Expérience, Projets, CV
   - [ ] `aria-label="Table des matières"` on `<nav>` element
   - [ ] All 5 anchor links have correct `href` attributes (#links, #skills, etc.)

2. **EN page (/en/):**
   - [ ] ToC renders with English labels: Links, Skills, Experience, Projects, CV
   - [ ] `aria-label="Table of contents"` on `<nav>` element

3. **Raw state (CSS toggle off):**
   - [ ] ToC visible without scrolling
   - [ ] All 5 anchor links work — clicking jumps to the section
   - [ ] URL hash updates (e.g., `/#skills`) on click
   - [ ] Instant scroll (browser default, no smooth scroll)
   - [ ] Links are underlined (browser default link appearance)

4. **Styled state (CSS toggle on):**
   - [ ] ToC styled with accent color, border bottom
   - [ ] Smooth scroll to sections (visible animation on click)
   - [ ] URL hash updates on click
   - [ ] Hover state: color change + underline

5. **Reduced motion (OS setting enabled):**
   - [ ] Styled state: ToC clicks produce instant jump (no smooth scroll)
   - [ ] Raw state: ToC clicks produce instant jump (unchanged)

6. **Keyboard navigation:**
   - [ ] Tab through all 5 ToC links with visible focus ring
   - [ ] Enter/Space on focused link navigates to section
   - [ ] Focus ring matches existing `:focus-visible` style from base.css

7. **No-JS (progressive enhancement):**
   - [ ] ToC renders and all 5 links work with JS disabled
   - [ ] No console errors with JS disabled

8. **Mobile (320px viewport):**
   - [ ] ToC links wrap to multiple lines if needed (`flex-wrap: wrap`)
   - [ ] All links are at least 44px touch targets

9. **Build:**
   - [ ] `bun run build` → zero TypeScript errors
   - [ ] Both `/index.html` and `/en/index.html` generated
   - [ ] ToC appears in generated HTML of both pages

**Why no unit tests needed:**
- Story 3.1 is pure static HTML + CSS — no JavaScript logic to test
- Integration verified via `bun run build` + manual browser testing
- Unit tests would start in Story 3.2 (keyboard event system)

### Previous Story Intelligence

**From Stories 1.4 and 1.5 (Section + Language):**
- Section.astro renders `<section id={id}>` — IDs `links`, `skills`, `experience`, `projects`, `cv` are confirmed in both page templates
- Language pattern: `Astro.currentLocale || 'fr'` is the safe fallback for FR page (where locale may be undefined per Astro i18n config with `defaultLocale: 'fr'`)

**From Story 2.3 (CssToggle — most recent completed):**
- Pattern confirmed: CSS files are in `public/styles/` (NOT `src/styles/`)
- All CSS added via Edit to the existing two layer files — not creating new CSS files
- `@layer base` block in `base.css`, `@layer styled` block in `styled.css`
- Component scripts via inline `<script>` — but Story 3.1 has NO script

**Git commit pattern observed:**
- Commit messages use short story ID format: `"2.3"`, `"1.5"`, `"1.4"`
- Commit for this story should follow: `"3.1"`

### Latest Technical Information

**`scroll-behavior` CSS property (February 2026):**

```css
/* Apply smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Disable for reduced motion users */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

**Browser support:** Universal (Chrome 61+, Firefox 36+, Safari 15.4+, Edge 79+)

**Our specific pattern (gated by CSS toggle):**
```css
/* In @layer styled — smooth scroll only when styled */
html[data-styled] {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html[data-styled] {
    scroll-behavior: auto;
  }
}
```

**Anchor link behavior:** Clicking `<a href="#skills">` scrolls to `<section id="skills">` and updates `window.location.hash` to `#skills`. This is native browser behavior — no JavaScript needed.

**`flex-wrap: wrap` for horizontal ToC on mobile:** Essential for small screens. Without it, ToC items overflow horizontally. The CSS `gap` property provides spacing between items on both axes when wrapped.

### Project Context Reference

**Current Sprint Status:**
- Epic 1: Foundation & Bilingual Content Display — ✅ COMPLETE (5 stories)
- Epic 2: CSS Toggle & Visual Transformation — ✅ COMPLETE (3 stories)
- **Epic 3: Enhanced Navigation & Keyboard Shortcuts — ⏳ STARTING**
  - **Story 3.1: Table of Contents with Anchor Navigation ← THIS STORY**
  - Story 3.2: Keyboard Shortcuts System (1-5, t, l) — NEXT
  - Story 3.3: Keyboard Shortcuts Help Overlay (?) — AFTER 3.2
- Epic 4: Downloads & Professional Contact — 📋 BACKLOG
- Epic 5: Automated Deployment Pipeline — 📋 BACKLOG

**FR Coverage after Story 3.1:**
- ✅ FR17: Navigate via table of contents ← **THIS STORY**
- ✅ FR22: Full keyboard navigation support (ToC is keyboard-accessible)

**Remaining Epic 3 FRs for Stories 3.2–3.3:**
- FR18: Jump to sections using keyboard shortcuts (1-5) → Story 3.2
- FR19: Toggle CSS via keyboard shortcut (t) → Story 3.2
- FR20: Switch language via keyboard shortcut (l) → Story 3.2
- FR21: View available shortcuts via keyboard shortcut (?) → Story 3.3

### Project Structure Notes

**Alignment with unified project structure:**

```
src/
  components/
    TableOfContents.astro  # NEW — follows flat structure, PascalCase naming
    CssToggle.astro        # UNTOUCHED
    Header.astro           # UNTOUCHED
    Section.astro          # UNTOUCHED (IDs already correct)
  pages/
    index.astro            # MODIFY — import + render ToC
    en/
      index.astro          # MODIFY — import + render ToC
public/
  styles/
    base.css               # MODIFY — ToC base styles
    styled.css             # MODIFY — ToC styled styles + scroll-behavior
```

**No conflicts detected.** The new `.toc` CSS class does not conflict with any existing classes (`skip-link`, `header-actions`, `current-language`, `language-switch`, `css-toggle`). CSS Layers maintain proper cascade order.

**Critical architecture constraint to follow:**
The ToC is placed **outside `<main>`** (between `<Header>` and `<main>`). This is intentional:
- `<main id="main">` is the skip-link target — adding navigation elements inside it would make the skip link less useful
- The ToC is navigation, not main content — semantically correct to keep it outside `<main>`
- `<nav>` at the same level as `<main>` creates a clean landmark structure

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 3.1: Table of Contents with Anchor Navigation]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 3: Enhanced Navigation & Keyboard Shortcuts]
- [Source: _bmad-output/planning-artifacts/architecture.md#Component Organization]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Navigation Patterns — Section Navigation (ToC)]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#UX Consistency Patterns — Navigation Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Component Strategy — SectionNav (ToC)]
- [Source: src/components/Header.astro — lang prop pattern to follow]
- [Source: src/pages/index.astro — section IDs confirmed: links, skills, experience, projects, cv]
- [Source: src/pages/en/index.astro — EN section headings confirmed]
- [Source: public/styles/base.css — existing layer structure, insertion point]
- [Source: public/styles/styled.css — existing layer structure, insertion point]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-5-20250929

### Debug Log References

None — clean implementation, no issues encountered.

### Completion Notes List

- Created `src/components/TableOfContents.astro`: pure static HTML component, no JS. Bilingual via `lang` prop. Renders `<nav class="toc" aria-label>` with `<ol>` of 5 anchor links matching existing section IDs.
- Integrated into both page templates (`index.astro`, `en/index.astro`) between `<Header>` and `<main>`, following architecture landmark structure.
- Added `.toc` base CSS inside `@layer base` with 44px touch targets, `flex-wrap`, no `list-style`. Functional in raw state.
- Added `html[data-styled] .toc` styled CSS inside `@layer styled` with accent color, border-bottom, hover transitions.
- Added `html[data-styled] { scroll-behavior: smooth; }` with `@media (prefers-reduced-motion: reduce)` override.
- Build: `bun run build` → 0 TypeScript errors, 2 pages generated, ToC present in both.
- Verified: FR labels (Liens/Compétences/Expérience/Projets/CV), aria-label="Table des matières"; EN labels (Links/Skills/Experience/Projects/CV), aria-label="Table of contents".
- No new dependencies introduced. Story is pure HTML + CSS per spec.

### File List

- src/components/TableOfContents.astro (CREATED)
- src/pages/index.astro (MODIFIED)
- src/pages/en/index.astro (MODIFIED)
- public/styles/base.css (MODIFIED)
- public/styles/styled.css (MODIFIED)
- _bmad-output/implementation-artifacts/sprint-status.yaml (MODIFIED)
- _bmad-output/implementation-artifacts/3-1-table-of-contents-anchor-navigation.md (MODIFIED)
