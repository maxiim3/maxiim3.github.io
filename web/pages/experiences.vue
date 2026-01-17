<script setup lang="ts">
import { experiences } from '~/data/experiences'

useSeoMeta({
  title: 'Expériences - Maxime Tamburrini',
  description: 'Parcours professionnel de Maxime Tamburrini : développeur front-end chez Airddm, freelance, post-production cinéma.',
  ogTitle: 'Expériences - Maxime Tamburrini',
  ogDescription: 'Parcours professionnel de Maxime Tamburrini : développeur front-end chez Airddm, freelance, post-production cinéma.',
})
</script>

<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Parcours Professionnel
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            De la post-production cinéma au développement front-end
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <TimelineItem
            v-for="experience in experiences"
            :key="experience.id"
            :experience="experience"
          />
        </div>
      </div>
    </div>
  </div>
</template>
