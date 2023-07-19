<template>
  <SeoKit />
  <OgImageScreenshot />
  <AppHeader />
  <main class="font-sans">
    <slot />
  </main>
  <AppFooter class="z-30 relative" />
  <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
useHead({
  bodyAttrs: {
    class: 'text-text-basic',
  },
})
</script>
