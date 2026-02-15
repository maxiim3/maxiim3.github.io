# Product Brief - CV/Portfolio Site

**Date:** 2026-02-15
**Project:** Max Tamburrini - CV/Portfolio Site
**Stack:** Astro + GitHub Pages

---

## 🎯 Objectif

Site CV/portfolio ultra-minimaliste pour rassembler réseaux professionnels, rediriger vers projets en ligne, et fournir CV téléchargeable.

**Ce que ce n'est PAS:** Un showcase de compétences techniques ou un site vitrine élaboré.

**Ce que c'est:** Un hub simple et fonctionnel - point de contact unique pour recruteurs et clients.

---

## 👤 Public Cible

- **Recruteurs** cherchant profil Frontend Vue/Nuxt/React
- **Clients freelance** (petites entreprises, restos)
- **Contacts professionnels** voulant accéder rapidement aux infos/projets

---

## ✅ Fonctionnalités Requises

### Must-Have (MVP)

1. **Navigation simple**
   - ToC (table of contents) pour navigation rapide
   - Pas de hero - direct au contenu

2. **Bilinguisme (FR/EN)**
   - Routes séparées: `/` (FR) et `/en` (EN)
   - Toggle langue visible dans header

3. **Sections de contenu**
   - **Links/Networks:** GitHub, LinkedIn, email, autres
   - **Skills:** Liste hiérarchisée (simple texte)
   - **Experience:** Postes actuels + parcours condensé
   - **Projects:** Liens vers projets en ligne
   - **Download CV:** Boutons FR/EN pour PDFs

4. **CSS Toggle Button**
   - Bouton visible au chargement (avec CSS minimal inline)
   - Clic → charge le CSS complet du site
   - Technologie: Svelte ou Web Component (à décider)

5. **GitHub Pages Deployment**
   - Build automatique via GitHub Actions
   - Hébergement gratuit sur `username.github.io`

### Nice-to-Have (Post-MVP)

- Dark mode toggle
- Analytics basiques (optionnel)

---

## 🚫 Ce qu'on ne fait PAS

- Pas d'animations élaborées
- Pas de CMS ou backend
- Pas de blog ou section actualités
- Pas de formulaire de contact (juste email link)
- Pas de galerie photos/portfolio visuel détaillé

---

## 🎨 Design & UX

**Principe:** Brutalisme fonctionnel - HTML sémantique, typographie claire, hiérarchie visuelle minimale.

**Références:**
- Sites CV minimalistes (ex: motherfuckingwebsite.com pour l'esprit)
- Markdown rendered (GitHub README style)

**Contraintes:**
- Mobile-first (responsive évident)
- Accessibilité (semantic HTML)
- Performance (Lighthouse > 90)

---

## 📐 Structure de Navigation

```
Header
  ├─ Nom + Titre
  ├─ Toggle Langue (FR ↔ EN)
  └─ CSS Toggle Button

ToC (Table of Contents)
  ├─ Links/Networks
  ├─ Skills
  ├─ Experience
  ├─ Projects
  └─ Download CV

Sections (scroll fluide)
  ├─ Links/Networks
  ├─ Skills
  ├─ Experience
  ├─ Projects
  └─ Download CV

Footer
  └─ Copyright / Year
```

---

## 🛠️ Stack Technique

- **Framework:** Astro 5.x
- **Build:** Bun (pas npm)
- **Deployment:** GitHub Pages (static)
- **CI/CD:** GitHub Actions
- **Interactive:** Svelte component OU Web Component (pour CSS toggle)
- **i18n:** Routes Astro (`/` FR + `/en` EN)

---

## 📊 Success Metrics

**Mesures de succès:**
- ✅ Site déployé et accessible via GitHub Pages
- ✅ CV téléchargeable en 1 clic (FR + EN)
- ✅ Tous les liens réseaux/projets fonctionnels
- ✅ Site bilingue 100% fonctionnel
- ✅ Lighthouse score > 90
- ✅ CSS toggle opérationnel

**Objectifs business:**
- 3+ entretiens techniques en 2 mois
- 1+ demande freelance via le site en 3 mois
- Améliorer taux de réponse candidatures de 50%

---

## ⏱️ Phases d'Implémentation

### Phase 1 - Setup & Structure
- [ ] Configurer Astro pour GitHub Pages
- [ ] Créer structure i18n (routes FR/EN)
- [ ] Setup GitHub Actions workflow

### Phase 2 - Contenu
- [ ] Créer fichiers de contenu bilingue (JSON ou MD)
- [ ] Intégrer CVs PDF dans `/public`
- [ ] Lister projets + liens

### Phase 3 - Layout & Components
- [ ] Layout minimaliste HTML sémantique
- [ ] ToC component
- [ ] CSS toggle button (Svelte/Web Component)

### Phase 4 - Deploy & Test
- [ ] Build production
- [ ] Deploy GitHub Pages
- [ ] Test Lighthouse
- [ ] Validation mobile/desktop

---

## 🤔 Décisions à Prendre

1. **CSS Toggle:** Svelte component ou Web Component vanilla?
2. **ToC:** Fixed sidebar ou inline en haut de page?
3. **Projects:** Simplement des liens ou mini-cards avec description?
4. **Contenu:** JSON centralisé ou Markdown frontmatter?

---

## 📝 Notes

- User veut SIMPLE SIMPLE (emphase forte sur minimalisme)
- Pas pour showcaser skills, juste hub fonctionnel
- Context: 10 ans hors tech → valoriser parcours atypique subtilement
- Langues: FR (natif), EN (fluent), SR, MK (fluent) - mentionner?

---

**Next Steps:** Valider ce brief, puis commencer Phase 1.
