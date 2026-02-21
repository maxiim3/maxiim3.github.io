# Story 6.2: Case Study Display Component & Routing

Status: done

## Story

As a visitor,
I want to view detailed case studies with structured information,
so that I can evaluate the developer's real-world delivery capability.

## Acceptance Criteria

**AC 1 — CaseStudyList section on main pages**
Given `index.astro` and `en/index.astro`
When I add a section with `id="case-studies"` containing `<CaseStudyList>`
Then it renders a card per case study linking to its dedicated detail page
And the section heading is "Réalisations" (FR) / "Case Studies" (EN)

**AC 2 — CaseStudyCard component**
Given a `CaseStudy` prop
When `CaseStudyCard.astro` renders
Then it shows: title (h3), context paragraph, stack badges row, "Voir le projet" / "View project" link to `/cases/{slug}` (FR) or `/en/cases/{slug}` (EN)

**AC 3 — FR detail pages generated**
Given `pages/cases/[slug].astro` with `getStaticPaths()` from `fr.ts`
When `bun run build` runs
Then `/cases/sestini-pizza` and `/cases/jamais-203-productions` are generated
And each page renders: title (h1), context, role, deliverables list, results table, stack badges, external project link
And lang is `fr`

**AC 4 — EN detail pages generated**
Given `pages/en/cases/[slug].astro` with `getStaticPaths()` from `en.ts`
When `bun run build` runs
Then `/en/cases/sestini-pizza` and `/en/cases/jamais-203-productions` are generated
And each page renders the same structure in English
And lang is `en`

**AC 5 — ToC entry added**
Given `TableOfContents.astro`
When I add entry at position 6
Then it links `#case-studies` with label "Réalisations" (FR) / "Case Studies" (EN)

**AC 6 — Keyboard shortcut `6`**
Given `KeyboardNav.astro`
When user presses physical key `6` (event.code `Digit6`) on the main page
Then focus moves to the `case-studies` section heading
And the help overlay shows range `1–6` (updated from `1–5`)

**AC 7 — Works in raw and styled CSS states**
Given the CSS toggle
When case study components render without CSS or with `html[data-styled]`
Then all content is readable and structurally valid in both states

**AC 8 — Accessible (WCAG AAA)**
Given rendered case study components
Then heading hierarchy is valid (h1 on detail page, h2 section on main page, h3 per card)
And all text meets 7:1 contrast in styled state
And all links have descriptive text (no "click here")

**AC 9 — Build succeeds with no regressions**
Given all changes
When `bun run build` + `bun test`
Then 4 new static pages generated, 0 TypeScript errors, existing tests pass

## Tasks / Subtasks

- [x] Task 1: Create `src/components/CaseStudyCard.astro` (AC: #2, #7, #8)
  - [x] Props: `caseStudy: CaseStudy`, `locale: string`
  - [x] Render title as `<h3>`, context as `<p>`, stack as badge list
  - [x] Link href: `/cases/${slug}` for FR, `/en/cases/${slug}` for EN
  - [x] Label: "Voir le projet" (FR) / "View project" (EN)

- [x] Task 2: Create `src/components/CaseStudyList.astro` (AC: #1)
  - [x] Props: `caseStudies: CaseStudy[]`, `locale: string`
  - [x] Map and render `<CaseStudyCard>` for each entry
  - [x] Wrapper div class `case-study-list`

- [x] Task 3: Create `src/pages/cases/[slug].astro` — FR detail page (AC: #3, #7, #8)
  - [x] `getStaticPaths()` from `fr.ts`
  - [x] Layout: `<Base>` + semantic sections for each field
  - [x] Back link: `← Retour` to `/`

- [x] Task 4: Create `src/pages/en/cases/[slug].astro` — EN detail page (AC: #4)
  - [x] Same pattern using `en.ts` content
  - [x] Back link: `← Back` to `/en/`

- [x] Task 5: Update `src/components/TableOfContents.astro` (AC: #5)
  - [x] Add `{ id: 'case-studies', label: 'Réalisations' }` to FR array
  - [x] Add `{ id: 'case-studies', label: 'Case Studies' }` to EN array

- [x] Task 6: Update `src/components/KeyboardNav.astro` (AC: #6)
  - [x] Add `Digit6: 'case-studies'` to `sectionCodeMap`
  - [x] Update `<kbd>1</kbd>–<kbd>5</kbd>` → `<kbd>1</kbd>–<kbd>6</kbd>`

- [x] Task 7: Update `src/pages/index.astro` and `src/pages/en/index.astro` (AC: #1)
  - [x] Import `CaseStudyList`
  - [x] Add `<Section id="case-studies" heading="Réalisations">` (FR) / `"Case Studies"` (EN)

- [x] Task 8: Add CSS for case study components (AC: #7, #8)
  - [x] `base.css`: semantic raw styles
  - [x] `styled.css`: under `html[data-styled]`

- [x] Task 9: Verify build and tests (AC: #9)
  - [x] `bun run build` — 4 new pages generated, 0 TS errors
  - [x] `bun test` — existing tests pass

### Review Follow-ups (AI)

- [ ] [AI-Review][Medium] Replace inferred metrics for `jamais-203-productions` with real data — `src/content/fr.ts:143` and `src/content/en.ts:143` (TODO(M1) comment)

## Dev Notes

**Routing pattern:**
- FR uses `prefixDefaultLocale: false` → FR at `/`, EN at `/en/`
- Dynamic routes: `src/pages/cases/[slug].astro`, `src/pages/en/cases/[slug].astro`
- Static generation: `getStaticPaths()` required in each dynamic page

**Actual slugs (from content files):**
- `sestini-pizza`
- `jamais-203-productions`

**Content lookup pattern:**
```typescript
import content from '../../content/fr';
export function getStaticPaths() {
  return content.caseStudies.map(cs => ({ params: { slug: cs.slug } }));
}
const { slug } = Astro.params;
const caseStudy = content.caseStudies.find(cs => cs.slug === slug)!;
```

**CSS pattern:**
- All styles in `public/styles/base.css` and `public/styles/styled.css` (served as static files)
- Styled layer: always under `html[data-styled] .selector { ... }`

**Keyboard shortcut (AZERTY safe):**
- Use `event.code` (physical key) — `Digit6` is layout-independent

**Heading hierarchy on detail pages:**
- `<h1>`: case study title
- `<h2>`: section headings (Contexte, Mon rôle, Livrables, Résultats, Stack)

**Heading hierarchy on main page:**
- `<h2>`: section heading via `<Section heading="Réalisations">`
- `<h3>`: each case study title in `CaseStudyCard`

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Slugs in content: `sestini-pizza` and `jamais-203-productions` (plan said `jamais-203` — corrected)
- CSS lives in `public/styles/` not `src/styles/` — static files served directly
- Detail pages use `Base` layout which sets `lang` from `Astro.currentLocale`

### File List

- `src/components/CaseStudyCard.astro` — created
- `src/components/CaseStudyList.astro` — created
- `src/pages/cases/[slug].astro` — created
- `src/pages/en/cases/[slug].astro` — created
- `src/components/TableOfContents.astro` — edited
- `src/components/KeyboardNav.astro` — edited
- `src/pages/index.astro` — edited
- `src/pages/en/index.astro` — edited
- `public/styles/base.css` — edited
- `public/styles/styled.css` — edited
- `_bmad-output/implementation-artifacts/sprint-status.yaml` — edited (status set to in-progress)
