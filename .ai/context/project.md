# Project Context

## Product purpose

- Portfolio public de Maxime Tamburrini, développeur front-end.
- Présente profil, projets sélectionnés, expériences, compétences, side projects, liens de contact et CV.
- Contient aussi une page `/linktree` noindex pour centraliser les liens publics.

## Current priorities

- Maintenir un site portfolio rapide, responsive et accessible.
- Garder les contenus localisés dans `src/data/portfolio.ts`.
- Préserver les liens publics : CV, réseaux sociaux, side projects, Open Graph, manifest et robots.
- Générer un build statique compatible GitHub Pages avec fallback SPA.

## Non-goals

- Pas d’authentification.
- Pas de base de données.
- Pas de paiement.
- Pas d’API métier côté serveur.
- Pas de refactor hors demande explicite.
- Ne pas versionner `dist/` comme source de vérité.

## Critical user journeys

- Arrivée sur la page principale, rendu du hero et animation de fond.
- Changement de langue : `en`, `fr`, `sr-lat`.
- Navigation interne vers les sections `about`, `projects`, `experience`, `apps`, `skills`, `contact`.
- Téléchargement des CV : `/cv-en.pdf`, `/cv-fr.pdf`. À confirmer : le bouton `sr-lat` cible actuellement `/cv-sr-lat.pdf`, non listé dans `public/`.
- Ouverture des liens externes projets, side projects et réseaux.
- Accès à `/linktree` et aux liens qu’elle expose.
- Aperçu social via métadonnées Open Graph/Twitter et image `public/screenshots/og-image-1200x630.png`.

## Validation expectations

- Pour toute modification applicative : exécuter au minimum `bun run build` si la tâche ne l'interdit pas.
- Pour contenu/liens/assets : vérifier aussi les fichiers publics référencés.
- Pour UI : prévoir une vérification manuelle responsive et accessibilité clavier quand le rendu change.
- Pour contexte/protocoles uniquement : validation par relecture ciblée, pas de build requis.

## Risk-sensitive areas

- `src/data/portfolio.ts` : source principale du contenu multilingue, liens publics, stats et labels.
- `public/` : CV, favicons, manifest, robots, screenshots utilisés par la page et le build.
- `build.ts` : nettoie puis régénère `dist/`, copie `public/`, injecte favicon/manifest, crée `404.html` et `.nojekyll`.
- `src/index.html` et `src/linktree.html` : entrées HTML détectées par le build.
- `src/index.tsx` : serveur Bun dev/prod et routes statiques exposées.
- `src/components/animate-ui/components/backgrounds/stars.tsx` : animation lourde avec génération aléatoire de nombreuses étoiles.

## Assumptions

- Déploiement cible probable : GitHub Pages, d’après `build.ts` et les URLs `https://maxiim3.github.io/`.
- Les routes `/api/hello` dans `src/index.tsx` semblent être des exemples de template. À confirmer avant suppression ou exposition publique.
