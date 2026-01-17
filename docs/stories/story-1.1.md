# Story 1.1 : Project Setup

**Epic :** [Epic 1 - Foundation & Core Site](../epics/epic-1.md)

## User Story

**As a** développeur,
**I want** un projet Nuxt 3 configuré avec Tailwind,
**so that** je peux commencer le développement du site.

## Acceptance Criteria

- [x] Projet Nuxt 3 initialisé dans `web/` avec Bun
- [x] TypeScript configuré en mode strict
- [x] Tailwind CSS installé et fonctionnel
- [x] `nuxt.config.ts` configuré pour static generation (`ssr: true`, `nitro.prerender`)
- [x] Commande `bun run generate` produit un dossier `.output/public`
- [x] Serveur dev fonctionne (`bun run dev`)

## Technical Notes

- Package manager : Bun
- Framework : Nuxt 3
- Styling : Tailwind CSS
- Mode : Static Site Generation (SSG)

## Dependencies

- Aucune (première story)
