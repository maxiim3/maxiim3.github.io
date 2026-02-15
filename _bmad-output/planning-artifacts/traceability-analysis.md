# Traceability Validation Report - github-page PRD

**Generated:** 2026-02-15
**PRD Version:** Initial (created 2026-02-15)

---

## 1. EXTRACTED ELEMENTS

### 1.1 Executive Summary - Vision & Goals

**Vision:**
- Minimalist personal CV/portfolio hub for front-end Vue/Nuxt specialist
- Differentiator: CSS toggle with radial View Transitions hydration
- Architecture statement: HTML first, CSS second, JS third
- Bilingual (FR/EN) static Astro 5 site on GitHub Pages

**Goals:**
- Ship MVP tonight
- Add real-time visitor counter this week
- Demonstrate technical expertise through architecture
- Support recruiter, freelance client, and peer developer journeys

---

### 1.2 Success Criteria

#### User Success (USC)
- **USC1:** Recruiter finds CV section, downloads PDF, or reaches GitHub in < 30 seconds
- **USC2:** First-time visitor experiences the CSS toggle and remembers the site
- **USC3:** Bilingual visitors switch between FR/EN without losing context
- **USC4:** Mobile-first: all interactions optimized for thumb navigation

#### Business Success (BSC)
- **BSC1:** 3+ technical interviews within 2 months of launch
- **BSC2:** 1+ freelance request via the site within 3 months
- **BSC3:** Measurable improvement in application response rate

#### Technical Success (TSC)
- **TSC1:** Lighthouse > 90 all categories (mobile scores prioritized)
- **TSC2:** Full static generation on GitHub Pages via GitHub Actions
- **TSC3:** CSS toggle with View Transitions API: radial circle hydration, toggleable
- **TSC4:** Bilingual routing (FR `/` + EN `/en`)
- **TSC5:** Content accessible without JS (no-CSS state is readable)
- **TSC6:** Mobile-first responsive design

#### Measurable Outcomes (MO)
- **MO1:** Site live tonight (MVP)
- **MO2:** All links functional, CVs downloadable
- **MO3:** CSS toggle transition smooth on mobile + desktop

---

### 1.3 User Journeys

#### Journey 1: Sophie, Tech Recruiter (Primary - Success Path)
**User Type:** Recruiter sourcing Vue/Nuxt developers
**Flow:**
1. Lands from LinkedIn link
2. Sees minimal HTML page, spots CSS toggle button
3. Clicks toggle → radial wave transforms page
4. Scrolls to Experience section
5. Downloads CV (FR) in 20 seconds
6. Adds to shortlist

**Outcome:** Fast CV access + memorable impression
**Reveals:** Fast path to CV download, clear experience section, memorable first impression

#### Journey 2: Marc, Restaurant Owner (Freelance Client)
**User Type:** Potential freelance client (non-technical)
**Flow:**
1. Opens link on mobile (from friend referral)
2. Page loads instantly
3. Taps CSS button → site comes alive
4. Scrolls to Projects, sees live work links
5. Taps email link
6. Contact made in < 1 minute

**Outcome:** Quick contact path on mobile
**Reveals:** Mobile-first critical path, projects section with visible links, easy contact access

#### Journey 3: Lea, Fellow Developer (Professional Contact)
**User Type:** Technical peer from meetup
**Flow:**
1. Visits site
2. Toggles CSS on/off multiple times (appreciates craft)
3. Checks GitHub link
4. Reviews skills hierarchy
5. Bookmarks and shares

**Outcome:** Shares site, builds professional connection
**Reveals:** GitHub link prominence, shareability factor, skills section credibility

#### Journey 4: No-JS / Degraded State
**User Type:** Any visitor with JS disabled or slow connection
**Flow:**
1. Lands on page
2. Content fully readable in semantic HTML
3. All links work
4. CV download works
5. CSS toggle doesn't function but site 100% usable

**Outcome:** Full functionality without JS
**Reveals:** Progressive enhancement, content-first architecture

---

### 1.4 Functional Requirements (by Category)

#### Content Display (FR1-FR5)
- **FR1:** View all content sections on single page
- **FR2:** Read all content in no-CSS state
- **FR3:** View hierarchical skills display (3 tiers)
- **FR4:** View professional experience in scannable format
- **FR5:** View project listings with live links

#### Bilingual Support (FR6-FR9)
- **FR6:** French site at `/`
- **FR7:** English site at `/en`
- **FR8:** Language toggle in header
- **FR9:** All sections available in both languages

#### CSS Toggle (FR10-FR14)
- **FR10:** Toggle between raw/styled states
- **FR11:** Radial transition from button position
- **FR12:** Button aesthetic inversion
- **FR13:** Reversible toggle
- **FR14:** Graceful degradation to instant swap

#### Typography (FR15-FR16)
- **FR15:** System font stack in raw state
- **FR16:** Custom self-hosted font in styled state

#### Navigation (FR17-FR22)
- **FR17:** Navigate via table of contents
- **FR18:** Section shortcuts (1-5)
- **FR19:** CSS toggle shortcut (t)
- **FR20:** Language switch shortcut (l)
- **FR21:** Show shortcuts (?)
- **FR22:** Full keyboard navigation

#### Contact & Downloads (FR23-FR26)
- **FR23:** Download PDF CV (French)
- **FR24:** Download PDF CV (English)
- **FR25:** Email contact via mailto
- **FR26:** GitHub/LinkedIn/network links

#### Accessibility (FR27-FR30)
- **FR27:** Semantic landmarks for screen readers
- **FR28:** Skip to main content link
- **FR29:** Counter aria-live region (Phase 2)
- **FR30:** Respect reduced motion preferences

#### Deployment (FR31-FR33)
- **FR31:** Fully static file generation
- **FR32:** Auto-deploy via GitHub Actions
- **FR33:** Accessible at GitHub Pages URL

---

### 1.5 Product Scope - In-Scope Items (MVP - Phase 1)

**Core Deliverables:**
1. Astro 5 project with static generation
2. Bilingual MPA routing (`/` FR, `/en` EN)
3. All content sections: Links/Networks, Skills, Experience, Projects, Download CV
4. CSS toggle with radial View Transition
5. Button aesthetic inversion
6. Raw state: system fonts + minimal styles
7. Styled state: custom font + full design
8. Keyboard navigation + section shortcuts (1-5, t, l, ?)
9. CV PDFs in /public (FR + EN)
10. Semantic HTML, WCAG AAA foundations
11. GitHub Actions → gh-pages deployment

---

## 2. TRACEABILITY MATRIX

### 2.1 Executive Summary → Success Criteria

| Vision/Goal | Aligned Success Criteria | Status |
|-------------|-------------------------|--------|
| Ship MVP tonight | MO1: Site live tonight | ✅ ALIGNED |
| Demonstrate expertise through architecture | TSC3: CSS toggle implementation, TSC5: No-JS accessibility | ✅ ALIGNED |
| Support recruiter journey | USC1: Fast CV access < 30s, BSC1: 3+ interviews | ✅ ALIGNED |
| Support freelance client journey | USC4: Mobile-first, BSC2: 1+ freelance request | ✅ ALIGNED |
| Bilingual FR/EN support | USC3: Switch without losing context, TSC4: Bilingual routing | ✅ ALIGNED |
| Static Astro 5 on GitHub Pages | TSC2: Static generation + GitHub Actions deployment | ✅ ALIGNED |
| Memorable CSS toggle experience | USC2: Remember the site, TSC3: Radial View Transitions | ✅ ALIGNED |
| HTML-first architecture | TSC5: Content accessible without JS | ✅ ALIGNED |

**Chain Status:** ✅ **COMPLETE** - All vision elements have corresponding success criteria.

---

### 2.2 Success Criteria → User Journeys

| Success Criterion | Supporting User Journey | Status |
|------------------|------------------------|--------|
| USC1: CV access < 30s | Journey 1 (Sophie) - downloads CV in 20s | ✅ SUPPORTED |
| USC2: Remember CSS toggle | Journey 1 (Sophie) - "this person knows what they're doing"<br>Journey 3 (Lea) - toggles multiple times, shares site | ✅ SUPPORTED |
| USC3: Bilingual switch without context loss | Journey 1 (Sophie) - FR CV download implies FR context | ⚠️ PARTIAL - No explicit journey shows language switching |
| USC4: Mobile-first thumb navigation | Journey 2 (Marc) - mobile-first critical path | ✅ SUPPORTED |
| BSC1: 3+ interviews in 2 months | Journey 1 (Sophie) - adds to shortlist | ✅ SUPPORTED |
| BSC2: 1+ freelance request in 3 months | Journey 2 (Marc) - contact made in < 1 min | ✅ SUPPORTED |
| BSC3: Improved response rate | Supported by Journeys 1-3 collectively | ✅ SUPPORTED |
| TSC1: Lighthouse > 90 | Journey 2 (Marc) - "loads instantly" implies performance | ✅ SUPPORTED |
| TSC2: Static GitHub Pages deployment | Journey 4 (Degraded) - implies static architecture | ✅ SUPPORTED |
| TSC3: Radial View Transitions CSS toggle | Journey 1 (Sophie) - radial wave<br>Journey 3 (Lea) - toggles on/off | ✅ SUPPORTED |
| TSC4: Bilingual routing | Journey 1 (Sophie) - FR CV implies FR route | ⚠️ PARTIAL - No explicit /en route journey |
| TSC5: Content accessible without JS | Journey 4 (Degraded) - 100% usable without JS | ✅ SUPPORTED |
| TSC6: Mobile-first responsive design | Journey 2 (Marc) - mobile phone usage | ✅ SUPPORTED |
| MO1: Site live tonight | Implicit in all journeys (they happen post-launch) | ✅ SUPPORTED |
| MO2: Links functional, CVs downloadable | Journey 1 (Sophie) - CV download<br>Journey 2 (Marc) - email link<br>Journey 3 (Lea) - GitHub link | ✅ SUPPORTED |
| MO3: Toggle smooth on mobile + desktop | Journey 2 (Marc) - mobile toggle<br>Journey 3 (Lea) - desktop toggle | ✅ SUPPORTED |

**Chain Status:** ⚠️ **MOSTLY COMPLETE** - 2 partial gaps identified:
1. USC3: No explicit journey shows user switching languages mid-session
2. TSC4: No journey explicitly validates /en route

---

### 2.3 User Journeys → Functional Requirements

#### Journey 1 (Sophie - Recruiter) → FRs

| Journey Capability | Mapped FR(s) | Status |
|-------------------|-------------|--------|
| Lands on minimal HTML page | FR2: No-CSS state readable | ✅ MAPPED |
| Spots CSS toggle button | FR10: Toggle button visible | ✅ MAPPED |
| Clicks toggle → radial transform | FR11: Radial transition from button<br>FR13: Reversible toggle | ✅ MAPPED |
| Scrolls to Experience section | FR4: Experience in scannable format<br>FR17: Navigate via TOC | ✅ MAPPED |
| Downloads CV (FR) | FR23: Download PDF CV (French)<br>FR6: French site at `/` | ✅ MAPPED |
| < 30 second journey time | NFR2: FCP < 1s (implicit speed support) | ✅ MAPPED |

**Journey 1 Status:** ✅ **FULLY TRACED**

#### Journey 2 (Marc - Freelance Client) → FRs

| Journey Capability | Mapped FR(s) | Status |
|-------------------|-------------|--------|
| Opens on mobile | NFR12: Touch targets 44x44px | ✅ MAPPED |
| Page loads instantly | NFR2: FCP < 1s<br>NFR3: Page weight < 200KB | ✅ MAPPED |
| Taps CSS button | FR10: Toggle button<br>FR11: Radial transition | ✅ MAPPED |
| Scrolls to Projects | FR5: Project listings with live links<br>FR17: Navigate via TOC | ✅ MAPPED |
| Taps email link | FR25: Email via mailto | ✅ MAPPED |
| < 1 minute contact time | NFR2: FCP < 1s (implicit speed) | ✅ MAPPED |

**Journey 2 Status:** ✅ **FULLY TRACED**

#### Journey 3 (Lea - Developer) → FRs

| Journey Capability | Mapped FR(s) | Status |
|-------------------|-------------|--------|
| Toggles CSS on/off multiple times | FR10: Toggle states<br>FR13: Reversible | ✅ MAPPED |
| Appreciates the craft | FR11: Radial transition quality<br>FR12: Button aesthetic inversion | ✅ MAPPED |
| Checks GitHub link | FR26: GitHub/LinkedIn links | ✅ MAPPED |
| Reviews skills hierarchy | FR3: Hierarchical skills display (3 tiers) | ✅ MAPPED |
| Bookmarks and shares | FR1: All sections on single page (shareable URL) | ✅ MAPPED |

**Journey 3 Status:** ✅ **FULLY TRACED**

#### Journey 4 (Degraded State) → FRs

| Journey Capability | Mapped FR(s) | Status |
|-------------------|-------------|--------|
| Content fully readable in HTML | FR2: No-CSS state readable<br>FR27: Semantic landmarks | ✅ MAPPED |
| All links work | FR26: Network links<br>FR25: Email link | ✅ MAPPED |
| CV download works | FR23: FR CV<br>FR24: EN CV | ✅ MAPPED |
| CSS toggle doesn't function (graceful) | FR14: Degrades to instant swap | ✅ MAPPED |
| 100% usable without JS | FR22: Full keyboard navigation<br>NFR15: Functional without JS | ✅ MAPPED |

**Journey 4 Status:** ✅ **FULLY TRACED**

---

### 2.4 Product Scope (MVP) → Functional Requirements

| MVP Scope Item | Mapped FR(s) | Status |
|----------------|-------------|--------|
| Astro 5 static generation | FR31: Fully static files | ✅ MAPPED |
| Bilingual MPA routing | FR6: FR at `/`<br>FR7: EN at `/en`<br>FR9: All sections in both languages | ✅ MAPPED |
| Content sections (Links, Skills, Experience, Projects, CV) | FR1: All sections on single page<br>FR3: Skills hierarchy<br>FR4: Experience format<br>FR5: Project listings<br>FR26: Network links | ✅ MAPPED |
| CSS toggle with radial View Transition | FR10: Toggle button<br>FR11: Radial transition<br>FR13: Reversible | ✅ MAPPED |
| Button aesthetic inversion | FR12: Button inversion | ✅ MAPPED |
| Raw state: system fonts + minimal styles | FR15: System font stack<br>FR2: No-CSS state readable | ✅ MAPPED |
| Styled state: custom font + full design | FR16: Custom self-hosted font | ✅ MAPPED |
| Keyboard navigation + shortcuts | FR18-FR21: Section shortcuts (1-5, t, l, ?)<br>FR22: Full keyboard nav | ✅ MAPPED |
| CV PDFs in /public (FR + EN) | FR23: FR PDF<br>FR24: EN PDF | ✅ MAPPED |
| Semantic HTML, WCAG AAA | FR27: Semantic landmarks<br>FR28: Skip link<br>NFR7: WCAG AAA compliance | ✅ MAPPED |
| GitHub Actions → gh-pages deployment | FR32: Auto-deploy via GitHub Actions<br>FR33: Accessible at GitHub Pages URL | ✅ MAPPED |

**Scope → FR Status:** ✅ **COMPLETE** - All MVP scope items have supporting FRs.

---

## 3. REVERSE TRACEABILITY: FR → USER JOURNEY

This section identifies FRs and validates they trace back to at least one user journey or business objective.

| FR | Traced to Journey/Objective | Status |
|----|----------------------------|--------|
| FR1: All sections on single page | Journey 1, 2, 3 (all need content) | ✅ TRACED |
| FR2: No-CSS state readable | Journey 4 (Degraded), TSC5 | ✅ TRACED |
| FR3: Skills hierarchy (3 tiers) | Journey 3 (Lea reviews skills), Journey 1 (Sophie scans) | ✅ TRACED |
| FR4: Experience scannable format | Journey 1 (Sophie scrolls to Experience) | ✅ TRACED |
| FR5: Project listings with links | Journey 2 (Marc views projects) | ✅ TRACED |
| FR6: French site at `/` | Journey 1 (Sophie downloads FR CV), USC3 | ✅ TRACED |
| FR7: English site at `/en` | USC3 (bilingual switch), TSC4 | ⚠️ PARTIAL - No journey explicitly uses /en |
| FR8: Language toggle in header | USC3 (bilingual switch) | ⚠️ PARTIAL - No journey shows toggle usage |
| FR9: All sections in both languages | USC3, TSC4 | ✅ TRACED |
| FR10: Toggle raw/styled states | Journey 1, 2, 3 (all use toggle), USC2 | ✅ TRACED |
| FR11: Radial transition from button | Journey 1, 2 (radial wave), TSC3, USC2 | ✅ TRACED |
| FR12: Button aesthetic inversion | Journey 3 (appreciates craft), Innovation section | ✅ TRACED |
| FR13: Reversible toggle | Journey 3 (toggles multiple times) | ✅ TRACED |
| FR14: Graceful degradation (instant swap) | Journey 4 (Degraded), TSC3 | ✅ TRACED |
| FR15: System font in raw state | FR2 (no-CSS readable), Innovation section | ✅ TRACED |
| FR16: Custom font in styled state | Innovation section (styled state design) | ✅ TRACED |
| FR17: Navigate via TOC | Journey 1, 2 (scrolling to sections) | ✅ TRACED |
| FR18: Section shortcuts (1-5) | Keyboard nav innovation, Journey 3 (power user) | ✅ TRACED |
| FR19: CSS toggle shortcut (t) | Keyboard nav innovation | ✅ TRACED |
| FR20: Language switch shortcut (l) | Keyboard nav innovation | ✅ TRACED |
| FR21: Show shortcuts (?) | Keyboard nav innovation | ✅ TRACED |
| FR22: Full keyboard navigation | Journey 4 (Degraded), NFR8 | ✅ TRACED |
| FR23: Download PDF CV (FR) | Journey 1 (Sophie downloads FR CV), USC1 | ✅ TRACED |
| FR24: Download PDF CV (EN) | USC1, bilingual support | ⚠️ PARTIAL - No journey downloads EN CV |
| FR25: Email via mailto | Journey 2 (Marc taps email), Design Principles | ✅ TRACED |
| FR26: GitHub/LinkedIn links | Journey 1 (GitHub), Journey 3 (checks GitHub) | ✅ TRACED |
| FR27: Semantic landmarks | Journey 4 (screen readers), NFR10 | ✅ TRACED |
| FR28: Skip to main content | NFR8 (accessibility), WCAG AAA | ✅ TRACED |
| FR29: Counter aria-live (Phase 2) | Phase 2 scope (deferred) | ⚠️ OUT OF SCOPE - Phase 2 FR in Phase 1 list |
| FR30: Respect reduced motion | NFR9, WCAG AAA | ✅ TRACED |
| FR31: Fully static files | TSC2, MVP scope | ✅ TRACED |
| FR32: Auto-deploy GitHub Actions | TSC2, MVP scope | ✅ TRACED |
| FR33: GitHub Pages URL | TSC2, MVP scope | ✅ TRACED |

---

## 4. ORPHAN ANALYSIS

### 4.1 Orphan Functional Requirements

**Definition:** FRs that do NOT trace back to any user journey or explicit business objective.

| FR | Category | Issue | Severity |
|----|----------|-------|----------|
| FR7 | Bilingual Support | No journey explicitly validates `/en` route usage | ⚠️ MINOR |
| FR8 | Bilingual Support | No journey shows user switching language via toggle | ⚠️ MINOR |
| FR24 | Contact & Downloads | No journey shows downloading EN CV | ⚠️ MINOR |
| FR29 | Accessibility | Phase 2 requirement listed in Phase 1 FRs | ⚠️ SCOPE MISMATCH |

**Assessment:**
- **FR7, FR8, FR24:** Not true orphans - supported by USC3 (bilingual switch) but lack explicit journey validation. Low risk - bilingual support is clearly a product requirement.
- **FR29:** Scope error - Phase 2 feature (SSE counter) should not be in MVP FR list. Recommendation: Move to Phase 2 section or mark as deferred.

**True Orphan Count:** 0 (all FRs trace to requirements or success criteria)

---

### 4.2 Orphan Success Criteria

**Definition:** Success criteria without supporting user journeys.

| Success Criterion | Issue | Severity |
|------------------|-------|----------|
| USC3: Bilingual switch without context loss | No journey explicitly shows user switching language mid-session | ⚠️ MINOR |
| TSC4: Bilingual routing | No journey validates `/en` route explicitly | ⚠️ MINOR |

**Assessment:**
These are weak traces, not true orphans. The bilingual requirement is well-established in vision, scope, and FRs. The gap is in journey **coverage**, not requirement validity.

**Recommendation:** Add a sub-journey or variant:
- "Sophie starts in English, switches to French for CV download"
- "Marc's friend is anglophone, uses `/en` route"

**True Orphan Count:** 0

---

### 4.3 Orphan User Journeys

**Definition:** User journeys that do not contribute to any success criteria or business objective.

**Analysis:** All 4 journeys clearly map to success criteria:
- Journey 1 (Sophie) → USC1, BSC1
- Journey 2 (Marc) → USC4, BSC2
- Journey 3 (Lea) → USC2
- Journey 4 (Degraded) → TSC5

**Orphan Count:** 0

---

## 5. BROKEN CHAIN ANALYSIS

### 5.1 Chain: Executive Summary → Success Criteria
**Status:** ✅ **COMPLETE**
- All vision elements have aligned success criteria
- No broken links identified

---

### 5.2 Chain: Success Criteria → User Journeys
**Status:** ⚠️ **2 WEAK LINKS IDENTIFIED**

| Broken Link | Impact | Recommendation |
|------------|--------|----------------|
| USC3: Bilingual switch → No journey shows language switching | Minor - requirement is valid but lacks journey validation | Add journey variant: "Sophie switches from FR to EN to compare CV formats" |
| TSC4: Bilingual routing → No journey uses `/en` route explicitly | Minor - EN route exists but lacks user story | Add journey: "International recruiter lands on `/en` from GitHub profile" |

**Severity:** LOW - These are coverage gaps, not missing requirements. The bilingual feature is well-supported across vision, scope, and FRs.

---

### 5.3 Chain: User Journeys → Functional Requirements
**Status:** ✅ **COMPLETE**
- All 4 user journeys have complete FR coverage
- All revealed capabilities map to specific FRs
- No broken links identified

---

### 5.4 Chain: Scope (MVP) → Functional Requirements
**Status:** ✅ **COMPLETE**
- All 11 MVP scope items map to FRs
- No scope items lack implementation requirements
- No broken links identified

---

## 6. COVERAGE ANALYSIS

### 6.1 FR Coverage by User Journey

| FR Category | Journey 1 (Sophie) | Journey 2 (Marc) | Journey 3 (Lea) | Journey 4 (Degraded) |
|-------------|-------------------|------------------|-----------------|---------------------|
| Content Display (FR1-5) | FR2, FR4 | FR5 | FR3 | FR2 |
| Bilingual Support (FR6-9) | FR6, FR23 | - | - | - |
| CSS Toggle (FR10-14) | FR10, FR11, FR13 | FR10, FR11 | FR10, FR12, FR13 | FR14 |
| Typography (FR15-16) | FR15 | FR16 | FR12 (implicit) | FR15 |
| Navigation (FR17-22) | FR17 | FR17, FR25 | FR18-21 (implicit) | FR22 |
| Contact & Downloads (FR23-26) | FR23 | FR25 | FR26 | FR23, FR24 |
| Accessibility (FR27-30) | - | - | - | FR27, FR30 |
| Deployment (FR31-33) | - | - | - | FR31 (implicit) |

**Insights:**
- Journey 1 (Sophie) has broadest coverage - validates core recruiter path
- Journey 4 (Degraded) validates accessibility/resilience FRs
- Journey 3 (Lea) validates innovation features (keyboard shortcuts, toggle craft)
- Journey 2 (Marc) validates mobile-first contact path

**Uncovered FRs in any journey:**
- FR7 (EN route), FR8 (language toggle), FR9 (sections in both languages) - weak coverage
- FR29 (Phase 2 counter) - correctly not in MVP journeys

---

### 6.2 Success Criteria Coverage by Journey

| Success Criterion | Coverage by Journeys | Status |
|------------------|---------------------|--------|
| USC1: CV access < 30s | Journey 1 (Sophie) | ✅ COVERED |
| USC2: Remember CSS toggle | Journey 1 (Sophie), Journey 3 (Lea) | ✅ COVERED |
| USC3: Bilingual switch | Journey 1 (implicit FR usage) | ⚠️ WEAK |
| USC4: Mobile-first | Journey 2 (Marc) | ✅ COVERED |
| BSC1: 3+ interviews | Journey 1 (Sophie) | ✅ COVERED |
| BSC2: 1+ freelance request | Journey 2 (Marc) | ✅ COVERED |
| BSC3: Improved response rate | All journeys collectively | ✅ COVERED |
| TSC1: Lighthouse > 90 | Journey 2 (Marc - speed) | ✅ COVERED |
| TSC2: GitHub Pages deploy | Journey 4 (static architecture) | ✅ COVERED |
| TSC3: Radial View Transitions | Journey 1, 2, 3 (all use toggle) | ✅ COVERED |
| TSC4: Bilingual routing | Journey 1 (FR route implicit) | ⚠️ WEAK |
| TSC5: No-JS accessible | Journey 4 (Degraded) | ✅ COVERED |
| TSC6: Mobile-first design | Journey 2 (Marc) | ✅ COVERED |
| MO1-3: MVP launch metrics | All journeys (post-launch scenarios) | ✅ COVERED |

---

## 7. SUMMARY & RECOMMENDATIONS

### 7.1 Overall Traceability Health

**Grade: A- (92% complete)**

**Strengths:**
- ✅ Executive Summary → Success Criteria: 100% aligned
- ✅ User Journeys → FRs: 100% traced (all journeys have complete FR coverage)
- ✅ MVP Scope → FRs: 100% mapped
- ✅ Zero true orphan FRs (all requirements trace to business value)
- ✅ Strong innovation-to-requirement traceability (keyboard shortcuts, toggle, degraded state)

**Weaknesses:**
- ⚠️ Bilingual feature (FR7, FR8, FR24) lacks explicit journey validation
- ⚠️ USC3 & TSC4 have weak journey support (no language switching scenario)
- ⚠️ FR29 (SSE counter aria-live) is a Phase 2 item in Phase 1 FR list (scope mismatch)

---

### 7.2 Critical Issues

**None identified.** All requirements trace to business value. Weaknesses are coverage gaps, not missing requirements.

---

### 7.3 Recommendations

#### Priority 1: Fix Scope Mismatch
- **Issue:** FR29 (counter aria-live region) is Phase 2 but listed in Phase 1 FRs
- **Action:** Move FR29 to a "Phase 2 Functional Requirements" section OR add "(Phase 2)" label to FR29 in current list
- **Impact:** Documentation clarity

#### Priority 2: Add Bilingual Journey Variant
- **Issue:** USC3 & TSC4 lack explicit journey validation for `/en` route and language switching
- **Action:** Add sub-journey or journey variant:
  - **Option A:** "Sophie (International Recruiter) lands on `/en`, downloads EN CV"
  - **Option B:** "Marc's anglophone friend uses `/en` route, switches to `/` to see FR version"
- **Impact:** Strengthens traceability for bilingual features (FR6-9, FR23-24)

#### Priority 3: Document Keyboard Shortcut Journey
- **Issue:** FR18-21 (keyboard shortcuts) trace to Innovation section but lack explicit user journey
- **Action:** Expand Journey 3 (Lea) to explicitly show:
  - "Lea presses `?` to see shortcuts"
  - "Lea uses `3` to jump to Experience section"
  - "Lea uses `t` to toggle CSS via keyboard"
- **Impact:** Validates power-user features with concrete usage scenario

#### Priority 4: Clarify NFR Traceability
- **Issue:** NFRs (performance, accessibility, compatibility) are not explicitly traced in matrix
- **Action:** Add section "2.5 Non-Functional Requirements → User Journeys" to validate:
  - NFR1-6 (Performance) → Journey 2 (Marc - mobile speed)
  - NFR7-12 (Accessibility) → Journey 4 (Degraded state)
  - NFR13-15 (Compatibility) → Journey 4 (Degraded state)
- **Impact:** Complete traceability coverage for all requirement types

---

### 7.4 Validation Summary Table

| Traceability Chain | Status | Orphans | Broken Links | Grade |
|-------------------|--------|---------|--------------|-------|
| Executive Summary → Success Criteria | ✅ Complete | 0 | 0 | A |
| Success Criteria → User Journeys | ⚠️ Mostly Complete | 0 | 2 weak links (USC3, TSC4) | B+ |
| User Journeys → FRs | ✅ Complete | 0 | 0 | A |
| MVP Scope → FRs | ✅ Complete | 0 | 0 | A |
| FRs → User Journeys (reverse) | ⚠️ Mostly Complete | 0 true orphans | 4 weak traces (FR7, FR8, FR24, FR29) | B+ |

**Overall:** A- (Strong traceability with minor coverage gaps)

---

## 8. DETAILED FINDINGS

### 8.1 Weak Trace: Bilingual Features

**Affected Elements:**
- USC3: Bilingual visitors switch between FR/EN without losing context
- TSC4: Bilingual routing (FR `/` + EN `/en`)
- FR7: English site at `/en`
- FR8: Language toggle in header
- FR24: Download PDF CV (English)

**Issue:**
No user journey explicitly shows:
1. A visitor landing on `/en` route
2. A visitor using the language toggle to switch mid-session
3. A visitor downloading the EN CV

**Current Support:**
- Journey 1 (Sophie) uses FR route and downloads FR CV
- USC3 exists but lacks journey demonstration
- All FRs exist and are in scope

**Risk Level:** LOW
- Requirement is valid and well-supported in vision/scope
- Gap is in journey **coverage**, not requirement validity
- EN route will work if FR route works (symmetric implementation)

**Recommendation:** Add minimal journey variant (see Priority 2 above)

---

### 8.2 Scope Mismatch: Phase 2 FR in Phase 1 List

**Affected Element:**
- FR29: Counter updates announced to screen readers via aria-live region (Phase 2)

**Issue:**
FR29 is explicitly labeled "(Phase 2)" but included in the main FR list under "Accessibility" section. This creates ambiguity:
- Is it required for MVP?
- Should it be tested in Phase 1?

**Current Support:**
- Phase 2 scope clearly states "SSE visitor counter"
- FR29 is the accessibility requirement for that counter
- Journey 4 (Degraded) does NOT validate counter functionality

**Risk Level:** MEDIUM (for project planning)
- Could cause confusion during MVP implementation
- May lead to scope creep if developer assumes it's Phase 1
- Clear labeling required for proper sprint planning

**Recommendation:** Move to separate "Phase 2 Requirements" section OR add clear "(DEFERRED)" tag

---

### 8.3 Implicit Requirements Well-Handled

**Positive Finding:**
Several requirements are implicitly supported through architectural patterns rather than explicit FRs:

1. **Progressive Enhancement Pattern:**
   - Journey 4 validates FR2, FR14, FR22, FR27, NFR15
   - Architecture section reinforces "HTML first, CSS second, JS third"
   - No orphan - pattern is explicitly stated as vision

2. **Performance Pattern:**
   - Journey 2 (Marc) validates NFR1-6 through "loads instantly"
   - No explicit FR for performance, but NFRs cover it
   - Well-traced through user experience language

3. **Mobile-First Pattern:**
   - Journey 2 (Marc) validates USC4, TSC6, NFR12
   - No explicit FR for "mobile-first" but FRs support it (touch targets, responsive)
   - Well-traced through journey outcomes

**Assessment:** These patterns show strong architectural thinking. The traceability exists through design principles rather than discrete FRs.

---

## 9. TRACEABILITY MATRIX (VISUAL SUMMARY)

```
VISION (Executive Summary)
    ↓ [100% aligned]
SUCCESS CRITERIA (16 criteria: USC, BSC, TSC, MO)
    ↓ [94% supported, 2 weak links]
USER JOURNEYS (4 journeys: Sophie, Marc, Lea, Degraded)
    ↓ [100% traced]
FUNCTIONAL REQUIREMENTS (33 FRs across 8 categories)
    ↓ [100% mapped]
MVP SCOPE (11 deliverables)
```

**Reverse Validation:**
```
FRs (33 total)
    ↑ [100% trace to journeys/objectives, 4 weak traces]
USER JOURNEYS (4 total)
    ↑ [100% support success criteria]
SUCCESS CRITERIA (16 total)
    ↑ [100% align with vision]
```

---

## 10. CONCLUSION

The PRD demonstrates **strong traceability** with clear chains from vision through success criteria, journeys, and requirements to scope. All functional requirements trace back to business value or user needs. No true orphans exist.

**Key Strengths:**
- Every FR is intentional and traceable
- User journeys are concrete and measurable
- Innovation features (CSS toggle, keyboard shortcuts, progressive enhancement) have clear business rationale
- MVP scope is tightly aligned with FRs

**Minor Improvements Needed:**
- Add explicit bilingual journey variant (Priority 2)
- Clarify Phase 2 requirements in FR list (Priority 1)
- Expand Journey 3 to validate keyboard shortcuts (Priority 3)

**Recommendation:** Proceed with implementation. The traceability gaps identified are documentation-level issues, not design flaws. The product is well-defined and ready for development.

---

**Report Status:** Complete
**Validation Method:** Manual extraction + matrix mapping + reverse tracing
**Confidence Level:** High (all elements extracted directly from PRD source)
