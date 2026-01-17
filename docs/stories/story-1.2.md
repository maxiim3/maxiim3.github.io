# Story 1.2 : Layout Components

**Epic :** [Epic 1 - Foundation & Core Site](../epics/epic-1.md)

## User Story

**As a** visiteur,
**I want** une navigation claire et des liens sociaux,
**so that** je peux explorer le site et contacter le candidat.

## Acceptance Criteria

- [x] Composant `Header.vue` avec navigation (Accueil, Expériences, Projets)
- [x] Composant `Footer.vue` avec liens GitHub et LinkedIn
- [x] Layout par défaut appliqué à toutes les pages
- [x] Header sticky au scroll
- [x] Navigation responsive (hamburger menu mobile)
- [x] Liens fonctionnels avec `NuxtLink`

## Technical Notes

- Composants dans `components/`
- Layout dans `layouts/default.vue`
- Utiliser Tailwind pour le styling
- Icons : Heroicons ou similaire

## Dependencies

- Story 1.1 (Project Setup)
