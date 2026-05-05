# Commands Context

## Package manager

```bash
bun install
```

## Development

```bash
bun dev
```

- Script exact : `bun --hot src/index.tsx`.
- Sert l’app via Bun avec HMR en développement.

## Production build

```bash
bun run build
```

- Script exact : `bun run build.ts`.
- Produit `dist/`, copie `public/`, injecte favicon/manifest, crée `404.html` et `.nojekyll`.
- Attention : `build.ts` supprime l’outdir avant build.

## Production start

```bash
bun start
```

- Script exact : `NODE_ENV=production bun src/index.tsx`.

## Local dist preview

```bash
bun serve-prod.ts
```

- Pas de script `package.json`.
- Sert `dist/` sur `http://localhost:4173`.

## Validation commands

```bash
bun run build
```

- Seule commande de validation clairement définie dans `package.json`.

## Missing commands

- Aucun script `test`.
- Aucun script `lint`.
- Aucun script `typecheck`.
- Aucun script `format`.
- Aucun script `preview`.

## BMAD commands

- Aucune commande BMAD projet détectée dans `package.json`.
- Aucune commande BMAD ne doit être supposée.
- Pour une story, lire le protocole correspondant puis demander la commande exacte si elle n'est pas déjà fournie par l'utilisateur ou le contexte d'exécution.
- Ne pas lancer de commande BMAD pendant les tâches de mise à jour de contexte/protocoles.

## OpenCode token/cost stats

```bash
opencode stats --days 1 --models 10 --project ""
```

```bash
opencode export <sessionID> --sanitize
```

## Notes

- Ne pas lancer de commande destructive.
- Ne pas lancer `build.ts` si la tâche interdit de modifier `dist/`.
