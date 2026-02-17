---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
workflowComplete: true
completedAt: '2026-02-15'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
---

# github-page - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for github-page, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Content Display:**
- FR1: Visitor can view all content sections (Links, Skills, Experience, Projects, CV Download) on a single page
- FR2: Visitor can read all content in a no-CSS state with system fonts and structural styles
- FR3: Visitor can view a hierarchical skills display (Expertise / Experience / Curiosity tiers)
- FR4: Visitor can view professional experience in a scannable format
- FR5: Visitor can view project listings with links to live projects

**Bilingual Support:**
- FR6: Visitor can access the site in French at the root route (`/`)
- FR7: Visitor can access the site in English at `/en`
- FR8: Visitor can switch language via a visible toggle in the header
- FR9: All content sections are available in both languages with identical structure

**CSS Toggle:**
- FR10: Visitor can toggle between raw (no-CSS) and styled states via a button
- FR11: The toggle triggers a radial visual transition originating from the button position
- FR12: The toggle button appears styled/"alive" on the raw page and brutalist/raw on the styled page
- FR13: The toggle state is reversible (can switch back and forth)
- FR14: The site degrades to instant swap on browsers without View Transitions support

**Typography:**
- FR15: The raw state displays content using the system font stack
- FR16: The styled state displays content using a custom self-hosted font

**Navigation:**
- FR17: Visitor can navigate to any section via a table of contents
- FR18: Visitor can jump to sections using keyboard shortcuts (`1-5`)
- FR19: Visitor can toggle CSS via keyboard shortcut (`t`)
- FR20: Visitor can switch language via keyboard shortcut (`l`)
- FR21: Visitor can view available shortcuts via keyboard shortcut (`?`)
- FR22: Visitor can navigate the entire site using only the keyboard

**Contact & Downloads:**
- FR23: Visitor can download a PDF CV in French
- FR24: Visitor can download a PDF CV in English
- FR25: Visitor can access email contact via a mailto link
- FR26: Visitor can access GitHub, LinkedIn, and other professional network links

**Accessibility:**
- FR27: Screen reader users can navigate the site using semantic landmarks
- FR28: Visitor can skip to main content via a skip link
- FR29: Counter updates are announced to screen readers via aria-live region (Phase 2)
- FR30: Visitors with reduced motion preferences see no animation on toggle

**Deployment:**
- FR31: The site generates as fully static files
- FR32: The site deploys automatically via GitHub Actions to GitHub Pages
- FR33: The site is accessible at the GitHub Pages URL

### Non-Functional Requirements

**Performance:**
- NFR1: Lighthouse Performance score > 90 on mobile
- NFR2: First Contentful Paint < 1 second on 4G connection
- NFR3: Total page weight < 200KB (excluding PDF downloads)
- NFR4: No render-blocking resources in no-CSS state
- NFR5: CSS toggle transition completes in < 300ms (perceived instant)
- NFR6: Custom font loaded asynchronously (no FOIT on styled state)

**Accessibility:**
- NFR7: WCAG AAA compliance (contrast ratio 7:1 minimum)
- NFR8: All interactive elements reachable via keyboard with visible focus indicators
- NFR9: `prefers-reduced-motion` respected — no animation when set
- NFR10: Semantic HTML passes automated accessibility audit (axe, Lighthouse)
- NFR11: Content readable and functional at 200% zoom
- NFR12: Touch targets minimum 44x44px on mobile

**Compatibility:**
- NFR13: Full functionality in Chrome, Firefox, Safari (latest 2 versions)
- NFR14: View Transitions gracefully degrades to instant swap in unsupported browsers
- NFR15: Site fully functional with JavaScript disabled (except toggle animation and counter)

**Maintainability:**
- NFR16: Content stored in structured data files (JSON or MD), separate from templates
- NFR17: Adding a new language requires only new content files + route, no structural changes
- NFR18: Build completes in < 30 seconds

### Additional Requirements

**From Architecture:**
- Existing Astro "Basics" Template already initialized at `/app` with Astro 5.17.1 and TypeScript strict
- CSS Toggle Mechanism: CSS Layers (`@layer base, styled`) with lazy loading and button gate
- Content Data Format: TypeScript files with shared `Content` interface for compile-time type safety
- Font Loading Strategy: Preload with `font-display: swap` for zero-flash toggle
- Bilingual Routing: Astro native i18n config with `defaultLocale: 'fr'`, `locales: ['fr', 'en']`
- GitHub Pages: Root domain deployment with `site` URL in Astro config
- View Transitions: Use `document.startViewTransition()` raw browser API (not Astro's navigation component)
- No CSS framework — vanilla CSS only in two files: `base.css` (<1KB, render-blocking) and `styled.css` (lazy-loaded)
- Client-side islands: `CssToggle.astro` and `KeyboardNav.astro` with `client:load`
- Font choice: Inter variable font, self-hosted from `/public/fonts/`
- All scripts in `<script>` tags within Astro components, no external `.js` files
- No component-scoped `<style>` blocks — all CSS in the two layer files
- Project structure enforces flat component organization (no feature folders for this scale)

**From UX Design:**
- Color system: Browser defaults in raw state, custom palette in styled state
- Toggle button colors: `#1a1a1a` background with white text in raw, transparent with border in styled
- Typography: System font stack in raw, Inter variable font in styled
- Spacing scale: 8px base unit with tokens from `--cv-space-xs` (4px) to `--cv-space-2xl` (64px)
- AAA contrast ratios verified: Text (#1a1a1a) on bg (#fafafa) = 17.4:1, Accent (#2563eb) on bg = 7.1:1
- Touch targets: All interactive elements minimum 44x44px, toggle button 48px height
- Responsive: Single-column layout at all breakpoints, content max-width 65ch
- Focus indicators: `outline: 2px solid currentColor; outline-offset: 2px` — never remove
- Motion: `prefers-reduced-motion: reduce` triggers instant swap instead of animation
- Zoom: All sizing in `rem`, readable and functional at 200% zoom
- Skip link as first focusable element
- `aria-pressed` on toggle button
- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`

### FR Coverage Map

**Epic 1: Foundation & Bilingual Content Display**
- FR1: View all content sections on single page
- FR2: Read content in no-CSS state
- FR3: View hierarchical skills display
- FR4: View professional experience in scannable format
- FR5: View project listings with links
- FR6: Access site in French at root route
- FR7: Access site in English at `/en`
- FR8: Switch language via header toggle
- FR9: All content available in both languages
- FR15: Raw state uses system font stack
- FR16: Styled state uses custom self-hosted font
- FR27: Screen reader navigation with semantic landmarks
- FR28: Skip to main content via skip link

**Epic 2: CSS Toggle & Visual Transformation**
- FR10: Toggle between raw and styled states
- FR11: Radial visual transition from button position
- FR12: Button aesthetic inversion (styled on raw, raw on styled)
- FR13: Reversible toggle state
- FR14: Graceful degradation for browsers without View Transitions
- FR30: Reduced motion preferences respected

**Epic 3: Enhanced Navigation & Keyboard Shortcuts**
- FR17: Navigate via table of contents
- FR18: Jump to sections using keyboard shortcuts (1-5)
- FR19: Toggle CSS via keyboard shortcut (t)
- FR20: Switch language via keyboard shortcut (l)
- FR21: View available shortcuts via keyboard shortcut (?)
- FR22: Full keyboard navigation support

**Epic 4: Downloads & Professional Contact**
- FR23: Download PDF CV in French
- FR24: Download PDF CV in English
- FR25: Email contact via mailto link
- FR26: Access GitHub, LinkedIn, and professional network links

**Epic 5: Automated Deployment Pipeline**
- FR31: Site generates as fully static files
- FR32: Automatic deployment via GitHub Actions
- FR33: Accessible at GitHub Pages URL

**Note:** FR29 (aria-live for counter) is deferred to Phase 2.

## Epic List

### Epic 1: Foundation & Bilingual Content Display

Visitors can read all CV content (skills, experience, projects, links) in French or English on a clean, accessible single-page site.

**User Value:** The site exists. Content is fully readable in both languages. Progressive enhancement baseline is established (raw state works).

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR15, FR16, FR27, FR28

**NFRs addressed:** NFR7, NFR8, NFR10, NFR11, NFR15, NFR16, NFR17, NFR18

---

### Epic 2: CSS Toggle & Visual Transformation

Visitors experience the signature CSS toggle — a button that triggers a radial transition transforming the page from raw HTML to fully styled design.

**User Value:** The memorable "wow" moment. The site demonstrates platform mastery through the toggle interaction.

**FRs covered:** FR10, FR11, FR12, FR13, FR14, FR30

**NFRs addressed:** NFR5, NFR6, NFR9, NFR14

---

### Epic 3: Enhanced Navigation & Keyboard Shortcuts

Visitors can navigate efficiently using keyboard shortcuts (1-5, t, l, ?) and jump to sections via table of contents.

**User Value:** Power users and accessibility users get efficient navigation paths. Full keyboard support.

**FRs covered:** FR17, FR18, FR19, FR20, FR21, FR22

**NFRs addressed:** NFR8

---

### Epic 4: Downloads & Professional Contact

Visitors can download CV PDFs (FR/EN), access email contact, and reach GitHub/LinkedIn profiles.

**User Value:** Recruiters get the CV. Clients can reach out. Technical credibility is established through project links.

**FRs covered:** FR23, FR24, FR25, FR26, NIP-05 (self-hosted Nostr identity)

**NFRs addressed:** NFR12 (touch targets for download buttons)

---

### Epic 5: Automated Deployment Pipeline

The site is live on GitHub Pages and automatically deploys on every commit to main.

**User Value:** Site is publicly accessible. Future updates deploy automatically.

**FRs covered:** FR31, FR32, FR33

**NFRs addressed:** NFR1, NFR2, NFR3, NFR4, NFR13

---

## Epic 1: Foundation & Bilingual Content Display

Visitors can read all CV content (skills, experience, projects, links) in French or English on a clean, accessible single-page site.

### Story 1.1: Astro Project Configuration & Bilingual Routing

As a visitor,
I want to access the site in my preferred language (French or English),
So that I can read content in a language I'm comfortable with.

**Acceptance Criteria:**

**Given** the Astro project is initialized at `/app`
**When** I configure `astro.config.mjs` with i18n settings
**Then** the config specifies `defaultLocale: 'fr'` and `locales: ['fr', 'en']`
**And** the `site` URL is set for GitHub Pages deployment
**And** the `output` mode is set to `'static'`

**Given** bilingual routing is configured
**When** a visitor navigates to `/`
**Then** they see the French version of the site
**And** when they navigate to `/en/`
**Then** they see the English version of the site
**And** the `lang` attribute on `<html>` matches the current locale

**Given** the project structure exists
**When** I create page files
**Then** `src/pages/index.astro` exists for French
**And** `src/pages/en/index.astro` exists for English

---

### Story 1.2: Content Type System & Data Files (FR/EN)

As a developer,
I want a type-safe content structure that enforces parity between languages,
So that French and English content always have identical structure.

**Acceptance Criteria:**

**Given** the content type system needs to be created
**When** I create `src/content/types.ts`
**Then** it exports a `Content` interface defining all content sections
**And** the interface includes: `meta`, `links`, `skills`, `experience`, `projects`, `cv` fields
**And** TypeScript strict mode enforces the structure

**Given** the Content interface exists
**When** I create `src/content/fr.ts`
**Then** it exports a const conforming to the `Content` interface
**And** all required fields are populated with French content
**And** TypeScript compilation succeeds

**Given** the Content interface exists
**When** I create `src/content/en.ts`
**Then** it exports a const conforming to the `Content` interface
**And** all required fields are populated with English content
**And** if French has a field that English lacks, TypeScript compilation fails

**Given** both content files exist
**When** I compare their structure
**Then** both files implement identical keys and structure
**And** only the text content differs between languages

---

### Story 1.3: Base Layout with CSS Layers & Typography

As a visitor,
I want the page to load with clean semantic HTML and structural styles,
So that I can read content immediately while the styled CSS loads in the background.

**Acceptance Criteria:**

**Given** the layout system needs to be created
**When** I create `src/layouts/Base.astro`
**Then** it includes a valid HTML5 structure with `<html>`, `<head>`, `<body>`
**And** it sets the `lang` attribute based on the current locale
**And** it includes a `<slot />` for page content

**Given** the CSS layer system needs to be set up
**When** I create `src/styles/base.css`
**Then** it declares `@layer base, styled;` at the top
**And** it includes CSS reset and normalization
**And** it defines system font stack: `system-ui, -apple-system, sans-serif`
**And** it includes focus indicators: `outline: 2px solid currentColor; outline-offset: 2px`
**And** it includes skip link styles
**And** the file size is under 1KB

**Given** the styled layer needs to be created
**When** I create `src/styles/styled.css`
**Then** it includes styles scoped under `html[data-styled]`
**And** it defines custom font `@font-face` for Inter variable font
**And** it includes the designed color palette with verified AAA contrast
**And** it includes spacing scale tokens

**Given** the CSS files exist
**When** the Base layout loads `base.css`
**Then** it's loaded as render-blocking via standard `<link rel="stylesheet">`
**And** when it loads `styled.css`
**Then** it uses `media="print" onload="this.media='all'"` for lazy loading

**Given** font loading needs to be optimized
**When** the Base layout includes font preload
**Then** it includes `<link rel="preload" as="font" href="/fonts/inter-var.woff2" crossorigin>`
**And** the font file exists at `/public/fonts/inter-var.woff2`
**And** the `@font-face` uses `font-display: swap`

**Given** semantic accessibility is required
**When** I add the skip link to the layout
**Then** it's the first focusable element in the `<body>`
**And** it links to `#main` with text "Skip to main content"
**And** the main content area has `id="main"`

---

### Story 1.4: Content Display Components (Skills, Experience, Projects, Links)

As a visitor,
I want to view all CV sections (skills, experience, projects, links) on a single page,
So that I can scan the developer's qualifications quickly.

**Acceptance Criteria:**

**Given** the component structure needs to be created
**When** I create content section components
**Then** `src/components/Section.astro` exists as a reusable wrapper
**And** it accepts `id`, `heading`, and slot for content
**And** it uses semantic `<section>` with proper heading hierarchy

**Given** the skills section needs to be displayed
**When** I create `src/components/SkillsList.astro`
**Then** it accepts skills data as props (expertise, experience, curiosity arrays)
**And** it renders three distinct tiers with clear labels
**And** it uses semantic HTML (lists, headings)

**Given** the experience section needs to be displayed
**When** I create `src/components/ExperienceList.astro`
**Then** it accepts experience array as props
**And** it renders each role with: title, company, period, description
**And** it's formatted for scannable reading (clear hierarchy)

**Given** the projects section needs to be displayed
**When** I create `src/components/ProjectsList.astro`
**Then** it accepts projects array as props
**And** it renders each project with: name, URL, description
**And** all project links are functional `<a>` tags with `href`

**Given** the links section needs to be displayed
**When** I create `src/components/LinksList.astro`
**Then** it accepts links array as props
**And** it renders GitHub, LinkedIn, email, and other network links
**And** email uses `mailto:` protocol
**And** all links have proper labels and are keyboard accessible

**Given** all components exist
**When** I integrate them into the page template
**Then** both `src/pages/index.astro` and `src/pages/en/index.astro` import the correct content file
**And** they pass data to components as props
**And** all five sections render in order: Links, Skills, Experience, Projects, CV Download placeholder

**Given** the raw state must be readable
**When** I view the page with only `base.css` loaded
**Then** all content is readable with system fonts
**And** heading hierarchy is clear
**And** lists are properly formatted
**And** the page doesn't look broken

---

### Story 1.5: Language Switch Component

As a visitor,
I want to switch between French and English versions,
So that I can read content in my preferred language.

**Acceptance Criteria:**

**Given** the header component needs language switching
**When** I create or update `src/components/Header.astro`
**Then** it includes a language switch link
**And** on the French page (`/`), it links to `/en/` with label "EN"
**And** on the English page (`/en/`), it links to `/` with label "FR"
**And** the current language is visually indicated

**Given** the language switch exists
**When** a visitor clicks the language link
**Then** they navigate to the other language version (full page load)
**And** the `lang` attribute updates to match the new locale
**And** the content switches to the selected language

**Given** keyboard navigation is required
**When** a visitor tabs through the page
**Then** the language switch is keyboard accessible
**And** it has visible focus indicators
**And** it can be activated with Enter or Space

**Given** the language switch needs proper labeling
**When** the component renders
**Then** it uses a semantic `<a>` tag (navigation, not a button)
**And** the link has proper contrast in both raw and styled states
**And** the purpose is clear to screen reader users

---

## Epic 2: CSS Toggle & Visual Transformation

Visitors experience the signature CSS toggle — a button that triggers a radial transition transforming the page from raw HTML to fully styled design.

### Story 2.1: CSS Toggle Button Component with State Management

As a visitor,
I want to click a toggle button to switch between raw and styled visual states,
So that I can experience the site's progressive enhancement demonstration.

**Acceptance Criteria:**

**Given** the CSS toggle component needs to be created
**When** I create `src/components/CssToggle.astro`
**Then** it includes a `<button>` element (not a div)
**And** it uses `client:load` directive for interactivity
**And** the button has `aria-pressed="false"` initially

**Given** the toggle button needs to be styled in raw state
**When** the page loads without `data-styled` attribute
**Then** the toggle button has background `#1a1a1a` and text `#ffffff`
**And** the button is 48px minimum height with generous padding
**And** it's the ONLY visually styled element on the raw page
**And** it has clear contrast against the white background

**Given** the toggle button needs to be disabled until styled CSS loads
**When** the page loads
**Then** the button starts with `disabled` attribute
**And** a `load` event listener on the styled CSS link enables the button
**And** the button only becomes interactive after `styled.css` is fully loaded

**Given** the toggle state management needs to work
**When** I click the toggle button
**Then** the `<html>` element's `data-styled` attribute is toggled
**And** `aria-pressed` updates to reflect current state (true/false)
**And** the button remains clickable for repeated toggling

**Given** the button needs aesthetic inversion
**When** `data-styled` is set (styled state)
**Then** the button appearance becomes brutalist: transparent background, `1px solid #1a1a1a` border
**And** it uses monospace font
**And** it visually contrasts with the now-styled page

---

### Story 2.2: View Transitions Integration with Radial Animation

As a visitor,
I want the CSS toggle to trigger a smooth radial animation,
So that the transformation feels polished and intentional.

**Acceptance Criteria:**

**Given** View Transitions API needs to be integrated
**When** I implement the toggle interaction in `CssToggle.astro`
**Then** it checks for `document.startViewTransition` support
**And** if supported, it wraps the DOM update in `document.startViewTransition()`
**And** if not supported, it falls back to instant swap

**Given** the radial animation origin needs to be set
**When** the toggle button is clicked
**Then** the script gets the button's position using `getBoundingClientRect()`
**And** it sets CSS custom properties for the radial origin coordinates
**And** the View Transition uses these coordinates for the circle center

**Given** the animation needs to be fast
**When** the transition executes
**Then** the total duration is 200-300ms
**And** it feels instant, not slow or gimmicky
**And** the radial clip-path expands smoothly from the button position

**Given** the transition needs to work in both directions
**When** toggling from raw to styled
**Then** the radial wave reveals the styled state
**And** when toggling from styled to raw
**Then** the radial wave reveals the raw state
**And** both directions use the same animation origin (button position)

**Given** browsers without View Transitions need to work
**When** the API is not supported
**Then** the state change happens instantly
**And** the site remains fully functional
**And** no errors are thrown

---

### Story 2.3: Reduced Motion Support & Accessibility

As a visitor with motion sensitivity,
I want the toggle to work without animation when I've set reduced motion preferences,
So that I can use the site comfortably.

**Acceptance Criteria:**

**Given** reduced motion preferences need to be respected
**When** the user has `prefers-reduced-motion: reduce` set
**Then** the toggle executes an instant swap with no animation
**And** the View Transition is skipped entirely
**And** the functionality remains identical (just without animation)

**Given** keyboard activation needs to work
**When** I focus the toggle button and press Enter or Space
**Then** the toggle activates identically to a click
**And** the keyboard event triggers the same transition logic

**Given** screen reader support is required
**When** a screen reader user encounters the toggle button
**Then** it announces as a button with pressed state
**And** the `aria-pressed` attribute updates are announced
**And** the button has a clear accessible label (e.g., "Toggle CSS")

**Given** focus management needs to be maintained
**When** the toggle transition occurs
**Then** focus remains on the toggle button
**And** the page scroll position is preserved
**And** no layout shift occurs

---

## Epic 3: Enhanced Navigation & Keyboard Shortcuts

Visitors can navigate efficiently using keyboard shortcuts (1-5, t, l, ?) and jump to sections via table of contents.

### Story 3.1: Table of Contents with Anchor Navigation

As a visitor,
I want to see a table of contents and jump to any section,
So that I can quickly navigate to the information I need.

**Acceptance Criteria:**

**Given** the table of contents needs to be created
**When** I add a ToC section to the page
**Then** it lists all main sections: Links, Skills, Experience, Projects, CV Download
**And** each ToC item is an anchor link (`<a href="#section-id">`)
**And** the links work in both raw and styled states

**Given** sections need to be linkable
**When** I update the Section component
**Then** each section has a unique `id` attribute
**And** the IDs match the ToC anchor links
**And** clicking a ToC link scrolls to the corresponding section

**Given** the ToC needs to be accessible
**When** I render the ToC
**Then** it uses semantic navigation markup (`<nav>`)
**And** it has proper heading or `aria-label`
**And** it's keyboard navigable (tab through links)

**Given** smooth scrolling may be desired
**When** a visitor clicks a ToC link
**Then** the browser scrolls to the target section
**And** the URL hash updates to reflect the current section
**And** `prefers-reduced-motion` users get instant jump (no smooth scroll)

---

### Story 3.2: Keyboard Shortcuts System (1-5, t, l)

As a power user,
I want to use keyboard shortcuts to navigate sections and toggle features,
So that I can interact with the site efficiently.

**Acceptance Criteria:**

**Given** the keyboard navigation system needs to be created
**When** I create `src/components/KeyboardNav.astro`
**Then** it includes a `<script>` tag with `client:load`
**And** it sets up a keydown event listener on `document`

**Given** section shortcuts need to work (1-5)
**When** I press keys `1`, `2`, `3`, `4`, or `5`
**Then** the page scrolls to the corresponding section (Links, Skills, Experience, Projects, CV)
**And** focus moves to that section's heading
**And** the shortcuts only activate when no input/textarea is focused

**Given** the CSS toggle shortcut needs to work
**When** I press the `t` key
**Then** the CSS toggle activates (same as clicking the button)
**And** the transition/instant swap occurs
**And** focus management works identically to button click

**Given** the language switch shortcut needs to work
**When** I press the `l` key
**Then** the page navigates to the other language version
**And** it's equivalent to clicking the language switch link

**Given** shortcuts shouldn't interfere with inputs
**When** a visitor is focused on an input or textarea
**Then** keyboard shortcuts are disabled
**And** typing in the input works normally
**And** shortcuts re-enable when focus leaves the input

**Given** browser shortcut conflicts need to be avoided
**When** implementing shortcuts
**Then** no Ctrl/Cmd/Alt modifiers are used
**And** common browser shortcuts (Ctrl+T, Ctrl+L) aren't overridden
**And** screen reader shortcuts aren't conflicted

---

### Story 3.3: Keyboard Shortcuts Help Overlay

As a visitor,
I want to see a list of available keyboard shortcuts,
So that I know what shortcuts are available.

**Acceptance Criteria:**

**Given** the help overlay needs to be triggered
**When** I press the `?` key
**Then** a help overlay appears showing all shortcuts
**And** pressing `?` again or `Escape` closes the overlay

**Given** the help overlay needs proper structure
**When** the overlay is created
**Then** it uses `role="dialog"` for accessibility
**And** it has an `aria-label` like "Keyboard shortcuts"
**And** focus is trapped within the dialog while open

**Given** the help content needs to be clear
**When** the overlay displays
**Then** it lists all shortcuts with descriptions:
  - 1-5: Jump to sections
  - t: Toggle CSS
  - l: Switch language
  - ?: Show/hide this help
**And** the text is readable in both raw and styled states

**Given** the overlay needs to be dismissible
**When** the overlay is open
**Then** clicking outside it closes it
**And** pressing Escape closes it
**And** pressing `?` again closes it
**And** focus returns to the element that had focus before opening

**Given** the overlay needs minimal styling
**When** displayed in raw state
**Then** it has basic styling to be readable and clearly overlaid
**And** when displayed in styled state
**Then** it uses the styled design system
**And** it respects the current visual state

---

## Epic 4: Downloads & Professional Contact

Visitors can download CV PDFs (FR/EN), access email contact, and reach GitHub/LinkedIn profiles.

### Story 4.1: CV Download Component with PDF Files

As a recruiter,
I want to download the developer's CV in my preferred language,
So that I can review their qualifications offline.

**Acceptance Criteria:**

**Given** CV PDF files need to exist
**When** I add CV files to the project
**Then** `public/cv/cv-fr.pdf` exists with French CV content
**And** `public/cv/cv-en.pdf` exists with English CV content
**And** both PDFs are complete and professional

**Given** the CV download component needs to be created
**When** I create `src/components/CvDownload.astro`
**Then** it displays download buttons for both French and English CVs
**And** each button is a semantic `<a>` tag with `download` attribute
**And** the French button links to `/cv/cv-fr.pdf`
**And** the English button links to `/cv/cv-en.pdf`

**Given** the download buttons need proper labeling
**When** rendering the buttons
**Then** labels clearly indicate language: "Download CV (FR)" and "Download CV (EN)"
**And** both buttons are visible regardless of current page language
**And** buttons work identically on both `/` and `/en/` pages

**Given** touch targets need to meet accessibility standards
**When** styling the download buttons
**Then** each button is minimum 44x44px on mobile (48px recommended)
**And** generous padding ensures easy tapping on mobile devices
**And** buttons have visible hover/focus states

**Given** the download action needs to work
**When** a visitor clicks a download button
**Then** the PDF file downloads immediately
**And** no modal, gate, or confirmation dialog appears
**And** the download works in all supported browsers (Chrome, Firefox, Safari)

---

### Story 4.2: Professional Links & Contact

As a potential client or employer,
I want to access the developer's GitHub, LinkedIn, and email,
So that I can review their work or reach out.

**Acceptance Criteria:**

**Given** professional links are already in LinksList component (Epic 1)
**When** I verify the implementation
**Then** GitHub link is present and functional
**And** LinkedIn link is present and functional
**And** email link uses `mailto:` protocol
**And** all links open in the expected manner (email client for mailto, new tab for external links)

**Given** the email link needs to be frictionless
**When** a visitor clicks the email link
**Then** their default email client opens with the address pre-filled
**And** no contact form, captcha, or intermediate page appears
**And** the interaction is instant and direct

**Given** external links need proper attributes
**When** rendering GitHub and LinkedIn links
**Then** they include `rel="noopener noreferrer"` for security
**And** they optionally use `target="_blank"` (if opening in new tab)
**And** they have clear labels indicating they're external links

**Given** link accessibility is required
**When** a screen reader user encounters the links
**Then** each link has descriptive text (not just "GitHub" but context)
**And** keyboard users can tab through all links
**And** focus indicators are visible on all links

**Given** links work in both visual states
**When** the page is in raw state
**Then** links use browser default blue with underline
**And** when the page is in styled state
**Then** links use the accent color `#2563eb` with AAA contrast
**And** functionality is identical in both states

---

### Story 4.3: NIP-05 Self-Hosted Nostr Identity

As a Nostr user,
I want to host my NIP-05 identifier (`me@maxiim3.github.io`) on GitHub Pages,
So that I have a verifiable, self-hosted Nostr identity independent of third-party services.

**Acceptance Criteria:**

**Given** the NIP-05 file needs to be served
**When** I create `public/.well-known/nostr.json`
**Then** it contains the following JSON:

```json
{
  "names": {
    "me": "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900"
  },
  "relays": {
    "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900": [
      "wss://relay.damus.io",
      "wss://relay.primal.net",
      "wss://nos.lol",
      "wss://relay.nostr.band"
    ]
  }
}
```

**And** Astro copies the file to `dist/.well-known/nostr.json` during build

**Given** Nostr clients need CORS access
**When** a client fetches `https://maxiim3.github.io/.well-known/nostr.json`
**Then** the response includes `Access-Control-Allow-Origin: *`
**And** the Content-Type is `application/json` or `text/plain`

**Given** the Nostr profile needs to be updated
**When** the profile is configured
**Then** relays are added: `wss://relay.damus.io`, `wss://relay.primal.net`, `wss://nos.lol`, `wss://relay.nostr.band`
**And** the NIP-05 field is set to `me@maxiim3.github.io`
**And** a single Lightning address is configured (no duplicates)
**And** the profile is saved (broadcast `kind 0` on all relays)

**Given** the NIP-05 needs to be verified across clients
**When** the profile propagates
**Then** the verified badge displays correctly on Primal, Habla, and Nosta

**Given** the NIP-05 setup needs automated verification
**When** a test script queries the endpoint
**Then** it confirms HTTP 200, correct hex key in JSON, and CORS header presence

---

## Epic 5: Automated Deployment Pipeline

The site is live on GitHub Pages and automatically deploys on every commit to main.

### Story 5.1: GitHub Actions Deployment Workflow

As a developer,
I want commits to main to automatically build and deploy the site,
So that updates go live without manual deployment steps.

**Acceptance Criteria:**

**Given** the GitHub Actions workflow needs to be created
**When** I create `.github/workflows/deploy.yml`
**Then** it triggers on push to `main` branch
**And** it uses a Node.js/Bun setup action
**And** it installs dependencies with `bun install`

**Given** the build process needs to run
**When** the workflow executes
**Then** it runs `bun run build` (which executes `astro build`)
**And** static files are generated in the `dist/` directory
**And** both French (`/`) and English (`/en/`) pages are built

**Given** deployment to GitHub Pages is required
**When** the build completes successfully
**Then** the workflow deploys the `dist/` directory to the `gh-pages` branch
**And** it uses a standard GitHub Pages deployment action
**And** deployment only occurs if the build succeeds

**Given** the workflow needs proper permissions
**When** configuring the workflow
**Then** it has `contents: write` permission for deploying to gh-pages
**And** it has necessary permissions to read the repository

**Given** build failures need to be caught
**When** the build fails (TypeScript errors, missing files, etc.)
**Then** the workflow fails and doesn't deploy
**And** the failure is visible in the GitHub Actions tab
**And** the live site remains at the previous working version

---

### Story 5.2: Production Build Configuration & Verification

As a visitor,
I want to access the live site at the GitHub Pages URL,
So that I can view the developer's portfolio.

**Acceptance Criteria:**

**Given** the Astro config needs GitHub Pages settings
**When** I verify `astro.config.mjs`
**Then** the `site` URL is set to `https://<username>.github.io`
**And** no `base` path is configured (using root domain)
**And** the build output directory is `dist/` (default)

**Given** the production build needs to succeed
**When** I run `bun run build` locally
**Then** the build completes in under 30 seconds (NFR18)
**And** no TypeScript errors occur
**And** all assets are generated correctly

**Given** the generated site needs to be static
**When** I inspect the `dist/` output
**Then** it contains only static HTML, CSS, JS, and asset files
**And** no server-side code or API routes exist
**And** both `/index.html` and `/en/index.html` are generated

**Given** GitHub Pages needs to be enabled
**When** I configure the repository settings
**Then** GitHub Pages is set to deploy from the `gh-pages` branch
**And** the custom domain (if any) is configured
**And** HTTPS is enforced

**Given** the site needs to be accessible
**When** a visitor navigates to the GitHub Pages URL
**Then** the French site loads at the root URL
**And** the English site loads at `/en/`
**And** all assets (CSS, fonts, PDFs) load correctly
**And** no CORS or mixed content errors occur

**Given** performance metrics need to be verified
**When** I run Lighthouse on the deployed site
**Then** Performance score is > 90 on mobile (NFR1)
**And** First Contentful Paint is < 1 second (NFR2)
**And** Total page weight is < 200KB excluding PDFs (NFR3)
**And** Accessibility score is 100 (AAA compliance)
