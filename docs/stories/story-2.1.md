# Story 2.1 : Experience Page

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** recruteur,
**I want** voir le parcours professionnel du candidat de façon claire,
**so that** je peux évaluer son expérience et sa progression.

## Acceptance Criteria

- [ ] Page `experience.vue` créée
- [ ] Composant `TimelineItem.vue` pour chaque expérience
- [ ] Timeline verticale, ordre chronologique inversé (récent en haut)
- [ ] Airddm (CDI actuel) en première position
- [ ] Chaque item : période, poste, entreprise, description, technos
- [ ] Design responsive, lisible sur mobile
- [ ] Données externalisées (fichier `data/experiences.ts`)

## Technical Notes

- Composant `TimelineItem.vue` dans `components/`
- Données typées dans `data/experiences.ts`
- Utiliser Tailwind pour le styling timeline

## Dependencies

- Epic 1 complet
