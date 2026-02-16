# Story 1.3: Base Layout with CSS Layers & Typography

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want the page to load with clean semantic HTML and structural styles,
So that I can read content immediately while the styled CSS loads in the background.

## Acceptance Criteria

### Layout System

**Given** the layout system needs to be created
**When** I create `src/layouts/Base.astro`
**Then** it includes a valid HTML5 structure with `<html>`, `<head>`, `<body>`
**And** it sets the `lang` attribute based on the current locale
**And** it includes a `<slot />` for page content

### CSS Layer System (Base Layer)

**Given** the CSS layer system needs to be set up
**When** I create `src/styles/base.css`
**Then** it declares `@layer base, styled;` at the top
**And** it includes CSS reset and normalization
**And** it defines system font stack: `system-ui, -apple-system, sans-serif`
**And** it includes focus indicators: `outline: 2px solid currentColor; outline-offset: 2px`
**And** it includes skip link styles
**And** the file size is under 1KB

### Styled Layer

**Given** the styled layer needs to be created
**When** I create `src/styles/styled.css`
**Then** it includes styles scoped under `html[data-styled]`
**And** it defines custom font `@font-face` for Inter variable font
**And** it includes the designed color palette with verified AAA contrast
**And** it includes spacing scale tokens

### CSS Loading Strategy

**Given** the CSS files exist
**When** the Base layout loads `base.css`
**Then** it's loaded as render-blocking via standard `<link rel="stylesheet">`
**And** when it loads `styled.css`
**Then** it uses `media="print" onload="this.media='all'"` for lazy loading

### Font Loading Optimization

**Given** font loading needs to be optimized
**When** the Base layout includes font preload
**Then** it includes `<link rel="preload" as="font" href="/fonts/inter-var.woff2" crossorigin>`
**And** the font file exists at `/public/fonts/inter-var.woff2`
**And** the `@font-face` uses `font-display: swap`

### Skip Link Accessibility

**Given** semantic accessibility is required
**When** I add the skip link to the layout
**Then** it's the first focusable element in the `<body>`
**And** it links to `#main` with text "Skip to main content"
**And** the main content area has `id="main"`

## Tasks / Subtasks

- [ ] Task 1: Create Base.astro Layout (AC: Layout System)
  - [ ] 1.1 Create `app/src/layouts/Base.astro` file
  - [ ] 1.2 Add HTML5 doctype and structure
  - [ ] 1.3 Implement `lang` attribute resolution from Astro.currentLocale
  - [ ] 1.4 Add `<head>` with meta tags, viewport, charset
  - [ ] 1.5 Add CSS link strategy (base render-blocking, styled lazy)
  - [ ] 1.6 Add font preload link
  - [ ] 1.7 Add skip link as first body element
  - [ ] 1.8 Add `<slot />` for page content

- [ ] Task 2: Create base.css CSS Layer (AC: CSS Layer System)
  - [ ] 2.1 Create `app/src/styles/base.css` file
  - [ ] 2.2 Declare `@layer base, styled;` at the top
  - [ ] 2.3 Add minimal CSS reset (box-sizing, margins, padding)
  - [ ] 2.4 Define system font stack custom property
  - [ ] 2.5 Add base typography styles (headings, body, lists)
  - [ ] 2.6 Add focus indicator styles (`:focus-visible`)
  - [ ] 2.7 Add skip link specific styles
  - [ ] 2.8 Verify file size < 1KB

- [ ] Task 3: Create styled.css CSS Layer (AC: Styled Layer)
  - [ ] 3.1 Create `app/src/styles/styled.css` file
  - [ ] 3.2 Scope all styles under `html[data-styled]`
  - [ ] 3.3 Add `@font-face` declaration for Inter variable font
  - [ ] 3.4 Define color palette custom properties with AAA contrast
  - [ ] 3.5 Define spacing scale custom properties
  - [ ] 3.6 Add refined typography styles
  - [ ] 3.7 Add layout refinements and visual polish

- [ ] Task 4: Add Inter Variable Font (AC: Font Loading)
  - [ ] 4.1 Download Inter variable font (inter-var.woff2)
  - [ ] 4.2 Place font file in `app/public/fonts/`
  - [ ] 4.3 Verify font file exists and is accessible
  - [ ] 4.4 Configure `font-display: swap` in `@font-face`

- [ ] Task 5: Update Page Templates to Use Base Layout (Integration)
  - [ ] 5.1 Update `app/src/pages/index.astro` to import and use Base.astro
  - [ ] 5.2 Update `app/src/pages/en/index.astro` to import and use Base.astro
  - [ ] 5.3 Verify `lang` attribute matches locale on both pages
  - [ ] 5.4 Ensure skip link works (links to correct `#main`)

- [ ] Task 6: Verify Build and Visual States
  - [ ] 6.1 Run `bun run build` - verify zero errors
  - [ ] 6.2 Run `bun run preview` and test raw state (before styled CSS loads)
  - [ ] 6.3 Verify styled CSS lazy loads correctly
  - [ ] 6.4 Test skip link keyboard navigation
  - [ ] 6.5 Verify font loading (no FOIT/FOUT)
  - [ ] 6.6 Verify base.css is <1KB in dist output

## Dev Notes

### Architecture Compliance

**CRITICAL: This story implements the core CSS architecture that ALL future stories depend on. Every decision here is non-negotiable.**

**CSS Layer System (from Architecture Decision):**
```
@layer base, styled;
```
- **base layer**: Always loaded, render-blocking, contains structural styles for raw state
- **styled layer**: Lazy-loaded, gated behind `html[data-styled]` attribute
- NO component-scoped `<style>` blocks in `.astro` files - all CSS lives in these two files
- NO `!important` - layers handle specificity

**Why Layers?**
- **Progressive enhancement enforced architecturally** - Base layer works standalone
- **Toggle mechanism** - One attribute (`data-styled`) controls entire visual state
- **Specificity control** - Layers prevent cascade conflicts
- **Performance** - Base loads fast (<1KB), styled loads async

**Lazy Loading Strategy (Architecture Mandate):**
```html
<!-- base.css: render-blocking -->
<link rel="stylesheet" href="/styles/base.css">

<!-- styled.css: lazy-loaded -->
<link rel="stylesheet" href="/styles/styled.css" media="print" onload="this.media='all'">
```
The `media="print"` trick loads CSS without blocking render, then `onload` switches it to `all`.

**Framework:** Astro 5.17.1 with TypeScript strict mode
**Build Tool:** Bun (NOT npm/node)
**Project Root:** `/app` directory

### Previous Story Intelligence

**From Story 1-1 (Astro Config & Routing):**
- ✅ Bilingual routing configured: French at `/`, English at `/en/`
- ✅ `lang` attribute correctly set via Astro i18n: `<html lang="fr">` / `<html lang="en">`
- ✅ Placeholder pages exist with semantic HTML structure
- ✅ Skip links already present in placeholder pages
- ✅ Build succeeds, both `/index.html` and `/en/index.html` generated
- **Key Learning:** Architecture review removed unauthorized `base` path - trust architecture decisions exactly as written

**From Story 1-2 (Content Type System):**
- ✅ Content type system created: `src/content/types.ts`, `fr.ts`, `en.ts`
- ✅ Compile-time type safety enforces FR/EN parity
- ✅ Content ready for consumption by components
- **Next Integration Point:** Story 1.4 will wire content to display components using THIS layout

**Current Project State:**
- Astro config: ✅ Complete
- Content files: ✅ Complete
- Layouts: ❌ **THIS STORY** creates `Base.astro`
- CSS files: ❌ **THIS STORY** creates `base.css` and `styled.css`
- Components: ⏭️ Story 1.4

**Git Intelligence:**
Latest commits show:
- `a2dc60d` - migrate files to root
- `34449f3` - Complete Story 1.2: Content Type System & Data Files
- Project is actively developed, build is stable
- No CSS framework detected (vanilla CSS per architecture)

### Technical Requirements

#### Base.astro Layout Structure

**CRITICAL: This layout is the HTML shell for ALL pages. It must:**
1. Work with Astro i18n to set `lang` attribute dynamically
2. Load CSS in the correct order (base render-blocking, styled lazy)
3. Preload font for zero-flash toggle
4. Include skip link for accessibility
5. Accept page-specific content via `<slot />`

**Locale Resolution Pattern:**
```astro
---
// In Base.astro frontmatter
const currentLocale = Astro.currentLocale || 'fr'; // Default to French
---
<html lang={currentLocale}>
```
Astro's i18n system provides `Astro.currentLocale` - use it, don't hardcode.

**Meta Tags Required:**
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="[from content file later]" />
<title>[from content file later]</title>
```
Content-specific meta tags will be added in Story 1.4 when we wire up content.

**CSS Loading Order (CRITICAL):**
```html
<!-- 1. Preload font (downloads in background) -->
<link rel="preload" as="font" href="/fonts/inter-var.woff2" type="font/woff2" crossorigin>

<!-- 2. Base CSS (render-blocking, <1KB) -->
<link rel="stylesheet" href="/styles/base.css">

<!-- 3. Styled CSS (lazy-loaded, non-blocking) -->
<link rel="stylesheet" href="/styles/styled.css" media="print" onload="this.media='all'">
```

**NO `<noscript>` fallback for styled.css** - Architecture clarification: No-JS users see raw state by design. The `media="print"` trick handles this without needing a `<noscript>` tag.

#### CSS Layers Deep Dive

**Layer Declaration (top of base.css):**
```css
@layer base, styled;
```
This MUST be the first line. Declares layer order. Later CSS can reference these layers.

**Base Layer Content (@layer base { }):**
- Minimal CSS reset (NOT a full reset library like Normalize.css)
- System font stack
- Structural typography (headings, lists, paragraphs)
- Focus indicators that work in BOTH states
- Skip link styles
- Base color variables (browser defaults)
- NO layout beyond natural document flow
- File size budget: <1KB (roughly 50-70 lines of CSS)

**Styled Layer Content (@layer styled { }):**
- ALL selectors scoped under `html[data-styled]`
- Example: `html[data-styled] h1 { ... }`
- Custom font `@font-face` declaration
- Full color palette
- Spacing refinements
- Visual hierarchy enhancements
- Layout polish
- Size: Can be larger (2-4KB target), loaded async

**Why Scope Everything Under `html[data-styled]`?**
The CSS toggle (Story 2.1) will add/remove `data-styled` attribute on `<html>`. When present, styled layer applies. When absent, only base layer visible. One attribute controls entire visual state.

#### Font System

**Font Choice: Inter Variable**
- **Why Inter?** Designed for screens, excellent at small sizes, wide language support (FR/EN/Serbian), variable font (single file, multiple weights), open source
- **Format:** WOFF2 (best compression, universal browser support)
- **File:** `inter-var.woff2` (~100KB for variable weight file)
- **Source:** https://rsms.me/inter/ (official Inter site) or https://github.com/rsms/inter

**Font File Location:**
```
app/public/fonts/inter-var.woff2
```
Files in `/public` are served at root: `/fonts/inter-var.woff2`

**`@font-face` Declaration (in styled.css):**
```css
@layer styled {
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-var.woff2') format('woff2-variations');
    font-weight: 100 900; /* Variable font weight range */
    font-display: swap; /* CRITICAL: no FOIT, show fallback then swap */
    font-style: normal;
  }

  html[data-styled] {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
}
```

**Font Loading Strategy:**
1. **Preload in `<head>`** - Font starts downloading immediately
2. **`font-display: swap`** - Browser shows fallback font (system), then swaps when Inter loads
3. **Result:** Zero FOIT (flash of invisible text), minimal FOUT (flash of unstyled text)
4. **Toggle benefit:** By the time user clicks toggle button, font is already cached - instant visual change

**System Font Stack (Base Layer):**
```css
@layer base {
  :root {
    --cv-font-body: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  body {
    font-family: var(--cv-font-body);
  }
}
```

#### Color System (UX Design Specification)

**Raw State Colors (Browser Defaults):**
```css
@layer base {
  /* Use browser default colors - do NOT override */
  /* Text: CanvasText (typically #000000) */
  /* Background: Canvas (typically #ffffff) */
  /* Links: LinkText (typically #0000ee) */
}
```
**DO NOT set custom colors in base layer** - raw state uses browser defaults for guaranteed AAA contrast.

**Styled State Colors (AAA Verified):**
```css
@layer styled {
  html[data-styled] {
    --cv-color-bg: #fafafa;        /* Warm white background */
    --cv-color-surface: #ffffff;    /* Card surfaces */
    --cv-color-text: #1a1a1a;      /* Primary text - 17.4:1 contrast */
    --cv-color-text-secondary: #555555; /* Secondary text - 7.3:1 contrast */
    --cv-color-accent: #2563eb;     /* Links - 7.1:1 contrast */
    --cv-color-accent-hover: #1d4ed8;
    --cv-color-border: #e5e5e5;
    --cv-color-heading: #111111;    /* 18.1:1 contrast */
  }
}
```
All contrast ratios verified in UX Design spec - AAA compliant (7:1 minimum).

#### Spacing Scale (UX Design)

**Spacing Tokens (8px base unit):**
```css
@layer styled {
  html[data-styled] {
    --cv-space-xs: 0.25rem;  /* 4px */
    --cv-space-sm: 0.5rem;   /* 8px */
    --cv-space-md: 1rem;     /* 16px */
    --cv-space-lg: 2rem;     /* 32px */
    --cv-space-xl: 3rem;     /* 48px */
    --cv-space-2xl: 4rem;    /* 64px */
  }
}
```

#### Typography Scale (UX Design)

**Type Scale (same scale, different fonts in each state):**
```css
@layer base {
  h1 { font-size: 2rem; font-weight: 700; line-height: 1.2; }
  h2 { font-size: 1.5rem; font-weight: 600; line-height: 1.3; }
  h3 { font-size: 1.25rem; font-weight: 600; line-height: 1.3; }
  body { font-size: 1rem; line-height: 1.6; }
}

@layer styled {
  html[data-styled] h1 { /* Can refine if needed */ }
  /* Typography hierarchy remains, just with Inter font */
}
```

#### Skip Link Implementation

**HTML Structure (in Base.astro):**
```html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <!-- header, nav, etc. -->
  <main id="main">
    <slot />
  </main>
</body>
```

**CSS (in base.css):**
```css
@layer base {
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }
}
```
Skip link is hidden off-screen, becomes visible on keyboard focus.

### Library & Framework Requirements

**NO External Dependencies to Install:**
- NO CSS framework (Tailwind, Bootstrap, etc.)
- NO CSS reset library (Normalize.css, Reset.css)
- NO font CDN (Google Fonts, Typekit) - self-hosted only
- NO JavaScript for this story - pure HTML/CSS

**Astro Built-in Features to Use:**
- `Astro.currentLocale` for language detection
- `<slot />` for content composition
- Standard `<link>` tags for CSS (Astro handles bundling)

**Font Source:**
- Download Inter from: https://rsms.me/inter/
- Use variable font file: `inter-var.woff2`
- License: SIL Open Font License (free for all use)

### File Structure Requirements

**Complete File Tree After This Story:**
```
app/
├── public/
│   └── fonts/
│       └── inter-var.woff2        # NEW: Self-hosted variable font
├── src/
│   ├── layouts/
│   │   └── Base.astro              # NEW: Main HTML shell
│   ├── pages/
│   │   ├── index.astro             # UPDATED: Use Base layout
│   │   └── en/
│   │       └── index.astro         # UPDATED: Use Base layout
│   ├── styles/
│   │   ├── base.css                # NEW: Render-blocking, <1KB
│   │   └── styled.css              # NEW: Lazy-loaded, 2-4KB
│   └── content/
│       ├── types.ts                # EXISTS: From Story 1.2
│       ├── fr.ts                   # EXISTS: From Story 1.2
│       └── en.ts                   # EXISTS: From Story 1.2
```

**Path References (CRITICAL):**
- CSS paths in Base.astro: `/styles/base.css`, `/styles/styled.css`
- Font path in CSS: `/fonts/inter-var.woff2`
- Font path in preload: `/fonts/inter-var.woff2`
- These are PUBLIC URLs - Astro serves `/public` at root

### Testing Requirements

**Build Test:**
```bash
bun run build
```
Must exit 0, no TypeScript errors, no CSS errors.

**Visual Tests (in browser via `bun run preview`):**
1. **Raw state test** - Disable JavaScript in DevTools, reload
   - Content readable with system fonts
   - Headings clearly distinct
   - Links visible and functional
   - Skip link appears on Tab key focus
   - No broken styling, no missing fonts

2. **Styled state test** - Enable JavaScript, manually add `data-styled` attribute to `<html>` via DevTools console:
   ```js
   document.documentElement.dataset.styled = ''
   ```
   - Custom font (Inter) loads
   - Color palette applies
   - Spacing refined
   - Visual hierarchy clear

3. **Font loading test**
   - Network tab: verify inter-var.woff2 downloads
   - No FOIT (flash of invisible text)
   - `font-display: swap` working (fallback shows first)

4. **Accessibility tests**
   - Keyboard Tab: skip link appears first, works
   - Focus indicators visible on all interactive elements
   - `lang` attribute matches locale (FR or EN)
   - Lighthouse accessibility: should score 100

5. **Performance test**
   - base.css size: <1KB (check in Network tab)
   - First Contentful Paint: <1s (Lighthouse)
   - base.css is render-blocking (waterfall chart shows early)
   - styled.css is non-blocking (loads in parallel)

### Important Guardrails

**DO:**
- Follow layer system EXACTLY as architected
- Keep base.css under 1KB (every byte counts for FCP)
- Use CSS custom properties for values that change between states
- Test both raw and styled states visually
- Verify font file exists before referencing in CSS
- Use semantic HTML in layout (header, main, footer)
- Include skip link as FIRST element in body

**DO NOT:**
- Add ANY styles outside the layer system
- Use `!important` anywhere
- Override browser default colors in base layer
- Add JavaScript to this story (CSS toggle is Story 2.1)
- Use external CDN for fonts
- Add component-scoped `<style>` in .astro files
- Create additional CSS files beyond base.css and styled.css
- Use CSS frameworks or utility classes

**CRITICAL MISTAKES TO AVOID:**
1. **Forgetting `crossorigin` on font preload** - Font won't preload without it
2. **Wrong font path** - `/fonts/inter-var.woff2` NOT `/public/fonts/...`
3. **Missing `@layer` declaration** - Breaks entire cascade system
4. **Not scoping styled layer under `html[data-styled]`** - Toggle won't work
5. **Using `media="print"` without `onload`** - Styled CSS never applies
6. **Exceeding 1KB in base.css** - Hurts performance budget

### Latest Technical Information

**CSS Layers (@layer) - February 2026:**
- **Browser Support:** Chrome 99+, Firefox 97+, Safari 15.4+ (March 2022)
- **Compatible with target browsers:** All latest 2 versions (NFR13) support it
- **Best Practice:** Declare all layers upfront in order: `@layer base, styled;`
- **Specificity:** Layers respect cascade order regardless of selector specificity
- **Performance:** Zero overhead - layer statements removed in production

**Inter Font - Latest Version:**
- **Current Version:** Inter 4.0 (Variable font)
- **File Size:** ~100KB for variable WOFF2 (weight 100-900)
- **Variable Font Benefits:** Single file replaces 9 separate weight files
- **Browser Support:** WOFF2 variable fonts supported in all modern browsers
- **Fallback:** System font stack ensures text always visible

**Font Display Strategies:**
- **`font-display: swap`** - Recommended for performance (Core Web Vitals)
- **Behavior:** Show fallback font immediately, swap when custom font loads
- **Advantage:** Zero FOIT, minimal FOUT, better LCP (Largest Contentful Paint)
- **Google Fonts migrated to swap** - Industry standard as of 2023

**Astro 5 CSS Handling:**
- **Built-in PostCSS:** Astro processes CSS through Vite
- **Import in components:** Can use `import './styles.css'` in .astro frontmatter
- **Public folder:** Files in `/public` served at root (no processing)
- **Our approach:** Direct `<link>` tags in layout (explicit, predictable)

**View Transitions API (Context for Story 2.1):**
- **Current Status:** Supported in Chrome/Edge 111+, not yet in Firefox/Safari
- **Our Strategy:** Feature-detect, graceful degradation to instant swap
- **No polyfill needed** - Fallback is built into Story 2.1 design

### Project Structure Notes

**Alignment with Architecture:**
✅ Flat component organization (no feature folders)
✅ Two CSS files only (base.css, styled.css)
✅ No component-scoped styles
✅ Self-hosted fonts in /public/fonts/
✅ Content files separate from templates (Story 1.2)

**Current Sprint Context:**
- Epic 1: Foundation & Bilingual Content Display (IN PROGRESS)
- Story 1.1: ✅ Done (Config & Routing)
- Story 1.2: ✅ Done (Content Type System)
- **Story 1.3: ⏳ THIS STORY (Base Layout & CSS)**
- Story 1.4: ⏭️ Next (Content Display Components)
- Story 1.5: ⏭️ Then (Language Switch Component)

**What This Story Does NOT Include:**
- NO CSS toggle button (Story 2.1)
- NO content display components (Story 1.4)
- NO language switch component (Story 1.5)
- NO keyboard shortcuts (Story 3.2)
- This story is PURE foundation - HTML shell and CSS layer system

### References

All technical details with source paths and sections:

- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Toggle Mechanism: CSS Layers + Lazy Loading]
- [Source: _bmad-output/planning-artifacts/architecture.md#Font Loading Strategy: Preload + Swap]
- [Source: _bmad-output/planning-artifacts/architecture.md#CSS Conventions]
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility Patterns]
- [Source: _bmad-output/planning-artifacts/epics.md#Story 1.3: Base Layout with CSS Layers & Typography]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Color System]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Typography System]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Spacing & Layout Foundation]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Accessibility Considerations]
- [Source: _bmad-output/implementation-artifacts/1-1-astro-project-configuration-bilingual-routing.md#Implementation]
- [Source: _bmad-output/implementation-artifacts/1-2-content-type-system-data-files.md#Implementation]
- [Source: https://rsms.me/inter/ - Inter Font Official Site]
- [Source: https://web.dev/font-display/ - Font Display Strategy Best Practices]
- [Source: https://developer.mozilla.org/en-US/docs/Web/CSS/@layer - CSS Layers Documentation]

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

