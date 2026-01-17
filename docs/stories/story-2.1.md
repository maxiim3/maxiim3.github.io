# Story 2.1 : Experience Page

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** recruteur,
**I want** voir le parcours professionnel du candidat de façon claire,
**so that** je peux évaluer son expérience et sa progression.

## Acceptance Criteria

- [x] Page `experience.vue` créée
- [x] Composant `TimelineItem.vue` pour chaque expérience
- [x] Timeline verticale, ordre chronologique inversé (récent en haut)
- [x] Airddm (CDI actuel) en première position
- [x] Chaque item : période, poste, entreprise, description, technos
- [x] Design responsive, lisible sur mobile
- [x] Données externalisées (fichier `data/experiences.ts`)

## Technical Notes

- Composant `TimelineItem.vue` dans `components/`
- Données typées dans `data/experiences.ts`
- Utiliser Tailwind pour le styling timeline

## Dependencies

- Epic 1 complet
