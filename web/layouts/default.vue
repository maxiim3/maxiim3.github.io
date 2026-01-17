<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
