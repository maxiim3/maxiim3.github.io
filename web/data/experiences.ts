export interface Experience {
  id: string
  period: string
  position: string
  company: string
  description: string
  technologies: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 'airddm',
    period: '2024 - Présent',
    position: 'Développeur Front-End Vue/Nuxt',
    company: 'Airddm',
    description: `Applications B2B complexes : tunnels de matching produit, dashboards de data visualisation, intégrations multi-services. Participation aux décisions d'architecture front, définition des APIs avec le backend, amélioration continue de l'ergonomie.`,
    technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind', 'Pinia', 'D3.js', 'REST API'],
    current: true,
  },
  {
    id: 'freelance',
    period: '2022 - 2024',
    position: 'Développeur Front-End Freelance',
    company: 'Indépendant',
    description: `Projets variés : shops e-commerce, sites vitrines, landing pages. De la prise de brief à la mise en production, gestion de l'intégralité du cycle projet.`,
    technologies: ['Vue 3', 'Nuxt', 'React', 'Svelte', 'Tailwind', 'Shopify'],
  },
  {
    id: 'formation',
    period: '2021 - 2022',
    position: 'Formation Développement Web',
    company: 'Auto-formation',
    description: `Reconversion professionnelle vers le développement web. Apprentissage intensif de JavaScript, Vue.js, et des fondamentaux du développement moderne.`,
    technologies: ['JavaScript', 'Vue.js', 'HTML', 'CSS', 'Git'],
  },
  {
    id: 'postprod',
    period: '2015 - 2021',
    position: 'Technicien Post-Production',
    company: 'Industrie Cinéma',
    description: `Post-production cinéma et publicité. Gestion de projets techniques, coordination d'équipes, livraison sous contraintes fortes de délais.`,
    technologies: ['DaVinci Resolve', 'After Effects', 'Gestion de projet'],
  },
]
