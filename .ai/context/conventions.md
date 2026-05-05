# Project Conventions

## Coding style

- TypeScript strict.
- Composants React fonctionnels.
- Exports nommés pour helpers partagés ; export default déjà utilisé pour les pages/concepts.
- Imports `@/*` pour les modules sous `src`.
- Indentation 2 espaces selon `AGENTS.md`.
- JSX avec runtime automatique React.
- Utiliser `cn` (`clsx` + `tailwind-merge`) pour classes conditionnelles ou composées.
- Garder les changements applicatifs minimaux et localisés.

## Naming

- Concepts/pages : fichiers kebab-case, composant PascalCase (`v4-monograph-stars.tsx`, `V4MonographStars`).
- Hooks : `use-something.tsx`, export `useSomething`.
- Lib/utilitaires : fichiers kebab-case ou noms courts (`utils.ts`, `get-strict-context.tsx`).
- Types : PascalCase (`Lang`, `UseIsInViewOptions`).
- Données portfolio : clés stables dans `src/data/portfolio.ts`.

## Content and localization

- Langues supportées : `en`, `fr`, `sr-lat`.
- Conserver les chaînes de contenu portfolio dans `src/data/portfolio.ts`.
- Ne pas disperser les textes localisés dans les composants sauf labels purement structurels existants.
- Lors de l’ajout d’un contenu localisé, fournir les trois langues ou marquer explicitement `À confirmer`.

## Testing

- Aucun test runner configuré.
- N’inventer aucune commande de test.
- Si des tests sont ajoutés plus tard, utiliser des noms `*.test.ts` ou `*.test.tsx` et ajouter le script correspondant dans `package.json`.
- Validation minimale actuelle pour changement applicatif : `bun run build`.

## UI/UX

- Style actuel : sombre, éditorial, typographie serif/sans, accents sky/zinc, animations Motion.
- Préserver responsive Tailwind (`md:`, `lg:`) et espacements existants.
- Préserver états clavier/focus et `prefers-reduced-motion`.
- Pour liens externes : `target="_blank"` avec `rel="noopener noreferrer"`.
- Pour boutons de langue : conserver accessibilité (`aria-current`) et cible tactile.

## Commit/diff hygiene

- Diff minimal.
- Aucun refactor opportuniste.
- Aucun formatage massif non demandé.
- Ne pas modifier `dist/` sauf demande explicite de build artefact.
- Ne pas modifier fichiers applicatifs pendant les tâches de documentation contexte.
- Toujours reporter les hypothèses et commandes de validation exécutées.
