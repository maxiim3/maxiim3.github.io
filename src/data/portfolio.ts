export type Lang = "en" | "fr" | "sr-lat";

export const content = {
  firstName: "Maxime",
  lastName: "Tamburrini",
  title: {
    en: "Experienced Front-end Developer — Angular · Vue · React",
    fr: "Développeur Front-end confirmé — Angular · Vue · React",
    "sr-lat": "Iskusni Front-end Developer — Angular · Vue · React",
  },
  subtitle: {
    en: "Designing and building fast, accessible web applications and scalable design systems.",
    fr: "Concevoir et développer des applications web rapides, accessibles et des design systems évolutifs.",
    "sr-lat": "Dizajniram i gradim brze, pristupačne web aplikacije i skalabilne dizajn sisteme.",
  },
  about: {
    en: "I've spent the last years turning other people's impossible timelines into shipped products. Front-end developer — Angular, Vue, React. Mostly with small teams. Always under pressure. That's where I do my best work.",
    fr: "J'ai passé ces dernières années à transformer les délais impossibles des autres en produits livrés. Développeur front-end — Angular, Vue, React. Souvent en petite équipe. Toujours sous pression. C'est là que je fais mon meilleur travail.",
    "sr-lat": "Poslednjih godina pretvaram tuđe nemoguće rokove u isporučene proizvode. Front-end developer — Angular, Vue, React. Često u malim timovima. Uvek pod pritiskom. Tu radim najbolje.",
  },
  cta: {
    explore: {
      en: "Explore",
      fr: "Explorer",
      "sr-lat": "Istražite",
    },
    downloadCV: {
      en: "Download CV",
      fr: "Télécharger le CV",
      "sr-lat": "Preuzmite CV",
    },
    viewProject: {
      en: "View project",
      fr: "Voir le projet",
      "sr-lat": "Vidi projekat",
    },
    getInTouch: {
      en: "Contact me",
      fr: "Me contacter",
      "sr-lat": "Kontaktirajte me",
    },
  },
  sections: {
    about: {
      en: "About",
      fr: "À propos",
      "sr-lat": "O meni",
    },
    projects: {
      en: "Selected projects",
      fr: "Projets sélectionnés",
      "sr-lat": "Odabrani projekti",
    },
    experience: {
      en: "Experience",
      fr: "Expérience",
      "sr-lat": "Iskustvo",
    },
    skills: {
      en: "Skills",
      fr: "Compétences",
      "sr-lat": "Veštine",
    },
    apps: {
      en: "Side projects",
      fr: "Projets perso",
      "sr-lat": "Lični projekti",
    },
    contact: {
      en: "Contact",
      fr: "Contact",
      "sr-lat": "Kontakt",
    },
  },
  projects: [
    {
      title: "Airddm — Enterprise Accounts",
      tagline: {
        en: "Front-end for enterprise clients (Heineken, Michelin, Bosch)",
        fr: "Front-end pour clients entreprise (Heineken, Michelin, Bosch)",
        "sr-lat": "Front-end za poslovne klijente (Heineken, Michelin, Bosch)",
      },
      description: {
        en: "Built 2 greenfield B2B2C applications from scratch for major accounts. Secure auth (JWT, OAuth), role management, complex user flows (Pinia). Migrated Django to Vue.js, created design system with Storybook (15+ components). E2E testing with Cypress. Team: 3 front-end developers. DDD architecture.",
        fr: "2 applications B2B2C greenfield from scratch pour grands comptes. Auth sécurisée (JWT, OAuth), gestion des rôles, tunnels utilisateurs complexes (Pinia). Migration Django vers Vue.js, design system avec Storybook (15+ composants). Tests E2E avec Cypress. Équipe : 3 développeurs front-end. Architecture DDD.",
        "sr-lat": "Razvio 2 greenfield B2B2C aplikacije from scratch za velike klijente. Sigurna auth (JWT, OAuth), upravljanje ulogama, složeni tokovi korisnika (Pinia). Migracija Django u Vue.js, dizajn sistem sa Storybook (15+ komponenti). E2E testiranje sa Cypress. Tim: 3 front-end developera. DDD arhitektura.",
      },
      tech: [
        "Vue.js",
        "Nuxt 3",
        "TypeScript",
        "Pinia",
        "Storybook",
        "Cypress",
        "Chart.js",
        "Typesense",
      ],
      role: {
        en: "Front-end Developer",
        fr: "Développeur Front-end",
        "sr-lat": "Front-end Developer",
      },
      year: "2024-now",
    },
    {
      title: "Angular Editor — Notion-like",
      tagline: {
        en: "Rich text editor with drag & drop and animations",
        fr: "Éditeur de texte riche avec drag & drop et animations",
        "sr-lat": "Uređivač teksta sa prevlačenjem i animacijama",
      },
      description: {
        en: "Experimental editor built with Angular 21+ Signals API. Features drag & drop, smooth animations, and real-time content manipulation. Demonstrates reactive state management without RxJS. Notion-like editing experience with block-based architecture.",
        fr: "Éditeur expérimental construit avec Angular 21+ et Signals API. Fonctionnalités drag & drop, animations fluides et manipulation de contenu en temps réel. Démontre la gestion d'état réactive sans RxJS. Expérience d'édition type Notion avec architecture basée sur des blocs.",
        "sr-lat": "Eksperimentalni editor izgrađen sa Angular 21+ Signals API. Funkcionalnosti prevlačenje, glatke animacije i manipulacija sadržajem u realnom vremenu. Demonstrira reaktivno upravljanje stanjem bez RxJS. Notion-iskustvo uređivanja sa arhitekturom zasnovanoj na blokovima.",
      },
      tech: ["Angular", "Signals", "TypeScript", "Drag & Drop"],
      role: {
        en: "Personal project",
        fr: "Projet personnel",
        "sr-lat": "Lični projekat",
      },
      year: "2024",
      url: "https://ng-editor-eight.vercel.app",
    },
    {
      title: "Freelance - Sestini Pizza",
      tagline: {
        en: "Full branding for a restaurateur",
        fr: "Branding total d'un restaurateur",
        "sr-lat": "Potbranding za restorana",
      },
      description: {
        en: "I supported an entrepreneur in launching his business. I designed the complete visual identity, graphic assets, website, Google Business listing, deployment and continuous maintenance. The business has since generated several hundred thousand euros in revenue. We will soon collaborate on a new project.",
        fr: "J'ai accompagné un entrepreneur dans sa création d'entreprise. J'ai conçu toute l'identité visuelle, le matériel graphique, le site internet, fiche Google Business, déploiement et suivi continu. L'entreprise a depuis généré plusieurs centaines de milliers d'euros de CA. Nous allons prochainement travailler ensemble sur un nouveau projet.",
        "sr-lat": "Podržao sam preduzetnika u pokretanju posla. Dizajnirao sam kompletnu vizuelnu identitet, grafičke materijale, web sajt, Google Business profil, deployment i kontinuirano održavanje. Posao je od tada generisao nekoliko stotina hiljada evra prihoda. Uskoro ćemo saraditi na novom projektu.",
      },
      tech: ["Figma", "Illustrator", "Next.js", "Vercel", "Google Business"],
      role: {
        en: "Full freelance project",
        fr: "Projet complet freelance",
        "sr-lat": "Potni freelance projekat",
      },
      year: "2025",
      url: "https://sestini-pizza.fr",
    },
  ],
  experience: [
    {
      role: {
        en: "Vue/Nuxt Front-end Developer",
        fr: "Développeur Front-end Vue/Nuxt",
        "sr-lat": "Vue/Nuxt Front-end Developer",
      },
      company: "Airddm (ESN)",
      period: "Feb. 2024 – Present",
      description: {
        en: "Front-end for enterprise clients (Heineken, Michelin, Bosch). Design systems, component libraries (Storybook), code review and E2E testing (Cypress). Led migrations from Django to Vue and implemented complex state management with Pinia. Agile/Scrum methodology. Stack: Nuxt 3, TypeScript, SCSS.",
        fr: "Front-end pour clients entreprise (Heineken, Michelin, Bosch). Design systems, librairies de composants (Storybook), revue de code et tests E2E (Cypress). Pilotage de migrations de Django vers Vue et implémentation de gestions d'état complexes avec Pinia. Méthodologie Agile/Scrum. Stack : Nuxt 3, TypeScript, SCSS.",
        "sr-lat": "Front-end za poslovne klijente (Heineken, Michelin, Bosch). Dizajn sistemi, biblioteke komponenti (Storybook), pregled koda i E2E testiranje (Cypress). Vodio migracije sa Django na Vue i implementirao složeno upravljanje stanjem sa Pinia. Agile/Scrum metodologija. Stack: Nuxt 3, TypeScript, SCSS.",
      },
    },
    {
      role: {
        en: "Front-end Developer Intern",
        fr: "Stage Développeur Front-end",
        "sr-lat": "Praksa Front-end Developer",
      },
      company: "Onaos",
      period: "Jan. 2024 (1 month)",
      description: {
        en: "React development in medical industry. Codebase optimization, best practices implementation, Agile methodology integration.",
        fr: "Développement React dans l'industrie médicale. Optimisation de codebase, implémentation des bonnes pratiques, intégration méthodologie Agile.",
        "sr-lat": "React razvoj u medicinskoj industriji. Optimizacija codebase, implementacija najboljih praksi, integracija Agile metodologije.",
      },
    },
    {
      role: {
        en: "Freelance Consultant",
        fr: "Consultant freelance",
        "sr-lat": "Freelance konsultant",
      },
      company: "Independent",
      period: "2022 – Present",
      description: {
        en: "Web projects for direct clients. Full lifecycle: requirements gathering, UI/UX design, development (React, Vue, Svelte) and deployment. Brand identity, technical advice and post-delivery support.",
        fr: "Projets web pour des clients directs. Gestion complète : recueil du besoin, design UI/UX, développement (React, Vue, Svelte) et déploiement. Identité visuelle, conseil technique et accompagnement post-livraison.",
        "sr-lat": "Web projekti za direktna klijenta. Potni životni ciklus: prikupljanje zahteva, UI/UX dizajn, razvoj (React, Vue, Svelte) i deployment. Brend identitet, tehnički saveti i podrška nakon isporuke.",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Formation React — 10 projets",
        "sr-lat": "React obuka — 10 projekata",
      },
      company: "OpenClassrooms",
      period: "2021 – 2023",
      description: {
        en: "10 real-world training projects presented to a jury. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "10 projets de formation en conditions réelles présentés devant un jury. Approfondissement HTML, CSS, JS, Git, React, Redux/RTK et intégrations d'API.",
        "sr-lat": "10 projekata obuke u realnim uslovima predstavljenih pred žirijem. Produbljivanje veština u HTML, CSS, JS, Git, React, Redux/RTK i API integracijama.",
      },
    },
    {
      role: {
        en: "Head Pizzaiolo",
        fr: "Chef Pizzaiolo",
        "sr-lat": "Glavni pizzaiolo",
      },
      company: "Mongelli",
      period: "2019 – 2021",
      description: {
        en: "I worked as head chef in a pizzeria. Team management, discipline and rigor. I optimized order management with Python scripts.",
        fr: "J'ai travaillé comme chef de cuisine dans une pizzeria. Management d'équipe, rigueur et discipline. J'ai optimisé la gestion de mes commandes avec des scripts Python.",
        "sr-lat": "Radio sam kao glavni kuvar u piceriji. Upravljanje timom, disciplina i rigor. Optimizirao sam upravljanje narudžbinama sa Python skriptama.",
      },
    },
    {
      role: {
        en: "Permaculture, travel and seasonal work",
        fr: "Permaculture, voyage et travaux saisonniers",
        "sr-lat": "Permakultura, putovanje i sezonski rad",
      },
      company: "Various",
      period: "2014 – 2019",
      description: {
        en: "I had the opportunity to travel in France and the Balkans. I trained in permaculture, hospitality and catering and improved my spoken English and some Slavic languages. Permaculture changed my way of seeing the world and gave me a holistic view of the systems around us. I apply this perspective to the design of my applications.",
        fr: "J'ai eu la chance de voyager en France et dans les Balkans. J'ai pu me former à la permaculture, l'hôtellerie, la restauration et perfectionner mon anglais oral et le serbe. La permaculture a changé ma façon de voir le monde et m'a apporté une vision holistique des systèmes qui nous entourent. J'utilise cette vision dans la conception de mes applications.",
        "sr-lat": "Imao sam priliku da putujem po Francuskoj i Balkanu. Obučavao sam se u permakulturi, ugostiteljstvu i poboljšao svoj engleski i neke slovenske jezike. Permakultura je promenila moj način gledanja na svet i dala mi holistički pogled na sisteme oko nas. Primenjujem ovu perspektivu u dizajnu svojih aplikacija.",
      },
    },
    {
      role: {
        en: "Sound Editor - Sound Designer - Film Post-production",
        fr: "Monteur son - Sound Designer - Post-production cinéma",
        "sr-lat": "Montažer zvuka - Sound Designer - Filmska postprodukcija",
      },
      company: "Film Factory",
      period: "2012 – 2014",
      description: {
        en: "I had the chance to work and learn from some of France's leading sound technicians. I created and maintained sound databases, worked on international blockbusters and award-winning feature films. My work also included recording voices, sound effects, editing and synchronisation with the picture.",
        fr: "J'ai pu travailler et apprendre auprès des plus grands techniciens français du son. J'ai créé et maintenu des bases de données sonores, travaillé sur des blockbusters internationaux et des longs-métrages récompensés. Mon travail consistait également en l'enregistrement de voix, de bruitages, d'édition et de synchronisation à l'image.",
        "sr-lat": "Imao sam priliku da radim i učim od vodećih francuskih tehničara zvuka. Kreirao sam i održavao baze zvuka, radio na međunarodnim blokbasterima i nagrađivanim filmovima. Moj rad je takođe uključivao snimanje glasova, zvučnih efekata, montažu i sinhronizaciju sa slikom.",
      },
    },
    {
      role: {
        en: "Location Sound Recordist",
        fr: "Preneur de son cinéma",
        "sr-lat": "Snimatelj zvuka na terenu",
      },
      company: "Various",
      period: "2012 – 2016",
      description: {
        en: "I worked on the sound recording for dozens of short films in France and the Balkans.",
        fr: "J'ai travaillé sur la prise de son de dizaines de court-métrages, en France et dans les Balkans.",
        "sr-lat": "Radio sam na snimanju zvuka za desetine kratkih filmova u Francuskoj i na Balkanu.",
      },
    },
  ],
  skills: {
    labels: {
      frontend: {
        en: "Frontend",
        fr: "Frontend",
        "sr-lat": "Frontend",
      },
      backend: {
        en: "Backend",
        fr: "Backend",
        "sr-lat": "Backend",
      },
      tools: {
        en: "Tools & Infra",
        fr: "Outils & Infra",
        "sr-lat": "Alati & Infra",
      },
    },
    stats: {
      yearsExp: {
        label: {
          en: "Years of\nexperience",
          fr: "Années\nd'expérience",
          "sr-lat": "Godine\niskustva",
        },
      },
      techExp: {
        label: {
          en: "Years in\nfront-end",
          fr: "Années en\nfront-end",
          "sr-lat": "Godine u\nfront-end",
        },
      },
      frameworks: {
        label: {
          en: "Frameworks\nmastered",
          fr: "Frameworks\nmaîtrisés",
          "sr-lat": "Frameworks\nsvladani",
        },
      },
    },
    frontend: [
      "Angular",
      "Vue.js",
      "Nuxt",
      "React",
      "Next.js",
      "Svelte",
      "TypeScript",
      "TailwindCSS",
      "SASS",
      "DDD",
    ],
    backend: [
      "Spring Boot",
      "Node.js",
      "Bun",
      "Express.js",
      "MongoDB",
      "SQL",
      "REST API",
    ],
    tools: [
      "Git - Github - Gitlab",
      "Storybook",
      "Figma",
      "Docker",
      "MacOS-Linux",
      "Pinia",
      "RxJS - Signals",
      "Redux/RTK",
      "Chart.js",
      "Typesense/Algolia",
      "Vitest",
      "Cypress",
      "Claude Code",
    ],
  },
  apps: [
    {
      title: "Angular Editor",
      tagline: {
        en: "Notion-like editor with Angular Signals",
        fr: "Éditeur type Notion avec Angular Signals",
        "sr-lat": "Notion-oliki editor sa Angular Signals",
      },
      description: {
        en: "Rich text editor built with Angular 21+ Signals API. Features drag & drop, smooth animations, and real-time content manipulation. Demonstrates reactive state management without RxJS. Block-based architecture.",
        fr: "Éditeur de texte riche construit avec Angular 21+ Signals API. Fonctionnalités drag & drop, animations fluides et manipulation de contenu en temps réel. Gestion d'état réactive sans RxJS. Architecture basée sur des blocs.",
        "sr-lat": "Bogati uređivač teksta izgrađen sa Angular 21+ Signals API. Funkcionalnosti prevlačenje, glatke animacije i manipulacija sadržajem u realnom vremenu. Reaktivno upravljanje stanjem bez RxJS. Arhitektura zasnovana na blokovima.",
      },
      url: "https://ng-editor-eight.vercel.app",
      tags: ["Angular", "Signals", "TypeScript"],
    },
    {
      title: "Calcul TJM",
      tagline: {
        en: "Daily rate simulator for French freelancers",
        fr: "Simulateur de TJM pour freelances",
        "sr-lat": "Simulator dnevne rate za freelancere",
      },
      description: {
        en: "Calculate your net income based on your daily rate (or the reverse), with a breakdown of taxes and social contributions per legal structure: micro-enterprise, SASU, EURL. Includes ACRE support and visual charts.",
        fr: "Calcule ton revenu net à partir de ton TJM (ou l'inverse), avec la décomposition des charges par statut : micro-entreprise, SASU, EURL. Supporte l'ACRE et propose une visualisation graphique.",
        "sr-lat": "Izračunajte svoj neto prihod na osnovu dnevne rate (ili obrnuto), sa razlaganjem poreza i doprinosa po pravnom obliku: mikro preduzeće, SASU, EURL. Uključuje ACRE podršku i vizuelne grafikone.",
      },
      url: "https://calcul-tjm.fr",
      tags: ["Vue.js", "TypeScript"],
    },
    {
      title: "The Pause",
      tagline: {
        en: "Minimalist meditation timer",
        fr: "Timer de méditation minimaliste",
        "sr-lat": "Minimalistički tajmer za meditaciju",
      },
      description: {
        en: "A simple, distraction-free meditation timer. PWA with offline support. No account, no tracking — just a pause. Focus on performance and accessibility.",
        fr: "Un timer de méditation simple et sans friction. PWA avec support offline. Pas de compte, pas de tracking — juste une pause. Focus sur la performance et l'accessibilité.",
        "sr-lat": "Jednostavan tajmer za meditaciju bez ometanja. PWA sa offline podrškom. Bez naloga, bez praćenja — samo pauza. Fokus na performanse i pristupačnost.",
      },
      url: "https://www.thepause.app",
      tags: ["Nuxt", "TypeScript", "PWA"],
    },
    {
      title: "Camp Breakers",
      tagline: {
        en: "SvelteKit web application",
        fr: "Application web SvelteKit",
        "sr-lat": "SvelteKit web aplikacija",
      },
      description: {
        en: "Full-stack web application built with SvelteKit. Demonstrates Svelte competency and modern full-stack development patterns.",
        fr: "Application web full-stack construite avec SvelteKit. Démontre la compétence Svelte et les patterns de développement full-stack modernes.",
        "sr-lat": "Full-stack web aplikacija izgrađena sa SvelteKit. Demonstrira Svelte kompetenciju i moderne full-stack razvojne obrasce.",
      },
      url: "https://campsbreakers.com",
      tags: ["SvelteKit", "TypeScript"],
    },
    {
      title: "Jumble Chat",
      tagline: {
        en: "Public real-time chat application",
        fr: "Chat public en temps réel",
        "sr-lat": "Javni chat u realnom vremenu",
      },
      description: {
        en: "Public chat application with real-time messaging using WebSockets. No account required — instant communication.",
        fr: "Application de chat public avec messagerie en temps réel via WebSockets. Pas de compte requis — communication instantanée.",
        "sr-lat": "Javna chat aplikacija sa porukama u realnom vremenu koristeći WebSockets. Bez naloga — trenutna komunikacija.",
      },
      url: "https://jumble-chat.up.railway.app",
      tags: ["WebSocket", "TypeScript"],
    },
    {
      title: "Polishable",
      tagline: {
        en: "Browser extension for PWA launch prep",
        fr: "Extension navigateur pour préparer un lancement PWA",
        "sr-lat": "Browser ekstenzija za PWA lansiranje",
      },
      description: {
        en: "Generate screenshots, icons and a PWA analysis in one shot, across multiple formats and viewports. No account, no cloud upload — runs entirely in the browser. Perfect for developers preparing PWA submissions.",
        fr: "Génère screenshots, icônes et analyse PWA en une fois, sur plusieurs formats et viewports. Pas de compte, pas d'upload cloud — tout se passe dans le navigateur. Parfait pour les développeurs préparant des soumissions PWA.",
        "sr-lat": "Generišite slike ekrana, ikone i PWA analizu odjednom, u više formata i viewporta. Bez naloga, bez uploada u cloud — sve se dešava u pregledaču. Savršeno za developere koji pripremaju PWA podnošenja.",
      },
      url: "https://polishable.app",
      tags: ["TypeScript", "Web Extension", "PWA"],
    },
    {
      title: "JustForget",
      tagline: {
        en: "Card-swipe note app — Experimental",
        fr: "Notes en card swipe — Expérimental",
        "sr-lat": "Aplikacija za beleške sa prevlačenjem — Eksperimentalno",
      },
      description: {
        en: "Front-end experiment exploring gesture-based interactions. Swipe cards to archive notes. No backend — state lives in localStorage. A playground for animation APIs.",
        fr: "Expérience front explorant les interactions basées sur les gestes. Swipe de cartes pour archiver les notes. Pas de backend — état dans localStorage. Un terrain de jeu pour les APIs d'animation.",
        "sr-lat": "Front-end eksperiment istraživanjem interakcija zasnovanih na gestovima. Prevlačenje kartica za arhiviranje beleški. Bez backend — stanje u localStorage. Igralište za animacijske API-je.",
      },
      url: "https://justforget.app",
      tags: ["React", "Framer Motion", "TypeScript"],
    },
  ],
  contact: {
    tagline: {
      en: "Open to meaningful conversations about demanding projects and long-term collaboration. Let's talk.",
      fr: "Ouvert aux échanges autour de projets exigeants et de collaborations durables. Parlons-en.",
      "sr-lat": "Otvoren za značajne razgovore o zahtevnim projektima i dugoročnoj saradnji. Razgovarajmo.",
    },
  },
  socials: {
    github: "https://github.com/maxiim3",
    linkedin: "https://www.linkedin.com/in/maximetamburrini/?locale=en",
    twitter: "https://x.com/maxiim3_dev",
    nostr: "https://primal.net/maxiim3",
    matrix: "https://matrix.to/#/@maxiim3:matrix.org",
    typefully: "https://typefully.com/maxiim3",
    email: "mtamburrini@proton.me",
  },
  stats: {
    yearsExp: 10,
    techExp: 3,
    frameworks: 3,
  },
} as const;