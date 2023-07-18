<template>
  <VueFinalModal
    content-transition="vfm-slide-left"
    class="flex justify-start items-start"
    content-class="h-screen w-screen flex flex-col justify-center items-center relative bg-white"
  >
    <button
      class="w-7 h-7 lg:h-14 lg:w-14 flex items-center transition-all justify-center dark:bg-white bg-black rounded-full absolute right-5 top-5"
      @click="emit('close')"
    >
      <TailwindSvgIcon name="close" class="text-button-primary text-lg" />
    </button>
    <nuxt-img :src="image" provider="strapi" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
defineProps({
  image: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['close'])
</script>
