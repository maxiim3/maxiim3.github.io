# Story 2.4 : SEO & Meta

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** candidat,
**I want** que mon site soit bien référencé,
**so that** les recruteurs peuvent me trouver via Google.

## Acceptance Criteria

- [ ] Balises meta title/description sur chaque page
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card meta tags
- [ ] Sitemap.xml généré automatiquement
- [ ] robots.txt configuré
- [ ] URL canoniques définies
- [ ] Structured data JSON-LD (Person schema)

## Technical Notes

- Utiliser `useSeoMeta()` de Nuxt
- Module `@nuxtjs/sitemap` pour sitemap
- Image OG : créer une image 1200x630

## Content

### Meta Description

> Maxime Tamburrini - Développeur Front-End Vue.js / Nuxt. Applications B2B/B2C, dashboards data viz, design systems. 2 ans chez Airddm + expérience freelance.

### JSON-LD Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maxime Tamburrini",
  "jobTitle": "Développeur Front-End Vue/Nuxt",
  "url": "https://username.github.io/curriculum"
}
```

## Dependencies

- Story 2.3 (Dark Mode)
