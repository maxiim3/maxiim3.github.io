# Architecture Context

## Stack

- Runtime/build tool : Bun.
- Framework UI : React 19.
- Language : TypeScript strict, JSX runtime automatique.
- Styling : Tailwind CSS 4 via `bun-plugin-tailwind`, `styles/globals.css`, `src/index.css`.
- Animation : `motion/react`.
- Icons : `lucide-react` + quelques SVG inline.
- Class composition : `clsx` + `tailwind-merge` via `cn`.
- Backend : serveur Bun minimal dans `src/index.tsx` pour servir HTML/assets/routes exemples.
- Database : aucune détectée.
- Auth : aucune détectée.
- Tests : aucun runner configuré dans `package.json`.
- Deployment : build statique en `dist/`, avec fallback GitHub Pages (`404.html`, `.nojekyll`).

## Directory map

- `src/index.tsx` : serveur Bun, routes statiques, route `/linktree`, fallback `/*`.
- `src/frontend.tsx` : bootstrap React de la page portfolio principale.
- `src/App.tsx` : sélectionne le concept actif (`V4MonographStars`).
- `src/concepts/` : concepts/pages portfolio, actuellement `v4-monograph-stars.tsx`.
- `src/data/portfolio.ts` : contenu localisé, projets, expériences, apps, réseaux, stats.
- `src/components/` : composants réutilisables, actuellement fond animé `StarsBackground`.
- `src/hooks/` : hooks React partagés.
- `src/lib/` : utilitaires (`cn`, strict context).
- `src/index.html` : entrée HTML principale.
- `src/linktree.html` et `src/linktree.tsx` : page liens séparée.
- `styles/globals.css` : Tailwind 4, plugin animate, tokens dark/shadcn.
- `public/` : assets publics servis/copiés tels quels.
- `build.ts` : script de build Bun + post-traitements de `dist/`.
- `serve-prod.ts` : serveur local de prévisualisation de `dist` sur le port `4173`.

## Architectural principles

- Garder les textes, traductions et liens dans `src/data/portfolio.ts`.
- Préférer composants React fonctionnels.
- Utiliser l’alias `@/*` pour les imports depuis `src`.
- Composer les classes via `cn` quand il y a merge conditionnel Tailwind.
- Garder les changements visuels proches du concept/page concerné.
- Ne pas introduire de lib ou d’état global sans justification concrète.
- Maintenir les deux entrées HTML si le build doit produire portfolio + linktree.

## Known constraints

- TypeScript strict avec `noUncheckedIndexedAccess` et `noImplicitOverride`.
- `allowJs` activé mais le code applicatif est TypeScript/TSX.
- Pas de script `lint`, `test`, `typecheck`, `format` dans `package.json`.
- Le build détecte tous les fichiers `**.html` dans `src`; une nouvelle entrée HTML devient une page buildée.
- `build.ts` supprime l’outdir avant build.
- L’app doit rester responsive mobile/desktop.
- Accessibilité minimale présente : focus visible, `prefers-reduced-motion`, `aria-label`/`aria-current` à préserver.

## Known fragile areas

- Liens CV dépendants de la langue dans `v4-monograph-stars.tsx`.
- Métadonnées `src/index.html` synchronisées manuellement avec contenu et image OG.
- `StarsBackground` génère des positions aléatoires côté client, donc rendu non déterministe.
- Routes statiques dans `src/index.tsx` doivent rester alignées avec les fichiers `public/`.
- `serve-prod.ts` sert `dist` et ne reproduit pas exactement toutes les routes de `src/index.tsx`.

## Contexts not needed

- Pas de contexte auth, DB, paiement, migrations, Nostr ou Supabase tant que ces domaines ne sont pas introduits.
- Un contexte UI séparé n'est utile que si le design system ou plusieurs concepts actifs grossissent.
