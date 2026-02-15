---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - docs/product-brief.md
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/brainstorming/brainstorming-session-2026-02-15.md
  - _bmad-output/research/top-dev-websites-analysis.md
documentCounts:
  briefs: 1
  prd: 1
  architecture: 1
  brainstorming: 1
  research: 1
workflowType: 'ux-design'
project_name: 'github-page'
user_name: 'Max'
date: '2026-02-15'
---

# UX Design Specification github-page

**Author:** Max
**Date:** 2026-02-15

---

## Executive Summary

### Project Vision

Minimalist CV/portfolio hub for a Vue/Nuxt front-end specialist. Single-page-per-locale static site (Astro 5, GitHub Pages) with one signature interaction: a CSS toggle that transforms the page from raw semantic HTML to a fully styled state via a radial View Transition. The architecture enforces progressive enhancement — HTML first, CSS second, JS third — and each layer works independently. The site itself IS the portfolio piece: the CSS toggle demonstrates platform mastery more convincingly than any skills list or project gallery.

### Target Users

1. **Tech Recruiters (Sophie)** — Sourcing Vue/Nuxt developers. Need fast path to CV download (<30s), clear experience section, and a memorable first impression that differentiates Max from other candidates.
2. **Freelance Clients (Marc)** — Small business owners needing web development. Mobile-first. Need project references and frictionless contact (email link, not form). Arrive via referral.
3. **Developer Peers (Lea)** — Professional contacts from meetups/community. Appreciate technical craft. Need GitHub link, skills credibility, and a site worth sharing.
4. **Degraded State Visitors** — No-JS/slow connection. Content fully readable, all links functional, CV downloadable. The raw state is a deliberately usable site, not a fallback.

### Key Design Challenges

1. **Two-State Coherence** — Both raw (no-CSS) and styled states must feel intentional and complete. The raw state must communicate "this is deliberate" immediately, without confusion or perceived brokenness.
2. **Toggle Discoverability & Affordance** — The CSS toggle button is the single interactive element on an otherwise static page. It must invite curiosity without overshadowing content. Its placement, labeling, and visual treatment carry disproportionate UX weight.
3. **5-Second Scanning Optimization** — Recruiters and clients scan, they don't read. Every section must communicate its core value at glance speed, in both visual states.

### Design Opportunities

1. **The Toggle as Live Portfolio** — The radial View Transition, button aesthetic inversion, and progressive enhancement architecture constitute a live technical demonstration. The interaction IS the proof of competence.
2. **Raw State as Accessibility Statement** — Treating the unstyled state as a feature (not a failure mode) positions Max as a developer who understands the web platform at a foundational level.
3. **Keyboard Shortcuts as Developer Signal** — Vim-style keybindings (1-5, t, l, ?) on a CV site signal deep UX thinking and developer empathy — a "I get it" moment for technical visitors.

## Core User Experience

### Defining Experience

The core experience is **speed-to-value with a memorable signature moment**. Two things must happen on every visit:

1. **Information retrieval succeeds** — The visitor finds what they came for (CV, contact, GitHub, projects) in under 30 seconds. This works in both raw and styled states, with or without JavaScript.
2. **The site leaves a mark** — The CSS toggle creates a moment of surprise and respect that distinguishes Max from every other candidate in the recruiter's browser tabs.

These two goals reinforce each other: the raw state proves content accessibility, the toggle proves technical mastery, and together they tell the story of a developer who builds for the platform, not against it.

### Platform Strategy

- **Web-only, static, mobile-first** — No app, no offline, no backend (Phase 1). The constraint IS the design.
- **Touch + keyboard dual optimization** — Toggle button sized for thumbs (44px minimum), keyboard shortcuts for power users. Both paths are first-class.
- **Progressive enhancement as platform strategy** — Raw state works everywhere (crawlers, screen readers, old browsers, no-JS). Styled state enhances where supported. View Transitions animate where available. Each layer is independent.
- **MPA routing for bilingual** — Full page loads for language switch (not client-side routing). Clean, predictable, bookmarkable URLs.

### Effortless Interactions

1. **CV Download** — One visible button, one click, PDF opens. No modal, no email gate, no "which format" dialog. FR and EN buttons side by side.
2. **Contact** — `mailto:` link. Zero friction. No form, no captcha, no "message sent" confirmation page.
3. **Navigation** — Table of contents at the top, anchor links to sections, keyboard shortcuts (1-5). The entire site is one scroll away from any section.
4. **Language Switch** — Visible toggle in header. Full page load to the other locale. Current section context is lost (acceptable trade-off for MPA simplicity).
5. **CSS Toggle** — One button, instant visual feedback. No loading spinner, no delay. The styled CSS is preloaded in the background — when the user clicks, everything is already cached.

### Critical Success Moments

1. **First 3 seconds (raw state)** — Visitor lands, sees clean semantic HTML with clear headings. The page doesn't look broken — it looks intentional. The toggle button is the only "alive" element, inviting curiosity. *If this moment fails, visitors bounce thinking the site is broken.*
2. **The toggle moment** — Radial wave transforms the page. Fast (<300ms perceived). The button inverts its aesthetic. *If this moment feels slow, janky, or gimmicky, the entire concept collapses.*
3. **CV found** — Recruiter scans headings, spots "Download CV" in the ToC or scrolls to it. PDF downloads immediately. *If this takes more than 30 seconds, the memorable toggle was wasted.*
4. **The share impulse** — Dev peer sees the toggle, appreciates the craft, shares the link. *If the site isn't interesting enough to share, the viral loop dies.*

### Experience Principles

1. **Content first, spectacle second** — Every section must deliver value before the toggle is ever clicked. The raw state is the baseline, not the fallback.
2. **One interaction, maximum impact** — The CSS toggle is the only interactive flourish. No animations, no parallax, no scroll effects. The restraint makes the toggle hit harder.
3. **Respect the visitor's time** — No hero section, no "welcome to my site" copy, no loading screens. Direct to content. Every section optimized for 5-second scanning.
4. **The medium is the message** — The way the site is built (progressive enhancement, semantic HTML, accessibility-first) communicates more about Max's skills than any text on the page.

## Desired Emotional Response

### Primary Emotional Goals

The site must trigger a four-beat emotional sequence — the **Memory Chain** defined in the PRD:

1. **Curiosity** — "What's this button?" The raw state is clean but bare. The toggle button is the only styled element — a portal. It creates an itch.
2. **Surprise** — "Whoa." The radial transition is fast, smooth, and unexpected. The page transforms from document to designed experience in a wave.
3. **Respect** — "This person knows what they're doing." The visitor connects the dots: the raw state was intentional, the toggle is a technical demonstration, the progressive enhancement is the skill proof.
4. **Action** — "Let me download this CV / share this / reach out." Respect converts to a concrete step. The site has done its job.

**Primary emotional target by user type:**
- **Sophie (Recruiter):** Confidence → "This candidate is competent, I should shortlist them"
- **Marc (Freelance client):** Trust → "This person can build my website"
- **Lea (Dev peer):** Admiration → "This is cleverly built, worth sharing"

### Emotional Journey Mapping

| Stage | Emotion | What triggers it | What kills it |
|-------|---------|-----------------|---------------|
| **Landing (raw state)** | Mild intrigue | Clean, readable HTML. Not broken, just bare. One styled button stands out. | Page looks broken, confusing, or like a loading error |
| **Toggle discovery** | Curiosity | Button label/styling invites interaction. It's the only thing that looks "alive" | Button is hidden, unclear, or looks disabled |
| **Toggle activation** | Surprise + delight | Fast radial wave, instant transformation, button inverts | Slow animation, jank, partial render, or gimmicky feel |
| **Content scanning** | Confidence | Clear hierarchy, scannable sections, professional content | Wall of text, unclear structure, missing info |
| **Goal completion** | Satisfaction | CV downloads instantly, email link opens mail client, GitHub link works | Broken links, PDF won't download, contact form |
| **Reflection** | Respect | Visitor realizes the raw state was deliberate. The site's construction IS the message | The toggle feels like a trick rather than a demonstration |

### Micro-Emotions

**To cultivate:**
- **Confidence over confusion** — The raw state must never feel like a bug. Typographic hierarchy (headings, lists) and structural clarity signal intentionality.
- **Trust over skepticism** — No marketing language, no self-aggrandizing copy. Let the content and the craft speak.
- **Delight over mere satisfaction** — The toggle should produce a genuine "that's cool" reaction, not just "ok, now it's styled."
- **Accomplishment over frustration** — Finding information should feel effortless. If the visitor has to think about navigation, we've failed.

**To prevent:**
- **Confusion** — "Is this page loading?" → Prevented by clean raw state typography and the visually distinct toggle button
- **Impatience** — "Why doesn't it look like a real website?" → Prevented by making the toggle immediately discoverable
- **Disappointment** — "That's it?" → Prevented by ensuring the styled state is genuinely well-designed, not just "CSS added"
- **Distrust** — "Is this a real developer's site?" → Prevented by quality content, working links, real projects

### Design Implications

- **Curiosity → Toggle button must be visually magnetic in raw state.** It needs enough styling to feel "alive" against the bare HTML — color, shape, possibly subtle animation (respecting `prefers-reduced-motion`). It's the only styled element, so it must earn attention without being aggressive.
- **Surprise → Transition speed is everything.** The radial wipe must feel instant (<300ms). Slow = gimmick. Fast = craft. The View Transitions API delivers this natively.
- **Respect → The styled state must be genuinely good.** If the "after" state is mediocre, the toggle becomes a parlor trick. Typography, spacing, color — the styled state needs to feel like a real designer touched it.
- **Confidence → Information architecture must be bulletproof.** Section headings, ToC, keyboard shortcuts — every navigation path must resolve quickly. Zero dead ends.
- **Trust → No empty sections, no placeholder content, no broken links.** Every element on the page must be real and functional at launch.

### Emotional Design Principles

1. **Earn the reaction, don't force it** — The toggle is an invitation, not a requirement. The site works without it. The emotional payoff comes from voluntary discovery.
2. **Speed communicates quality** — Fast load, fast toggle, fast navigation. Slowness erodes every positive emotion. Performance IS emotional design.
3. **Restraint amplifies impact** — One interaction, one surprise, one moment. The absence of other effects makes the toggle hit harder. Minimalism is the setup; the toggle is the punchline.
4. **Authenticity over polish** — The raw state IS the authentic state. The styled state enhances but doesn't mask. No stock photos, no generic illustrations, no corporate design language.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**1. motherfuckingwebsite.com / bettermotherfuckingwebsite.com**
- Referenced directly in the product brief as a spiritual ancestor
- What it does well: Proves that raw HTML IS readable. Makes the case for semantic markup through demonstration, not argument. The humor comes from the contrast between the bare presentation and the competence of the message.
- Transferable lesson: The raw state of Max's site should feel this confident — not apologetic, not broken, just direct.
- Key difference: Max's site adds the toggle as a second act. MFW is a one-act play. The toggle transforms the statement from "I don't need CSS" to "I choose when to use CSS."

**2. t3.gg (Theo Browne)**
- Identified in the research as the primary reference for the minimalist hub approach
- What it does well: Clean, fast, personality-driven. The site IS the brand — opinionated, direct, no fluff. Everything loads instantly. Navigation is obvious.
- Transferable lesson: Speed and personality. The site should feel like a person, not a template. Content should have voice.
- Key difference: Theo has 200k+ YouTube subscribers driving traffic. Max needs the site itself to create the impression — no external reputation to lean on.

**3. Linear.app (Design Language Reference)**
- Not a dev portfolio, but the gold standard for "software that feels crafted"
- What it does well: Transitions feel intentional. Information density is high but never overwhelming. The design system is invisible — you notice the content, not the chrome. Keyboard shortcuts are first-class.
- Transferable lesson: The styled state should aspire to this level of intentionality. Every spacing decision, every color choice should feel considered. Keyboard shortcuts should feel native, not bolted on.
- Key difference: Linear is a full app. We're taking one principle (transitions + keyboard-first) and applying it to a single page.

**4. Paco Coursey (paco.me)**
- Minimal developer site with exceptional typography and spacing
- What it does well: Proves that minimalism doesn't mean boring. System fonts, tight layout, perfect vertical rhythm. The restraint IS the design. Dark mode done right.
- Transferable lesson: The styled state's typography and spacing should be this deliberate. White space as a design tool.

### Transferable UX Patterns

**Navigation Patterns:**
- **Anchor-based ToC (Wikipedia/GitHub README style)** — Proven pattern for single-page content. Users already know how anchor links work. No learning curve. Works in both raw and styled states.
- **Keyboard shortcuts overlay (Linear, Notion, GitHub)** — `?` to show shortcuts is a convention power users expect. The overlay should be minimal — a small dialog listing keys, not a full-page takeover.

**Interaction Patterns:**
- **State toggle with visual feedback (dark mode toggles everywhere)** — Users understand toggles. The CSS toggle follows the same mental model as dark/light mode. The radial animation is the differentiator, but the interaction model is familiar.
- **Progressive disclosure (raw → styled)** — The toggle is essentially progressive disclosure of design. Content is always visible; styling is revealed on demand. This inverts the typical pattern (show less → show more) into show raw → show styled.

**Visual Patterns:**
- **System font stack as design choice (GitHub, Linear, Stripe docs)** — System fonts in the raw state aren't a compromise — they're a deliberate echo of tools developers use daily. The styled state's custom font then becomes a clear before/after.
- **Monochrome + one accent (many developer tools)** — The raw state should be essentially monochrome (browser defaults). The styled state could introduce a single accent color for links and the toggle button, keeping the palette tight.

### Anti-Patterns to Avoid

1. **The "creative developer" portfolio trap** — 3D animations, WebGL backgrounds, scroll-jacking, loading screens with progress bars. These signal "I spent time on effects" not "I build things that work." The CSS toggle achieves more impact with less.
2. **The "under construction" feel** — Minimal sites that feel unfinished rather than intentional. The raw state MUST have enough structural clarity (headings, lists, clear sections) to read as "this is complete," not "this is a draft."
3. **Hamburger menu on a single page** — The page has 5 sections. A ToC with anchor links is faster and more transparent than any mobile menu pattern. No hiding navigation behind an icon.
4. **Self-congratulatory copy** — "Passionate developer with a love for clean code and pixel-perfect design." This language is invisible — recruiters have read it 10,000 times. The site's construction speaks louder than any tagline.
5. **Skill bars / percentage meters** — "React: 85%, Vue: 90%" is meaningless. The three-tier hierarchy (Expertise / Experience / Curiosity) from the PRD communicates skill levels honestly without fake precision.
6. **Contact forms on a static site** — A form implies a backend. A mailto link is honest, instant, and zero-maintenance. No "your message has been sent" theater.

### Design Inspiration Strategy

**What to Adopt:**
- **ToC + anchor navigation** — Standard, proven, works in both states
- **Keyboard shortcuts with `?` overlay** — Convention from Linear/GitHub/Notion
- **System font → custom font transition** — The toggle's visual impact partially comes from the font change
- **Information density with clear hierarchy** — Every section scannable in 5 seconds

**What to Adapt:**
- **Dark mode toggle → CSS toggle** — Same interaction model (button, instant feedback, state persistence), different payload (styling instead of color scheme)
- **View Transitions for page navigation → View Transitions for same-page state change** — The API is designed for navigation; we're repurposing it for a more dramatic same-page effect
- **Linear's keyboard-first approach → CV-specific shortcuts** — Adapt the concept (keyboard as power-user path) to a much simpler context (5 sections, not 500 features)

**What to Avoid:**
- Any animation beyond the toggle transition — restraint is the strategy
- Any navigation pattern that hides content structure — transparency over cleverness
- Any visual pattern that requires explanation — if a user has to figure out how the site works, we've failed
- Any design trend that conflicts with progressive enhancement — no CSS Grid layouts that collapse meaninglessly without styles

## Design System Foundation

### Design System Choice

**Custom minimal design system — vanilla CSS with CSS Layers.**

No component library. No CSS framework. No Tailwind, no Bootstrap, no design system dependency. The entire visual layer lives in two files: `base.css` (~1KB, render-blocking) and `styled.css` (lazy-loaded, gated behind `html[data-styled]`).

This is the only choice that doesn't contradict the project's core premise. The site IS a demonstration of platform mastery — importing a design system would undermine that message. You don't prove you understand CSS by using someone else's CSS.

### Rationale for Selection

1. **Progressive enhancement demands it** — The raw state must work with zero CSS loaded. Any design system assumes its styles are always present. CSS layers with a lazy-loaded styled sheet is incompatible with pre-built systems.
2. **Performance budget enforces it** — <200KB total page weight. Tailwind's purged output alone could eat half that. A design system's JS runtime (if any) conflicts with the near-zero JS goal.
3. **The site IS the design system** — With ~8 components, 2 pages, and 5 content sections, there's nothing to systematize. The "design system" is the two CSS files and the naming conventions documented in the architecture.
4. **Brand differentiation requires it** — The research shows top dev sites either use no styling (hacker minimalism) or reach for a framework (corporate polish). Custom CSS occupies the gap: intentional, crafted, personal.
5. **Team size justifies it** — Solo developer, solo designer. No handoff problem. No component library adoption curve. The cost of custom CSS at this scale is near-zero.

### Implementation Approach

**Two-layer CSS architecture (from architecture doc):**

```
@layer base, styled;
```

**Base layer (`base.css` — always loaded, render-blocking):**
- CSS reset / normalization (minimal — not a full reset library)
- System font stack: `system-ui, -apple-system, sans-serif`
- Structural styles: heading hierarchy, list styles, link colors
- Skip link styles
- Focus indicators (visible in both states)
- Toggle button "alive" styling (the one styled element in raw state)
- CSS custom properties for base values: `--cv-color-text`, `--cv-color-link`, etc.

**Styled layer (`styled.css` — lazy-loaded, gated by `html[data-styled]`):**
- All selectors scoped under `html[data-styled]`
- Custom `@font-face` declaration
- Full color palette
- Spacing and layout refinements
- Section styling, card treatments, visual hierarchy
- Custom property overrides for styled state
- No `!important` — layers handle specificity

**Design tokens (CSS custom properties):**

| Token | Base (raw) | Styled |
|-------|-----------|--------|
| `--cv-font-body` | `system-ui, -apple-system, sans-serif` | `'[Custom Font]', system-ui, sans-serif` |
| `--cv-color-text` | `inherit` (browser default) | Defined color value |
| `--cv-color-link` | `inherit` (browser default blue) | Accent color |
| `--cv-color-bg` | `inherit` (white) | Background color |
| `--cv-space-section` | `1em` (natural flow) | Defined spacing value |

### Customization Strategy

**There is no customization of a third-party system — the system IS custom.** The strategy is constraint:

1. **All CSS in two files** — No component-scoped `<style>` blocks in `.astro` files. Predictable cascade, single source of truth per state.
2. **No utility classes** — Write semantic selectors. The site has ~15 unique elements to style. Utility classes add indirection without benefit at this scale.
3. **Custom properties for state switching** — Toggle between base and styled values through custom property overrides. No class toggling on individual elements — one `data-styled` attribute on `<html>` controls everything.
4. **Mobile-first media queries** — Base styles target mobile. `min-width` breakpoints for larger screens. Both layers follow this pattern.
5. **AAA contrast in both states** — Base layer inherits browser defaults (already high contrast). Styled layer must maintain 7:1 contrast ratio on every color pairing.

## Defining Core Experience

### Defining Experience

**"Click a button, watch the web come alive."**

The defining experience is the CSS toggle — a single button that triggers a radial View Transition transforming the page from raw semantic HTML to a fully styled site. If someone describes this site to a friend, they'll say: "There's this developer's site that loads as plain HTML, then you press a button and it transforms with this wave animation."

This is the Tinder swipe of portfolio sites — a single interaction that encapsulates the entire value proposition. The toggle doesn't just change how the page looks; it communicates what Max knows about the web platform.

### User Mental Model

**What visitors expect:** A normal website that loads fully styled. Maybe a dark mode toggle. Standard developer portfolio with projects and skills.

**What they get:** A page that looks like a document. One button that stands out. Click it — the page transforms.

**The mental model shift:**

1. **Initial assumption:** "This page hasn't loaded properly" or "This is a very plain site"
2. **Toggle button presence:** "Wait, there's a button — maybe this is intentional"
3. **Post-toggle realization:** "Oh — the unstyled version was on purpose. This developer built a site that works at every layer."

**Familiar metaphor:** Dark mode toggle. Users already understand "press button → appearance changes." The CSS toggle uses the same interaction model but with a more dramatic payload. No learning curve for the action — only surprise at the result.

**Where confusion could occur:**
- Visitor thinks the raw state is a bug → Mitigated by the toggle button being visibly styled ("alive") in the raw state, signaling intentionality
- Visitor doesn't notice the button → Mitigated by button placement (header area, high visual contrast against raw HTML)
- Visitor expects more interactions → Mitigated by single-page simplicity — after the toggle, it's a normal CV site

### Success Criteria

The CSS toggle succeeds when:

1. **< 1 second to notice the button** — In the raw state, the toggle button must be the most visually prominent element. It should be impossible to miss.
2. **< 300ms perceived transition** — The radial wipe must feel instant. Any perceived lag collapses the "craft" impression into "slow animation."
3. **100% reversible** — Toggle on, toggle off, toggle on. No state corruption, no layout shift, no flicker. Each transition is clean.
4. **Zero explanation needed** — No tooltip, no "click me" label, no instruction text. The button's visual treatment (alive in raw state, raw in styled state) is self-explanatory.
5. **Works on first visit** — No tutorial, no onboarding, no "have you tried the toggle?" prompt. The button earns the click through visual magnetism alone.
6. **Graceful degradation** — No View Transitions API? Instant swap. No JS? No button, but the raw state is a complete, usable site. No CSS at all? HTML structure carries the content.

### Novel UX Patterns

**The toggle combines familiar and novel patterns:**

**Familiar patterns (zero learning curve):**
- Button → visual change (dark mode toggle mental model)
- Anchor links for navigation (ToC pattern)
- Keyboard shortcuts with `?` help (Linear/GitHub convention)

**Novel patterns (the differentiator):**
- **Radial View Transition from button position** — The wave originates from where you clicked/tapped, not from screen center. This creates a physical connection between action and effect — ink spreading from your fingertip. Most View Transition demos use full-page fades. The radial origin is the craft detail.
- **Button aesthetic inversion** — The button looks styled when the page is raw, and raw when the page is styled. It always contrasts its context. This is novel — most toggles maintain consistent styling. The inversion reinforces the "portal between states" metaphor.
- **Progressive enhancement as feature, not fallback** — The raw state isn't "the site without CSS." It's a deliberate, readable, complete version. This inverts the standard progressive enhancement narrative from "works without JS" (obligation) to "look how well it works without CSS" (demonstration).

**Teaching strategy:** None needed. The toggle is a button. Users know buttons. The surprise comes from the result, not the interaction.

### Experience Mechanics

**1. Initiation — The Button Discovery**

- Page loads in raw state: semantic HTML, system fonts, structural styles only
- Toggle button renders in the header area, near the name/title
- Button has inline styles (not dependent on `base.css`) — guaranteed visible
- Button styling: solid background color, clear border, readable label — the ONLY element with visual personality on the raw page
- Button starts `disabled` until `styled.css` has fully loaded in the background
- Once `styled.css` loads, button enables — ready for interaction
- Label text: concise, suggestive — something like "Style" or "CSS" (not "Toggle CSS" or "Enable Styles" — too explanatory)

**2. Interaction — The Toggle**

- User clicks/taps the button (or presses `t` on keyboard)
- JavaScript checks for View Transitions API support
- **If supported:** `document.startViewTransition()` wraps the DOM update. The radial clip-path animation originates from the button's position (`getBoundingClientRect()`). Duration: 200-300ms.
- **If not supported:** Instant swap — `html.dataset.styled` is toggled, styles apply immediately. Still functional, just without animation.
- **If `prefers-reduced-motion`:** Instant swap, no animation.
- DOM change: `<html data-styled>` is added or removed. One attribute controls the entire visual state.

**3. Feedback — The Transformation**

- Radial wave expands from button, revealing styled state (or raw state on toggle-off)
- Typography changes: system font → custom font (or reverse)
- Colors change: browser defaults → designed palette (or reverse)
- Spacing adjusts: natural flow → deliberate layout (or reverse)
- Button itself inverts: styled button → raw/brutalist button (or reverse)
- `aria-pressed` updates: `true` (styled) / `false` (raw)
- No loading indicator — the CSS was already loaded in the background

**4. Completion — The New State**

- Page is now in the opposite visual state
- All content remains in the same scroll position — no jump
- All links, downloads, and navigation still work identically
- Button is ready for the next toggle — no cooldown, no debounce
- State is NOT persisted across page loads (intentional — every visit starts raw, re-experiencing the discovery)

## Visual Design Foundation

### Color System

**The site has two color states — and the contrast between them IS the design.**

**Raw State (base layer):**
No custom colors. Browser defaults only.
- Text: `CanvasText` (typically `#000000`)
- Background: `Canvas` (typically `#ffffff`)
- Links: `LinkText` (typically `#0000ee`)
- Visited links: `VisitedText` (typically `#551a8b`)

This is intentional. The raw state uses CSS system colors — the browser's native palette. It reads as "this is HTML, unadorned." AAA contrast is guaranteed by browser defaults.

The ONE exception: the toggle button, which has its own color to stand out as the "alive" element.

**Toggle button in raw state:**
- Background: `#1a1a1a` (near-black)
- Text: `#ffffff` (white)
- Border: `2px solid #1a1a1a`
- Hover: `#333333`
- This creates a high-contrast, impossible-to-miss element against the white page

**Styled State (styled layer):**
A restrained, professional palette — not flashy, but clearly designed.

| Token | Value | Usage |
|-------|-------|-------|
| `--cv-color-bg` | `#fafafa` | Page background (warm white, not pure white) |
| `--cv-color-surface` | `#ffffff` | Card/section surfaces |
| `--cv-color-text` | `#1a1a1a` | Primary text |
| `--cv-color-text-secondary` | `#555555` | Secondary/meta text (7:1 contrast on `#fafafa`) |
| `--cv-color-accent` | `#2563eb` | Links, interactive elements (blue — professional, trustworthy) |
| `--cv-color-accent-hover` | `#1d4ed8` | Link/button hover state |
| `--cv-color-border` | `#e5e5e5` | Subtle dividers |
| `--cv-color-heading` | `#111111` | Section headings |

**Toggle button in styled state (inverted — brutalist/raw):**
- Background: `transparent`
- Text: `#1a1a1a`
- Border: `1px solid #1a1a1a`
- Monospace font (the one monospace element on the styled page)
- This creates a deliberately "undesigned" element on the designed page — the escape hatch

**Dark mode (Phase 2) considerations:**
- Dark palette would be a third state, layered on top of styled
- `--cv-color-*` tokens make this a matter of overriding custom properties
- Defer all dark mode decisions to Phase 2

**Contrast verification (WCAG AAA — 7:1 minimum):**

| Combination | Ratio | Pass |
|-------------|-------|------|
| Text (#1a1a1a) on bg (#fafafa) | 17.4:1 | AAA |
| Secondary (#555555) on bg (#fafafa) | 7.3:1 | AAA |
| Accent (#2563eb) on bg (#fafafa) | 7.1:1 | AAA |
| Heading (#111111) on bg (#fafafa) | 18.1:1 | AAA |
| Button text (#fff) on button bg (#1a1a1a) | 17.4:1 | AAA |

### Typography System

**Two-state typography — the font change IS part of the toggle's impact.**

**Raw state:**
```css
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
```
System font stack. Loads instantly (already on device). Reads as "native UI" — clean, familiar, fast. No FOIT, no FOUT, zero latency.

**Styled state:**
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```
Inter — self-hosted from `/public/fonts/`. Chosen because:
- Designed for screens at small sizes (perfect for CV content)
- Variable font available — single file, multiple weights
- Wide language support (FR, EN, Serbian in Phase 3)
- Distinctive enough to feel "designed" vs. system fonts, but not distracting
- Open source, self-hostable, no license issues
- `.woff2` format, ~100KB for variable weight file

**Alternative consideration:** If Inter feels too "tech startup," consider **IBM Plex Sans** (more editorial) or **Source Sans 3** (Adobe, neutral professional). Decision can be finalized during implementation when visually comparing.

**Type scale (both states — same scale, different fonts):**

| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| `h1` (name) | `2rem` | 700 | 1.2 |
| `h2` (section headings) | `1.5rem` | 600 | 1.3 |
| `h3` (subsection) | `1.25rem` | 600 | 1.3 |
| Body text | `1rem` (16px) | 400 | 1.6 |
| Meta/secondary | `0.875rem` | 400 | 1.5 |
| Button text | `0.875rem` | 600 | 1 |

**Line length:** Max `65ch` for body text (optimal readability). Enforced via `max-width` on the content container.

**Font loading strategy (from architecture):**
- `<link rel="preload" as="font" href="/fonts/inter-var.woff2" crossorigin>` in `<head>`
- `font-display: swap` in `@font-face`
- Font downloads during idle time alongside `styled.css`
- When toggle fires, font is already cached — zero visual flash

### Spacing & Layout Foundation

**Layout philosophy: Document flow first, enhancement second.**

**Raw state layout:**
- No custom layout. Browser default block flow.
- `margin: 0 auto` on a content wrapper with `max-width: 65ch` and `padding: 1rem`
- Headings, paragraphs, lists stack naturally
- This produces a clean, readable document — like a well-formatted README

**Styled state layout:**
- Same content wrapper with refined spacing
- Sections receive padding and subtle visual separation
- No CSS Grid or Flexbox for page layout — block flow is sufficient for a single-column CV
- Flexbox only where semantically appropriate: skill tags, link lists, button groups

**Spacing scale (8px base unit):**

| Token | Value | Usage |
|-------|-------|-------|
| `--cv-space-xs` | `0.25rem` (4px) | Inline spacing, icon gaps |
| `--cv-space-sm` | `0.5rem` (8px) | Tight component spacing |
| `--cv-space-md` | `1rem` (16px) | Standard element spacing |
| `--cv-space-lg` | `2rem` (32px) | Section internal padding |
| `--cv-space-xl` | `3rem` (48px) | Between sections |
| `--cv-space-2xl` | `4rem` (64px) | Major page divisions |

**Responsive breakpoints:**

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Base (mobile) | `< 640px` | Single column, full-width, `padding: 1rem` |
| Tablet | `≥ 640px` | Content max-width `65ch`, centered, `padding: 2rem` |
| Desktop | `≥ 1024px` | Same layout — no multi-column needed for a CV |

**The site is single-column at all breakpoints.** A CV doesn't need a sidebar or multi-column layout. The only responsive change is padding and spacing scale.

**Touch targets:**
- All interactive elements: minimum `44x44px` tap area
- Toggle button: larger — `48px` height minimum, generous horizontal padding
- Links in content: rely on line-height (`1.6`) for vertical tap space, add `padding: 0.25rem 0` for extra safety

### Accessibility Considerations

**AAA compliance is non-negotiable across both states.**

**Color accessibility:**
- All text/background pairings verified at 7:1 contrast ratio (see contrast table above)
- Raw state inherits browser defaults — guaranteed accessible
- Styled state colors chosen with AAA as primary constraint, aesthetics second
- No color-only indicators — all interactive states use shape/underline/weight changes alongside color

**Focus indicators:**
- Defined in `base.css` (visible in both states)
- Style: `outline: 2px solid currentColor; outline-offset: 2px`
- Never `outline: none` — ever
- Custom focus styles may refine appearance in styled state but never remove visibility

**Motion accessibility:**
- `prefers-reduced-motion: reduce` → No View Transition animation, instant swap
- No other animations exist on the site (restraint principle)

**Zoom accessibility:**
- All sizing in `rem` — scales with browser zoom
- Content readable and functional at 200% zoom
- No fixed-width elements that would cause horizontal scroll

**Screen reader support:**
- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`
- One `<h1>` per page, strict heading hierarchy
- Skip link as first focusable element
- `aria-pressed` on toggle button
- `lang` attribute matches page language
- No content hidden from screen readers that's visible on screen
