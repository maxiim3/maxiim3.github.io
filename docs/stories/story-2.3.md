# Story 2.3 : Dark Mode

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** visiteur,
**I want** pouvoir basculer entre thème clair et sombre,
**so that** je peux consulter le site selon ma préférence.

## Acceptance Criteria

- [x] Toggle accessible dans le Header
- [x] Thème clair par défaut
- [x] Palette sombre cohérente (contrastes WCAG AA)
- [x] Persistance du choix dans localStorage
- [x] Respect de `prefers-color-scheme` au premier chargement
- [x] Transition fluide entre thèmes (pas de flash)

## Technical Notes

- Utiliser `@nuxtjs/color-mode` ou implémentation custom
- Classes Tailwind `dark:` pour les variantes
- Toggle icon : soleil/lune

## Dependencies

- Story 2.2 (Projects Page)
