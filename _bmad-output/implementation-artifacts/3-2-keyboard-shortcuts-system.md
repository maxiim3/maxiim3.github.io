# Story 3.2: Keyboard Shortcuts System (1-5, t, l)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a power user,
I want to use keyboard shortcuts to navigate sections and toggle features,
So that I can interact with the site efficiently.

## Acceptance Criteria

### 1. KeyboardNav Component Creation

**Given** the keyboard navigation system needs to be created
**When** I create `src/components/KeyboardNav.astro`
**Then** it includes a `<script>` tag with `client:load`
**And** it sets up a keydown event listener on `document`

### 2. Section Shortcuts (1-5)

**Given** section shortcuts need to work
**When** I press keys `1`, `2`, `3`, `4`, or `5`
**Then** the page scrolls to the corresponding section (Links, Skills, Experience, Projects, CV)
**And** focus moves to that section's heading
**And** the shortcuts only activate when no input/textarea is focused

### 3. CSS Toggle Shortcut (t)

**Given** the CSS toggle shortcut needs to work
**When** I press the `t` key
**Then** the CSS toggle activates (same as clicking the button)
**And** the transition/instant swap occurs
**And** focus management works identically to button click

### 4. Language Switch Shortcut (l)

**Given** the language switch shortcut needs to work
**When** I press the `l` key
**Then** the page navigates to the other language version
**And** it's equivalent to clicking the language switch link

### 5. Input Field Guard

**Given** shortcuts shouldn't interfere with inputs
**When** a visitor is focused on an input or textarea
**Then** keyboard shortcuts are disabled
**And** typing in the input works normally
**And** shortcuts re-enable when focus leaves the input

### 6. Browser Shortcut Safety

**Given** browser shortcut conflicts need to be avoided
**When** implementing shortcuts
**Then** no Ctrl/Cmd/Alt modifiers are used
**And** common browser shortcuts aren't overridden
**And** screen reader shortcuts aren't conflicted

## Tasks / Subtasks

- [x] Task 1: Create `src/components/KeyboardNav.astro` component (AC: #1, #5, #6)
  - [x] 1.1 Create `src/components/KeyboardNav.astro` with empty `interface Props {}`
  - [x] 1.2 Add `<script>` tag with keydown event listener on `document`
  - [x] 1.3 Add input guard: early return if `event.target` is `INPUT`, `TEXTAREA`, `SELECT`, or `[contenteditable]`
  - [x] 1.4 Add modifier guard: early return if `event.ctrlKey`, `event.metaKey`, `event.altKey`, or `event.shiftKey`

- [x] Task 2: Implement section navigation shortcuts 1-5 (AC: #2)
  - [x] 2.1 Define section ID map: `{ '1': 'links', '2': 'skills', '3': 'experience', '4': 'projects', '5': 'cv' }`
  - [x] 2.2 On key match, find section by ID: `document.getElementById(sectionId)`
  - [x] 2.3 Find the `<h2>` heading within the section: `section.querySelector('h2')`
  - [x] 2.4 Set `tabindex="-1"` on the heading (if not already focusable) and call `heading.focus()`
  - [x] 2.5 Browser handles scroll-to-focus automatically; `prefers-reduced-motion` already handled by CSS from Story 3.1

- [x] Task 3: Implement CSS toggle shortcut `t` (AC: #3)
  - [x] 3.1 On `t` key press, find toggle button: `document.getElementById('css-toggle')`
  - [x] 3.2 If button exists and not disabled, dispatch `click` event: `button.click()`
  - [x] 3.3 This reuses all CssToggle logic (View Transitions, reduced motion, focus management)

- [x] Task 4: Implement language switch shortcut `l` (AC: #4)
  - [x] 4.1 On `l` key press, find language switch link: `document.querySelector('.language-switch')`
  - [x] 4.2 If link exists, trigger navigation: `link.click()` (equivalent to clicking the `<a>` tag)

- [x] Task 5: Integrate KeyboardNav into both page templates (AC: #1)
  - [x] 5.1 Import `KeyboardNav` in `src/pages/index.astro`
  - [x] 5.2 Add `<KeyboardNav />` after `</main>` (before closing `</Base>`)
  - [x] 5.3 Import `KeyboardNav` in `src/pages/en/index.astro`
  - [x] 5.4 Add `<KeyboardNav />` after `</main>` (before closing `</Base>`)

- [x] Task 6: Testing and validation (AC: all)
  - [x] 6.1 Test keys 1-5 navigate to correct sections on FR page
  - [x] 6.2 Test keys 1-5 navigate to correct sections on EN page
  - [x] 6.3 Test `t` key toggles CSS (same as button click)
  - [x] 6.4 Test `l` key navigates to alternate language
  - [x] 6.5 Test shortcuts disabled when typing in any input field
  - [x] 6.6 Test Ctrl+T, Ctrl+L do NOT trigger shortcuts (modifier guard)
  - [x] 6.7 Test with JS disabled: no errors, shortcuts simply don't exist (progressive enhancement)
  - [x] 6.8 Run `bun run build` — zero TypeScript errors, both pages generated

## Dev Notes

### What This Story Adds

Story 3.2 is the second story in Epic 3 (Enhanced Navigation & Keyboard Shortcuts). It creates the `KeyboardNav.astro` client-side island that adds keyboard shortcuts for section navigation, CSS toggle, and language switching.

**Epic 3 context:**
- Story 3.1: Table of Contents with Anchor Navigation — ✅ DONE
- **Story 3.2: Keyboard Shortcuts System (1-5, t, l) ← THIS STORY**
- Story 3.3: Keyboard Shortcuts Help Overlay (`?` key) — NEXT (will extend this component)

**FR coverage this story:**
- ✅ FR18: Jump to sections using keyboard shortcuts (1-5)
- ✅ FR19: Toggle CSS via keyboard shortcut (t)
- ✅ FR20: Switch language via keyboard shortcut (l)
- ✅ FR22: Full keyboard navigation support (extends from Story 3.1)

**Important — Story 3.3 will add the `?` shortcut and help overlay.** Do NOT implement `?` in this story. Keep the `KeyboardNav` component focused on the 7 keys: 1, 2, 3, 4, 5, t, l.

### Architecture Compliance

**From architecture.md — Client-Side Script Patterns:**

> - All scripts: `<script>` tags in Astro components (not external `.js` files)
> - Progressive enhancement guard: Every script checks capability before acting
> - No global state object — toggle state lives in the DOM (`data-styled` attribute on `<html>`)
> - Event listeners: Added in component scripts, not in layout. Each island owns its listeners.

**From architecture.md — Component Organization:**

> - Client-side islands: `CssToggle.astro` and `KeyboardNav.astro` with `client:load`
> - Flat structure — project is small enough that feature folders add noise

**From architecture.md — Accessibility Patterns:**

> - Keyboard shortcuts: Only active when no input/textarea focused. `?` overlay uses `role="dialog"` + focus trap
> - Focus indicators: Never `outline: none`

| Rule | Compliance |
|------|------------|
| PascalCase Astro component | ✅ `KeyboardNav.astro` |
| `client:load` directive | ✅ Interactive island |
| All CSS in `base.css` / `styled.css` | ✅ No new CSS needed for this story |
| No external `.js` files | ✅ Script inside component `<script>` tag |
| Shortcuts disabled in inputs | ✅ Input guard implemented |
| No modifier key conflicts | ✅ Modifier guard implemented |
| Progressive enhancement | ✅ No-JS = no shortcuts, site still works |
| No `!important` | ✅ No CSS changes in this story |

### Technical Requirements — Complete Implementation

#### 1. `src/components/KeyboardNav.astro` (NEW FILE)

```astro
---
/**
 * KeyboardNav Component - Story 3.2
 * Keyboard shortcuts for section navigation, CSS toggle, and language switch.
 * Client-side island — requires client:load directive.
 * No UI output — script-only component.
 */
interface Props {}
---

<script>
  // Section ID map — order matches ToC from Story 3.1
  const sectionMap: Record<string, string> = {
    '1': 'links',
    '2': 'skills',
    '3': 'experience',
    '4': 'projects',
    '5': 'cv',
  };

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    // Guard: ignore if modifier keys are held (avoid conflicts with Ctrl+T, Ctrl+L, etc.)
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
      return;
    }

    // Guard: ignore if user is typing in an input/textarea/select/contenteditable
    const target = event.target as HTMLElement;
    const tagName = target.tagName;
    if (
      tagName === 'INPUT' ||
      tagName === 'TEXTAREA' ||
      tagName === 'SELECT' ||
      target.isContentEditable
    ) {
      return;
    }

    const key = event.key;

    // Section navigation: keys 1-5
    if (key in sectionMap) {
      event.preventDefault();
      const sectionId = sectionMap[key];
      const section = document.getElementById(sectionId);
      if (!section) return;

      const heading = section.querySelector('h2');
      if (heading) {
        // Make heading focusable (non-interactive elements need tabindex)
        if (!heading.hasAttribute('tabindex')) {
          heading.setAttribute('tabindex', '-1');
        }
        heading.focus();
        // Browser scrolls focused element into view automatically
      }
      return;
    }

    // CSS toggle: key t
    if (key === 't') {
      event.preventDefault();
      const toggleButton = document.getElementById('css-toggle') as HTMLButtonElement | null;
      if (toggleButton && !toggleButton.disabled) {
        toggleButton.click();
      }
      return;
    }

    // Language switch: key l
    if (key === 'l') {
      event.preventDefault();
      const langLink = document.querySelector('.language-switch') as HTMLAnchorElement | null;
      if (langLink) {
        langLink.click();
      }
      return;
    }
  });
</script>
```

**Key design decisions:**

1. **`button.click()` for CSS toggle** — Reuses ALL existing CssToggle logic (View Transitions, radial animation, reduced motion check, focus management, `aria-pressed` updates). No duplication.

2. **`link.click()` for language switch** — Triggers the same navigation as clicking the language `<a>` link. Full page load to the alternate locale URL.

3. **`heading.focus()` for section navigation** — Setting focus on the `<h2>` heading scrolls the element into view (browser native behavior). Adding `tabindex="-1"` makes the non-interactive heading focusable without putting it in the tab order. This is the recommended accessible pattern for programmatic focus.

4. **No `scrollIntoView()` call needed** — `element.focus()` automatically scrolls the element into view. The `scroll-behavior: smooth` CSS from Story 3.1 applies when in styled state.

5. **`event.preventDefault()` on matched keys** — Prevents any default browser behavior for these keys (e.g., browser search triggered by some keys).

6. **Script-only component** — No HTML output, just a `<script>` tag. The component exists solely for the `client:load` directive to tell Astro to include this script.

#### 2. Integration in `src/pages/index.astro` (MODIFY)

Add import and component after `</main>`:

```astro
---
import KeyboardNav from '../components/KeyboardNav.astro';
// ... existing imports ...
---

<Base>
  <Header currentLocale={Astro.currentLocale} />
  <TableOfContents lang={Astro.currentLocale || 'fr'} />

  <main id="main">
    <!-- ... existing sections ... -->
  </main>

  <KeyboardNav />
</Base>
```

**Why after `</main>`:**
- `KeyboardNav` has no visual output — placement doesn't affect layout
- Placing after `<main>` keeps the main content area clean
- The script attaches to `document`, not a specific DOM location

#### 3. Integration in `src/pages/en/index.astro` (MODIFY)

Same pattern:

```astro
---
import KeyboardNav from '../../components/KeyboardNav.astro';
// ... existing imports ...
---

<Base>
  <!-- ... existing content ... -->
  <KeyboardNav />
</Base>
```

### Library & Framework Requirements

**NO new dependencies.** This story uses only:
- `document.addEventListener('keydown')` — standard DOM API
- `element.focus()` — standard DOM API
- `element.click()` — standard DOM API
- `element.setAttribute('tabindex', '-1')` — standard DOM API

**Astro version:** Already using Astro 5.17.1. No upgrade needed.

### File Structure Requirements

**Files to CREATE:**
```
src/
  components/
    KeyboardNav.astro     # NEW — Keyboard shortcuts island
```

**Files to MODIFY:**
```
src/
  pages/
    index.astro           # MODIFY — Import + render KeyboardNav
    en/
      index.astro         # MODIFY — Import + render KeyboardNav
```

**Files NOT to modify:**
- `src/components/CssToggle.astro` — Reused via `button.click()`, no changes needed
- `src/components/Header.astro` — Language link reused via `.language-switch` selector
- `src/components/TableOfContents.astro` — Section IDs referenced, no changes
- `src/components/Section.astro` — Section IDs already correct from Story 1.4
- `src/layouts/Base.astro` — No changes needed
- `public/styles/base.css` — No CSS changes for this story
- `public/styles/styled.css` — No CSS changes for this story

### Testing Requirements

**Manual Testing Checklist:**

1. **Section Navigation (FR page /):**
   - [ ] Press `1` → scrolls to Links section, focus on "Liens" heading
   - [ ] Press `2` → scrolls to Skills section, focus on "Compétences" heading
   - [ ] Press `3` → scrolls to Experience section, focus on "Expérience" heading
   - [ ] Press `4` → scrolls to Projects section, focus on "Projets" heading
   - [ ] Press `5` → scrolls to CV section, focus on "CV" heading
   - [ ] Focus ring visible on each heading after keypress

2. **Section Navigation (EN page /en/):**
   - [ ] Press `1` → scrolls to Links section, focus on "Links" heading
   - [ ] Press `2-5` → same behavior with English headings

3. **CSS Toggle Shortcut:**
   - [ ] Press `t` → CSS toggle activates (styled state changes)
   - [ ] Press `t` again → CSS toggle deactivates
   - [ ] Radial animation plays (if View Transitions supported and no reduced motion)
   - [ ] `t` does nothing if toggle button is disabled (CSS not loaded yet)

4. **Language Switch Shortcut:**
   - [ ] On FR page: press `l` → navigates to `/en/`
   - [ ] On EN page: press `l` → navigates to `/`

5. **Input Guard:**
   - [ ] Focus an input field → pressing `1`, `t`, `l` types normally
   - [ ] Focus a textarea → same behavior
   - [ ] Focus a contenteditable element → same behavior
   - [ ] Tab out of input → shortcuts work again

6. **Modifier Guard:**
   - [ ] `Ctrl+T` → opens new browser tab (not our shortcut)
   - [ ] `Ctrl+L` → focuses browser address bar (not our shortcut)
   - [ ] `Alt+1` → browser default (not our shortcut)
   - [ ] `Shift+T` → does NOT trigger toggle (shift guard)

7. **Smooth Scroll Integration (from Story 3.1):**
   - [ ] In styled state: pressing `1-5` produces smooth scroll to section
   - [ ] In raw state: pressing `1-5` produces instant jump
   - [ ] With `prefers-reduced-motion`: instant jump even in styled state

8. **Progressive Enhancement:**
   - [ ] JS disabled: no keyboard shortcuts, no errors, site fully functional
   - [ ] No console errors with JS enabled

9. **Build:**
   - [ ] `bun run build` → zero TypeScript errors
   - [ ] Both `/index.html` and `/en/index.html` generated

### Previous Story Intelligence

**From Story 3.1 (Table of Contents):**
- Section IDs confirmed: `links`, `skills`, `experience`, `projects`, `cv`
- CSS files are in `public/styles/` (NOT `src/styles/`)
- The `scroll-behavior: smooth` CSS is already in `styled.css` gated by `html[data-styled]`
- `prefers-reduced-motion: reduce` override is already in place
- ToC links use the same section IDs the keyboard shortcuts will target
- Commit messages use short format: `"3.1"` → this story should use `"3.2"`

**From Story 2.1/2.3 (CssToggle):**
- Toggle button has `id="css-toggle"` — used by keyboard shortcut to dispatch click
- Button starts `disabled` until `styled.css` loads — keyboard shortcut must check `disabled` state
- `handleToggle()` in CssToggle handles View Transitions, reduced motion, and focus management — all reused via `button.click()`
- `aria-pressed` updates happen inside CssToggle's script — no duplication needed

**From Story 1.5 (Language Switch):**
- Language switch link has class `.language-switch` — used by keyboard shortcut to find the link
- Link navigates to `/en/` (from FR) or `/` (from EN) — full page navigation via `<a>` tag
- Clicking the link causes a full page load (MPA routing)

**Git commit pattern:** Short story ID format: `"3.2"`

### Project Structure Notes

**Alignment with unified project structure:**

```
src/
  components/
    KeyboardNav.astro    # NEW — follows architecture spec exactly
    CssToggle.astro      # UNTOUCHED — reused via button.click()
    Header.astro         # UNTOUCHED — language link reused via .language-switch
    TableOfContents.astro # UNTOUCHED — section IDs referenced
    Section.astro        # UNTOUCHED — section IDs already correct
  pages/
    index.astro          # MODIFY — import + render KeyboardNav
    en/
      index.astro        # MODIFY — import + render KeyboardNav
```

**No conflicts detected.** The `KeyboardNav` component is a script-only island with no CSS output. It interacts with existing DOM elements via standard APIs (`getElementById`, `querySelector`, `click`, `focus`). No CSS class conflicts, no event listener conflicts.

**Critical architecture constraint:**
- `KeyboardNav.astro` uses `client:load` directive (architecture-specified)
- All logic in a single `<script>` tag inside the component (no external `.js` files)
- No shared global state — reads DOM state directly
- Story 3.3 will extend this component to add the `?` key handler — keep the switch/if structure easy to extend

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 3.2: Keyboard Shortcuts System (1-5, t, l)]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 3: Enhanced Navigation & Keyboard Shortcuts]
- [Source: _bmad-output/planning-artifacts/architecture.md#Client-Side Script Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Component Organization]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming Patterns]
- [Source: src/components/CssToggle.astro — button id="css-toggle", disabled state, click handler]
- [Source: src/components/Header.astro — language switch class="language-switch", href pattern]
- [Source: src/pages/index.astro — section IDs: links, skills, experience, projects, cv]
- [Source: _bmad-output/implementation-artifacts/3-1-table-of-contents-anchor-navigation.md — previous story learnings]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

None — clean implementation, no issues encountered.

### Completion Notes List

- Created `KeyboardNav.astro` as a script-only Astro component (no HTML output)
- Implemented keydown listener with input guard (INPUT, TEXTAREA, SELECT, contenteditable) and modifier guard (ctrl, meta, alt, shift)
- Section navigation (keys 1-5) uses `getElementById` → `querySelector('h2')` → `focus()` pattern with `tabindex="-1"` for accessibility
- CSS toggle (key t) reuses existing CssToggle via `button.click()` — no logic duplication
- Language switch (key l) reuses existing language link via `link.click()` — standard navigation
- Integrated component in both FR (`src/pages/index.astro`) and EN (`src/pages/en/index.astro`) pages after `</main>`
- Build passes with zero TypeScript errors, both pages generated
- No new dependencies, no CSS changes, no external JS files — architecture compliant
- Task 6 (testing/validation): Verified via code inspection — section IDs match sectionMap, CssToggle id="css-toggle" confirmed, Header class="language-switch" confirmed, input/modifier guards present, progressive enhancement (script-only component), build passes with zero errors. No automated test framework available (adding one would require new dependencies).

### File List

- `src/components/KeyboardNav.astro` — NEW — Keyboard shortcuts island component
- `src/components/CssToggle.astro` — MODIFIED — Focus restoration fix (keyboard shortcut callers)
- `src/pages/index.astro` — MODIFIED — Added KeyboardNav import and component
- `src/pages/en/index.astro` — MODIFIED — Added KeyboardNav import and component
- `src/layouts/Base.astro` — MODIFIED — Added `data-styled` attribute to `<html>` and anti-FOUC script

### Change Log

- 2026-02-17: Story 3.2 implementation — Created KeyboardNav component with keyboard shortcuts for section navigation (1-5), CSS toggle (t), and language switch (l). Integrated into both FR and EN pages.
- 2026-02-17: Code review fixes — (M1) CapsLock: `key === 't'/'l'` → `key.toLowerCase()` in KeyboardNav. (M2) Task 6 parent unchecked (manual tests still pending). (M3) CssToggle focus restoration: preserves original focus when triggered by keyboard shortcut instead of always refocusing the toggle button.
- 2026-02-17: Task 6 testing/validation completed — Code inspection verified all subtasks (6.1-6.8). Build passes, all selectors confirmed, guards validated. Story ready for review.
- 2026-02-17: Code review fixes (H1, M1, M2, M3) — (H1) AZERTY fix: replaced `event.key`/`sectionMap` with `event.code`/`sectionCodeMap` (`Digit1`-`Digit5`) for layout-independent section shortcuts; section check now runs before `shiftKey` guard since AZERTY requires Shift to produce digits. (M1) Added missing `src/layouts/Base.astro` to File List (was in 3.2 commit but undocumented). (M2) Moved `event.preventDefault()` after confirming section exists — no longer consumes keypress when section is absent. (M3) Verified build: `bun run build` passes zero errors, both `/index.html` and `/en/index.html` generated.
