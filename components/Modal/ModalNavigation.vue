<template>
  <VueFinalModal
    content-transition="vfm-slide-left"
    class="flex justify-start items-start"
    content-class="h-screen w-screen lg:w-1/2 bg-white flex flex-col justify-center items-center relative bg-white"
  >
    <button
      class="w-7 h-7 lg:h-14 lg:w-14 flex items-center transition-all justify-center dark:bg-white bg-black rounded-full absolute right-5 top-5"
      @click="emit('close')"
    >
      <TailwindSvgIcon name="close" class="text-button-primary text-lg" />
    </button>
    <div class="p-10 grid gap-10 text-center">
      <nav class="">
        <ul class="grid text-center gap-6">
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >Направления</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >О компании</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >Кейсы</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >Карьера</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >Отзывы</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:opacity-70 transition-all" to="#direction"
              >Контакты</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <a href="tel:+7 (345) 258 84 88" class="font-semibold"
        >+7 (345) 258 84 88</a
      >
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits(['close'])
</script>
