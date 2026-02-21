# Story 6.3: Professional Narrative ("Story") Section

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to read the developer's professional story,
so that I understand the person behind the CV and the unconventional path that shaped their approach.

## Acceptance Criteria

### 1. Narrative TypeScript Interface Defined

**Given** the content type system in `src/content/types.ts`
**When** I add a `Narrative` interface
**Then** it includes:
  - `title: string` (section heading, localized)
  - `paragraphs: string[]` (prose paragraphs, localized)

### 2. Content Interface Extended

**Given** the root `Content` interface in `types.ts`
**When** I add the narrative field
**Then** `narrative: Narrative` is added as a **required** field on `Content`
**And** TypeScript compilation enforces both `fr.ts` and `en.ts` implement it

### 3. French Narrative Content Added

**Given** the `Content` interface now requires `narrative`
**When** I add the `narrative` object to `src/content/fr.ts`
**Then** `title` is `"Mon Parcours"` (or equivalent)
**And** `paragraphs` contains the full FR narrative text from epics base content, split into individual paragraphs
**And** TypeScript compilation succeeds

### 4. English Narrative Content Added

**Given** the `Content` interface now requires `narrative`
**When** I add the `narrative` object to `src/content/en.ts`
**Then** `title` is `"My Story"` (or equivalent)
**And** `paragraphs` contains the full EN narrative text from epics base content, split into individual paragraphs
**And** `paragraphs.length` matches the FR version
**And** TypeScript compilation succeeds

### 5. ProfessionalNarrative Component Created

**Given** the `Narrative` type and content data exist
**When** I create `src/components/ProfessionalNarrative.astro`
**Then** it accepts a `narrative: Narrative` prop
**And** it renders each paragraph as a `<p>` element
**And** it uses semantic HTML (no extraneous wrappers)
**And** it works in both raw and styled CSS states

### 6. Section Integrated into FR Page

**Given** `src/pages/index.astro`
**When** I add the narrative section
**Then** it renders as `<Section id="story" heading={content.narrative.title}>` containing `<ProfessionalNarrative>`
**And** it is positioned after the case studies section
**And** the page renders correctly in both CSS states

### 7. Section Integrated into EN Page

**Given** `src/pages/en/index.astro`
**When** I add the narrative section
**Then** it renders identically to the FR page (with EN content)
**And** it is positioned after the case studies section
**And** the page renders correctly in both CSS states

### 8. CSS Styles Added for Both States

**Given** the narrative section exists on the page
**When** viewed in raw state (base CSS only)
**Then** paragraphs are readable with natural document flow and system fonts
**When** viewed in styled state (`html[data-styled]`)
**Then** paragraphs use styled typography (Inter font, color tokens, spacing tokens)
**And** the section has visual distinction from surrounding content (e.g. subtle left border or blockquote-style treatment)

### 9. Content Parity Tests Updated

**Given** the existing test suite enforces content parity
**When** I update `src/test/content-parity.test.ts`
**Then** new assertions verify:
  - `fr.narrative` and `en.narrative` both exist
  - `fr.narrative.paragraphs.length === en.narrative.paragraphs.length`
  - Both `title` fields are non-empty strings

### 10. Build Succeeds with No Regressions

**Given** all changes are made
**When** I run `bun run build` and `bun test`
**Then** the build completes with zero TypeScript errors
**And** existing tests pass (including case study parity tests)
**And** both FR and EN pages render with the new section

## Tasks / Subtasks

- [x] Task 1: Define `Narrative` interface in `src/content/types.ts` (AC: #1, #2)
  - [x] Add `Narrative` interface with `title: string` and `paragraphs: string[]`
  - [x] Add `narrative: Narrative` to root `Content` interface

- [x] Task 2: Add French narrative content to `src/content/fr.ts` (AC: #3)
  - [x] Add `narrative` object with `title: "Mon Parcours"`
  - [x] Split FR prose into `paragraphs` array (4 paragraphs from epics base content)

- [x] Task 3: Add English narrative content to `src/content/en.ts` (AC: #4)
  - [x] Add `narrative` object with `title: "My Story"`
  - [x] Split EN prose into `paragraphs` array (4 paragraphs from epics base content)
  - [x] Verify `paragraphs.length` matches FR

- [x] Task 4: Create `src/components/ProfessionalNarrative.astro` (AC: #5)
  - [x] Props: `narrative: Narrative`
  - [x] Render each paragraph as `<p>`
  - [x] Semantic HTML, no unnecessary wrappers

- [x] Task 5: Integrate into `src/pages/index.astro` (AC: #6)
  - [x] Import `ProfessionalNarrative`
  - [x] Add `<Section id="story" heading={content.narrative.title}>` after case studies

- [x] Task 6: Integrate into `src/pages/en/index.astro` (AC: #7)
  - [x] Import `ProfessionalNarrative`
  - [x] Add `<Section id="story" heading={content.narrative.title}>` after case studies

- [x] Task 7: Add CSS styles (AC: #8)
  - [x] `public/styles/base.css`: raw state styles for `.narrative` (minimal — natural prose flow)
  - [x] `public/styles/styled.css`: styled state with color tokens, left border accent, refined spacing

- [x] Task 8: Update parity tests in `src/test/content-parity.test.ts` (AC: #9)
  - [x] Add narrative existence assertions
  - [x] Add paragraphs length parity assertion
  - [x] Add `'narrative'` to `requiredFields` array

- [x] Task 9: Verify build and tests (AC: #10)
  - [x] `bun run build` — 0 TS errors
  - [x] `bun test` — all tests pass (3 pre-existing unrelated failures in css-toggle-component.test.ts)

## Dev Notes

### Architecture Compliance

**Content system pattern — follow EXACTLY (from Story 6.1):**
- Types defined in `src/content/types.ts` — all interfaces exported
- Content files (`fr.ts`, `en.ts`) import type from `./types` and `export default` a `Content`-typed object
- The `Content` type annotation on the const enforces structure at compile time
- No Astro Content Collections, no Zod, no schema library — pure TypeScript interfaces
- `tsconfig.json` extends `astro/tsconfigs/strict` — strict mode active

**CSS location — CRITICAL (learned from Story 6.2):**
- CSS lives in `public/styles/base.css` and `public/styles/styled.css` (static files served directly)
- NOT in `src/styles/` — the project uses `public/styles/` for both CSS files
- No component-scoped `<style>` blocks — all CSS in the two layer files
- Base layer: plain selectors
- Styled layer: always scoped under `html[data-styled]`

**Component pattern:**
- Flat structure in `src/components/`
- PascalCase `.astro` files
- Pure display components (no `client:load` needed for this — static HTML only)
- Props typed via `interface Props` in frontmatter
- Use `const { prop } = Astro.props;` pattern

**Page integration pattern (from existing pages):**
```typescript
import ProfessionalNarrative from '../components/ProfessionalNarrative.astro';
// ... existing imports
// In template:
<Section id="story" heading={content.narrative.title}>
  <ProfessionalNarrative narrative={content.narrative} />
</Section>
```

### Source Narrative Content (from epics base content)

**FR — "Un parcours atypique, une approche complète"**

Split into 4 paragraphs:

1. "Avant le code, j'ai passé 15 ans dans la musique — batteur et ingénieur du son. J'ai travaillé en restauration, vécu dans plusieurs pays, appris quatre langues. Chaque étape m'a appris à comprendre des systèmes complexes, à collaborer avec des profils différents, et à livrer un résultat concret sous contrainte."

2. "En devenant développeur, j'ai gardé cette approche : comprendre le contexte avant de coder, penser produit avant de penser feature. Je ne suis pas un exécutant technique. Je suis quelqu'un qui comprend un business, identifie ce dont il a besoin, et le construit — de l'identité visuelle à l'architecture frontend."

3. "J'ai accompagné un restaurateur de zéro à 250 000 € de chiffre d'affaires en concevant l'intégralité de sa marque et de sa présence digitale. J'ai conçu le site d'une agence de production musicale dont les clients incluent Balenciaga, Disneyland Paris et Warner Music. En parallèle, je conçois des applications autour de la gouvernance collective et de la permaculture."

4. "Ce que j'apporte : une vision transversale, une exécution rigoureuse, et la capacité de faire le lien entre technique, design et stratégie."

**EN — "An unconventional path, a complete approach"**

Split into 4 paragraphs:

1. "Before code, I spent 15 years in music — as a drummer and sound engineer. I worked in hospitality, lived across multiple countries, and learned four languages. Each chapter taught me how to navigate complex systems, collaborate with diverse profiles, and deliver tangible results under real constraints."

2. "When I transitioned into development, I carried that mindset forward: understand the context before writing code, think product before feature. I'm not a pure executor. I'm someone who understands a business, identifies what it needs, and builds it — from visual identity to frontend architecture."

3. "I helped a restaurateur go from zero to €250,000 in revenue by designing his entire brand and digital presence. I built the website for a music production agency whose clients include Balenciaga, Disneyland Paris, and Warner Music. On the side, I'm building applications around collective governance and permaculture."

4. "What I bring: cross-disciplinary vision, rigorous execution, and the ability to bridge the gap between technology, design, and strategy."

### Critical Constraints

- **DO NOT** modify `TableOfContents.astro` — that's Story 6.4
- **DO NOT** modify `KeyboardNav.astro` — that's Story 6.4
- **DO NOT** add SEO metadata — that's Story 6.4
- **This story is DATA + COMPONENT + PAGE INTEGRATION + CSS**
- Section position: **after** case studies (closing personal touch on the page)
- No `client:load` or `client:idle` needed — this is pure static HTML/CSS

### CSS Design Decisions

**Raw state (base layer):**
- `.narrative` class on wrapper div inside `<Section>`
- Natural prose flow — paragraphs stack with default `margin-bottom: 1rem`
- No special treatment needed — system fonts, browser colors, standard document rendering
- Content is readable and complete without any custom styling

**Styled state (styled layer):**
- `html[data-styled] .narrative` scoping
- Left border accent: `border-left: 3px solid var(--cv-color-accent); padding-left: var(--cv-space-lg);`
- Paragraphs use `color: var(--cv-color-text)` with Inter font
- Last paragraph (the "what I bring" closing) could be subtly emphasized with `font-weight: 500` or `color: var(--cv-color-heading)` — but keep it minimal
- Follow the existing pattern from `.case-study-impact` (italic, border-left) but for the full narrative block

### Project Structure Notes

- No new directories — follows flat component structure
- New file: `src/components/ProfessionalNarrative.astro`
- Modified files: `types.ts`, `fr.ts`, `en.ts`, `index.astro`, `en/index.astro`, `base.css`, `styled.css`, `content-parity.test.ts`

### File Modification Summary

| File | Action | What Changes |
|------|--------|--------------|
| `src/content/types.ts` | Edit | Add `Narrative` interface + extend `Content` |
| `src/content/fr.ts` | Edit | Add `narrative` object with FR text |
| `src/content/en.ts` | Edit | Add `narrative` object with EN text |
| `src/components/ProfessionalNarrative.astro` | Create | New component rendering narrative paragraphs |
| `src/pages/index.astro` | Edit | Import component, add section after case studies |
| `src/pages/en/index.astro` | Edit | Import component, add section after case studies |
| `public/styles/base.css` | Edit | Add `.narrative` raw state styles |
| `public/styles/styled.css` | Edit | Add `html[data-styled] .narrative` styled state |
| `src/test/content-parity.test.ts` | Edit | Add narrative parity assertions |

### Previous Story Intelligence (from 6.1 and 6.2)

**Story 6.1 learnings:**
- `impact` field was made optional (`impact?: string`) because not all case studies use it — same logic: keep the narrative interface simple with required fields only
- Pre-existing 3 failing tests in `css-toggle-component.test.ts` are unrelated — don't try to fix them
- Code review flagged inferred data (TODO(M1)) — ensure narrative text is copied exactly from epics, not paraphrased

**Story 6.2 learnings:**
- CSS lives in `public/styles/` not `src/styles/`
- Slugs in content files must match expected format
- Detail pages use `Base` layout which sets `lang` from `Astro.currentLocale`
- Component development was straightforward — flat Astro components, no interactivity needed

**Git patterns (commits 6.1, 6.2):**
- Commits are labeled by story number (e.g., "6.1", "6.2")
- Code follows flat component organization consistently
- Tests are updated alongside content changes

### Testing

- Run `bun run build` to verify TypeScript compilation
- Run `bun test` to confirm all tests pass (including new narrative parity tests)
- Visually verify both FR and EN pages render the narrative section after case studies
- Verify raw state: paragraphs readable with system fonts
- Verify styled state: narrative has styled typography and accent treatment

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 6 - Story 6.3 + Base Content - Personal Narrative]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content TypeScript Structure]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions]
- [Source: _bmad-output/planning-artifacts/architecture.md#Component Organization]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Design System Foundation]
- [Source: src/content/types.ts — existing Content interface]
- [Source: src/content/fr.ts — existing content pattern]
- [Source: src/content/en.ts — existing content pattern]
- [Source: public/styles/base.css — existing raw state CSS pattern]
- [Source: public/styles/styled.css — existing styled state CSS pattern]
- [Source: _bmad-output/implementation-artifacts/6-1-case-study-content-structure-data-files.md — previous story context]
- [Source: _bmad-output/implementation-artifacts/6-2-case-study-display-component-routing.md — previous story context]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- All 9 tasks completed cleanly.
- Build passes with 0 TypeScript errors.
- 161 tests pass; 3 pre-existing failures in `css-toggle-component.test.ts` (unrelated to this story, known from 6.1/6.2).
- `narrative` field placed before `caseStudies` in content files (`fr.ts:106`, `en.ts:106`). Note: `types.ts` defines `caseStudies` before `narrative` (lines 36-37); property order in content files is inverted relative to the type definition but has no functional impact as TypeScript does not enforce property order.

### File List

- `_bmad-output/implementation-artifacts/sprint-status.yaml` — updated to `review`
- `src/content/types.ts` — added `Narrative` interface + `narrative: Narrative` on `Content`
- `src/content/fr.ts` — added `narrative` object (FR)
- `src/content/en.ts` — added `narrative` object (EN)
- `src/components/ProfessionalNarrative.astro` — created
- `src/pages/index.astro` — import + section added
- `src/pages/en/index.astro` — import + section added
- `public/styles/base.css` — `.narrative` raw state
- `public/styles/styled.css` — `html[data-styled] .narrative` styled state
- `src/test/content-parity.test.ts` — 3 new narrative parity tests + `requiredFields` updated
- `_bmad-output/implementation-artifacts/6-3-professional-narrative-story-section.md` — this story document
