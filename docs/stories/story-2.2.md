# Story 2.2 : Projects Page

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** recruteur,
**I want** voir des réalisations concrètes du candidat,
**so that** je peux évaluer la qualité de son travail.

## Acceptance Criteria

- [x] Page `projets.vue` créée
- [x] Composant `ProjectCard.vue` pour chaque projet
- [x] Grille responsive (1 col mobile, 2-3 cols desktop)
- [x] Chaque card : titre, description, capture, technos badges, lien (si dispo)
- [x] Hover effect subtil sur les cards
- [x] Données externalisées (`data/projects.ts`)
- [ ] Images optimisées (WebP, lazy loading) - placeholder images used

## Technical Notes

- Composant `ProjectCard.vue` dans `components/`
- Images dans `public/projects/`
- Utiliser `NuxtImg` pour optimisation

## Dependencies

- Story 2.1 (Experience Page)
