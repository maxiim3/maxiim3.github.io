# CV Maxime Tamburrini — Frontend Architecture Document

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-01-17 | 1.0 | Architecture initiale | Winston |

---

## Template and Framework Selection

**Framework :** Nuxt 3 (minimal starter via `nuxi init`)

**Rationale :**
- Démontre l'expertise Vue/Nuxt
- SSG natif (`nuxt generate`)
- Aucune dépendance superflue

---

## Frontend Tech Stack

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Framework | Nuxt 3 | ^3.14 | SSG, routing, SEO | Démontre expertise |
| UI Library | Vue 3 | ^3.5 | Components reactifs | Inclus dans Nuxt |
| Build Tool | Vite | ^5.x | Dev server, bundling | Inclus dans Nuxt |
| Styling | Tailwind CSS | ^3.4 | Utility-first CSS | Rapid prototyping |
| Icons | Nuxt Icon | ^1.x | Iconographie | Intégration native |
| Dark Mode | @nuxtjs/color-mode | ^3.x | Theme switching | Standard Nuxt |
| Images | @nuxt/image | ^1.x | Optimisation | WebP, lazy loading |
| Package Manager | Bun | latest | Install, run, test | Per user preference |

**Modules Nuxt :**
- `@nuxtjs/tailwindcss`
- `@nuxtjs/color-mode`
- `@nuxt/image`
- `nuxt-icon`

---

## Project Structure

```
web/
├── .nuxt/                    # Generated (git ignored)
├── .output/                  # Build output (git ignored)
├── assets/
│   └── css/
│       └── main.css          # Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── ThemeToggle.vue
│   ├── ui/
│   │   ├── Button.vue
│   │   └── Badge.vue
│   ├── TimelineItem.vue
│   └── ProjectCard.vue
├── composables/
│   └── useTheme.ts           # Dark mode logic
├── data/
│   ├── experiences.ts        # Données expériences
│   ├── projects.ts           # Données projets
│   └── skills.ts             # Données compétences
├── layouts/
│   └── default.vue           # Layout principal
├── pages/
│   ├── index.vue             # Accueil
│   ├── experience.vue        # Timeline
│   ├── projets.vue           # Portfolio
│   └── [...slug].vue         # 404
├── public/
│   ├── cv.pdf                # CV téléchargeable
│   ├── favicon.ico
│   ├── og-image.png          # Open Graph
│   └── projects/             # Captures projets
├── app.vue                   # Root component
├── nuxt.config.ts            # Config Nuxt
├── tailwind.config.ts        # Config Tailwind
├── tsconfig.json
├── package.json
└── bun.lock
```

---

## Component Standards

### Component Template

```vue
<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
})

const emit = defineEmits<{
  click: [value: string]
}>()
</script>

<template>
  <div class="component-name">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p v-if="description" class="text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
```

### Naming Conventions

| Élément | Convention | Exemple |
|---------|------------|---------|
| Components | PascalCase | `ProjectCard.vue` |
| Pages | kebab-case | `experience.vue` |
| Composables | camelCase + `use` | `useTheme.ts` |
| Data files | kebab-case | `experiences.ts` |
| Types | PascalCase | `Experience` |
| Props | camelCase | `projectTitle` |

### Rules

1. `<script setup lang="ts">` obligatoire
2. TypeScript strict — props et emits typés
3. Pas de `this` — Composition API only
4. Ordre : `<script>` → `<template>`
5. Pas de `<style>` — Tailwind uniquement

---

## State Management

**Approche : Composable simple (sans Pinia)**

```typescript
// composables/useTheme.ts
export const useTheme = () => {
  const colorMode = useColorMode()

  const toggle = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = computed(() => colorMode.value === 'dark')

  return { toggle, isDark }
}
```

**Rationale :** `@nuxtjs/color-mode` gère tout. Pinia serait over-engineering.

---

## Data Layer

```typescript
// data/experiences.ts
export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 'airddm',
    company: 'Airddm',
    role: 'Développeur Front-End Vue/Nuxt',
    period: '2024 - Présent',
    description: 'Applications B2B complexes...',
    technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind'],
    current: true,
  },
]
```

```typescript
// data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  url?: string
  github?: string
}

export const projects: Project[] = []
```

```typescript
// data/skills.ts
export interface SkillCategory {
  name: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  { name: 'EXPERTISE', skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind', 'BEM', 'Pinia', 'Git', 'REST API'] },
  { name: 'FRAMEWORKS', skills: ['React', 'Svelte', 'SvelteKit'] },
  { name: 'DATA VIZ', skills: ['D3.js', 'Chart.js'] },
  { name: 'INTÉGRATIONS', skills: ['Figma', 'Algolia', 'Typesense', 'SQL', 'MongoDB'] },
  { name: 'TOOLS', skills: ['Node', 'Bun', 'Bash', 'Claude Code', 'Gemini', 'OpenCode'] },
  { name: 'CURIEUX', skills: ['Rust', 'Go'] },
]
```

---

## Routing

**File-based routing Nuxt 3**

```
pages/
├── index.vue        →  /
├── experience.vue   →  /experience
├── projets.vue      →  /projets
└── [...slug].vue    →  404
```

### Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },

  site: {
    url: 'https://maxiim3.github.io',
    name: 'Maxime Tamburrini',
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
```

---

## Styling Guidelines

### Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

### Global CSS

```css
/* assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
    @apply transition-colors duration-200;
  }
}
```

### Conventions

- Tailwind classes uniquement (pas de `<style>`)
- Mobile-first (`md:`, `lg:`)
- Dark mode avec `dark:` prefix
- Spacing : échelle Tailwind (4, 8, 16...)

---

## Testing Requirements

### MVP : Lighthouse CI uniquement

```yaml
# .github/workflows/deploy.yml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v11
  with:
    configPath: ./lighthouserc.json
```

```json
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

### Validation manuelle

- [ ] Chrome desktop
- [ ] Firefox desktop
- [ ] Safari desktop
- [ ] Chrome mobile (DevTools)

---

## Environment Configuration

**Pas de `.env`** — site public, tout hardcodé.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },

  site: {
    url: 'https://maxiim3.github.io',
    name: 'Maxime Tamburrini',
  },
})
```

### .gitignore

```gitignore
.nuxt/
.output/
node_modules/
```

---

## Developer Standards

### Critical Coding Rules

| Règle | Description |
|-------|-------------|
| TypeScript strict | Pas de `any`, props typées |
| Composition API only | `<script setup lang="ts">` |
| Tailwind only | Pas de `<style>` scoped |
| Bun partout | `bun install`, `bun run dev`, `bun run generate` |
| Imports auto | Nuxt auto-imports |
| Images WebP | Optimisées, lazy loading |
| Mobile-first | `md:` et `lg:` pour desktop |
| Dark mode | Toujours tester les deux thèmes |

### Quick Reference

```bash
# Commandes
bun install              # Installer dépendances
bun run dev              # Dev server
bun run generate         # Build statique
bun run preview          # Preview build

# MCP Nuxt
claude mcp add --transport http nuxt-remote https://nuxt.com/mcp
```

### Imports auto Nuxt

```typescript
// Pas besoin d'importer
const route = useRoute()
const config = useRuntimeConfig()
const colorMode = useColorMode()
```

---

## Next Steps

1. Implémenter Story 1.1 (Project Setup)
2. Suivre la structure définie dans ce document
3. Valider chaque story avec les acceptance criteria du PRD
