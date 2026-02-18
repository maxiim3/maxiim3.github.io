# Story 4.2: Professional Links & Contact

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a potential client or employer,
I want to access the developer's GitHub, LinkedIn, and email,
so that I can review their work or reach out.

## Acceptance Criteria

### 1. Professional Links Verified in LinksList Component

**Given** professional links are already in LinksList component (Epic 1)
**When** I verify the implementation
**Then** GitHub link is present and functional
**And** LinkedIn link is present and functional
**And** email link uses `mailto:` protocol
**And** all links open in the expected manner (email client for mailto, new tab for external links)

### 2. Email Link Is Frictionless

**Given** the email link needs to be frictionless
**When** a visitor clicks the email link
**Then** their default email client opens with the address pre-filled
**And** no contact form, captcha, or intermediate page appears
**And** the interaction is instant and direct

### 3. External Links Have Proper Attributes

**Given** external links need proper attributes
**When** rendering GitHub and LinkedIn links
**Then** they include `rel="noopener noreferrer"` for security
**And** they use `target="_blank"` for opening in new tab
**And** they have clear labels indicating they're external links

### 4. Link Accessibility

**Given** link accessibility is required
**When** a screen reader user encounters the links
**Then** each link has descriptive text (not just "GitHub" but context like "GitHub profile" or "View GitHub profile")
**And** keyboard users can tab through all links
**And** focus indicators are visible on all links

### 5. Links Work in Both Visual States

**Given** links work in both visual states
**When** the page is in raw state
**Then** links use browser default blue with underline
**And** when the page is in styled state
**Then** links use the accent color `#2563eb` with AAA contrast
**And** functionality is identical in both states

## Tasks / Subtasks

- [x] Task 1: Enhance link labels for accessibility (AC: #3, #4)
  - [x] 1.1 Update `fr.ts` links array: add descriptive labels and external link indicators
  - [x] 1.2 Update `en.ts` links array: add descriptive labels and external link indicators
  - [x] 1.3 Update `LinksList.astro`: add visual external link indicator (e.g., `↗` suffix or sr-only text)

- [x] Task 2: Verify existing implementation (AC: #1, #2, #5)
  - [x] 2.1 Verify GitHub link present and opens in new tab with `rel="noopener noreferrer"`
  - [x] 2.2 Verify LinkedIn link present and opens in new tab with `rel="noopener noreferrer"`
  - [x] 2.3 Verify email `mailto:` link opens email client directly (no target="_blank")
  - [x] 2.4 Verify links render correctly in raw state (default browser styles)
  - [x] 2.5 Verify links render correctly in styled state (accent color `#2563eb`)

- [x] Task 3: Add screen reader enhancements to LinksList (AC: #4)
  - [x] 3.1 Add visually hidden "(external link, opens in new tab)" text for external links
  - [x] 3.2 Ensure aria-label on `<nav>` is correct in both locales

- [x] Task 4: Build verification (AC: all)
  - [x] 4.1 Run `bun run build` — zero TypeScript errors
  - [x] 4.2 Both `/index.html` and `/en/index.html` generated
  - [x] 4.3 Manual test: all links functional in both raw and styled states

## Dev Notes

### Epic 4 Context

Story 4.2 is the second story in Epic 4 (Downloads & Professional Contact).

**Epic 4 progression:**
- Story 4.1: CV Download Component with PDF Files — **DONE**
- **Story 4.2: Professional Links & Contact ← THIS STORY**
- Story 4.3: NIP-05 Self-Hosted Nostr Identity

**FR coverage this story:**
- FR25: Email contact via mailto link
- FR26: Access GitHub, LinkedIn, and professional network links

**NFR coverage:**
- NFR7: WCAG AAA compliance (contrast ratio 7:1 minimum)
- NFR8: All interactive elements reachable via keyboard with visible focus indicators
- NFR12: Touch targets minimum 44x44px on mobile

### Key Implementation Facts

**LinksList Component Already Exists (Epic 1, Story 1.4)**

The `LinksList.astro` component was created in Story 1.4. Current implementation at `src/components/LinksList.astro`:

```astro
---
import type { Link } from '../content/types';

interface Props {
  links: Link[];
}

const { links } = Astro.props;

const currentLocale = Astro.currentLocale || 'fr';
const ariaLabel = currentLocale === 'fr'
  ? 'Liens professionnels'
  : 'Professional links';
---

<nav class="links-list" aria-label={ariaLabel}>
  <ul>
    {links.map(link => (
      <li>
        <a
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

**What's already correct:**
- ✅ `<nav>` with bilingual `aria-label`
- ✅ Semantic `<ul>/<li>/<a>` structure
- ✅ `mailto:` links don't get `target="_blank"` or `rel` attributes
- ✅ External links get `target="_blank"` and `rel="noopener noreferrer"`
- ✅ All 3 links present: GitHub, LinkedIn, Email

**What needs enhancement:**
- ❌ Link labels are bare: "GitHub", "LinkedIn", "Email" — AC #4 requires descriptive text for screen readers
- ❌ No visual or SR indication that links are external (open in new tab)
- Consider: add `↗` visual indicator or sr-only text "(opens in new tab)" for external links

**Content Data — Current State (`fr.ts` and `en.ts`):**

```typescript
links: [
  { label: 'GitHub', url: 'https://github.com/maxiim3', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/max-graux', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:max@maxgraux.dev', icon: 'email' },
]
```

The `icon` field exists in the type but is optional and not rendered by the component. Keep it for potential future use.

**Link Content Type — No Changes Needed:**

```typescript
export interface Link {
  label: string;
  url: string;
  icon?: string;
}
```

The `label` field will be updated in `fr.ts`/`en.ts` to be more descriptive. The type itself needs no modification.

**CSS — Already Handled by Global Styles:**

- Raw state: Links inherit browser default styling (blue, underline) — no `.links-list` specific CSS in `base.css`
- Styled state: `html[data-styled] a` in `styled.css` applies accent color `#2563eb` and removes underline, with hover underline
- Focus: `:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }` in base layer covers all links

No new CSS is needed for this story.

**Screen Reader Enhancement Pattern:**

For external links, use a visually hidden `<span>` appended to the link text:

```html
<a href="https://github.com/maxiim3" target="_blank" rel="noopener noreferrer">
  GitHub
  <span class="sr-only"> (external link, opens in new tab)</span>
</a>
```

A `.sr-only` class must be added to `base.css` if it doesn't exist yet. Check before adding.

### Architecture Compliance

| Rule | Compliance |
|------|------------|
| PascalCase Astro component | ✅ `LinksList.astro` (already exists) |
| No component-scoped `<style>` | ✅ All CSS in public/styles/ |
| Semantic HTML — `<a>` for navigation | ✅ Links use `<a>` tags |
| Visible focus indicators | ✅ Global `:focus-visible` rule in base.css |
| Touch targets ≥ 44px | ⚠️ Verify — links in list may need padding for touch targets |
| No new dependencies | ✅ Pure HTML + CSS only |
| `rel="noopener noreferrer"` on external links | ✅ Already in component |
| `target="_blank"` on external links | ✅ Already in component |

### Technical Requirements

#### Changes Required

**`src/content/fr.ts`** (MODIFY — update link labels):

Update the `links` array labels to be more descriptive:

```typescript
links: [
  {
    label: 'GitHub',
    url: 'https://github.com/maxiim3',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/max-graux',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:max@maxgraux.dev',
    icon: 'email',
  },
],
```

Label text stays short and clear. The descriptive accessibility context goes in the component, not in the data — this keeps content files clean and avoids duplicating SR-only text in both language files.

**`src/content/en.ts`** (VERIFY — already identical structure):

Same labels. No changes needed unless making labels bilingual (currently both use English labels: "GitHub", "LinkedIn", "Email").

**`src/components/LinksList.astro`** (MODIFY — add SR accessibility):

```astro
---
import type { Link } from '../content/types';

interface Props {
  links: Link[];
}

const { links } = Astro.props;

const currentLocale = Astro.currentLocale || 'fr';
const ariaLabel = currentLocale === 'fr'
  ? 'Liens professionnels'
  : 'Professional links';

const externalLinkSrText = currentLocale === 'fr'
  ? '(lien externe, ouvre dans un nouvel onglet)'
  : '(external link, opens in new tab)';
---

<nav class="links-list" aria-label={ariaLabel}>
  <ul>
    {links.map(link => {
      const isExternal = !link.url.startsWith('mailto:');
      return (
        <li>
          <a
            href={link.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {link.label}
            {isExternal && <span class="sr-only"> {externalLinkSrText}</span>}
          </a>
        </li>
      );
    })}
  </ul>
</nav>
```

**`public/styles/base.css`** (MODIFY — add `.sr-only` utility if not present):

```css
/* Visually hidden — screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

**`public/styles/base.css`** (VERIFY/ADD — links-list touch targets):

The links inside `.links-list` may not meet the 44x44px touch target minimum. If list links don't have enough padding, add:

```css
.links-list a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.25rem 0;
}
```

Check in dev tools before adding — the list items might already provide sufficient hit area.

### Library & Framework Requirements

**NO new dependencies.** This story uses only:
- Standard HTML `<a>` attributes (`target`, `rel`)
- CSS `.sr-only` utility (standard accessibility pattern)
- Astro static components — no client-side JS

### File Structure Requirements

**Files to MODIFY:**
```
src/
  components/
    LinksList.astro       # Add SR-only text for external links
public/
  styles/
    base.css              # Add .sr-only class if not present, verify link touch targets
```

**Files to VERIFY (no changes expected):**
```
src/
  content/
    types.ts              # Link interface — already correct
    fr.ts                 # Links data — verify labels
    en.ts                 # Links data — verify labels
  pages/
    index.astro           # Already imports and renders LinksList
    en/
      index.astro         # Already imports and renders LinksList
public/
  styles/
    styled.css            # Global a styles already handle styled state
```

**Files NOT to modify:**
- `src/layouts/Base.astro` — no changes needed
- `src/components/Header.astro` — not related
- `src/components/CvDownload.astro` — separate concern (Story 4.1)
- `src/content/types.ts` — Link interface already covers everything needed

### Testing Requirements

**Manual Testing Checklist:**

1. **Link Functionality:**
   - [ ] Click GitHub link → opens `https://github.com/maxiim3` in new tab
   - [ ] Click LinkedIn link → opens `https://linkedin.com/in/max-graux` in new tab
   - [ ] Click Email link → opens default email client with `max@maxgraux.dev`
   - [ ] Email link does NOT open in new tab

2. **Link Attributes:**
   - [ ] GitHub `<a>`: has `target="_blank"`, `rel="noopener noreferrer"`
   - [ ] LinkedIn `<a>`: has `target="_blank"`, `rel="noopener noreferrer"`
   - [ ] Email `<a>`: has NO `target`, NO `rel` attributes

3. **Accessibility:**
   - [ ] Tab through all links — each receives visible focus indicator
   - [ ] Screen reader: GitHub link announces "GitHub (external link, opens in new tab)"
   - [ ] Screen reader: Email link announces "Email" (no external indicator)
   - [ ] `<nav>` has `aria-label` matching current locale

4. **Touch Targets:**
   - [ ] Dev tools mobile emulation: link hit areas are ≥ 44px tall
   - [ ] Links easy to tap on mobile

5. **Raw State:**
   - [ ] Links visible with browser default blue + underline
   - [ ] All links functional

6. **Styled State:**
   - [ ] Links use accent color `#2563eb`
   - [ ] Hover changes to `#1d4ed8` with underline
   - [ ] All links functional

7. **Both Locales:**
   - [ ] FR page (`/`): all 3 links visible and functional
   - [ ] EN page (`/en/`): all 3 links visible and functional
   - [ ] SR text matches current locale language

8. **Build:**
   - [ ] `bun run build` → zero TypeScript errors
   - [ ] Both `/index.html` and `/en/index.html` generated

### Previous Story Intelligence

**From Story 4.1 (completed 2026-02-18):**
- CSS at `public/styles/` (confirmed — NOT `src/styles/`)
- Build command: `bun run build`
- Import pattern FR page: `from '../components/...'`
- Import pattern EN page: `from '../../components/...'`
- Code review found: focus-visible override needed in styled state (already added)
- Commit pattern: `"4.1"` — use `"4.2"` for this story

**From Story 1.4 (content display):**
- `LinksList.astro` created with props-based design
- Links section uses `<Section id="links" heading="Liens">` (FR) / `heading="Links"` (EN)
- Keyboard shortcut `1` navigates to `#links` section

**From Story 3.2 (keyboard shortcuts):**
- Section IDs: `links` is the first section — shortcut `1` jumps there
- No changes needed to keyboard navigation

### Git Intelligence

**Recent commits (relevant context):**
- `33d172b` — `4.1` — Story 4.1: CvDownload component, PDFs, CSS updates
- `eb9242d` — `3.2, 3.3, add 6, story 4.1` — Multiple story implementations
- `8b01904` — `3.1/3.2` — KeyboardNav and ToC created

**Patterns to follow:**
- Commit message: `"4.2"`
- Minimal changes — this is a verification + enhancement story, not a full build

### Project Structure Notes

**Alignment with unified project structure:**
- `LinksList.astro` stays at `src/components/` (flat, no subdir) ✅
- CSS additions go in `public/styles/base.css` ✅
- No new files created — only modifications ✅

**No conflicts detected:**
- `.sr-only` class doesn't conflict with anything (standard pattern)
- `.links-list a` selector is specific enough to not affect other components

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 4.2: Professional Links & Contact]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 4: Downloads & Professional Contact]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions]
- [Source: _bmad-output/planning-artifacts/architecture.md#Component Organization]
- [Source: _bmad-output/implementation-artifacts/4-1-cv-download-component-pdf-files.md — Previous story intelligence]
- [Source: src/components/LinksList.astro — Current component implementation]
- [Source: src/content/fr.ts — Current FR link data]
- [Source: src/content/en.ts — Current EN link data]
- [Source: src/content/types.ts — Link interface definition]
- [Source: public/styles/base.css — Current base CSS layer]
- [Source: public/styles/styled.css — Current styled CSS layer]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

None — clean implementation, no debugging required.

### Completion Notes List

- Updated `fr.ts` link labels: "GitHub" → "Profil GitHub", "LinkedIn" → "Profil LinkedIn" (AC #4: descriptive text)
- Updated `en.ts` link labels: "GitHub" → "GitHub Profile", "LinkedIn" → "LinkedIn Profile"
- Enhanced `LinksList.astro`: added bilingual sr-only text "(external link, opens in new tab)" for external links via `<span class="sr-only">` (AC #3, #4)
- Added `.sr-only` utility class to `base.css` (standard visually-hidden pattern)
- Added `.links-list a` touch target CSS with `min-height: 44px` (NFR12)
- Verified all link attributes: `target="_blank"` + `rel="noopener noreferrer"` on external, none on mailto (AC #1, #2, #3)
- Verified both raw and styled states render correctly (AC #5)
- Build passes with zero errors, both locale pages generated (Task 4)

### Change Log

- 2026-02-18: Story 4.2 implementation complete — enhanced link accessibility and verified existing implementation
- 2026-02-18: Code review fixes applied — visual ↗ indicator for external links, descriptive email labels (FR/EN), email sr-only context, LinkedIn www. prefix, links-list focus-visible override in styled.css

### File List

**Modified:**
- `src/content/fr.ts` — Updated link labels to descriptive text
- `src/content/en.ts` — Updated link labels to descriptive text
- `src/components/LinksList.astro` — Added sr-only external link indicators, bilingual
- `public/styles/base.css` — Added `.sr-only` utility class and `.links-list a` touch targets
- `public/styles/styled.css` — Added `.links-list a:focus-visible` override (code review fix)
- `_bmad-output/implementation-artifacts/sprint-status.yaml` — Updated story status to "review" (workflow artifact)
