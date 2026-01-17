# Project Brief: CV Maxime Tamburrini

## Executive Summary

Création d'un écosystème CV complet pour Maxime Tamburrini, développeur Front-End Vue/Nuxt, comprenant un site web statique (GitHub Pages) et un PDF optimisé ATS. L'objectif est de décrocher un CDI en entreprise/startup tout en maintenant une activité freelance.

**Problème :** CV actuel peu différenciant, compétences mal hiérarchisées, absence de présence web professionnelle.

**Solution :** Site Nuxt 3 démontrant les compétences en action + PDF restructuré avec positionnement clair.

**Valeur clé :** Parcours atypique (10 ans hors tech) transformé en avantage compétitif.

---

## Problem Statement

### Situation actuelle
- CV PDF standard sans différenciation
- Compétences listées sans hiérarchie (40+ technos = "jack of all trades")
- Pas de portfolio en ligne démontrant les réalisations
- Positionnement flou (front-end généraliste vs expert Vue/Nuxt)

### Impact
- Difficulté à passer les filtres ATS
- Recruteurs confus sur le niveau réel
- Parcours atypique perçu comme faiblesse plutôt que force
- Opportunités manquées faute de visibilité

### Urgence
Recherche active CDI + freelance. Besoin immédiat d'outils de prospection professionnels.

---

## Proposed Solution

### Approche hybride

**1. Site CV statique (Nuxt 3 + GitHub Pages)**
- Démontre l'expertise Vue/Nuxt en action
- Portfolio interactif avec projets
- Téléchargement PDF intégré
- SEO optimisé pour visibilité

**2. PDF optimisé ATS**
- Nouvelle accroche structurée
- Compétences hiérarchisées (Expertise → Expérience → Curiosité)
- Mots-clés ciblés pour filtres automatiques

### Différenciateurs
- Positionnement niché : "Développeur Front-End Vue/Nuxt" (pas généraliste)
- Storytelling du parcours atypique comme force
- Mise en avant de la maîtrise IA (Claude Code, Gemini)

---

## Target Users

### Primary: Recruteurs tech / RH startups

**Profil :**
- Recruteurs internes ou cabinets spécialisés tech
- Cherchent des profils Vue.js/Nuxt pour scale-ups ou grands comptes
- Utilisent ATS (filtrage par mots-clés)

**Besoins :**
- Évaluer rapidement le niveau technique
- Vérifier l'adéquation culturelle
- Voir des réalisations concrètes

**Pain points :**
- CV génériques sans différenciation
- Difficile d'évaluer le niveau réel
- Manque de preuves tangibles

### Secondary: Clients potentiels freelance

**Profil :**
- Startups, PME, agences cherchant un freelance front-end
- Projets : sites vitrines, e-commerce, applications web

**Besoins :**
- Portfolio de réalisations
- Contact direct rapide
- Estimation de disponibilité

---

## Goals & Success Metrics

### Business Objectives
- Décrocher 3+ entretiens techniques dans les 2 mois suivant le lancement
- Recevoir 1+ demande freelance via le site dans les 3 mois
- Améliorer le taux de réponse aux candidatures de 50%

### User Success Metrics
- Temps moyen sur le site > 2 minutes
- Taux de téléchargement PDF > 10% des visiteurs
- Taux de clic contact/LinkedIn > 5%

### KPIs
- **Lighthouse Score :** > 90 (Performance, SEO, Accessibilité)
- **Temps de chargement :** < 2s
- **Mobile responsive :** 100% fonctionnel

---

## MVP Scope

### Core Features (Must Have)

- **Page d'accueil :** Accroche développée + call-to-action clair
- **Page expériences :** Timeline interactive (Airddm en premier)
- **Page projets :** Galerie portfolio avec captures
- **Téléchargement PDF :** Bouton visible, fichier optimisé
- **Liens sociaux :** GitHub, LinkedIn
- **Responsive :** Mobile-first design
- **Mode sombre :** Toggle clair/sombre

### Out of Scope for MVP
- Formulaire de contact (liens directs suffisants)
- Blog/articles
- Animations complexes
- Multi-langue (FR uniquement)
- Analytics avancés
- Domaine personnalisé (GitHub Pages suffit)

### MVP Success Criteria
Site déployé sur GitHub Pages, accessible publiquement, score Lighthouse > 90, PDF téléchargeable.

---

## Post-MVP Vision

### Phase 2 Features
- Formulaire de contact avec notifications
- Section blog/articles techniques
- Domaine personnalisé (maximet.dev ou similaire)
- Analytics (Plausible ou similaire, RGPD compliant)

### Long-term Vision
- Présence établie dans l'écosystème Vue.js français
- Contributions open source visibles
- Portfolio enrichi de projets side-projects

### Expansion Opportunities
- Version anglaise pour opportunités internationales
- Intégration avec plateforme freelance (Malt, etc.)

---

## Technical Considerations

### Platform Requirements
- **Target Platforms :** Web (desktop + mobile)
- **Browser Support :** Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Performance :** < 2s chargement, score Lighthouse > 90

### Technology Preferences
- **Frontend :** Nuxt 3, Vue 3, TypeScript, Tailwind CSS
- **Build :** Static generation (nuxt generate)
- **Package Manager :** Bun
- **Hosting :** GitHub Pages (gratuit)

### Architecture Considerations
- **Repository :** Monorepo (cv/ + web/ dans même repo)
- **CI/CD :** GitHub Actions pour build automatique
- **Assets :** Images optimisées, PDF dans public/

---

## Constraints & Assumptions

### Constraints
- **Budget :** 0€ (hébergement gratuit GitHub Pages)
- **Timeline :** 1-2 semaines pour MVP
- **Resources :** Développeur solo (Maxime)
- **Technical :** Pas de backend, statique uniquement

### Key Assumptions
- GitHub Pages suffisant pour le trafic attendu
- Les recruteurs consultent les sites perso des candidats
- Le positionnement Vue/Nuxt est pertinent pour le marché actuel
- Les captures de projets sont disponibles ou réalisables

---

## Risks & Open Questions

### Key Risks
- **Projets confidentiels :** Dashboards Heineken/Michelin potentiellement non montrables
- **Différenciation :** Nombreux CV de devs front-end en ligne
- **Maintenance :** Site qui devient obsolète si non mis à jour

### Open Questions
- Quels projets peuvent être montrés publiquement ?
- Captures d'écran disponibles ou à créer ?
- Domaine personnalisé souhaité à terme ?

### Areas Needing Further Research
- Exemples de CV sites de devs Vue/Nuxt réussis
- Best practices SEO pour portfolio développeur

---

## Appendices

### A. Contenu validé

**Accroche courte (PDF) :**
> **Développeur Front-End Vue/Nuxt**
>
> **Je construis :** apps B2B/B2C, SaaS, dashboards data viz, e-commerce
> **Je structure :** design systems, component libraries
> **J'optimise :** outils internes, workflow d'équipe
> **Mon edge :** parcours atypique de 10 ans = communication, rigueur, résilience + maîtrise IA

**Compétences restructurées :**
- **EXPERTISE :** Vue 3, Nuxt 3, TypeScript, JavaScript, CSS, Tailwind, BEM, Pinia, Git, REST API
- **FRAMEWORKS :** React, Svelte, SvelteKit
- **DATA VIZ :** D3.js, Chart.js
- **INTÉGRATIONS :** Figma, Algolia, Typesense, SQL, MongoDB
- **TOOLS :** Node, Bun, Bash, Claude Code, Gemini, OpenCode
- **CURIEUX :** Rust, Go

### B. Structure projet

```
/Users/maxi/www/curriculum/
├── cv/
│   └── Maxime-Tamburrini-CV.pdf
├── docs/
│   └── brief.md (ce fichier)
└── web/
    ├── nuxt.config.ts
    ├── pages/
    ├── components/
    └── public/cv.pdf
```

---

## Next Steps

### Immediate Actions
1. Valider ce brief
2. Lister les projets à showcaser avec captures disponibles
3. Passer au PM pour création du PRD
4. Créer les epics et stories

### PM Handoff

Ce Project Brief fournit le contexte complet pour le projet CV Maxime Tamburrini. Le PM peut maintenant créer le PRD section par section en s'appuyant sur ce document.
