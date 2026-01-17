<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
    <div class="text-center">
      <h1 class="text-6xl md:text-8xl font-bold text-gray-200 dark:text-gray-800 mb-4">
        {{ error.statusCode }}
      </h1>
      <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
        {{ error.statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        {{ error.statusCode === 404
          ? 'La page que vous recherchez n\'existe pas ou a été déplacée.'
          : error.message || 'Quelque chose s\'est mal passé.'
        }}
      </p>
      <button
        class="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        @click="handleError"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>
