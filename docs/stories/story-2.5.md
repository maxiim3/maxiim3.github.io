# Story 2.5 : Final Polish

**Epic :** [Epic 2 - Content & Polish](../epics/epic-2.md)

## User Story

**As a** candidat,
**I want** un site performant et sans bugs,
**so that** je fais bonne impression aux recruteurs.

## Acceptance Criteria

- [x] PDF CV dans `public/cv.pdf`, bouton téléchargement fonctionnel
- [ ] Score Lighthouse > 90 (Performance, SEO, Accessibility, Best Practices) - requires deployment
- [ ] Test cross-browser (Chrome, Firefox, Safari) - requires manual testing
- [x] Test responsive (mobile, tablette, desktop) - designed mobile-first with Tailwind
- [x] Liens externes en `target="_blank" rel="noopener"`
- [x] Favicon et apple-touch-icon configurés (in nuxt.config)
- [x] 404 page personnalisée

## Technical Notes

### Lighthouse Checklist

- Performance : images optimisées, lazy loading, preload fonts
- SEO : meta tags, sitemap, robots.txt
- Accessibility : contrastes, alt texts, focus states
- Best Practices : HTTPS, no console errors

### Assets

- Favicon : 32x32, 16x16
- Apple touch icon : 180x180
- OG Image : 1200x630

## Dependencies

- Story 2.4 (SEO & Meta)
