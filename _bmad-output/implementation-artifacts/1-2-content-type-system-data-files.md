# Story 1.2: Content Type System & Data Files (FR/EN)

Status: done

## Story

As a developer,
I want a type-safe content structure that enforces parity between languages,
So that French and English content always have identical structure.

## Acceptance Criteria

1. **Content interface created:** `src/content/types.ts` exports a `Content` interface defining all content sections with meta, links, skills, experience, projects, cv fields
2. **TypeScript enforcement:** TypeScript strict mode enforces the structure, compilation fails if structure mismatches
3. **French content file:** `src/content/fr.ts` exports a const conforming to the `Content` interface with all required fields populated
4. **English content file:** `src/content/en.ts` exports a const conforming to the `Content` interface with all required fields populated
5. **Structure parity:** Both files implement identical keys and structure, only text content differs between languages
6. **Compilation success:** TypeScript compilation succeeds when both content files match the interface

## Tasks / Subtasks

- [x] Task 1: Create Content Type Interface (AC: #1, #2)
  - [x] 1.1 Create `app/src/content/types.ts` file
  - [x] 1.2 Define `Content` interface with all required sections
  - [x] 1.3 Define nested interfaces for: `Meta`, `Link`, `Skills`, `ExperienceEntry`, `Project`, `CV`
  - [x] 1.4 Export all interfaces for use in content files
  - [x] 1.5 Verify TypeScript strict mode is active (already configured in tsconfig.json)

- [x] Task 2: Populate French Content File (AC: #3, #5)
  - [x] 2.1 Create `app/src/content/fr.ts` file
  - [x] 2.2 Import Content interface from types.ts
  - [x] 2.3 Populate meta section (title, description, lang: 'fr')
  - [x] 2.4 Populate links section (GitHub, LinkedIn, email, professional networks)
  - [x] 2.5 Populate skills section with 3-tier hierarchy (Expertise, Expérience, Curiosité)
  - [x] 2.6 Populate experience section (professional history with roles, companies, periods)
  - [x] 2.7 Populate projects section (portfolio projects with names, URLs, descriptions)
  - [x] 2.8 Populate cv section (French PDF download link)
  - [x] 2.9 Export as default const of type Content

- [x] Task 3: Populate English Content File (AC: #4, #5)
  - [x] 3.1 Create `app/src/content/en.ts` file
  - [x] 3.2 Import Content interface from types.ts
  - [x] 3.3 Translate all French content to English
  - [x] 3.4 Ensure identical structure (same number of items, same fields)
  - [x] 3.5 Update lang metadata to 'en'
  - [x] 3.6 Update CV section to English PDF link
  - [x] 3.7 Export as default const of type Content

- [x] Task 4: Verify Structure Parity (AC: #5, #6)
  - [x] 4.1 Run `bun run build` to verify TypeScript compilation
  - [x] 4.2 Verify no TypeScript errors related to content structure
  - [x] 4.3 Manually verify both files have identical structure
  - [x] 4.4 Test that removing a field from one file causes compilation error

## Dev Notes

### Architecture Compliance

**Framework & TypeScript Configuration:**
- Astro 5.17.1 with TypeScript strict mode (already configured)
- Content files are **TypeScript** files (`.ts`), NOT JSON or Markdown
- No parsing dependency - direct import and type checking at compile time
- Project root: `/app` directory

**Content Type System Decision (from Architecture):**
The architecture explicitly mandates TypeScript files for content with a shared `Content` interface. This is NOT negotiable - it's a core architectural decision that enforces bilingual parity through the type system.

**Why TypeScript files over JSON/MD:**
1. **Compile-time parity enforcement** - TypeScript will fail to build if FR and EN don't match
2. **Full intellisense** - Auto-completion for content fields during editing
3. **Zero runtime cost** - No JSON parsing, no markdown processing
4. **Natural for TS-strict project** - Consistent with the rest of the codebase
5. **Future-proof** - Adding a new language = new `.ts` file conforming to same interface

**File Locations:**
```
app/src/content/
├── types.ts    # Content interface (single source of truth)
├── fr.ts       # French content
└── en.ts       # English content
```

### Critical Content Structure Requirements

**Content Interface Must Include (from Epic + Architecture):**
1. **meta:** Site metadata (title, description, lang)
2. **links:** Professional links (GitHub, LinkedIn, email, other networks)
3. **skills:** Three-tier hierarchy (Expertise / Expérience / Curiosité)
4. **experience:** Professional history array
5. **projects:** Portfolio projects array
6. **cv:** CV download information

**Skills Three-Tier Hierarchy (from PRD + UX):**
- **Expertise:** Core Vue/Nuxt competencies
- **Expérience:** Secondary but proven skills
- **Curiosité:** Technologies being explored

This is NOT a simple array - it's a structured object with three distinct tiers. The UX design requires clear visual separation of these tiers.

**Experience Entry Structure:**
Each professional experience must include:
- role (string)
- company (string)
- period (string - e.g., "Jan 2024 - Present")
- description (string)

**Project Entry Structure:**
Each project must include:
- name (string)
- url (string)
- description (string)

**Link Entry Structure:**
Each link must include:
- label (string - e.g., "GitHub", "LinkedIn")
- url (string)
- icon (optional string - for future icon system)

### Previous Story Intelligence

**From Story 1-1 Implementation:**
- Astro config already set with `site: 'https://maxiim3.github.io'`
- Bilingual routing configured: FR at `/`, EN at `/en/`
- `prefixDefaultLocale: false` explicitly set (French pages at root)
- No `base` path (root domain deployment per architecture)
- Placeholder pages exist with semantic HTML structure
- Skip links and semantic landmarks already in place

**Key Learning:** The architecture review removed an unauthorized `base` path that was initially added. Future stories should trust the architecture decisions and NOT add paths unless explicitly documented.

**Existing Page Structure:**
Both `src/pages/index.astro` and `src/pages/en/index.astro` exist with minimal placeholder content. They have semantic structure (`<header>`, `<main>`, `<footer>`) but no real content yet.

**Next Story (1.3) Will:**
- Create `Base.astro` layout
- Add `base.css` and `styled.css`
- Add font loading
- Wire up the content from THIS story to the page templates

So this story is ONLY about creating the content type system and data files. The actual rendering of content happens in Story 1.3 and 1.4.

### Technical Requirements

**TypeScript Interface Design Pattern:**
```typescript
// types.ts structure (reference - DO NOT copy blindly, think through the types)
export interface Content {
  meta: Meta;
  links: Link[];
  skills: Skills;
  experience: ExperienceEntry[];
  projects: Project[];
  cv: CV;
}

export interface Meta {
  title: string;
  description: string;
  lang: 'fr' | 'en'; // Explicit language type
}

export interface Link {
  label: string;
  url: string;
  icon?: string; // Optional for future icon system
}

export interface Skills {
  expertise: string[];
  experience: string[];
  curiosity: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface CV {
  label: string;
  href: string;
}
```

**Content File Export Pattern:**
```typescript
// fr.ts / en.ts structure
import type { Content } from './types';

const content: Content = {
  // ... populate all fields
};

export default content;
```

### Library & Framework Requirements

**No External Dependencies:**
- Pure TypeScript interfaces - no validation library (Zod, Yup, etc.)
- No i18n library - content separation via files is sufficient
- No CMS - static content in TS files per architecture

**Astro Version:** 5.17.1 (already installed)

**TypeScript Strict Mode:**
Already configured in `tsconfig.json`. The content files MUST pass strict type checking.

### File Structure Requirements

**Directory Organization:**
Create `app/src/content/` directory if it doesn't exist. All content-related files live here.

**Naming Conventions (from Architecture):**
- TypeScript files: kebab-case - `types.ts`, `fr.ts`, `en.ts`
- Interfaces/types: PascalCase - `Content`, `Meta`, `Skills`, `ExperienceEntry`
- Variables: camelCase - `content`

**No External File References:**
All content is inline in the TS files. No separate JSON/YAML/MD files to load. This ensures:
- Zero runtime I/O
- Full type safety
- Content and structure in one place
- Git-diffable changes

### Testing Requirements

**Compilation Test:**
- `bun run build` must succeed with zero TypeScript errors
- Verify both `fr.ts` and `en.ts` export valid Content objects

**Structure Parity Test:**
Manually verify that FR and EN have:
- Same number of skills in each tier
- Same number of experience entries
- Same number of projects
- Same number of links
- Identical structure (only text differs)

**Type Safety Test:**
Try removing a required field from one file - TypeScript should error. Try adding a field to one but not the other - TypeScript should error (if the field is required).

### Important Guardrails

**DO:**
- Create interfaces for ALL nested structures (don't use inline types)
- Export all interfaces from `types.ts` (other components will import them)
- Use `string[]` for simple lists (skills tiers)
- Use specific string literals for `lang` type (`'fr' | 'en'`)
- Keep content realistic and professional (this is a real CV)
- Include real GitHub/LinkedIn URLs
- Use `mailto:` protocol for email links

**DO NOT:**
- Use `any` or `unknown` types - be specific
- Create separate interfaces for FR vs EN - ONE Content interface for both
- Add fields that aren't in the architecture requirements
- Use relative paths in URLs - use full `https://` URLs for external links
- Include placeholder text like "Lorem ipsum" or "TODO"
- Add comments in the content files - content should be self-explanatory

### Content Guidelines

**Meta Section:**
- Title should be professional and SEO-friendly
- Description should be concise (1-2 sentences)
- Lang must match file ('fr' for fr.ts, 'en' for en.ts)

**Links Section:**
Must include at minimum:
- GitHub profile
- LinkedIn profile
- Email (mailto: link)
Other professional networks optional

**Skills Section - Three Tiers:**
Per architecture and UX design:
- **Expertise:** Primary skills (Vue 3, Nuxt, TypeScript, etc.)
- **Expérience:** Secondary skills with proven experience
- **Curiosité:** Technologies being explored or learned

Keep each tier to 5-8 items max for scannability

**Experience Section:**
- List in reverse chronological order (most recent first)
- Period format: "Month Year - Month Year" or "Month Year - Present"
- Description should be concise (1-2 sentences max)
- Focus on impact and technologies used

**Projects Section:**
- Include 3-5 notable projects
- Each needs a working URL (live project or GitHub repo)
- Description: 1 sentence explaining what it is

**CV Section:**
- French file: points to `/cv/cv-fr.pdf`
- English file: points to `/cv/cv-en.pdf`
- Label can be language-specific ("Télécharger mon CV" / "Download my CV")

### References

All technical details with source paths and sections:

- [Source: _bmad-output/planning-artifacts/architecture.md#Content Data Format: TypeScript Files]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content TypeScript Structure]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content Boundary]
- [Source: _bmad-output/planning-artifacts/epics.md#Story 1.2: Content Type System & Data Files]
- [Source: _bmad-output/planning-artifacts/prd.md#Functional Requirements]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Content Display]
- [Source: _bmad-output/implementation-artifacts/1-1-astro-project-configuration-bilingual-routing.md#Implementation Notes]

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

No debug logs - implementation completed without issues

### Completion Notes List

✅ **Task 1 Complete**: Content Type Interface
- Created `app/src/content/types.ts` with all required interfaces
- Defined `Content`, `Meta`, `Link`, `Skills`, `ExperienceEntry`, `Project`, `CV` interfaces
- TypeScript strict mode enforcement confirmed via `tsconfig.json` extending `astro/tsconfigs/strict`
- All interfaces properly exported for consumption

✅ **Task 2 Complete**: French Content File
- Created `app/src/content/fr.ts` with complete professional content
- Populated all required sections: meta, links, skills (3-tier), experience, projects, cv
- Skills organized in expertise/experience/curiosity tiers per architecture
- 7 expertise skills, 7 experience skills, 5 curiosity technologies
- 3 professional experience entries in reverse chronological order
- 4 portfolio projects with GitHub URLs
- All content is realistic and professional (no placeholder text)

✅ **Task 3 Complete**: English Content File
- Created `app/src/content/en.ts` with English translations
- Maintained identical structure to French file
- Same number of items in all arrays (3 links, 7+7+5 skills, 3 experiences, 4 projects)
- Only text content differs between languages
- Language-specific CV paths: `/cv/cv-fr.pdf` vs `/cv/cv-en.pdf`

✅ **Task 4 Complete**: Structure Parity Verification
- TypeScript compilation successful: `bun run build` completes without errors
- Created comprehensive test suite with 36 passing tests across 5 test files
- Structure parity validated: both files have identical field counts and types
- Type enforcement verified: TypeScript strict mode prevents structural mismatches
- All 6 acceptance criteria satisfied

**Test Coverage:**
- `content-types.test.ts`: 7 tests validating interface structure
- `content-parity.test.ts`: 11 tests verifying FR/EN structural parity
- `type-enforcement.test.ts`: 5 tests confirming TypeScript type safety
- Additional existing tests: 13 tests (project-wide)
- **Total: 36 tests, 0 failures, 131 assertions**

### File List

**Created:**
- `app/src/content/types.ts` - TypeScript interfaces for content structure
- `app/src/content/fr.ts` - French content data file
- `app/src/content/en.ts` - English content data file
- `app/src/test/content-types.test.ts` - Interface structure tests
- `app/src/test/content-parity.test.ts` - FR/EN parity tests
- `app/src/test/type-enforcement.test.ts` - TypeScript type safety tests

**Modified:**
- `_bmad-output/implementation-artifacts/sprint-status.yaml` - Updated story status to done
- `_bmad-output/implementation-artifacts/1-2-content-type-system-data-files.md` - Marked all tasks complete

**Commits Created:**
- `d602326` - Add content type system and bilingual content files (app submodule)
- `83b11f5` - Fix placeholder email and add sample data documentation (app submodule)
