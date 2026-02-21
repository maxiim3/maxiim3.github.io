# Story 6.4: Navigation & Bilingual Integration

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want case studies and the story section integrated into site navigation,
so that I can discover and access them naturally across both languages.

## Acceptance Criteria

### 1. Story Section Added to FR Table of Contents

**Given** the French page is loaded
**When** the visitor views the Table of Contents
**Then** it includes a "Mon Parcours" entry
**And** the entry links to `#story`
**And** it appears after the "Réalisations" entry (case-studies)

### 2. Story Section Added to EN Table of Contents

**Given** the English page is loaded
**When** the visitor views the Table of Contents
**Then** it includes a "My Story" entry
**And** the entry links to `#story`
**And** it appears after the "Case Studies" entry (case-studies)

### 3. Keyboard Shortcut `7` Navigates to Story Section

**Given** the keyboard navigation is active
**When** the visitor presses the `7` key (Digit7, physical position — AZERTY compatible)
**And** no input/textarea is focused
**Then** the page scrolls to and focuses the `#story` section heading
**And** the behavior is identical to shortcuts 1–6

### 4. Help Overlay Shows Updated Shortcut Range

**Given** the keyboard shortcuts overlay is opened (via `?`)
**When** the overlay is displayed
**Then** the section shortcut row shows `1–7`
**And** all other shortcuts are unchanged

### 5. Language Switch Present on FR Case Study Detail Pages

**Given** a visitor is on `/cases/sestini-pizza` (or any FR case study)
**When** they look for a language switch
**Then** there is a link to `/en/cases/sestini-pizza`
**And** the link has `lang="en"` attribute
**And** the link is part of the existing breadcrumb nav (no extra wrappers)

### 6. Language Switch Present on EN Case Study Detail Pages

**Given** a visitor is on `/en/cases/sestini-pizza` (or any EN case study)
**When** they look for a language switch
**Then** there is a link to `/cases/sestini-pizza`
**And** the link has `lang="fr"` attribute
**And** the link is part of the existing breadcrumb nav

### 7. FR Case Study Detail Pages Have `hreflang` Alternate Links

**Given** the `<head>` of `/cases/sestini-pizza` is rendered
**Then** it includes:
- `<link rel="alternate" hreflang="en" href="https://maxiim3.github.io/en/cases/sestini-pizza">`
**And** a canonical tag: `<link rel="canonical" href="https://maxiim3.github.io/cases/sestini-pizza">`

### 8. EN Case Study Detail Pages Have `hreflang` Alternate Links

**Given** the `<head>` of `/en/cases/sestini-pizza` is rendered
**Then** it includes:
- `<link rel="alternate" hreflang="fr" href="https://maxiim3.github.io/cases/sestini-pizza">`
**And** a canonical tag: `<link rel="canonical" href="https://maxiim3.github.io/en/cases/sestini-pizza">`

### 9. Build Succeeds with No Regressions

**Given** all changes are made
**When** I run `bun run build` and `bun test`
**Then** the build completes with zero TypeScript errors
**And** all existing tests pass (3 pre-existing failures in `css-toggle-component.test.ts` are known-unrelated)

## Tasks / Subtasks

- [x] Task 1: Add `story` entry to `src/components/TableOfContents.astro` (AC: #1, #2)
  - [x] FR: add `{ id: 'story', label: 'Mon Parcours' }` after `case-studies` entry
  - [x] EN: add `{ id: 'story', label: 'My Story' }` after `case-studies` entry

- [x] Task 2: Update `src/components/KeyboardNav.astro` (AC: #3, #4)
  - [x] Add `Digit7: 'story'` to `sectionCodeMap`
  - [x] Update help overlay: change `<kbd>1</kbd>–<kbd>6</kbd>` → `<kbd>1</kbd>–<kbd>7</kbd>`

- [x] Task 3: Enhance `src/layouts/Base.astro` with SEO support (AC: #7, #8)
  - [x] Add optional `alternates?: Array<{ hreflang: string; href: string }>` to `Props`
  - [x] Render `<link rel="alternate" hreflang={alt.hreflang} href={alt.href}>` for each entry in `<head>`
  - [x] Add `<link rel="canonical" href={Astro.url.href}>` unconditionally in `<head>`

- [x] Task 4: Add language switch + alternates to FR case study detail page (AC: #5, #7)
  - [x] Modify `src/pages/cases/[slug].astro`
  - [x] Add `<a href={`/en/cases/${slug}`} lang="en" class="language-switch">EN</a>` inside the existing breadcrumb `<nav>`
  - [x] Pass `alternates={[{ hreflang: 'en', href: `https://maxiim3.github.io/en/cases/${slug}` }]}` to `<Base>`

- [x] Task 5: Add language switch + alternates to EN case study detail page (AC: #6, #8)
  - [x] Modify `src/pages/en/cases/[slug].astro`
  - [x] Add `<a href={`/cases/${slug}`} lang="fr" class="language-switch">FR</a>` inside the existing breadcrumb `<nav>`
  - [x] Pass `alternates={[{ hreflang: 'fr', href: `https://maxiim3.github.io/cases/${slug}` }]}` to `<Base>`

- [x] Task 6: Verify build and tests (AC: #9)
  - [x] `bun run build` — 0 TS errors
  - [x] `bun test` — all tests pass (excluding 3 known pre-existing failures)

## Dev Notes

### Architecture Compliance

**TableOfContents.astro pattern — follow EXACTLY:**
- Labels are hardcoded bilingual strings (not imported from content files) — this is the established pattern
- The `story` labels must match what is displayed on the page: `"Mon Parcours"` (FR) and `"My Story"` (EN)
  - Source: `content.fr.narrative.title` = `"Mon Parcours"` and `content.en.narrative.title` = `"My Story"` (set in Story 6.3)
- Add entry AFTER `case-studies` in both arrays — section order must match page DOM order
- The `id` must exactly match the `id` prop used on the `<Section>` component in both page files

**Current ToC state (to understand insertion point):**
```typescript
// FR array currently ends with:
{ id: 'case-studies', label: 'Réalisations' },
// Add here:
{ id: 'story', label: 'Mon Parcours' },

// EN array currently ends with:
{ id: 'case-studies', label: 'Case Studies' },
// Add here:
{ id: 'story', label: 'My Story' },
```

**KeyboardNav.astro sectionCodeMap — current state:**
```typescript
const sectionCodeMap: Record<string, string> = {
  Digit1: 'links',
  Digit2: 'skills',
  Digit3: 'experience',
  Digit4: 'projects',
  Digit5: 'cv',
  Digit6: 'case-studies',
  // Add:
  Digit7: 'story',
};
```

**AZERTY note (critical — already in codebase):**
- The existing code uses `event.code` (not `event.key`) for digit detection — this handles AZERTY layouts correctly
- `Digit7` is the correct key code regardless of keyboard layout
- The AZERTY guard (`!event.ctrlKey && !event.metaKey && !event.altKey`) is already in place — no change needed there

**Overlay update — exact string to change:**
```html
<!-- BEFORE -->
<dt><kbd>1</kbd>–<kbd>6</kbd></dt>
<!-- AFTER -->
<dt><kbd>1</kbd>–<kbd>7</kbd></dt>
```

**CSS location — CRITICAL (learned from Story 6.2):**
- CSS lives in `public/styles/base.css` and `public/styles/styled.css` (NOT `src/styles/`)
- No CSS changes are needed for this story — all changed elements (ToC items, nav links) use existing classes and inherit styling
- The `.language-switch` class is already styled in both base and styled CSS from previous stories
- The `<link rel="alternate">` and `<link rel="canonical">` are `<head>` elements — no styling needed

**Base.astro SEO enhancement:**
- Current `Props` interface: `{ title?: string; description?: string }`
- Addition: `alternates?: Array<{ hreflang: string; href: string }>`
- Render position: in `<head>`, after the `<meta name="description">` tag
- Template pattern:
```astro
{alternates && alternates.map(alt => (
  <link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
))}
<link rel="canonical" href={Astro.url.href} />
```
- `Astro.url.href` gives the full canonical URL (e.g., `https://maxiim3.github.io/cases/sestini-pizza`)
- The `alternates` array is optional — existing pages that don't pass it still render correctly

**Case study page slug variable:**
- In `src/pages/cases/[slug].astro`, `slug` is already declared via `const { slug } = Astro.params;`
- Use it directly in template literal: `` `/en/cases/${slug}` ``
- The site base URL is `https://maxiim3.github.io` (from `astro.config.mjs`)

### Current Case Study Page Structure (to understand where to insert)

**FR case study page breadcrumb (current):**
```astro
<nav class="case-study-breadcrumb" aria-label="Fil d'Ariane">
  <a href="/">← Retour</a>
</nav>
```

**FR case study page breadcrumb (target):**
```astro
<nav class="case-study-breadcrumb" aria-label="Fil d'Ariane">
  <a href="/">← Retour</a>
  <a href={`/en/cases/${slug}`} lang="en" class="language-switch">EN</a>
</nav>
```

**EN case study page breadcrumb (current):**
```astro
<nav class="case-study-breadcrumb" aria-label="Breadcrumb">
  <a href="/en/">← Back</a>
</nav>
```

**EN case study page breadcrumb (target):**
```astro
<nav class="case-study-breadcrumb" aria-label="Breadcrumb">
  <a href="/en/">← Back</a>
  <a href={`/cases/${slug}`} lang="fr" class="language-switch">FR</a>
</nav>
```

**Base tag for case study pages (target):**
```astro
<!-- FR case study -->
<Base
  title={caseStudy.title}
  description={caseStudy.context}
  alternates={[{ hreflang: 'en', href: `https://maxiim3.github.io/en/cases/${slug}` }]}
>

<!-- EN case study -->
<Base
  title={caseStudy.title}
  description={caseStudy.context}
  alternates={[{ hreflang: 'fr', href: `https://maxiim3.github.io/cases/${slug}` }]}
>
```

### SEO Rationale

- `hreflang` tags tell search engines which page is the alternate language version
- `canonical` tells search engines the preferred URL for this page
- The `x-default` hreflang (for undefined language) is NOT required for a 2-language site; FR/EN only is sufficient
- Using `Astro.url.href` for canonical ensures the correct URL is always used regardless of environment
- Slugs are confirmed identical between FR and EN content (`sestini-pizza`, `jamais-203-productions`) — cross-language linking is safe

### Project Structure Notes

- No new files — all changes are modifications to existing files
- No new directories
- No new CSS selectors — `.language-switch` already exists from Story 1.5/1.4

### Critical Constraints

- **DO NOT** change the keyboard shortcut mappings for digits 1–6 — only add `Digit7`
- **DO NOT** modify page content or content data files — this story is navigation and SEO only
- **DO NOT** modify CSS files — no new styling needed
- **DO NOT** modify test files unless a test explicitly covers ToC or keyboard shortcut counts

### File Modification Summary

| File | Action | What Changes |
|------|--------|--------------|
| `src/components/TableOfContents.astro` | Edit | Add `story` entry to FR and EN arrays |
| `src/components/KeyboardNav.astro` | Edit | Add `Digit7: 'story'`, update `1-6` → `1-7` in overlay |
| `src/layouts/Base.astro` | Edit | Add optional `alternates` prop + render `<link rel="alternate">` + canonical |
| `src/pages/cases/[slug].astro` | Edit | Add language switch link + pass alternates to Base |
| `src/pages/en/cases/[slug].astro` | Edit | Add language switch link + pass alternates to Base |

### Previous Story Intelligence

**Story 6.3 learnings:**
- CSS lives in `public/styles/` NOT `src/styles/`
- Pre-existing 3 failing tests in `css-toggle-component.test.ts` are unrelated — don't touch them
- Flat component structure — no new directories

**Story 6.2 learnings:**
- Case study slugs are identical in FR and EN: `sestini-pizza`, `jamais-203-productions`
- Case study pages use `Base` layout directly (no Header component) — language switch must be inlined in the breadcrumb nav
- Component development is straightforward at this project scale

**Git patterns (commits 6.1, 6.2, 6.3):**
- Commits labeled by story number
- Changes are focused — only touch the files declared in the story

### Testing

- Run `bun run build` to verify TypeScript compilation and static generation
- Run `bun test` to confirm all tests pass (161 passing + 3 known failures)
- Manual verification:
  - Visit FR page: ToC should show "Mon Parcours" as last entry
  - Visit EN page: ToC should show "My Story" as last entry
  - Press `7` on either page: should focus `#story` section heading
  - Press `?` on either page: overlay should show `1–7` range
  - Visit `/cases/sestini-pizza`: should have EN language switch link
  - Visit `/en/cases/sestini-pizza`: should have FR language switch link
  - Inspect `<head>` of case study pages: should have `hreflang` and `canonical` tags

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 6 - Story 6.4]
- [Source: src/components/TableOfContents.astro — current structure with 6 entries]
- [Source: src/components/KeyboardNav.astro — sectionCodeMap Digit1-Digit6]
- [Source: src/pages/cases/[slug].astro — FR case study detail page]
- [Source: src/pages/en/cases/[slug].astro — EN case study detail page]
- [Source: src/layouts/Base.astro — current Props interface]
- [Source: astro.config.mjs — site URL https://maxiim3.github.io]
- [Source: src/content/fr.ts — narrative.title = "Mon Parcours"]
- [Source: src/content/en.ts — narrative.title = "My Story"]
- [Source: _bmad-output/implementation-artifacts/6-3-professional-narrative-story-section.md — section id="story"]
- [Source: _bmad-output/implementation-artifacts/6-2-case-study-display-component-routing.md — slug parity, case study page structure]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None — clean implementation, no blockers encountered.

### Completion Notes List

- Task 1: Added `{ id: 'story', label: 'Mon Parcours' }` (FR) and `{ id: 'story', label: 'My Story' }` (EN) after `case-studies` entries in `TableOfContents.astro`
- Task 2: Added `Digit7: 'story'` to `sectionCodeMap` in `KeyboardNav.astro`; updated overlay display from `1–6` to `1–7`
- Task 3: Extended `Base.astro` Props with optional `alternates` array; renders `<link rel="alternate">` tags and unconditional `<link rel="canonical">` in `<head>`
- Task 4: FR case study page now passes `alternates` to Base and includes EN language switch link in breadcrumb nav
- Task 5: EN case study page now passes `alternates` to Base and includes FR language switch link in breadcrumb nav
- Task 6: `bun run build` succeeded (0 TS errors, 6 pages generated); `bun test` — 161 pass, 3 fail (all 3 are pre-existing known failures in `css-toggle-component.test.ts`, unrelated to this story)

### File List

- `src/components/TableOfContents.astro` — added `story` entry to FR and EN arrays
- `src/components/KeyboardNav.astro` — added `Digit7: 'story'`, updated overlay `1–7`
- `src/layouts/Base.astro` — added `alternates` prop, hreflang links, canonical tag
- `src/pages/cases/[slug].astro` — added EN language switch in breadcrumb, passes alternates to Base
- `src/pages/en/cases/[slug].astro` — added FR language switch in breadcrumb, passes alternates to Base
- `_bmad-output/implementation-artifacts/sprint-status.yaml` — story status synced to `review`

### Change Log

- 2026-02-21: Story 6.4 implemented — navigation and bilingual integration for story section and case studies (5 files modified)
- 2026-02-21: Code review fixes — added self-referential hreflang to FR and EN case study pages; fixed stale 1-6 comment in KeyboardNav.astro; documented sprint-status.yaml in File List
