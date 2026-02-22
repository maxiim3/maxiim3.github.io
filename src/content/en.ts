import type { Content } from './types';

const content: Content = {
  meta: {
    title: 'Max - Front-End Developer Vue/Nuxt',
    description: 'Front-end developer specialized in Vue 3, Nuxt and TypeScript. Expertise in modern and performant web applications.',
    lang: 'en',
  },

  links: [
    {
      label: 'GitHub Profile',
      url: 'https://github.com/maxiim3',
      icon: 'github',
    },
    {
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/max-graux',
      icon: 'linkedin',
    },
    {
      label: 'Contact by email',
      url: 'mailto:max@maxgraux.dev',
      icon: 'email',
    },
  ],

  skills: {
    expertise: [
      'Vue 3',
      'Nuxt 3',
      'TypeScript',
      'Composition API',
      'Pinia',
      'Vite',
      'TailwindCSS',
    ],
    experience: [
      'React',
      'JavaScript ES6+',
      'HTML5/CSS3',
      'REST APIs',
      'Git',
      'Responsive Design',
      'Accessibility (WCAG)',
    ],
    curiosity: [
      'Astro',
      'Svelte',
      'Web Components',
      'WebAssembly',
      'Rust',
    ],
  },

  experience: [
    {
      role: 'Front-End Developer Vue.js / Nuxt',
      company: 'Airddm (Permanent)',
      period: 'Feb 2024 - Present',
      description: 'Enterprise clients (Heineken, Michelin, Bosch). Design system with Storybook, e2e testing, front-end architecture. B2B2C app from scratch, Django → Vue.js migration, Pinia state management, Chart.js dataviz.',
    },
    {
      role: 'Freelance Front-End Developer',
      company: 'Independent',
      period: '2022 - Present',
      description: 'Direct clients, end-to-end ownership: requirements gathering, design, mockups, development and deployment. React, Next.js, Vue, Svelte.',
    },
    {
      role: 'Training & Background',
      company: 'OpenClassrooms + Hackathon',
      period: '2021 - 2023',
      description: '10 React projects presented to a jury. Montpellier Hackathon 2023 (app shipped in 24h). Before tech: 10 years across music, sound engineering, hospitality, 4 countries.',
    },
  ],

  projects: [
    {
      name: 'Calcul TJM',
      url: 'https://calcul-tjm.fr',
      description: 'Freelance revenue simulator: real-time comparison of micro-entreprise, SASU and EURL structures.',
    },
    {
      name: 'Polishable',
      url: 'https://polishable.app',
      description: 'Browser extension for shipping web apps: screenshots, icons and PWA analysis.',
    },
    {
      name: 'Sestini Pizza',
      url: 'https://www.sestini-pizza.fr',
      description: 'Next.js showcase website — full case study: branding, SEO, Google Business.',
    },
    {
      name: 'Jamais 203',
      url: 'https://prod203-next-app-maxiim3s-projects.vercel.app/en',
      description: 'Audiovisual production agency website — dark cinematic art direction, bilingual FR/EN.',
    },
  ],

  cv: {
    label: 'Download my CV',
    href: '/cv/cv-en.pdf',
  },

  narrative: {
    title: 'My Story',
    paragraphs: [
      "Before code, I spent 15 years in music — as a drummer and sound engineer. I worked in hospitality, lived across multiple countries, and learned four languages. Each chapter taught me how to navigate complex systems, collaborate with diverse profiles, and deliver tangible results under real constraints.",
      "When I transitioned into development, I carried that mindset forward: understand the context before writing code, think product before feature. I'm not a pure executor. I'm someone who understands a business, identifies what it needs, and builds it — from visual identity to frontend architecture.",
      "I helped a restaurateur go from zero to €250,000 in revenue by designing his entire brand and digital presence. I built the website for a music production agency whose clients include Balenciaga, Disneyland Paris, and Warner Music. On the side, I'm building applications around collective governance and permaculture.",
      "What I bring: cross-disciplinary vision, rigorous execution, and the ability to bridge the gap between technology, design, and strategy.",
    ],
  },

  caseStudies: [
    {
      slug: 'sestini-pizza',
      title: 'From zero to €250k revenue: full branding & digital presence for an artisan food truck',
      context:
        'A pizzaiolo launching a wood-fired pizza truck in Villeneuve-lès-Maguelone with zero existing presence.',
      role: 'End-to-end ownership of brand identity and digital presence. Sole contributor.',
      deliverables: [
        'Logo and brand guidelines',
        'Print materials (flyers, business cards, loyalty card, stamp)',
        'Truck wrap design',
        'Website built with Next.js + TailwindCSS + Vercel',
        'SEO + Google Business setup',
      ],
      results: [
        { metric: 'Revenue', value: '€0 → €250,000 over 3 years' },
        { metric: 'Google reviews', value: '100 reviews · 4.8/5 rating' },
        { metric: 'Customer base', value: 'Established loyal repeat clientele' },
        { metric: 'Expansion', value: 'Opened a brick-and-mortar restaurant' },
      ],
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Cloudinary', 'Google Business'],
      link: { label: 'View website', url: 'https://www.sestini-pizza.fr' },
      screenshots: [],
    },
    {
      slug: 'jamais-203-productions',
      title:
        'Bilingual showcase website for an audiovisual production agency working with international brands',
      context:
        'A music and audiovisual production agency with credits including Balenciaga, Canal+, Disneyland Paris, Coca-Cola, Warner Music France, Citroën, Puy du Fou, FFF, and Crédit Agricole.',
      role: 'Full ownership from artistic direction to deployment — design, development, and delivery.',
      deliverables: [
        'Bilingual FR/EN website with Next.js + Vercel',
        'Custom admin back-office',
        'Dark, cinematic art direction',
        'Client references gallery',
      ],
      results: [
        { metric: 'Clients', value: 'Balenciaga, Canal+, Disneyland Paris, Coca-Cola, Warner Music, Citroën...' },
        { metric: 'Impact', value: 'Client autonomous — Webflow migration, opened own production studios' },
      ],
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Admin custom'],
      link: {
        label: 'View project',
        url: 'https://prod203-next-app-maxiim3s-projects.vercel.app/en',
      },
      screenshots: [],
    },
  ],
};

export default content;
