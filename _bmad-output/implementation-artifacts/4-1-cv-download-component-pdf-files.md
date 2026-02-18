# Story 4.1: CV Download Component with PDF Files

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a recruiter,
I want to download the developer's CV in my preferred language,
so that I can review their qualifications offline.

## Acceptance Criteria

### 1. PDF Files Exist

**Given** CV PDF files need to exist
**When** I add CV files to the project
**Then** `public/cv/cv-fr.pdf` exists with French CV content
**And** `public/cv/cv-en.pdf` exists with English CV content
**And** both PDFs are complete and professional

### 2. CvDownload Component Created

**Given** the CV download component needs to be created
**When** I create `src/components/CvDownload.astro`
**Then** it displays download buttons for both French and English CVs
**And** each button is a semantic `<a>` tag with `download` attribute
**And** the French button links to `/cv/cv-fr.pdf`
**And** the English button links to `/cv/cv-en.pdf`

### 3. Button Labeling

**Given** the download buttons need proper labeling
**When** rendering the buttons
**Then** labels clearly indicate language: "Download CV (FR)" and "Download CV (EN)"
**And** both buttons are visible regardless of current page language
**And** buttons work identically on both `/` and `/en/` pages

### 4. Touch Targets

**Given** touch targets need to meet accessibility standards
**When** styling the download buttons
**Then** each button is minimum 44x44px on mobile (48px height recommended)
**And** generous padding ensures easy tapping on mobile devices
**And** buttons have visible hover/focus states

### 5. Download Action Works

**Given** the download action needs to work
**When** a visitor clicks a download button
**Then** the PDF file downloads immediately
**And** no modal, gate, or confirmation dialog appears
**And** the download works in all supported browsers (Chrome, Firefox, Safari)

### 6. Integration in Pages

**Given** the component needs to be integrated
**When** I update both page files
**Then** `src/pages/index.astro` imports and renders `CvDownload` in the `id="cv"` section
**And** `src/pages/en/index.astro` imports and renders `CvDownload` in the `id="cv"` section
**And** the placeholder text is removed from both pages

## Tasks / Subtasks

- [ ] Task 1: Place PDF files in public/cv/ (AC: #1)
  - [ ] 1.1 Create `public/cv/` directory
  - [ ] 1.2 Copy/rename root PDF → `public/cv/cv-fr.pdf`
  - [ ] 1.3 Copy/rename root PDF → `public/cv/cv-en.pdf`

- [ ] Task 2: Create `src/components/CvDownload.astro` (AC: #2, #3)
  - [ ] 2.1 Create component file (no props needed — both links are always shown)
  - [ ] 2.2 Add FR download `<a href="/cv/cv-fr.pdf" download>` with label "Download CV (FR)"
  - [ ] 2.3 Add EN download `<a href="/cv/cv-en.pdf" download>` with label "Download CV (EN)"
  - [ ] 2.4 No `<style>` in component — CSS goes in `public/styles/base.css` / `public/styles/styled.css`

- [ ] Task 3: Add CSS in `public/styles/base.css` (AC: #4, #5)
  - [ ] 3.1 Style `.cv-download` container (flex layout, gap)
  - [ ] 3.2 Style `.cv-download-link` with min-height 48px, padding, border, visible focus indicators
  - [ ] 3.3 Add styled state overrides in `public/styles/styled.css` scoped under `html[data-styled]`

- [ ] Task 4: Integrate into both pages (AC: #6)
  - [ ] 4.1 In `src/pages/index.astro`: import `CvDownload` and replace placeholder `<p>` with `<CvDownload />`
  - [ ] 4.2 In `src/pages/en/index.astro`: import `CvDownload` and replace placeholder `<p>` with `<CvDownload />`

- [ ] Task 5: Build verification (AC: all)
  - [ ] 5.1 Run `bun run build` → zero TypeScript errors, both pages generated
  - [ ] 5.2 Verify `dist/cv/cv-fr.pdf` and `dist/cv/cv-en.pdf` present in build output
  - [ ] 5.3 Manual test: click FR button → PDF downloads; click EN button → PDF downloads

## Dev Notes

### Epic 4 Context

Story 4.1 is the first story in Epic 4 (Downloads & Professional Contact).

**Epic 4 progression:**
- **Story 4.1: CV Download Component with PDF Files ← THIS STORY**
- Story 4.2: Professional Links & Contact (verification — LinksList already done in Epic 1)
- Story 4.3: NIP-05 Self-Hosted Nostr Identity

**FR coverage this story:**
- FR23: Download PDF CV in French
- FR24: Download PDF CV in English

**NFR coverage:**
- NFR12: Touch targets minimum 44x44px on mobile

### 🔑 Key Implementation Facts

**PDF Files Already Exist at Root Level**

The actual CV PDFs are already in the project root (NOT in `public/`):
```
CV_TAMBURRINI_MAXIME-Frontend developer-2026-02-15 - EN.pdf
CV_TAMBURRINI_MAXIME-Frontend developer-2026-02-15 - FR.pdf
```

These must be **copied** (not moved — keep originals for safety) to:
```
public/cv/cv-fr.pdf   ← copy of FR PDF
public/cv/cv-en.pdf   ← copy of EN PDF
```

Astro automatically serves everything in `public/` at root. So `/cv/cv-fr.pdf` will work immediately.

**CvDownload.astro Design Decision: No Props**

The component always shows BOTH download buttons (FR and EN) regardless of current page locale. This is by design (epics AC: "both buttons visible regardless of current page language").

DO NOT add a locale prop or use content.cv from the page. The component is standalone:

```astro
---
/**
 * CvDownload Component - Story 4.1
 * Always shows both FR and EN CV download links.
 * Static component — no client:load needed.
 */
---

<div class="cv-download">
  <a href="/cv/cv-fr.pdf" download class="cv-download-link">
    Download CV (FR)
  </a>
  <a href="/cv/cv-en.pdf" download class="cv-download-link">
    Download CV (EN)
  </a>
</div>
```

Note: `download` attribute on `<a>` triggers browser download behavior without a file name hint. This works correctly in all target browsers (Chrome, Firefox, Safari latest 2 versions).

**Content Type `cv` Field — Not Used Here**

`src/content/types.ts` has:
```typescript
export interface CV {
  label: string;
  href: string;
}
```

And `fr.ts`/`en.ts` already have:
```typescript
cv: {
  label: 'Télécharger mon CV', // or 'Download my CV' in en.ts
  href: '/cv/cv-fr.pdf',       // or '/cv/cv-en.pdf' in en.ts
}
```

These are VALID but NOT used by CvDownload.astro — the component hardcodes both links since both are always displayed. This is correct — do not change types.ts or content files.

**No `client:load` Needed**

`CvDownload.astro` is a pure static display component (just two `<a>` tags). No JavaScript, no interactivity. Do NOT add `client:load`.

**CSS Paths — Critical Reminder from Previous Stories**

CSS files are at `public/styles/` NOT `src/styles/`:
- ✅ `public/styles/base.css` — raw state styles (inside `@layer base`)
- ✅ `public/styles/styled.css` — styled state (inside `@layer styled`, scoped under `html[data-styled]`)

This was confirmed in Story 3.1, 3.2, 3.3.

### Architecture Compliance

**From architecture.md — Naming Patterns:**
> Astro components: PascalCase — `CvDownload.astro` ✅

**From architecture.md — Component Organization:**
> Flat structure — `src/components/CvDownload.astro` ✅

**From architecture.md — CSS Conventions:**
> No component-scoped `<style>` blocks — all CSS in base.css/styled.css ✅
> Styled layer selectors: Always scoped under `html[data-styled]` ✅

**From architecture.md — Accessibility Patterns:**
> 44x44px touch targets (48px recommended for download buttons per NFR12) ✅

| Rule | Compliance |
|------|------------|
| PascalCase Astro component | ✅ `CvDownload.astro` |
| No component-scoped `<style>` | ✅ All CSS in public/styles/ |
| Semantic HTML — `<a>` not `<button>` | ✅ Download links use `<a download>` |
| Visible focus indicators | ✅ Must use `outline: 2px solid currentColor; outline-offset: 2px` (from base layer) |
| Touch targets ≥ 44px | ✅ 48px min-height |
| No new dependencies | ✅ Pure HTML + CSS only |

### Technical Requirements

#### Complete Implementation

**`src/components/CvDownload.astro`** (CREATE):

```astro
---
/**
 * CvDownload Component - Story 4.1
 * Displays download links for both FR and EN CV PDFs.
 * Both links always visible regardless of current page locale.
 * Static component — no client:load.
 */
---

<div class="cv-download">
  <a href="/cv/cv-fr.pdf" download class="cv-download-link">
    Download CV (FR)
  </a>
  <a href="/cv/cv-en.pdf" download class="cv-download-link">
    Download CV (EN)
  </a>
</div>
```

**`public/styles/base.css`** (ADD to end, inside `@layer base`):

```css
/* ========================
   CV Download — Story 4.1
   Raw state styles
   ======================== */

.cv-download {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.cv-download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  min-width: 44px;
  padding: 0.5rem 1.25rem;
  border: 1px solid currentColor;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.cv-download-link:hover {
  text-decoration: underline;
}
```

**`public/styles/styled.css`** (ADD to end, inside `@layer styled`, scoped under `html[data-styled]`):

```css
/* ========================
   CV Download — styled state
   ======================== */

html[data-styled] .cv-download-link {
  background: var(--cv-color-accent, #2563eb);
  color: #fff;
  border-color: var(--cv-color-accent, #2563eb);
  border-radius: 4px;
  font-family: var(--cv-font-body, system-ui, sans-serif);
  transition: background 0.15s ease, border-color 0.15s ease;
}

html[data-styled] .cv-download-link:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
  text-decoration: none;
}
```

**`src/pages/index.astro`** (MODIFY — replace placeholder in cv Section):

```astro
// Add import:
import CvDownload from '../components/CvDownload.astro';

// Replace:
// <Section id="cv" heading="CV">
//   <p>Téléchargement du CV à venir</p>
// </Section>
// With:
<Section id="cv" heading="CV">
  <CvDownload />
</Section>
```

**`src/pages/en/index.astro`** (MODIFY — replace placeholder in cv Section):

```astro
// Add import:
import CvDownload from '../../components/CvDownload.astro';

// Replace:
// <Section id="cv" heading="CV">
//   <p>CV download coming soon</p>
// </Section>
// With:
<Section id="cv" heading="CV">
  <CvDownload />
</Section>
```

### Library & Framework Requirements

**NO new dependencies.** This story uses only:
- HTML `<a download>` attribute — standard HTML5, all browsers
- Astro static component — no client-side JS
- CSS flexbox — fully supported

### File Structure Requirements

**Files to CREATE:**
```
public/
  cv/
    cv-fr.pdf             # Copy of FR PDF from project root
    cv-en.pdf             # Copy of EN PDF from project root
src/
  components/
    CvDownload.astro      # New static download component
```

**Files to MODIFY:**
```
src/
  pages/
    index.astro           # Import CvDownload, replace placeholder
    en/
      index.astro         # Import CvDownload, replace placeholder
public/
  styles/
    base.css              # Add .cv-download styles
    styled.css            # Add html[data-styled] .cv-download styles
```

**Files NOT to modify:**
- `src/content/types.ts` — CV interface already correct, no changes needed
- `src/content/fr.ts` — cv.href already set to `/cv/cv-fr.pdf`, no changes needed
- `src/content/en.ts` — cv.href already set to `/cv/cv-en.pdf`, no changes needed
- `src/layouts/Base.astro` — no changes needed
- `src/components/KeyboardNav.astro` — keyboard shortcut `5` already points to section `#cv`, works as-is
- `src/components/TableOfContents.astro` — already links to `#cv`, works as-is

### Testing Requirements

**Manual Testing Checklist:**

1. **PDF Files:**
   - [ ] `public/cv/cv-fr.pdf` exists and is a valid PDF
   - [ ] `public/cv/cv-en.pdf` exists and is a valid PDF
   - [ ] Both files are accessible in browser at `/cv/cv-fr.pdf` and `/cv/cv-en.pdf`

2. **Component Rendering:**
   - [ ] FR page (`/`): Both download buttons visible
   - [ ] EN page (`/en/`): Both download buttons visible
   - [ ] Labels clearly say "Download CV (FR)" and "Download CV (EN)"

3. **Download Action:**
   - [ ] Click "Download CV (FR)" → browser downloads file (not opens in new tab)
   - [ ] Click "Download CV (EN)" → browser downloads file
   - [ ] Works in Chrome, Firefox (Safari on mac if available)

4. **Touch Targets:**
   - [ ] Dev tools mobile emulation: buttons are ≥ 44px tall
   - [ ] Buttons easy to tap with finger

5. **Raw State (no CSS toggle active):**
   - [ ] Buttons visible with border, readable text
   - [ ] Not broken-looking — functional even without styled CSS

6. **Styled State (CSS toggle active):**
   - [ ] Buttons styled with accent color (#2563eb)
   - [ ] Hover state works

7. **Keyboard Navigation:**
   - [ ] Tab to focus first button — visible focus indicator
   - [ ] Enter activates download
   - [ ] Tab to second button — visible focus indicator
   - [ ] Enter activates download
   - [ ] Keyboard shortcut `5` scrolls to CV section (unchanged behavior)

8. **Build:**
   - [ ] `bun run build` → zero TypeScript errors
   - [ ] `dist/cv/cv-fr.pdf` and `dist/cv/cv-en.pdf` present in output
   - [ ] Both `/index.html` and `/en/index.html` generated

### Previous Story Intelligence

**From Story 3.3 (completed 2026-02-18):**
- CSS at `public/styles/` (confirmed — NOT `src/styles/`)
- Build command: `bun run build`
- Both pages must be updated when adding new components
- Keyboard shortcut `5` already navigates to `#cv` section (no changes needed)
- Git commit pattern: short story ID → use `"4.1"`

**From Story 3.2 (keyboard shortcuts):**
- Section IDs: `links`, `skills`, `experience`, `projects`, `cv` — cv section already exists
- Language switch: `.language-switch` class on `<a>` in Header.astro

**From Story 1.4 (content display):**
- Page structure established: `<Section id="cv" heading="CV">` with placeholder — ready to replace
- Both pages follow identical structure; modify both

**Content type insight:**
- `cv` field in `types.ts` + `fr.ts`/`en.ts` already references `/cv/cv-fr.pdf` and `/cv/cv-en.pdf`
- These paths will be correct after PDFs are placed in `public/cv/`
- `CvDownload.astro` does NOT need to use `content.cv` — hardcode both paths directly

### Git Intelligence

**Recent commits (relevant context):**
- `58fa04e` — `add epic 6 - show case and study section` (epics.md update only)
- `90e634e` — `3.3` — Story 3.3 implemented: KeyboardNav.astro, base.css, styled.css modified
- `8b01904` — `3.1/3.2` — KeyboardNav.astro created, TableOfContents.astro created

**Patterns to follow:**
- Import statements in FR page: `from '../components/...'`
- Import statements in EN page: `from '../../components/...'` (one level deeper)
- Commit message: `"4.1"` to match epic pattern

### Project Structure Notes

**Alignment with unified project structure:**

```
public/
  cv/               # NEW — create directory
    cv-fr.pdf       # NEW — copy from root PDF
    cv-en.pdf       # NEW — copy from root PDF
  styles/
    base.css        # MODIFY — add .cv-download styles
    styled.css      # MODIFY — add styled .cv-download styles
src/
  components/
    CvDownload.astro    # CREATE — static download component (flat, no subdir)
  pages/
    index.astro         # MODIFY — import + use CvDownload
    en/
      index.astro       # MODIFY — import + use CvDownload
```

**No conflicts detected:**
- `.cv-download` and `.cv-download-link` classes: unique, not used elsewhere
- Component ID not needed (no JavaScript interaction)
- `<a download>` does not conflict with any existing pattern

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 4.1: CV Download Component with PDF Files]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 4: Downloads & Professional Contact]
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming Patterns — PascalCase Astro components]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions — no component-scoped styles, styled layer under html[data-styled]]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns — touch targets 44x44px]
- [Source: _bmad-output/planning-artifacts/architecture.md#Complete Project Directory Structure — public/cv/ location]
- [Source: _bmad-output/implementation-artifacts/3-3-keyboard-shortcuts-help-overlay.md — CSS path confirmation: public/styles/]
- [Source: src/pages/index.astro — placeholder cv section to replace]
- [Source: src/pages/en/index.astro — placeholder cv section to replace]
- [Source: src/content/types.ts — CV interface definition]
- [Source: src/content/fr.ts — cv.href: '/cv/cv-fr.pdf' already set]
- [Source: src/content/en.ts — cv.href: '/cv/cv-en.pdf' already set]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
