<script setup lang="ts">
import { projects } from '~/data/projects'

useSeoMeta({
  title: 'Projets - Maxime Tamburrini',
  description: 'Projets et réalisations de Maxime Tamburrini : dashboards data viz, tunnels de matching, e-commerce, design systems.',
  ogTitle: 'Projets - Maxime Tamburrini',
  ogDescription: 'Projets et réalisations de Maxime Tamburrini : dashboards data viz, tunnels de matching, e-commerce, design systems.',
})
</script>

<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projets & Réalisations
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une sélection de projets professionnels et personnels illustrant mon expertise front-end
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>
