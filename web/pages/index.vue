<script setup lang="ts">
useSeoMeta({
  title: 'Maxime Tamburrini - Développeur Front-End Vue/Nuxt',
  description: 'Maxime Tamburrini - Développeur Front-End Vue.js / Nuxt. Applications B2B/B2C, dashboards data viz, design systems. 2 ans chez Airddm + expérience freelance.',
  ogTitle: 'Maxime Tamburrini - Développeur Front-End Vue/Nuxt',
  ogDescription: 'Développeur Front-End Vue.js / Nuxt. Applications B2B/B2C, dashboards data viz, design systems.',
  ogImage: '/curriculum/og-image.png',
  ogUrl: 'https://maxi.github.io/curriculum/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Maxime Tamburrini - Développeur Front-End Vue/Nuxt',
  twitterDescription: 'Développeur Front-End Vue.js / Nuxt. Applications B2B/B2C, dashboards data viz, design systems.',
  twitterImage: '/curriculum/og-image.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Maxime Tamburrini',
        jobTitle: 'Développeur Front-End Vue/Nuxt',
        url: 'https://maxi.github.io/curriculum',
        sameAs: [
          'https://github.com/maxi',
          'https://linkedin.com/in/maxime-tamburrini',
        ],
      }),
    },
  ],
})

const skills = {
  expertise: ['Vue 3', 'Nuxt 3', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind', 'BEM', 'Pinia', 'Git', 'REST API'],
  frameworks: ['React', 'Svelte', 'SvelteKit'],
  dataViz: ['D3.js', 'Chart.js'],
  integrations: ['Figma', 'Algolia', 'Typesense', 'SQL', 'MongoDB'],
  tools: ['Node', 'Bun', 'Bash', 'Claude Code', 'Gemini', 'OpenCode'],
  curious: ['Rust', 'Go'],
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24 transition-colors">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Maxime Tamburrini
          </h1>
          <p class="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-8">
            Développeur Front-End Vue/Nuxt
          </p>

          <!-- CTA Button -->
          <a
            href="/cv.pdf"
            download
            class="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">À propos</h2>

          <div class="prose prose-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Développeur Front-End Vue/Nuxt, je conçois des expériences utilisateur end-to-end — de l'architecture des composants jusqu'au ressenti final de l'utilisateur.
            </p>

            <p>
              Chez <strong class="text-gray-900 dark:text-white">Airddm</strong> depuis 2 ans, je travaille sur des applications B2B complexes : tunnels de matching produit, dashboards de data visualisation, intégrations multi-services. Je participe activement aux décisions d'architecture front, à la définition des APIs avec le backend, et à l'amélioration continue de l'ergonomie.
            </p>

            <p>
              En freelance, j'ai accompagné des clients sur des projets variés : shops e-commerce, sites vitrines, landing pages. De la prise de brief à la mise en production, je gère l'intégralité du cycle.
            </p>

            <p>
              Ce qui me différencie : <strong class="text-gray-900 dark:text-white">10 ans d'expérience professionnelle avant le développement</strong> — post-production cinéma, restauration, management d'équipes. J'ai appris à communiquer avec des profils non-techniques, à livrer sous contrainte, et à garder mon calme quand tout brûle.
            </p>

            <p>
              Aujourd'hui, je construis aussi des design systems, des component libraries, et des outils internes pour améliorer le workflow de mes équipes. Je maîtrise les outils IA pour augmenter ma vélocité sans sacrifier la qualité.
            </p>

            <p class="font-medium text-gray-900 dark:text-white">
              Je cherche une équipe ambitieuse — scale-up ou grande entreprise — où je peux apprendre des meilleurs et contribuer à des produits qui comptent.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Compétences</h2>

          <div class="grid gap-8 md:grid-cols-2">
            <!-- Expertise -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">Expertise</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.expertise"
                  :key="skill"
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Frameworks -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">Frameworks</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.frameworks"
                  :key="skill"
                  class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Data Viz -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">Data Viz</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.dataViz"
                  :key="skill"
                  class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Intégrations -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-4">Intégrations</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.integrations"
                  :key="skill"
                  class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Tools -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">Tools</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.tools"
                  :key="skill"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Curieux -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 class="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-4">Curieux</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills.curious"
                  :key="skill"
                  class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
