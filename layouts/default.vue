<template>
  <SeoKit />
  <OgImageStatic />
  <AppHeader />
  <main class="font-sans">
    <slot />
  </main>
  <AppFooter />
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
