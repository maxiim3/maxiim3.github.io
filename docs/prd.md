# CV Maxime Tamburrini — Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Décrocher 3+ entretiens techniques en 2 mois
- Recevoir 1+ demande freelance via le site en 3 mois
- Améliorer le taux de réponse aux candidatures de 50%
- Démontrer l'expertise Vue/Nuxt par l'exemple (le site lui-même)
- Transformer le parcours atypique en avantage perçu

### Background Context

Maxime Tamburrini est développeur Front-End Vue/Nuxt avec 2 ans d'expérience chez Airddm (CDI) et un background freelance/formation en React. Son CV actuel souffre d'un positionnement flou et d'une liste de compétences non hiérarchisée qui dilue son expertise réelle.

Ce projet crée un écosystème CV complet : un site Nuxt 3 statique hébergé sur GitHub Pages (démontrant ses compétences en action) et un PDF optimisé ATS. L'approche transforme son parcours atypique (10 ans hors tech : cinéma, restauration, permaculture) en différenciateur plutôt qu'en obstacle.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-01-17 | 1.0 | PRD initial validé | PM (John) |

---

## Requirements

### Functional Requirements

- **FR1:** Le site affiche une page d'accueil avec l'accroche développée et un CTA vers le CV PDF
- **FR2:** Le site affiche une page expériences avec timeline interactive (Airddm en premier)
- **FR3:** Le site affiche une page projets avec galerie portfolio (captures + descriptions)
- **FR4:** Le site permet le téléchargement du CV PDF en un clic
- **FR5:** Le site affiche les liens sociaux (GitHub, LinkedIn) dans le footer
- **FR6:** Le site propose un toggle mode sombre/clair avec persistance du choix
- **FR7:** Le site affiche les compétences structurées par catégorie (Expertise, Frameworks, etc.)
- **FR8:** Le PDF contient la nouvelle accroche structurée validée
- **FR9:** Le PDF liste les compétences avec hiérarchie claire (pas de liste plate)

### Non-Functional Requirements

- **NFR1:** Score Lighthouse > 90 (Performance, SEO, Accessibilité)
- **NFR2:** Temps de chargement < 2 secondes
- **NFR3:** Site 100% responsive (mobile, tablette, desktop)
- **NFR4:** Site statique (pas de backend, pas de base de données)
- **NFR5:** Hébergement gratuit (GitHub Pages)
- **NFR6:** Build automatisé via GitHub Actions
- **NFR7:** Code TypeScript strict
- **NFR8:** SEO optimisé (meta tags, Open Graph, sitemap)

---

## User Interface Design Goals

### Overall UX Vision

Design minimaliste et professionnel, inspiré des portfolios de développeurs modernes. Fond clair par défaut, espaces généreux, typographie lisible. L'interface doit refléter les qualités du candidat : clarté, rigueur, attention au détail. Pas de surcharge visuelle — laisser le contenu parler.

### Key Interaction Paradigms

- **Navigation simple** : Header fixe avec liens directs (Accueil, Expériences, Projets)
- **Scroll fluide** : Transitions douces entre sections
- **Toggle dark mode** : Switch accessible, persistance localStorage
- **Hover states** : Feedback subtil sur éléments interactifs
- **Timeline** : Parcours vertical, expand/collapse optionnel

### Core Screens and Views

| Écran | Objectif |
|-------|----------|
| **Accueil** | Accroche + CTA téléchargement + liens rapides |
| **Expériences** | Timeline chronologique inversée (récent en haut) |
| **Projets** | Grille de cards avec captures, techno badges, liens |

### Accessibility

**WCAG AA** — Contrastes suffisants, navigation clavier, alt texts sur images

### Branding

- **Couleurs :** Palette sobre (noir/blanc/gris + 1 accent)
- **Typo :** Sans-serif moderne (Inter, Geist, ou système)
- **Ton :** Professionnel mais humain, pas corporate froid

### Target Device and Platforms

**Web Responsive** — Mobile-first, adapté desktop/tablette

---

## Technical Assumptions

### Repository Structure

**Monorepo**

```
curriculum/
├── cv/                 # PDF source/généré
├── docs/               # Brief, PRD, architecture
└── web/                # Site Nuxt 3
```

### Service Architecture

**Static Site (JAMstack)**

- Nuxt 3 en mode `nuxt generate` (SSG)
- Aucun backend, aucune API
- Contenu hardcodé ou fichiers JSON/YAML
- Build-time rendering uniquement

### Tech Stack

| Layer | Choix | Rationale |
|-------|-------|-----------|
| **Framework** | Nuxt 3 | Démontre l'expertise, SSG natif |
| **UI** | Vue 3 + Composition API | Standard moderne |
| **Langage** | TypeScript (strict) | Qualité code, cohérent positionnement |
| **Styling** | Tailwind CSS | Rapid prototyping, design system intégré |
| **Package Manager** | Bun | Rapide, moderne |
| **Hosting** | GitHub Pages | Gratuit, CI/CD intégré |
| **CI/CD** | GitHub Actions | Build auto sur push main |

### Testing Requirements

- Pas de tests unitaires (scope limité, site vitrine)
- Validation manuelle cross-browser
- Lighthouse CI pour performance/SEO

### Additional Technical Assumptions

- Images optimisées (WebP, lazy loading)
- Fonts : système ou self-hosted (pas Google Fonts pour RGPD)
- Analytics : aucun pour MVP
- Pas de CMS, contenu dans le code

---

## Epic List

| Epic | Titre | Goal |
|------|-------|------|
| **1** | Foundation & Core Site | Setup Nuxt 3, déploiement GitHub Pages, layout de base, page d'accueil fonctionnelle |
| **2** | Content & Polish | Pages Expériences/Projets, dark mode, SEO, intégration PDF |

---

## Epic 1 : Foundation & Core Site

**Goal :** Établir l'infrastructure projet (Nuxt 3, Tailwind, GitHub Actions) et livrer une page d'accueil fonctionnelle déployée sur GitHub Pages.

### Story 1.1 : Project Setup

**As a** développeur,
**I want** un projet Nuxt 3 configuré avec Tailwind,
**so that** je peux commencer le développement du site.

**Acceptance Criteria :**
1. Projet Nuxt 3 initialisé dans `web/` avec Bun
2. TypeScript configuré en mode strict
3. Tailwind CSS installé et fonctionnel
4. `nuxt.config.ts` configuré pour static generation (`ssr: true`, `nitro.prerender`)
5. Commande `bun run generate` produit un dossier `.output/public`
6. Serveur dev fonctionne (`bun run dev`)

---

### Story 1.2 : Layout Components

**As a** visiteur,
**I want** une navigation claire et des liens sociaux,
**so that** je peux explorer le site et contacter le candidat.

**Acceptance Criteria :**
1. Composant `Header.vue` avec navigation (Accueil, Expériences, Projets)
2. Composant `Footer.vue` avec liens GitHub et LinkedIn
3. Layout par défaut appliqué à toutes les pages
4. Header sticky au scroll
5. Navigation responsive (hamburger menu mobile)
6. Liens fonctionnels avec `NuxtLink`

---

### Story 1.3 : Homepage

**As a** recruteur,
**I want** voir immédiatement qui est le candidat et sa proposition de valeur,
**so that** je peux décider rapidement si son profil m'intéresse.

**Acceptance Criteria :**
1. Page `index.vue` avec accroche développée (version longue)
2. Section compétences structurée (Expertise, Frameworks, etc.)
3. Bouton CTA "Télécharger mon CV" visible
4. Design responsive mobile-first
5. Typographie lisible, espaces généreux
6. Temps de chargement < 2s

---

### Story 1.4 : CI/CD & Deployment

**As a** développeur,
**I want** un déploiement automatique sur GitHub Pages,
**so that** chaque push sur main met à jour le site.

**Acceptance Criteria :**
1. Fichier `.github/workflows/deploy.yml` créé
2. Workflow déclenché sur push branch `main`
3. Build Nuxt avec `bun run generate`
4. Déploiement sur GitHub Pages fonctionnel
5. Site accessible via `https://<username>.github.io/curriculum/`
6. PDF CV copié dans `public/` et téléchargeable

---

## Epic 2 : Content & Polish

**Goal :** Compléter le site avec les pages Expériences et Projets, ajouter le dark mode, optimiser le SEO, et finaliser l'intégration PDF.

### Story 2.1 : Experience Page

**As a** recruteur,
**I want** voir le parcours professionnel du candidat de façon claire,
**so that** je peux évaluer son expérience et sa progression.

**Acceptance Criteria :**
1. Page `experience.vue` créée
2. Composant `TimelineItem.vue` pour chaque expérience
3. Timeline verticale, ordre chronologique inversé (récent en haut)
4. Airddm (CDI actuel) en première position
5. Chaque item : période, poste, entreprise, description, technos
6. Design responsive, lisible sur mobile
7. Données externalisées (fichier `data/experiences.ts`)

---

### Story 2.2 : Projects Page

**As a** recruteur,
**I want** voir des réalisations concrètes du candidat,
**so that** je peux évaluer la qualité de son travail.

**Acceptance Criteria :**
1. Page `projets.vue` créée
2. Composant `ProjectCard.vue` pour chaque projet
3. Grille responsive (1 col mobile, 2-3 cols desktop)
4. Chaque card : titre, description, capture, technos badges, lien (si dispo)
5. Hover effect subtil sur les cards
6. Données externalisées (`data/projects.ts`)
7. Images optimisées (WebP, lazy loading)

---

### Story 2.3 : Dark Mode

**As a** visiteur,
**I want** pouvoir basculer entre thème clair et sombre,
**so that** je peux consulter le site selon ma préférence.

**Acceptance Criteria :**
1. Toggle accessible dans le Header
2. Thème clair par défaut
3. Palette sombre cohérente (contrastes WCAG AA)
4. Persistance du choix dans localStorage
5. Respect de `prefers-color-scheme` au premier chargement
6. Transition fluide entre thèmes (pas de flash)

---

### Story 2.4 : SEO & Meta

**As a** candidat,
**I want** que mon site soit bien référencé,
**so that** les recruteurs peuvent me trouver via Google.

**Acceptance Criteria :**
1. Balises meta title/description sur chaque page
2. Open Graph tags (og:title, og:description, og:image)
3. Twitter Card meta tags
4. Sitemap.xml généré automatiquement
5. robots.txt configuré
6. URL canoniques définies
7. Structured data JSON-LD (Person schema)

---

### Story 2.5 : Final Polish

**As a** candidat,
**I want** un site performant et sans bugs,
**so that** je fais bonne impression aux recruteurs.

**Acceptance Criteria :**
1. PDF CV dans `public/cv.pdf`, bouton téléchargement fonctionnel
2. Score Lighthouse > 90 (Performance, SEO, Accessibility, Best Practices)
3. Test cross-browser (Chrome, Firefox, Safari)
4. Test responsive (mobile, tablette, desktop)
5. Liens externes en `target="_blank" rel="noopener"`
6. Favicon et apple-touch-icon configurés
7. 404 page personnalisée

---

## Next Steps

### Architect Prompt

> Utilise ce PRD pour créer l'architecture technique du site CV Nuxt 3. Définis la structure des fichiers, les composants, les types TypeScript, et la configuration Tailwind.

### Dev Prompt

> Implémente les stories de l'Epic 1 en suivant les acceptance criteria. Commence par Story 1.1 (Project Setup).
