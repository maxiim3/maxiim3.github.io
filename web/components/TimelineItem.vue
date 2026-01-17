<script setup lang="ts">
import type { Experience } from '~/data/experiences'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <div class="relative pl-8 pb-12 last:pb-0">
    <!-- Timeline line -->
    <div class="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-1 w-3 h-3 -translate-x-1/2 rounded-full border-2"
      :class="experience.current ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'"
    />

    <!-- Content -->
    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <!-- Header -->
      <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ experience.position }}
          </h3>
          <p class="text-blue-600 dark:text-blue-400 font-medium">
            {{ experience.company }}
          </p>
        </div>
        <span
          class="text-sm font-medium px-3 py-1 rounded-full"
          :class="experience.current ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'"
        >
          {{ experience.period }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ experience.description }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in experience.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
