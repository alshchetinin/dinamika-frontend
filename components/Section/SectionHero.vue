<template>
  <section class="min-h-screen flex flex-col justify-end py-16 relative">
    <div class="container z-10 text-white">
      <h1
        ref="element"
        class="text-base lg:text-2xl font-semibold uppercase mb-5"
      >
        динамика – Команда, объединившая ведущих производителей
        кабелЬНО-ПРОВОДНИКОВОЙ, кабеленесущих систем и эстакад для реализации
        сложных электротехнических проектов в нефтегазовой сфере
      </h1>
      <p class="mb-4">
        Над нашим сайтом ведутся работы, он скоро заработает в новом формате.
        <br />
        А пока оставьте ваш номер и мы свяжемся с вами
      </p>
      <ui-button
        text="Оставить заявку"
        size="large"
        variant="primary"
        @click="open"
      />
    </div>
    <div class="absolute inset-0">
      <!-- <nuxt-img
        src="/hero.jpg"
        alt="1"
        class="h-full w-full object-cover lg:object-left"
      /> -->
      <div class="absolute inset-0 bg-[#000] bg-opacity-80"></div>
      <video
        id="video-background"
        class="h-full w-full object-cover"
        autoplay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script setup lang="ts">
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { useModal } from 'vue-final-modal'
import ModalForm from '../Modal/ModalForm.vue'

const { open, close } = useModal({
  component: ModalForm,
  attrs: {
    onClose() {
      close()
    },
  },
})

const element = ref(null)
onMounted(() => {
  const splitTitle = new SplitType(element.value, {
    types: 'lines, words',
  })
  const splitTitleWords = splitTitle.words
  gsap.fromTo(
    splitTitleWords,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        each: 0.02,
        from: 'start',
        ease: 'power2.inOut',
      },
    }
  )
})
</script>

<style></style>
