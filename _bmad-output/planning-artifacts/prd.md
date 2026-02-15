---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
inputDocuments:
  - docs/product-brief.md
  - _bmad-output/brainstorming/brainstorming-session-2026-02-15.md
  - _bmad-output/research/top-dev-websites-analysis.md
documentCounts:
  briefs: 1
  research: 1
  brainstorming: 1
  projectDocs: 0
workflowType: 'prd'
classification:
  projectType: web_app_static
  domain: general
  complexity: low
  projectContext: greenfield
  framework: astro-5
---

# Product Requirements Document - github-page

**Author:** Max
**Date:** 2026-02-15

## Executive Summary

Minimalist personal CV/portfolio hub for a front-end developer specializing in Vue/Nuxt. Static Astro 5 site deployed on GitHub Pages. Bilingual (FR/EN). The site's differentiator is a CSS toggle with radial View Transitions hydration — the page loads as raw semantic HTML with system fonts, and a button triggers a radial animation that "brings the site to life" with full styling and a custom font. The toggle button inverts its aesthetic relative to the page state (styled on raw, raw on styled). Full keyboard navigation with section shortcuts. The architecture itself is the statement: HTML first, CSS second, JS third — each layer works independently. Target: ship MVP tonight, add real-time visitor counter (Railway SSE) this week.

## Success Criteria

### User Success
- Recruiter finds CV section, downloads PDF, or reaches GitHub in < 30 seconds
- First-time visitor experiences the CSS toggle and remembers the site
- Bilingual visitors switch between FR/EN without losing context
- Mobile-first: all interactions optimized for thumb navigation

### Business Success
- 3+ technical interviews within 2 months of launch
- 1+ freelance request via the site within 3 months
- Measurable improvement in application response rate

### Technical Success
- Lighthouse > 90 all categories (mobile scores prioritized)
- Full static generation on GitHub Pages via GitHub Actions
- CSS toggle with View Transitions API: radial circle hydration, toggleable
- Bilingual routing (FR `/` + EN `/en`)
- Content accessible without JS (no-CSS state is readable)
- Mobile-first responsive design

### Measurable Outcomes
- Site live tonight (MVP)
- All links functional, CVs downloadable
- CSS toggle transition smooth on mobile + desktop

## Product Scope

### Phase 1 — MVP (Tonight)

**Approach:** Experience MVP — ship a memorable, functional hub in one evening session.
**Core Journeys:** Sophie (recruiter), Marc (freelance client), Lea (dev peer), degraded state.

- Astro 5 project with static generation
- Bilingual MPA routing (`/` FR, `/en` EN)
- All content sections: Links/Networks, Skills, Experience, Projects, Download CV
- CSS toggle with radial View Transition (from button position)
- Button aesthetic inversion (alive on raw, brutalist on styled)
- Raw state: system font stack (`system-ui, -apple-system, sans-serif`), minimal structural/reset styles
- Styled state: custom font (self-hosted from `/public/fonts/`), full design
- Keyboard navigation + section shortcuts (`1-5`, `t`, `l`, `?`)
- CV PDFs in `/public` (FR + EN)
- Semantic HTML, WCAG AAA foundations
- GitHub Actions → `gh-pages` deployment

### Phase 2 — Growth (This Week)
- SSE visitor counter (Railway API, total + active users)
- Dark mode toggle
- OG images per language
- Structured data (Person schema)
- `hreflang` tags

### Phase 3 — Vision (v2+)
- Serbian Latin + Cyrillic language support (`/sr/`, `/sr-cyrl/`)
- Dyslexia-friendly font toggle (Atkinson Hyperlegibility or OpenDyslexic)
- Custom voice content reader — pre-recorded audio per section
- Blog section
- Project screenshots/demos
- Custom domain

### Risk Mitigation
- **Technical:** View Transitions API — progressive enhancement, no polyfill. If unsupported, instant swap. Zero risk.
- **Deadline:** Counter deferred to Phase 2. Tonight's scope is 100% static — no external dependencies, no backend, no database.
- **Quality:** AAA accessibility + semantic HTML means the raw state is already a fully functional site. Styled state is enhancement, not dependency.

## User Journeys

### Journey 1: Sophie, Tech Recruiter (Primary - Success Path)
Sophie is sourcing Vue/Nuxt developers. She finds Max's LinkedIn, clicks the website link. Lands on a minimal HTML page — clean, readable. She spots the CSS toggle button, clicks it — a radial wave transforms the page. She thinks "ok, this person knows what they're doing." She scrolls to Experience, scans the timeline, hits Download CV (FR). PDF in hand in 20 seconds. She adds Max to her shortlist.

**Reveals:** Fast path to CV download, clear experience section, memorable first impression.

### Journey 2: Marc, Restaurant Owner (Freelance Client)
Marc needs a website for his restaurant. A friend sent him Max's link. He opens it on his phone. The page loads instantly — text, links, a button. He taps the CSS button, the site comes alive. He scrolls to Projects, sees links to past work. He taps the email link. Contact made in under a minute.

**Reveals:** Mobile-first critical path, projects section with visible links, easy contact access.

### Journey 3: Lea, Fellow Developer (Professional Contact)
Lea met Max at a meetup. She visits the site, toggles the CSS on/off a couple times (she gets the joke — appreciates the craft). She checks the GitHub link, glances at the skills hierarchy. She bookmarks it and shares it: "check this dev's site, the CSS toggle is brilliant."

**Reveals:** GitHub link prominence, shareability factor, skills section credibility.

### Journey 4: No-JS / Degraded State
A visitor with JS disabled or a slow connection lands on the page. Content is fully readable in semantic HTML with structural styles. All links work. CV download works. The CSS toggle doesn't function but the site is still 100% usable.

**Reveals:** Progressive enhancement, content-first architecture.

### Journey Requirements Summary

| Capability | Revealed By |
|-----------|-------------|
| CV download (FR/EN, 1 click) | Sophie, Marc |
| CSS radial toggle (View Transitions) | Sophie, Lea |
| Mobile-first layout | Marc |
| GitHub/LinkedIn prominent links | Sophie, Lea |
| Projects section with live links | Marc |
| Email contact link | Marc |
| Skills hierarchy display | Sophie, Lea |
| Experience timeline | Sophie |
| Progressive enhancement (no-JS) | Degraded state |
| Bilingual routing | Sophie (FR), all |
| Keyboard navigation + shortcuts | Lea, Degraded state |

## Innovation & Novel Patterns

### Architecture IS the Statement
The site follows strict progressive enhancement: semantic HTML first, CSS second, JS third. Each layer works independently. The no-CSS state is not a fallback — it's a deliberate demonstration of platform understanding.

### CSS Toggle: Radial Hydration
- Radial circle originates from button position (not screen center) — ink spreading from where you tapped
- View Transitions API for smooth, crisp animation
- Speed is key: fast radial wipe = craft, slow animation = gimmick
- No-CSS state doubles as print-friendly / accessibility version

### Button Aesthetic Inversion
- **Raw page:** Button is the only styled, "alive" element — the portal to the styled world
- **Styled page:** Button becomes brutalist/raw — the escape hatch
- Button always contrasts its context, always invites toggling

### Keyboard Navigation & Shortcuts
- Section shortcuts: `1` Links, `2` Skills, `3` Experience, `4` Projects, `5` CV Download
- `t` toggle CSS, `l` switch language, `?` show hints
- Turns the site into a power-user tool — vim keybindings for a CV

### Memory Chain
Curiosity (what's this button?) → Surprise (radial transform) → Respect (this is well-made) → Action (download CV / bookmark / share)

### Design Principles
- Every section optimized for 5-second scanning
- `mailto:` link over contact form — zero friction
- Live project links over static screenshots
- No hero section — direct to content
- The CSS toggle is the only "show" moment, hitting harder through contrast with surrounding minimalism

## Static Web App Architecture

### Project-Type Overview
Multi-page Astro 5 static site with client-side islands for interactive features (CSS toggle, language switch). Progressive enhancement — every feature degrades gracefully.

### Browser Matrix

| Feature | Chromium | Firefox | Safari |
|---------|----------|---------|--------|
| Core content | Full | Full | Full |
| CSS toggle (swap) | Full | Full | Full |
| Radial View Transition | Full animation | Instant swap | Instant swap |
| Keyboard shortcuts | Full | Full | Full |
| SSE counter (Phase 2) | Full | Full | Full |

### SEO Strategy
- Semantic HTML = crawler-friendly by default
- Meta tags + OG images per language route (Phase 2)
- `hreflang` tags for FR/EN bilingual SEO (Phase 2)
- Structured data / Person schema (Phase 2)
- No-CSS state IS what crawlers see

### Real-Time Architecture (Phase 2)
- SSE (Server-Sent Events) for visitor counter
- Railway API tracks: total visitors (persistent) + active connections (live)
- Client subscribes on page load, receives updates
- Graceful degradation: if SSE fails, show last known total or hide counter

### Implementation Considerations
- Astro islands for interactive components (toggle, language switch)
- Static HTML generated at build time for all content
- No client-side routing — full page loads for language switch
- PDF CVs served from `/public` directory
- Custom font self-hosted from `/public/fonts/`
- GitHub Actions workflow: build → deploy to `gh-pages`

## Functional Requirements

### Content Display
- **FR1:** Visitor can view all content sections (Links, Skills, Experience, Projects, CV Download) on a single page
- **FR2:** Visitor can read all content in a no-CSS state with system fonts and structural styles
- **FR3:** Visitor can view a hierarchical skills display (Expertise / Experience / Curiosity tiers)
- **FR4:** Visitor can view professional experience in a scannable format
- **FR5:** Visitor can view project listings with links to live projects

### Bilingual Support
- **FR6:** Visitor can access the site in French at the root route (`/`)
- **FR7:** Visitor can access the site in English at `/en`
- **FR8:** Visitor can switch language via a visible toggle in the header
- **FR9:** All content sections are available in both languages with identical structure

### CSS Toggle
- **FR10:** Visitor can toggle between raw (no-CSS) and styled states via a button
- **FR11:** The toggle triggers a radial visual transition originating from the button position
- **FR12:** The toggle button appears styled/"alive" on the raw page and brutalist/raw on the styled page
- **FR13:** The toggle state is reversible (can switch back and forth)
- **FR14:** The site degrades to instant swap on browsers without View Transitions support

### Typography
- **FR15:** The raw state displays content using the system font stack
- **FR16:** The styled state displays content using a custom self-hosted font

### Navigation
- **FR17:** Visitor can navigate to any section via a table of contents
- **FR18:** Visitor can jump to sections using keyboard shortcuts (`1-5`)
- **FR19:** Visitor can toggle CSS via keyboard shortcut (`t`)
- **FR20:** Visitor can switch language via keyboard shortcut (`l`)
- **FR21:** Visitor can view available shortcuts via keyboard shortcut (`?`)
- **FR22:** Visitor can navigate the entire site using only the keyboard

### Contact & Downloads
- **FR23:** Visitor can download a PDF CV in French
- **FR24:** Visitor can download a PDF CV in English
- **FR25:** Visitor can access email contact via a mailto link
- **FR26:** Visitor can access GitHub, LinkedIn, and other professional network links

### Accessibility
- **FR27:** Screen reader users can navigate the site using semantic landmarks
- **FR28:** Visitor can skip to main content via a skip link
- **FR29:** Counter updates are announced to screen readers via aria-live region (Phase 2)
- **FR30:** Visitors with reduced motion preferences see no animation on toggle

### Deployment
- **FR31:** The site generates as fully static files
- **FR32:** The site deploys automatically via GitHub Actions to GitHub Pages
- **FR33:** The site is accessible at the GitHub Pages URL

## Non-Functional Requirements

### Performance
- **NFR1:** Lighthouse Performance score > 90 on mobile
- **NFR2:** First Contentful Paint < 1 second on 4G connection
- **NFR3:** Total page weight < 200KB (excluding PDF downloads)
- **NFR4:** No render-blocking resources in no-CSS state
- **NFR5:** CSS toggle transition completes in < 300ms (perceived instant)
- **NFR6:** Custom font loaded asynchronously (no FOIT on styled state)

### Accessibility
- **NFR7:** WCAG AAA compliance (contrast ratio 7:1 minimum)
- **NFR8:** All interactive elements reachable via keyboard with visible focus indicators
- **NFR9:** `prefers-reduced-motion` respected — no animation when set
- **NFR10:** Semantic HTML passes automated accessibility audit (axe, Lighthouse)
- **NFR11:** Content readable and functional at 200% zoom
- **NFR12:** Touch targets minimum 44x44px on mobile

### Compatibility
- **NFR13:** Full functionality in Chrome, Firefox, Safari (latest 2 versions)
- **NFR14:** View Transitions gracefully degrades to instant swap in unsupported browsers
- **NFR15:** Site fully functional with JavaScript disabled (except toggle animation and counter)

### Maintainability
- **NFR16:** Content stored in structured data files (JSON or MD), separate from templates
- **NFR17:** Adding a new language requires only new content files + route, no structural changes
- **NFR18:** Build completes in < 30 seconds
