<template>
  <AppHeader />
  <main class="font-sans">
    <slot />
  </main>
  <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>
