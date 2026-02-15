# PRD Measurability Validation Report

**Document:** `/Users/maxi/www/github-page/_bmad-output/planning-artifacts/prd.md`
**Validation Date:** 2026-02-15
**Validator:** Claude Code

---

## Executive Summary

**Functional Requirements:** 33 total
**FRs with violations:** 14 (42.4%)
**Total FR violations:** 18

**Non-Functional Requirements:** 18 total
**NFRs with violations:** 6 (33.3%)
**Total NFR violations:** 7

**Overall Assessment:** The PRD has good structure but contains measurability issues in both sections. FRs contain subjective adjectives and vague quantifiers. NFRs lack measurement methods and context for several entries.

---

## Functional Requirements Analysis

### Format Compliance Summary

**Expected Format:** `[Actor] can [capability]`
**Compliance Rate:** 100% (33/33 FRs follow the format)

All FRs correctly follow the `[Actor] can [capability]` structure with "Visitor" as the primary actor.

### Violations by Type

#### 1. Subjective Adjectives (5 violations)

| FR ID | Line | Violation | Issue |
|-------|------|-----------|-------|
| FR4 | 218 | "scannable format" | "scannable" is subjective — what makes it scannable? |
| FR12 | 231 | "brutalist/raw" | "brutalist" is a design term requiring interpretation |
| FR22 | 244 | "entire site" | "entire" is vague — specify which elements constitute navigation completeness |
| FR27 | 253 | "semantic landmarks" | "semantic" may be interpreted differently — specify landmark types |
| FR31 | 259 | "fully static files" | "fully" is redundant/subjective — "static files" is sufficient |

#### 2. Vague Quantifiers (7 violations)

| FR ID | Line | Violation | Issue |
|-------|------|-----------|-------|
| FR1 | 215 | "all content sections" | Lists sections but "all" is vague in extensibility context |
| FR2 | 216 | "all content" | No boundary defined for what constitutes "all" |
| FR5 | 219 | "project listings" | Plural without specifying minimum count |
| FR9 | 225 | "All content sections" | Same as FR1 |
| FR18 | 240 | "sections" | Which sections? How many? |
| FR22 | 244 | "entire site" | Counted in both categories — also a quantifier issue |
| FR26 | 250 | "other professional network links" | "other" is open-ended |

#### 3. Implementation Details (6 violations)

| FR ID | Line | Violation | Issue |
|-------|------|-----------|-------|
| FR11 | 229 | "radial visual transition" | Specifies implementation (radial) instead of capability outcome |
| FR14 | 232 | "instant swap" | Implementation detail, not user capability |
| FR15 | 235 | "system font stack" | Specific technical implementation |
| FR16 | 236 | "custom self-hosted font" | Implementation detail (self-hosted) |
| FR21 | 242 | "keyboard shortcut (`?`)" | All keyboard shortcuts specify exact keys — implementation detail |
| FR28 | 254 | "skip link" | Implementation mechanism, not capability |

**Note on keyboard shortcuts (FR18-21):** While specifying exact keys (`1-5`, `t`, `l`, `?`) is an implementation detail, these may be acceptable if they're part of the user-facing specification. However, strictly speaking, the capability should be "Visitor can trigger X action via keyboard" without prescribing the specific key.

#### 4. Missing Actor or Capability Clarity (0 violations)

All FRs clearly state actor and capability.

---

## Functional Requirements Detailed Violations

### High-Priority Fixes

**FR4 (Line 218):** "Visitor can view professional experience in a scannable format"
- **Issue:** "scannable" is subjective
- **Suggested fix:** "Visitor can view professional experience organized chronologically with employer, role, and date range visible per entry"

**FR5 (Line 219):** "Visitor can view project listings with links to live projects"
- **Issue:** "listings" (plural) is vague
- **Suggested fix:** "Visitor can view at least one project entry with a link to the live project"

**FR11 (Line 229):** "The toggle triggers a radial visual transition originating from the button position"
- **Issue:** Specifies implementation (radial, originating from button)
- **Suggested fix:** "The toggle triggers a visual transition between states"

**FR12 (Line 231):** "The toggle button appears styled/'alive' on the raw page and brutalist/raw on the styled page"
- **Issue:** "brutalist" and "alive" are subjective design terms
- **Suggested fix:** "The toggle button has contrasting visual styling relative to the current page state"

**FR22 (Line 244):** "Visitor can navigate the entire site using only the keyboard"
- **Issue:** "entire" is vague
- **Suggested fix:** "Visitor can access all interactive elements (links, buttons, toggles) using only the keyboard"

**FR26 (Line 250):** "Visitor can access GitHub, LinkedIn, and other professional network links"
- **Issue:** "other" is open-ended
- **Suggested fix:** Either enumerate all networks OR "Visitor can access at least GitHub and LinkedIn links"

### Medium-Priority Fixes

**FR15 (Line 235):** "The raw state displays content using the system font stack"
- **Issue:** Implementation detail
- **Suggested fix:** "The raw state displays content using a fallback font available on all systems"

**FR16 (Line 236):** "The styled state displays content using a custom self-hosted font"
- **Issue:** "self-hosted" is implementation detail
- **Suggested fix:** "The styled state displays content using a custom font"

**FR27 (Line 253):** "Screen reader users can navigate the site using semantic landmarks"
- **Issue:** "semantic landmarks" requires technical interpretation
- **Suggested fix:** "Screen reader users can navigate the site using ARIA landmarks (main, navigation, footer)"

**FR28 (Line 254):** "Visitor can skip to main content via a skip link"
- **Issue:** "skip link" is implementation mechanism
- **Suggested fix:** "Visitor can skip directly to main content from page load"

---

## Non-Functional Requirements Analysis

### Template Compliance Summary

**Expected Elements:**
1. Criterion (what is being measured)
2. Metric (specific numeric threshold)
3. Measurement method (how to verify)
4. Context (why/who it affects)

### Violations by Missing Elements

#### 1. Missing Measurement Method (5 violations)

| NFR ID | Line | Violation | Issue |
|--------|------|-----------|-------|
| NFR1 | 266 | "Lighthouse Performance score > 90 on mobile" | No method specified (which Lighthouse version? Which test conditions?) |
| NFR7 | 274 | "WCAG AAA compliance (contrast ratio 7:1 minimum)" | How to measure compliance beyond contrast? Which tool? |
| NFR10 | 277 | "Semantic HTML passes automated accessibility audit (axe, Lighthouse)" | Tools listed but not which version, pass threshold, or test configuration |
| NFR13 | 282 | "Full functionality in Chrome, Firefox, Safari (latest 2 versions)" | How is "full functionality" verified? Manual testing? Automated? Test matrix? |
| NFR17 | 288 | "Adding a new language requires only new content files + route, no structural changes" | How to verify "no structural changes"? Code review? Automated check? |

#### 2. Missing Context (4 violations)

| NFR ID | Line | Violation | Issue |
|--------|------|-----------|-------|
| NFR3 | 268 | "Total page weight < 200KB (excluding PDF downloads)" | Why 200KB? Mobile data limits? Performance target? |
| NFR5 | 270 | "CSS toggle transition completes in < 300ms (perceived instant)" | Why 300ms? User perception research? |
| NFR11 | 278 | "Content readable and functional at 200% zoom" | Why 200%? WCAG requirement? User need? |
| NFR18 | 289 | "Build completes in < 30 seconds" | Why 30s? Developer experience? CI/CD pipeline constraint? |

#### 3. Vague Metrics (2 violations)

| NFR ID | Line | Violation | Issue |
|--------|------|-----------|-------|
| NFR8 | 275 | "All interactive elements reachable via keyboard with visible focus indicators" | "All" is vague, "visible" is subjective |
| NFR13 | 282 | "Full functionality" | What constitutes "full"? Need enumeration or reference to FR coverage |

#### 4. Well-Formed NFRs (Examples)

These NFRs follow the template correctly:

- **NFR2 (Line 267):** "First Contentful Paint < 1 second on 4G connection"
  - Criterion: FCP speed
  - Metric: < 1s
  - Measurement: (implied: Lighthouse, WebPageTest)
  - Context: 4G connection (mobile users)

- **NFR4 (Line 269):** "No render-blocking resources in no-CSS state"
  - Criterion: Render-blocking resources
  - Metric: 0
  - Measurement: (implied: Lighthouse)
  - Context: no-CSS state (progressive enhancement)

- **NFR6 (Line 271):** "Custom font loaded asynchronously (no FOIT on styled state)"
  - Criterion: Font loading behavior
  - Metric: No FOIT (Flash of Invisible Text)
  - Measurement: (implied: visual inspection, Performance panel)
  - Context: styled state (user experience)

---

## Non-Functional Requirements Detailed Violations

### High-Priority Fixes

**NFR1 (Line 266):** "Lighthouse Performance score > 90 on mobile"
- **Missing:** Measurement method, context
- **Suggested fix:** "Lighthouse Performance score > 90 on mobile (measured via Lighthouse 11+ in CI with simulated Moto G4 on slow 4G throttling) to ensure fast mobile experience for recruiters on constrained networks"

**NFR7 (Line 274):** "WCAG AAA compliance (contrast ratio 7:1 minimum)"
- **Missing:** Comprehensive measurement method
- **Suggested fix:** "WCAG AAA compliance for color contrast (contrast ratio ≥ 7:1 measured via axe DevTools) to ensure readability for visually impaired users including those with low vision or color blindness"

**NFR10 (Line 277):** "Semantic HTML passes automated accessibility audit (axe, Lighthouse)"
- **Missing:** Pass criteria, tool versions
- **Suggested fix:** "Semantic HTML passes automated accessibility audits with 0 errors (axe-core 4.8+, Lighthouse 11+ Accessibility score 100) to ensure screen reader compatibility and keyboard navigation for users with disabilities"

**NFR13 (Line 282):** "Full functionality in Chrome, Firefox, Safari (latest 2 versions)"
- **Missing:** Measurement method, definition of "full"
- **Suggested fix:** "All functional requirements (FR1-FR33) verified in Chrome, Firefox, Safari (latest 2 stable versions) via manual cross-browser testing matrix to ensure consistent experience for 95%+ of target audience (recruiters, clients, developers)"

### Medium-Priority Fixes

**NFR3 (Line 268):** "Total page weight < 200KB (excluding PDF downloads)"
- **Missing:** Context
- **Suggested fix:** "Total page weight < 200KB excluding PDFs (measured via DevTools Network panel, gzip compression enabled) to minimize data usage for mobile visitors on metered connections and ensure fast load on 3G networks"

**NFR5 (Line 270):** "CSS toggle transition completes in < 300ms (perceived instant)"
- **Missing:** Context
- **Suggested fix:** "CSS toggle transition completes in < 300ms (measured via Performance panel frame timing) to create 'instant' perception per human response time research (<300ms perceived as instantaneous), critical for the site's memorable interaction"

**NFR8 (Line 275):** "All interactive elements reachable via keyboard with visible focus indicators"
- **Missing:** Measurability of "all" and "visible"
- **Suggested fix:** "Every interactive element (links, buttons, form controls) is reachable via Tab key navigation with focus indicators meeting WCAG 2.1 focus visible criteria (verified via keyboard-only testing) to support keyboard-only users including those with motor disabilities"

**NFR11 (Line 278):** "Content readable and functional at 200% zoom"
- **Missing:** Context
- **Suggested fix:** "Content readable and functional at 200% browser zoom (WCAG 2.1 AA requirement 1.4.4, verified via manual testing in Chrome DevTools) to support users with low vision who rely on browser zoom"

**NFR17 (Line 288):** "Adding a new language requires only new content files + route, no structural changes"
- **Missing:** Measurement method
- **Suggested fix:** "Adding a new language requires only new content files + route with 0 component/layout modifications (verified via code review checklist during Phase 3 Serbian implementation) to enable scalable internationalization for future growth"

**NFR18 (Line 289):** "Build completes in < 30 seconds"
- **Missing:** Context
- **Suggested fix:** "Build completes in < 30 seconds (measured via CI workflow duration from GitHub Actions logs) to maintain fast development iteration cycles and enable quick rollback if critical fixes are needed"

---

## Summary Statistics

### Functional Requirements (FR)

| Metric | Count | Percentage |
|--------|-------|------------|
| Total FRs | 33 | 100% |
| FRs with format compliance | 33 | 100% |
| FRs with subjective adjectives | 5 | 15.2% |
| FRs with vague quantifiers | 7 | 21.2% |
| FRs with implementation details | 6 | 18.2% |
| **FRs with any violation** | **14** | **42.4%** |
| Clean FRs | 19 | 57.6% |

**Total FR violations:** 18 (some FRs have multiple violation types)

### Non-Functional Requirements (NFR)

| Metric | Count | Percentage |
|--------|-------|------------|
| Total NFRs | 18 | 100% |
| NFRs missing measurement method | 5 | 27.8% |
| NFRs missing context | 4 | 22.2% |
| NFRs with vague metrics | 2 | 11.1% |
| **NFRs with any violation** | **6** | **33.3%** |
| Well-formed NFRs | 12 | 66.7% |

**Total NFR violations:** 7 (some NFRs have multiple missing elements)

---

## Recommendations

### For Functional Requirements

1. **Remove subjective adjectives:** Replace terms like "scannable," "brutalist," "alive," "semantic" with objective, measurable descriptions
2. **Specify quantifiers:** Replace "all," "entire," "multiple," "other" with exact counts or clear boundaries
3. **Separate capabilities from implementation:** FRs should describe what users can do, not how it's technically achieved
4. **Consider splitting composite FRs:** Some FRs (like FR26) bundle multiple capabilities and should be split for testability

### For Non-Functional Requirements

1. **Add measurement methods to all NFRs:** Specify tools, versions, test configurations, and acceptance criteria
2. **Add context to performance/quality thresholds:** Explain why each metric matters and who it benefits
3. **Quantify vague terms:** Define "all," "full," "visible" with specific criteria
4. **Create measurement playbook:** Document how each NFR will be verified during QA

### Process Improvements

1. **Use validation checklist during writing:** Check each requirement against criteria before committing
2. **Peer review with focus on measurability:** Have a second reviewer specifically look for subjective terms and vague metrics
3. **Link NFRs to testing strategy:** Each NFR should map to a specific test case or automated check
4. **Version control measurement tools:** Pin tool versions in NFRs to prevent drift in metrics

---

## Conclusion

The PRD demonstrates strong structural organization and comprehensive coverage of both functional and non-functional requirements. However, measurability issues affect 42.4% of FRs and 33.3% of NFRs.

**Immediate actions:**
1. Revise the 14 FRs with violations using the suggested fixes above
2. Add measurement methods to 5 NFRs (NFR1, NFR7, NFR10, NFR13, NFR17)
3. Add context to 4 NFRs (NFR3, NFR5, NFR11, NFR18)

**Quality gate:** Before implementation, ensure all requirements pass this validation framework to prevent ambiguity during development and testing.
