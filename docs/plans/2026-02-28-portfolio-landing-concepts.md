# Portfolio Landing Page — 5 Concepts

## Context
- **Stack**: React 19 + shadcn/ui + Tailwind CSS 4 + Animate UI
- **Theme**: Dark, clean, modern (Linear/Vercel aesthetic)
- **Content**: Hero landing + scrollable CV (XP, skills, parcours, socials, contact, CV PDF)
- **Languages**: EN/FR toggle
- **Key**: Wow effect, bold, responsive, accessible

---

## Concept 1: "Event Horizon"

**Background**: Hole Background (centre) + Gradient Background (subtil)

**Principe**: Un trou noir visuel au centre de l'ecran attire le regard. Ton nom emerge de cette singularite avec un effet de distorsion gravitationnelle. Le scroll "aspire" le contenu dans le viewport — chaque section slide depuis les bords comme attiree par la gravite.

**Animate UI Components**:
- `HoleBackground` — hero focal point
- `GradientText` — headlines avec degradé dynamique
- `MagneticEffect` — boutons et liens interactifs
- `BlurTransition` — transitions entre sections
- `FadeAnimation` — reveal du contenu au scroll

**Layout**:
```
┌─────────────────────────────────────┐
│                                     │
│          ◉ HOLE EFFECT              │
│       [ NOM + TITRE ]              │
│     gradient text animé             │
│                                     │
│   [ CTA: Explorer ↓ ] [ CV PDF ]   │
│         [ EN | FR ]                 │
│                                     │
├─────────────────────────────────────┤
│  ← slide in                        │
│  EXPERIENCE        fade + blur     │
│  timeline verticale                │
├─────────────────────────────────────┤
│                     slide in →     │
│  COMPETENCES                       │
│  grille de tags avec shine effect  │
├─────────────────────────────────────┤
│  PARCOURS                          │
│  scroll-triggered milestones       │
├─────────────────────────────────────┤
│  CONTACT + SOCIALS                 │
│  magnetic buttons                  │
└─────────────────────────────────────┘
```

**Palette**: Noir profond (#09090b) → Violet sombre (#7c3aed) en accent. Monochrome avec une seule couleur signature.

**Wow factor**: L'effet trou noir est immédiatement mémorable. Personne n'a vu ça sur un portfolio. Le scroll donne l'impression d'un voyage spatial.

**Typographie**: Inter/Geist pour le corps, gradient animé sur les titres.

---

## Concept 2: "Stellar Atlas"

**Background**: Gravity Stars Background (interactif, suit la souris)

**Principe**: Un champ d'étoiles interactif qui réagit au mouvement de la souris — les étoiles s'écartent ou se rapprochent selon la position du curseur. Ton nom s'affiche avec un effet typing, comme si on tapait dans un terminal spatial. Les compétences sont des "constellations" — des noeuds connectés par des lignes fines. Le scroll révèle des couches de profondeur (parallax entre les étoiles).

**Animate UI Components**:
- `GravityStarsBackground` — champ d'étoiles interactif
- `TypingText` — hero title qui se tape
- `CursorComponent` — curseur custom qui laisse une trainée
- `ScrollProgress` — barre de progression du scroll
- `SlidingNumber` — compteurs animés (années d'XP, projets, etc.)
- `SpringAnimation` — micro-interactions

**Layout**:
```
┌─────────────────────────────────────┐
│  ★  ·    ★     ·   ★    ·    ★     │
│     ·  ★    ·    ★     ·  ★        │
│                                     │
│   > Maxi_ (typing effect)          │
│   > Développeur Fullstack           │
│                                     │
│   [ 5+ ans ] [ 30+ projets ]       │
│   sliding numbers                   │
│                                     │
│   [ Explorer ↓ ]    [ EN | FR ]    │
│  ★    ·  ★     ·    ★    ·   ★     │
├─────────────────────────────────────┤
│  EXPERIENCE                         │
│  ┌──┐  ┌──┐  ┌──┐                  │
│  │  │──│  │──│  │  timeline horiz  │
│  └──┘  └──┘  └──┘                  │
├─────────────────────────────────────┤
│  COMPETENCES — Constellation Map    │
│    ○──○                             │
│   / \  \     noeuds connectés       │
│  ○   ○──○    par catégorie          │
├─────────────────────────────────────┤
│  PARCOURS                           │
│  scroll-triggered cards             │
├─────────────────────────────────────┤
│  CONTACT                            │
│  magnetic social icons              │
└─────────────────────────────────────┘
```

**Palette**: Noir espace (#030712) → Bleu cyan (#06b6d4) accent + blanc pur pour le texte. Rappelle un terminal futuriste.

**Wow factor**: L'interactivité des étoiles crée un sentiment d'immersion. Le curseur qui "repousse" les étoiles = on se sent dans l'espace. Le typing effect = identité dev assumée.

**Typographie**: JetBrains Mono pour les titres (monospace), Inter pour le corps.

---

## Concept 3: "Liquid Noir"

**Background**: Bubble Background + Gradient Background (superposés)

**Principe**: Des bulles organiques noires/violettes flottent lentement dans un gradient animé. L'esthétique est fluide, vivante — comme de l'encre dans l'eau. Le contenu est ultra-clean et minimaliste, en contraste total avec le fond organique. Les sections apparaissent avec un blur-to-sharp effect. Le nom se morph entre français et anglais.

**Animate UI Components**:
- `BubbleBackground` — bulles organiques flottantes
- `GradientBackground` — base de couleur qui shift
- `MorphingText` — nom qui morph entre langues
- `BlurAnimation` — contenu qui passe de flou à net
- `HighlightText` — mise en valeur progressive du texte
- `TiltEffect` — cartes de contenu qui suivent le curseur

**Layout**:
```
┌─────────────────────────────────────┐
│  ○                    ○             │
│     ○    GRADIENT BG    ○           │
│  ○    ○                    ○        │
│                                     │
│     [ NOM morphing EN↔FR ]         │
│     titre avec highlight            │
│                                     │
│     [ Découvrir ↓ ] [ CV PDF ]     │
│  ○         ○          ○     ○       │
├─────────────────────────────────────┤
│  EXPERIENCE                         │
│  cards avec tilt effect             │
│  ┌─────┐ ┌─────┐ ┌─────┐          │
│  │     │ │     │ │     │          │
│  │ 3D  │ │tilt │ │card │          │
│  └─────┘ └─────┘ └─────┘          │
├─────────────────────────────────────┤
│  COMPETENCES                        │
│  tags qui apparaissent en blur      │
│  [ React ] [ Node ] [ TS ] ...     │
├─────────────────────────────────────┤
│  PARCOURS                           │
│  timeline avec highlight effect     │
├─────────────────────────────────────┤
│  CONTACT                            │
│  form minimaliste + socials         │
└─────────────────────────────────────┘
```

**Palette**: Noir (#0a0a0a) → Violet/Fuschia (#a855f7 → #ec4899) en gradient. Bulles semi-transparentes. Texte blanc/zinc.

**Wow factor**: L'effet organique des bulles sur fond sombre est hypnotisant. Le morphing du nom entre langues = transition bilingue élégante et naturelle. Les tilt cards ajoutent de la profondeur.

**Typographie**: Geist Sans pour tout. Élégant, moderne.

---

## Concept 4: "Grid Protocol"

**Background**: Hexagon Background + Fireworks Background (au clic)

**Principe**: Une grille hexagonale subtile en fond, façon dashboard sci-fi. L'esthétique rappelle un terminal de contrôle ou une interface de vaisseau. Les sections sont structurées dans des "modules" géométriques. Des fireworks se déclenchent sur les interactions clés (téléchargement CV, envoi contact). Le contenu se révèle module par module comme un système qui boot.

**Animate UI Components**:
- `HexagonBackground` — grille géométrique
- `FireworksBackground` — récompense visuelle aux interactions
- `ShineEffect` — highlight au hover sur les modules
- `CountingNumber` — stats animées
- `RotatingText` — rotation des rôles/titres
- `FlipCard` — cartes projets recto/verso

**Layout**:
```
┌─────────────────────────────────────┐
│  ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡ ⬡  │
│  ⬡ ┌──────────────────────┐ ⬡ ⬡   │
│  ⬡ │  NOM                 │ ⬡      │
│  ⬡ │  rotating: Dev │ Eng │ ⬡      │
│  ⬡ │                      │ ⬡      │
│  ⬡ │  [ 5y ] [ 30+ ] ... │ ⬡      │
│  ⬡ │  counting numbers    │ ⬡      │
│  ⬡ └──────────────────────┘ ⬡      │
│  ⬡ ⬡ ⬡  [ EN | FR ]  ⬡ ⬡ ⬡ ⬡ ⬡   │
├─────────────────────────────────────┤
│  MODULE: EXPERIENCE                 │
│  ┌────────┐ ┌────────┐             │
│  │ FRONT  │ │ BACK   │  flip cards │
│  │ →flip  │ │ →flip  │             │
│  └────────┘ └────────┘             │
├─────────────────────────────────────┤
│  MODULE: COMPETENCES                │
│  progress bars avec shine           │
│  ████████░░ React 85%              │
│  ██████░░░░ Node  65%              │
├─────────────────────────────────────┤
│  MODULE: PARCOURS                   │
│  grid cards avec hover shine        │
├─────────────────────────────────────┤
│  MODULE: CONTACT     🎆 fireworks  │
│  on submit → fireworks!            │
└─────────────────────────────────────┘
```

**Palette**: Noir (#09090b) → Vert néon (#22c55e) accent principal. Style "hacker chic". Bordures subtiles en vert très sombre.

**Wow factor**: L'esthétique sci-fi/dashboard est immédiatement distinctive. Les fireworks au téléchargement du CV = moment de joie inattendu. Les flip cards pour les projets = interactivité engageante.

**Typographie**: IBM Plex Mono pour les headers, Inter pour le corps. Feeling technique.

---

## Concept 5: "Aurora"

**Background**: Stars Background + Gradient Background (superposés = effet aurore boréale)

**Principe**: Un ciel étoilé statique en fond avec des voiles de couleur (gradient animé) qui ondulent par-dessus — comme une aurore boréale. L'effet est contemplatif, presque méditatif. Le contenu est d'une élégance sobre — grandes typographies, beaucoup d'espace blanc (enfin, espace sombre). Le scroll déclenche des vagues de couleur. Chaque section a sa propre teinte d'aurore.

**Animate UI Components**:
- `StarsBackground` — ciel étoilé statique en base layer
- `GradientBackground` — voiles de couleur animés par-dessus
- `SplittingText` — texte du nom qui se sépare/recompose
- `ScrollProgress` — progression visible
- `FadeAnimation` — contenu qui apparaît doucement
- `ImageZoom` — photos/screenshots qui s'agrandissent
- `ShimmeringText` — texte qui brille subtilement

**Layout**:
```
┌─────────────────────────────────────┐
│  ·  ·    ·  ·   ·   ·  ·    ·  ·   │
│ ░░░░░░░░░░░░ aurora verte ░░░░░░░  │
│  ·  ·    ·  ·   ·   ·  ·    ·  ·   │
│                                     │
│        [ NOM — splitting ]          │
│        titre shimmering             │
│                                     │
│     [ Scroll ↓ ]    [ EN | FR ]    │
│                                     │
│ ░░░░░░░░ aurora violette ░░░░░░░░  │
├─────────────────────────────────────┤
│ ░ aurora cyan ░                     │
│  EXPERIENCE                         │
│  grandes cartes épurées             │
│  beaucoup de whitespace             │
│  typographie imposante              │
├─────────────────────────────────────┤
│ ░ aurora rose ░                     │
│  COMPETENCES                        │
│  tags minimalistes                  │
│  regroupés par domaine              │
├─────────────────────────────────────┤
│ ░ aurora verte ░                    │
│  PARCOURS                           │
│  full-width cards                   │
│  avec image zoom                    │
├─────────────────────────────────────┤
│ ░ aurora dorée ░                    │
│  CONTACT + SOCIALS                  │
│  [ Télécharger CV ]                │
│  shimmering CTA                     │
└─────────────────────────────────────┘
```

**Palette**: Noir profond (#030712) + étoiles blanches. Aurores: vert (#34d399) → violet (#a78bfa) → cyan (#22d3ee) → rose (#f472b6) → doré (#fbbf24). Chaque section a sa couleur.

**Wow factor**: L'effet aurore boréale est poétique et rare sur le web. Les couleurs qui changent par section donnent un rythme visuel unique. Le splitting text du nom = entrée mémorable. C'est le concept le plus "émotionnel" — il ne crie pas "tech", il murmure "excellence".

**Typographie**: Instrument Serif pour les grands titres (élégance), Geist Sans pour le corps.

---

## Comparatif rapide

| Concept | Vibe | Background | Couleur accent | Risque | Impact |
|---------|------|------------|---------------|--------|--------|
| Event Horizon | Gravitationnel, intense | Hole + Gradient | Violet | Moyen | Fort |
| Stellar Atlas | Terminal spatial, interactif | Gravity Stars | Cyan | Faible | Fort |
| Liquid Noir | Organique, hypnotique | Bubble + Gradient | Violet/Fuschia | Faible | Moyen-Fort |
| Grid Protocol | Sci-fi, dashboard | Hexagon + Fireworks | Vert néon | Moyen | Fort |
| Aurora | Contemplatif, poétique | Stars + Gradient | Multi-couleur | Faible | Très fort |

## Recommandation

**Top pick: Aurora (#5)** — C'est le plus distinctif visuellement, le plus mémorable émotionnellement, et le plus réalisable techniquement. L'effet d'aurore par section crée un vrai "voyage" dans le scroll.

**Runner-up: Stellar Atlas (#2)** — Le plus interactif et le plus "dev-friendly". L'interactivité des étoiles est addictive.
