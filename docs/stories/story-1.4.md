# Story 1.4 : CI/CD & Deployment

**Epic :** [Epic 1 - Foundation & Core Site](../epics/epic-1.md)

## User Story

**As a** développeur,
**I want** un déploiement automatique sur GitHub Pages,
**so that** chaque push sur main met à jour le site.

## Acceptance Criteria

- [ ] Fichier `.github/workflows/deploy.yml` créé
- [ ] Workflow déclenché sur push branch `main`
- [ ] Build Nuxt avec `bun run generate`
- [ ] Déploiement sur GitHub Pages fonctionnel
- [ ] Site accessible via `https://<username>.github.io/curriculum/`
- [ ] PDF CV copié dans `public/` et téléchargeable

## Technical Notes

### GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: cd web && bun install
      - run: cd web && bun run generate
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./web/.output/public
```

### Nuxt Config

Ajouter `baseURL` pour GitHub Pages subdirectory.

## Dependencies

- Story 1.3 (Homepage)
