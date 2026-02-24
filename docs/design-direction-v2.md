# Design Direction V2 — Maxime Tamburrini Portfolio

## Contexte

Le site actuel (v3) est fonctionnel mais visuellement générique — palette AI-générique, aucune identité, ne reflète pas le profil ni la DA personnelle du développeur.

## DA Personnelle

**Mots-clés :** espace, univers, étoiles, planètes, profondeur, holisme
**Références visuelles :** Linear, Vercel, Resend, Typefully, Google Earth, OpenHome
**Feeling cible :** dark, profond, lumière qui perce — pas kitsch, pas cartoon. Sophistiqué.

## Structure UX cible

SPA unique (scroll) + pages détail case studies. Pas de blog, pas de pages supplémentaires.

```
Hero        → Nom + accroche + photo + fond animé cosmique
Experience  → Timeline de parcours
Skills      → Tech maîtrisées (visual)
Projects    → Preuves visuelles (screenshots)
Cases       → 2-3 études de cas (pages séparées /cases/[slug])
Contact     → CTA clair
```

**i18n :** Astro native routing (`/` FR, `/en/` EN) — pas de lib externe
**Photo :** Non — la DA cosmique suffit comme identité visuelle.

## Stack

**Astro** (conservé) + **React islands** pour accéder à l'écosystème magicui/animateui

- Astro pour la structure, le routing, l'i18n, le SSG
- React islands pour les composants animés (magicui, shadcn)
- Tailwind CSS
- Motion (Framer Motion)

## Référence template

[MagicUI Portfolio Template](https://portfolio-magicui.vercel.app/) (par Dillion Verma)
Repo : https://github.com/dillionverma/portfolio
→ Utilisé comme **référence structurelle et visuelle**, pas forké. Reconstruction sur Astro.

## Composants magicui à explorer

**Retenus :** Meteors / Dot Pattern (backgrounds), Border Beam, Bento Grid, Animated Shiny Text
**Animations :** Framer Motion avec LazyMotion + `client:visible` partout
**Écarté :** Icon Cloud → remplacé par grid CSS statique (perf)

## Ce qui NE change PAS

- Contenu (expérience, projets, case studies) — déjà structuré et bon
- Architecture Astro + routing i18n existant
- Case studies `/cases/[slug]`

## Ce qui CHANGE

- Toute la couche visuelle (styled.css → composants React islands + Tailwind)
- Suppression du bouton CSS toggle (feature dev, pas recruteur)
- Suppression du widget keyboard nav (idem)
- Ajout photo
- Hero avec accroche forte (à définir)
- DA sombre/cosmique de bout en bout
