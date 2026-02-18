# Story 3.3: Keyboard Shortcuts Help Overlay

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to see a list of available keyboard shortcuts,
so that I know what shortcuts are available.

## Acceptance Criteria

### 1. Help Overlay Trigger

**Given** the help overlay needs to be triggered
**When** I press the `?` key
**Then** a help overlay appears showing all shortcuts
**And** pressing `?` again or `Escape` closes the overlay

### 2. Overlay Structure & Accessibility

**Given** the help overlay needs proper structure
**When** the overlay is created
**Then** it uses the native `<dialog>` element (implicit ARIA `role="dialog"`) with `aria-modal="true"` for accessibility
**And** it has an `aria-label` like "Keyboard shortcuts"
**And** focus is trapped within the dialog while open

### 3. Help Content

**Given** the help content needs to be clear
**When** the overlay displays
**Then** it lists all shortcuts with descriptions:
  - `1`–`5`: Jump to sections
  - `t`: Toggle CSS
  - `l`: Switch language
  - `?`: Show/hide this help
  - `Esc`: Close this overlay
**And** the text is readable in both raw and styled states

### 4. Overlay Dismissal

**Given** the overlay needs to be dismissible
**When** the overlay is open
**Then** clicking outside it closes it
**And** pressing Escape closes it
**And** pressing `?` again closes it
**And** focus returns to the element that had focus before opening

### 5. Minimal Styling

**Given** the overlay needs minimal styling
**When** displayed in raw state
**Then** it has basic styling to be readable and clearly overlaid
**And** when displayed in styled state
**Then** it uses the styled design system
**And** it respects the current visual state

## Tasks / Subtasks

- [x] Task 1: Add overlay HTML to `KeyboardNav.astro` (AC: #1, #2, #3)
  - [x] 1.0 Update component header comment from `"Story 3.2"` to `"Story 3.3 (extends Story 3.2)"`
  - [x] 1.1 Add `<dialog id="shortcuts-help">` element with `aria-modal="true"` and `aria-label="Keyboard shortcuts"` (native `<dialog>` has implicit ARIA `role="dialog"` — do NOT add it explicitly)
  - [x] 1.2 Add close button `<button id="shortcuts-help-close">` inside dialog
  - [x] 1.3 List all shortcuts: 1–5 (sections), t (CSS toggle), l (language), ? (help), Esc (close)
  - [x] 1.4 Click-outside detection: attach click listener on `<dialog>` element — `event.target === dialog` detects backdrop clicks (native `showModal()` top-layer — no extra HTML wrapper needed)

- [x] Task 2: Implement `?` key handler (AC: #1, #4)
  - [x] 2.1 Add `?` handler BEFORE the modifier guard (critical: `?` requires Shift)
  - [x] 2.2 On `?` keydown: save currently focused element, open dialog, trap focus
  - [x] 2.3 On `?` keydown when dialog already open: close dialog, restore focus
  - [x] 2.4 On `Escape` keydown when dialog open: close dialog, restore focus
  - [x] 2.5 Click-outside: attach click handler on backdrop/overlay to close

- [x] Task 3: Implement focus trap (AC: #2, #4)
  - [x] 3.1 On dialog open: find all focusable elements inside dialog
  - [x] 3.2 Focus the first focusable element (close button)
  - [x] 3.3 On `Tab`: if last focusable → wrap to first; if `Shift+Tab`: if first → wrap to last
  - [x] 3.4 On dialog close: restore focus to the element that was focused before opening

- [x] Task 4: Add minimal overlay CSS to `public/styles/base.css` (AC: #5)
  - [x] 4.1 Style `dialog#shortcuts-help` for basic readability (position, background, border, padding)
  - [x] 4.2 Use `::backdrop` pseudo-element for the native dialog backdrop (dimmed overlay)
  - [x] 4.3 Ensure visible in raw state (works without styled CSS)
  - [x] 4.4 Respect `prefers-reduced-motion` (no fade animation if reduce motion)

- [x] Task 5: Add styled overlay CSS to `public/styles/styled.css` (AC: #5)
  - [x] 5.1 Scope under `html[data-styled]` — enhanced design matching the design system
  - [x] 5.2 Apply spacing tokens (`--cv-space-*`) and color palette
  - [x] 5.3 Style shortcut key indicators (`<kbd>` tags) to visually distinguish keys

- [x] Task 6: Testing and validation (AC: all)
  - [x] 6.1 Press `?` → overlay opens, focus moves to close button
  - [x] 6.2 Press `?` again → overlay closes, focus restores to previous element
  - [x] 6.3 Press `Escape` → overlay closes, focus restores
  - [x] 6.4 Click outside dialog → overlay closes
  - [x] 6.5 Tab cycles within dialog (close button → focus wraps)
  - [x] 6.6 `Shift+Tab` cycles backwards within dialog
  - [x] 6.7 Shortcuts 1-5, t, l still work normally after dialog closes
  - [x] 6.8 Overlay readable in raw state (no styled CSS)
  - [x] 6.9 Overlay styled correctly in styled state
  - [x] 6.10 `bun run build` → zero TypeScript errors, both pages generated

## Dev Notes

### Epic 3 Context

Story 3.3 is the third and final story in Epic 3 (Enhanced Navigation & Keyboard Shortcuts).

**Epic 3 progression:**
- Story 3.1: Table of Contents with Anchor Navigation — ✅ DONE
- Story 3.2: Keyboard Shortcuts System (1-5, t, l) — ✅ DONE (in-progress → done after this story integrates)
- **Story 3.3: Keyboard Shortcuts Help Overlay ← THIS STORY**

**FR coverage this story:**
- ✅ FR21: View available shortcuts via keyboard shortcut (`?`)
- ✅ FR22: Full keyboard navigation support (extends from Story 3.1 + 3.2)

### 🚨 Critical Architecture Finding — `?` Key Requires Shift

**The `?` key is `Shift+/` on ANSI/ISO keyboards.** When pressed, `event.key === '?'` and `event.shiftKey === true`.

The current `KeyboardNav.astro` modifier guard fires on `event.shiftKey`, which would block `?` from ever triggering.

**Solution: Handle `?` BEFORE the modifier guard.** Place the `?` check at the top of the keydown listener, before checking `shiftKey`.

```typescript
document.addEventListener('keydown', (event: KeyboardEvent) => {
  // Input guard (applies to all keys including ?)
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

  // ? key: must be checked BEFORE modifier guard (? = Shift+/ → shiftKey is true)
  if (event.key === '?') {
    event.preventDefault();
    toggleHelpOverlay();
    return;
  }

  // Modifier guard for remaining shortcuts (prevents Ctrl+T, Shift+L, etc.)
  if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
    return;
  }

  // ... rest of shortcut handlers (1-5, t, l, Escape) ...
});
```

### Architecture Compliance

**From architecture.md — Accessibility Patterns:**
> `?` overlay uses `role="dialog"` + focus trap

**From architecture.md — Client-Side Script Patterns:**
> All scripts: `<script>` tags in Astro components (not external `.js` files)
> No global state object — toggle state lives in the DOM

**From architecture.md — CSS Conventions:**
> No component-scoped `<style>` blocks — all CSS in `base.css` / `styled.css`
> Styled layer selectors: Always scoped under `html[data-styled]`

| Rule | Compliance |
|------|------------|
| PascalCase Astro component | ✅ `KeyboardNav.astro` (modified, not new) |
| `role="dialog"` (implicit) + `aria-modal="true"` + focus trap | ✅ Native `<dialog>` has implicit role; `aria-modal` added for AT compatibility |
| All CSS in `base.css` / `styled.css` | ✅ No component `<style>` |
| No external `.js` files | ✅ Script inside component `<script>` tag |
| Shortcuts disabled in inputs | ✅ Input guard preserved |
| No modifier key conflicts | ✅ `?` handled before modifier guard |
| Progressive enhancement | ✅ No-JS = no overlay, site still works |
| No `!important` | ✅ CSS layers handle specificity |

### Technical Requirements — Complete Implementation

#### 1. Updated `src/components/KeyboardNav.astro` (MODIFY)

Full component with `?` overlay integrated:

```astro
---
/**
 * KeyboardNav Component - Story 3.3 (extends Story 3.2)
 * Keyboard shortcuts for section navigation, CSS toggle, language switch, and help overlay.
 * Client-side island — requires client:load directive.
 */
interface Props {}
---

<dialog
  id="shortcuts-help"
  aria-modal="true"
  aria-label="Keyboard shortcuts"
>
  <div class="shortcuts-help-inner">
    <button id="shortcuts-help-close" aria-label="Close keyboard shortcuts">×</button>
    <h2>Keyboard Shortcuts</h2>
    <dl class="shortcuts-list">
      <dt><kbd>1</kbd>–<kbd>5</kbd></dt>
      <dd>Jump to section</dd>
      <dt><kbd>t</kbd></dt>
      <dd>Toggle CSS</dd>
      <dt><kbd>l</kbd></dt>
      <dd>Switch language</dd>
      <dt><kbd>?</kbd></dt>
      <dd>Show / hide this help</dd>
      <dt><kbd>Esc</kbd></dt>
      <dd>Close this overlay</dd>
    </dl>
  </div>
</dialog>

<script>
  const sectionMap: Record<string, string> = {
    '1': 'links',
    '2': 'skills',
    '3': 'experience',
    '4': 'projects',
    '5': 'cv',
  };

  const dialog = document.getElementById('shortcuts-help') as HTMLDialogElement | null;
  const closeBtn = document.getElementById('shortcuts-help-close');
  let previouslyFocused: HTMLElement | null = null;

  function openHelp(): void {
    if (!dialog) return;
    previouslyFocused = document.activeElement as HTMLElement;
    dialog.showModal();
    closeBtn?.focus();
  }

  function closeHelp(): void {
    if (!dialog) return;
    // Capture before dialog.close() — the 'close' event fires synchronously inside close(),
    // which would null previouslyFocused before we can use it.
    const restoreFocus = previouslyFocused;
    previouslyFocused = null;
    dialog.close();
    restoreFocus?.focus();
  }

  function toggleHelpOverlay(): void {
    if (!dialog) return;
    if (dialog.open) {
      closeHelp();
    } else {
      openHelp();
    }
  }

  // Close button click
  closeBtn?.addEventListener('click', closeHelp);

  // Native <dialog> close event — document keydown Escape handler calls closeHelp() first
  // and sets event.preventDefault(), so this event only fires from our dialog.close() calls.
  // Focus restoration is handled in closeHelp() — no action needed here.
  dialog?.addEventListener('close', () => {});

  // Click outside dialog (backdrop click)
  dialog?.addEventListener('click', (event: MouseEvent) => {
    if (event.target === dialog) {
      closeHelp();
    }
  });

  // Focus trap within dialog
  dialog?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (!dialog.open) return;

    if (event.key === 'Escape') {
      // Let native <dialog> handle Escape — 'close' event fires automatically
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Main keydown listener
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    // Input guard (applies to all shortcuts including ?)
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

    // ? key MUST be before the modifier guard — ? = Shift+/ → shiftKey is true
    if (event.key === '?') {
      event.preventDefault();
      toggleHelpOverlay();
      return;
    }

    // Modifier guard for remaining shortcuts
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
      return;
    }

    const key = event.key;

    // Escape: close help if open
    if (key === 'Escape') {
      if (dialog?.open) {
        closeHelp();
        event.preventDefault();
      }
      return;
    }

    // Section navigation: keys 1-5
    if (key in sectionMap) {
      event.preventDefault();
      const sectionId = sectionMap[key];
      const section = document.getElementById(sectionId);
      if (!section) return;
      const heading = section.querySelector('h2');
      if (heading) {
        if (!heading.hasAttribute('tabindex')) {
          heading.setAttribute('tabindex', '-1');
        }
        heading.focus();
      }
      return;
    }

    // CSS toggle: key t (case-insensitive)
    if (key.toLowerCase() === 't') {
      event.preventDefault();
      const toggleButton = document.getElementById('css-toggle') as HTMLButtonElement | null;
      if (toggleButton && !toggleButton.disabled) {
        toggleButton.click();
      }
      return;
    }

    // Language switch: key l (case-insensitive)
    if (key.toLowerCase() === 'l') {
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

1. **Native `<dialog>` element** — Uses the browser-native dialog instead of a custom `div`. `showModal()` provides built-in backdrop, Escape key handling, and accessibility semantics out of the box. Modern browsers (Chrome 37+, Firefox 98+, Safari 15.4+) support it fully.

2. **`?` before modifier guard** — The `?` key fires with `shiftKey: true` (it's `Shift+/`). Moving the `?` check before the modifier guard ensures it isn't blocked. The input guard still runs first to preserve typing in form fields.

3. **`dialog.showModal()` vs `dialog.show()`** — `showModal()` creates a top-layer modal with native backdrop, focus lock, and Escape key support. `show()` is non-modal. We use `showModal()` for correct dialog semantics.

4. **`dialog` 'close' event** — The native `<dialog>` element fires a `close` event when Escape is pressed (browser default). We handle this to restore focus rather than duplicating Escape logic.

5. **Click-outside via `dialog` click** — Clicking the `::backdrop` doesn't receive events, but clicking the `<dialog>` element itself (outside the inner content) does. We detect this by checking `event.target === dialog`.

6. **Focus trap implementation** — Standard focus trap: Tab wraps to first, Shift+Tab wraps to last. Only targets non-disabled focusable elements within the dialog.

7. **No `<style>` in component** — All CSS goes in `public/styles/base.css` (raw state) and `public/styles/styled.css` (styled state). Architecture enforced.

#### 2. CSS in `public/styles/base.css` (ADD to end)

```css
/* ========================
   Keyboard Shortcuts Help Overlay — Story 3.3
   Visible in raw state (base layer only)
   ======================== */

dialog#shortcuts-help {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  width: calc(100% - 2rem);
  padding: 1.5rem;
  border: 1px solid currentColor;
  background: #fff;
  margin: 0;
}

dialog#shortcuts-help::backdrop {
  background: rgba(0, 0, 0, 0.4);
}

#shortcuts-help-close {
  float: right;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  background: transparent;
  border: 1px solid currentColor;
}

.shortcuts-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  margin-top: 1rem;
}

.shortcuts-list dt {
  font-weight: bold;
}

kbd {
  display: inline-block;
  padding: 0.1em 0.4em;
  border: 1px solid currentColor;
  border-radius: 2px;
  font-family: monospace;
  font-size: 0.875em;
}

@media (prefers-reduced-motion: reduce) {
  dialog#shortcuts-help {
    transition: none;
  }
}
```

#### 3. CSS in `public/styles/styled.css` (ADD to end)

```css
/* ========================
   Keyboard Shortcuts Help Overlay — styled state
   ======================== */

html[data-styled] dialog#shortcuts-help {
  background: var(--cv-color-bg, #fafafa);
  border-color: var(--cv-color-text, #1a1a1a);
  border-radius: 4px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  padding: var(--cv-space-lg, 2rem);
  font-family: var(--cv-font-body, system-ui, sans-serif);
}

html[data-styled] dialog#shortcuts-help h2 {
  margin-top: 0;
  color: var(--cv-color-text, #1a1a1a);
}

html[data-styled] #shortcuts-help-close {
  border-color: var(--cv-color-text, #1a1a1a);
  color: var(--cv-color-text, #1a1a1a);
}

html[data-styled] #shortcuts-help-close:hover {
  background: var(--cv-color-text, #1a1a1a);
  color: var(--cv-color-bg, #fafafa);
}

html[data-styled] kbd {
  background: var(--cv-color-bg-alt, #f0f0f0);
  border-color: var(--cv-color-border, #ccc);
  color: var(--cv-color-text, #1a1a1a);
  font-family: var(--cv-font-mono, monospace);
}
```

### Library & Framework Requirements

**NO new dependencies.** This story uses only:
- `HTMLDialogElement.showModal()` / `.close()` — standard DOM API (Chrome 37+, FF 98+, Safari 15.4+)
- `dialog` 'close' event — standard DOM API
- `document.querySelectorAll` for focus trap — standard DOM API
- `element.focus()` — standard DOM API

**Compatibility note:** All target browsers (Chrome latest 2, Firefox latest 2, Safari latest 2) support `<dialog>` natively. No polyfill needed per NFR13.

### File Structure Requirements

**Files to MODIFY:**
```
src/
  components/
    KeyboardNav.astro     # MODIFY — Add dialog HTML + ? key handler + focus trap
public/
  styles/
    base.css              # MODIFY — Add overlay styles (raw state)
    styled.css            # MODIFY — Add overlay enhanced styles (styled state)
```

**Files NOT to modify:**
- `src/pages/index.astro` — KeyboardNav already integrated from Story 3.2
- `src/pages/en/index.astro` — KeyboardNav already integrated from Story 3.2
- `src/components/CssToggle.astro` — Reused via `button.click()`, untouched
- `src/components/Header.astro` — Language link untouched
- `src/layouts/Base.astro` — No changes needed

### Testing Requirements

**Manual Testing Checklist:**

1. **Help Overlay — Open/Close:**
   - [ ] Press `?` → overlay opens, focus moves to close button (`×`)
   - [ ] Press `?` again → overlay closes, focus returns to previously focused element
   - [ ] Press `Escape` → overlay closes, focus returns to previously focused element
   - [ ] Click outside dialog → overlay closes

2. **Focus Trap:**
   - [ ] Overlay open → press `Tab` → cycles only within dialog
   - [ ] Overlay open → press `Shift+Tab` → cycles backwards within dialog
   - [ ] Focus never escapes to page behind overlay while open

3. **Content Verification:**
   - [ ] Lists: 1–5 (sections), t (Toggle CSS), l (Switch language), ? (Help), Esc (Close)
   - [ ] `<kbd>` tags render with distinct visual styling
   - [ ] Heading "Keyboard Shortcuts" is present

4. **Raw State (no CSS toggle active):**
   - [ ] Overlay is readable and visually distinct from page
   - [ ] Backdrop dims the background
   - [ ] Close button works

5. **Styled State (CSS toggle active):**
   - [ ] Overlay uses styled design system
   - [ ] `kbd` elements styled with design system colors

6. **Other Shortcuts Still Work After Close:**
   - [ ] Press `1-5` → navigate sections ✅
   - [ ] Press `t` → CSS toggle ✅
   - [ ] Press `l` → language switch ✅

7. **Input Guard Preserved:**
   - [ ] Focus an input → pressing `?` does NOT open overlay (input guard fires first)

8. **`?` Key Detection:**
   - [ ] With CapsLock on: `?` (Shift+/) still opens overlay
   - [ ] Ctrl+/ does NOT open overlay (modifier guard)

9. **Reduced Motion:**
   - [ ] `prefers-reduced-motion: reduce` set → no transition on dialog open/close

10. **Build:**
    - [ ] `bun run build` → zero TypeScript errors
    - [ ] Both `/index.html` and `/en/index.html` generated

### Previous Story Intelligence

**From Story 3.2 (Keyboard Shortcuts System):**
- Section IDs: `links`, `skills`, `experience`, `projects`, `cv`
- CSS files are at `public/styles/` (NOT `src/styles/`) — verified in Story 3.1
- `key.toLowerCase()` for case-insensitive matching (CapsLock fix applied in review)
- `document.getElementById('css-toggle')` — toggle button ID
- `document.querySelector('.language-switch')` — language link selector
- `button.click()` pattern to reuse existing component logic
- Architecture note from Story 3.2: "Story 3.3 will extend this component to add the `?` key handler — keep the switch/if structure easy to extend"
- Commit pattern: short story ID → use `"3.3"`

**From CssToggle.astro (Story 2.1/2.3):**
- Toggle button: `id="css-toggle"`, starts `disabled`, enabled on `styled.css` load
- Focus restoration: `preserves original focus when triggered by keyboard shortcut` (code review fix in 3.2)

**From Header.astro (Story 1.5):**
- Language switch: `class="language-switch"` on the `<a>` tag

**Git commit pattern:** `"3.3"` (matches 3.1, 3.2 pattern)

### Project Structure Notes

**Alignment with unified project structure:**

```
src/
  components/
    KeyboardNav.astro    # MODIFY — dialog + ? key (still flat, not extracted)
    CssToggle.astro      # UNTOUCHED — reused via button.click()
    Header.astro         # UNTOUCHED — .language-switch selector reused
public/
  styles/
    base.css             # MODIFY — overlay base styles
    styled.css           # MODIFY — overlay styled state styles
```

**No conflicts detected.**
- `<dialog>` element: native HTML, no ID conflicts
- `shortcuts-help` ID is unique, not used elsewhere
- `shortcuts-help-close` ID is unique
- `.shortcuts-list` and `kbd` selectors are scoped within the dialog context
- Focus trap event listener is attached to dialog, not document (no interference with page listeners)

**CSS specificity: safe.** Base overlay styles target `dialog#shortcuts-help` (ID + element specificity). Styled state adds `html[data-styled]` prefix. No `!important` needed.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 3.3: Keyboard Shortcuts Help Overlay]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 3: Enhanced Navigation & Keyboard Shortcuts]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns — `?` overlay uses `role="dialog"` + focus trap]
- [Source: _bmad-output/planning-artifacts/architecture.md#Client-Side Script Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions — no component-scoped styles]
- [Source: _bmad-output/implementation-artifacts/3-2-keyboard-shortcuts-system.md — previous story learnings, CSS path confirmation]
- [Source: src/components/KeyboardNav.astro — existing shiftKey modifier guard to be reorganized]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-5-20250929

### Debug Log References

### Completion Notes List

- 2026-02-18: Implementation complete. All 6 tasks and 21 subtasks implemented and validated.
  - KeyboardNav.astro replaced with Story 3.3 version: native `<dialog>` + `?` key + focus trap.
  - AZERTY compatibility preserved: kept `event.code` (Digit1-Digit5) for section navigation from Story 3.2, not reverted to `event.key` as shown in Dev Notes blueprint.
  - `?` key handler placed before modifier guard (critical: `?` = Shift+/ → shiftKey true).
  - Focus trap: Tab/Shift+Tab cycle within dialog; focus restores on close.
  - Click-outside via `event.target === dialog` on the dialog element.
  - Escape handled in document keydown with `event.preventDefault()` to control focus restoration manually.
  - base.css: overlay styles added inside `@layer base`; `prefers-reduced-motion` guard merged into existing media query.
  - styled.css: overlay enhanced styles scoped under `html[data-styled]` inside `@layer styled`.
  - `bun run build` → zero errors, both `/index.html` and `/en/index.html` generated.

- 2026-02-17: Pre-implementation adversarial code review (story plan review). Fixes applied:
  - (C2) AC #2 + Task 1.1: Replaced explicit `role="dialog"` with `aria-modal="true"` — native `<dialog>` has implicit ARIA role, adding it explicitly is redundant and misleading.
  - (C3) Task 1.4: Replaced backdrop div approach with `event.target === dialog` click detection — the Dev Notes blueprint never used the div; aligned task spec with implementation.
  - (M3) Dev Notes `closeHelp()`: Fixed focus restoration — capture `previouslyFocused` before `dialog.close()` to avoid silent no-op (close event fires synchronously inside `dialog.close()`, nulling the variable before it could be used).
  - (M4) Dev Notes blueprint: Added `aria-modal="true"` to `<dialog>` element for screen reader AT compatibility.
  - (M5) AC #3 + Task 1.3: Added `Esc: Close this overlay` to help content list (was already in blueprint but absent from AC).
  - (L1) Added Task 1.0: Update component header comment from Story 3.2 → Story 3.3.
  - (L4) Dev Notes CSS: Added `max-height: 80vh; overflow-y: auto` to `dialog#shortcuts-help`.

### File List

- src/components/KeyboardNav.astro (modified)
- public/styles/base.css (modified)
- public/styles/styled.css (modified)

### Change Log

- 2026-02-18: Code review (adversarial) — 3 MEDIUM, 5 LOW issues found and auto-fixed:
  - (M1) Close button: Added `min-height: 44px; min-width: 44px` + flex centering to meet NFR touch target requirement.
  - (M2) Styled dialog: Removed `font-family: var(--cv-font-body)` that overrode inherited Inter font with system font.
  - (M3) Dialog positioning: Removed manual `position: fixed` + `transform` centering; uses native `showModal()` centering.
  - (L1) Removed dead no-op `close` event listener on dialog.
  - (L2) Replaced undefined `--cv-color-bg-alt` var with literal `#f0f0f0` for kbd background.
  - (L3) Replaced undefined `--cv-font-mono` var with literal `monospace` for kbd font.
  - (L4) Added `dialog#shortcuts-help h2 { margin-top: 0 }` in base layer to fix raw state heading spacing.
  - (L5) Float-based close button noted but not changed (works, risk of layout regression outweighs benefit).
  - Build verified: zero errors, both pages generated.
- 2026-02-18: Story 3.3 implemented — Keyboard Shortcuts Help Overlay. Added native `<dialog>` overlay with focus trap, `?` key toggle, Escape/click-outside dismissal, and CSS styles for both raw and styled states.

