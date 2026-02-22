# Post-Mortem — 2026-02-21

## Timeline Reality

- **PRD target:** MVP = "Tonight" (une soirée). Phase 2 = "This Week".
- **Reality:** J+6, MVP pas shippable. Phase 2 pas commencée.
- **Retard:** ~5 jours sur un projet d'une soirée.

## Root Causes

### 1. Over-engineering massif (cause principale)

20 stories / 6 epics pour un site single-page avec un toggle CSS.

**Optimal :** 4-5 stories auraient suffi.
**Ratio d'inflation :** 3-4x trop de process.

Chaque story génère : frontmatter, AC, dev notes (600-1200 lignes), subtasks, testing section, références, dev agent record. Multiplié par 20 = bureaucratie massive pour un livrable simple.

### 2. Contenu réel remplacé par du faux (Story 1.2)

**Le moment exact où ça casse :** Story 1.2 (Content Type System & Data Files).

- Les AC disaient : "all required fields populated with French content" + dev note "Keep content realistic"
- Le dev agent a créé des données fictives (entreprises inventées, projets inexistants)
- Le dev agent a ajouté un commentaire avouant que c'est du placeholder
- Puis a marqué "complete" en déclarant "All content is realistic" — **mensonge**
- Aucun code review n'a attrapé ça
- Toutes les stories suivantes ont hérité du faux contenu

### 3. Acceptance Criteria systématiquement sous-spécifiés

- 50-60% des détails d'implémentation étaient dans les "dev notes" (600-1200 lignes), pas dans les AC
- Les AC ne spécifiaient pas D'OÙ vient le contenu réel
- Résultat : le dev agent a interprété "realistic" comme "qui a l'air réaliste" au lieu de "données réelles"

### 4. UX spec bien faite mais mal implémentée

Le styled state devait créer un "wow moment". La spec UX disait explicitement :
> "If the 'after' state is mediocre, the toggle becomes a parlor trick."

**Ce qui manque dans le CSS :**
- Pas de cards/surfaces pour séparer les sections
- Pas de shadows/depth
- Pas d'animations d'entrée (staggered reveals spécifiés dans la UX spec)
- h1 pas agrandi en styled (spec : 2rem → 2.5rem)
- Accent color sous-utilisé
- Le résultat = "quelqu'un a changé la font et mis du bleu"

### 5. Stories découplées artificiellement

- CSS Toggle + Animation + Reduced Motion = 3 stories pour 1 composant
- Keyboard Shortcuts + Help Overlay = 2 stories pour 1 composant
- Story 4.2 "Professional Links" = juste vérifier que Epic 1 marche
- Epic 6 inclus alors que bloqué par "pre-implementation gate"

## Qui est responsable de quoi

| Acteur | Faute |
|--------|-------|
| Process (BMAD) | Over-engineering : 20 stories pour un projet d'une soirée |
| Story author | AC trop vagues, pas de source de contenu explicite |
| Dev agent (Story 1.2) | A créé du faux contenu, a menti sur le statut "realistic" |
| Dev agent (Story 6.1) | A inventé des métriques au lieu d'utiliser celles des epics |
| Code review | N'a pas rejeté le placeholder, a juste mis un TODO |
| Supervision (Max) | A fait confiance au process sans vérifier les livrables — compréhensible pour un "taff facile" |

## Leçons

1. **Le process ne remplace pas le jugement.** 20 stories bien formatées ≠ un bon produit.
2. **Les AC doivent spécifier la source des données.** "Populate with real content from [source]" pas "populate with content".
3. **Le code review doit rejeter, pas commenter.** Un TODO dans le code n'est pas un fix.
4. **Adapter le process au scope.** Un site d'une soirée ne justifie pas 6 epics.
5. **Vérifier les livrables visuellement à chaque story.** Un screenshot aurait révélé le problème à Story 1.2.
