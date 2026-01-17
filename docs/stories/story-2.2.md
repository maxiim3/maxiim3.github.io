# Story 2.2 : Projects Page

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** recruteur,
**I want** voir des réalisations concrètes du candidat,
**so that** je peux évaluer la qualité de son travail.

## Acceptance Criteria

- [ ] Page `projets.vue` créée
- [ ] Composant `ProjectCard.vue` pour chaque projet
- [ ] Grille responsive (1 col mobile, 2-3 cols desktop)
- [ ] Chaque card : titre, description, capture, technos badges, lien (si dispo)
- [ ] Hover effect subtil sur les cards
- [ ] Données externalisées (`data/projects.ts`)
- [ ] Images optimisées (WebP, lazy loading)

## Technical Notes

- Composant `ProjectCard.vue` dans `components/`
- Images dans `public/projects/`
- Utiliser `NuxtImg` pour optimisation

## Dependencies

- Story 2.1 (Experience Page)
