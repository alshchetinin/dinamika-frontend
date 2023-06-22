<template>
  <section class="h-screen flex flex-col justify-end py-16 relative">
    <div class="container z-10">
      <h1
        ref="element"
        class="text-lg lg:text-2xl font-semibold uppercase text-white mb-5"
      >
        динамика – Команда, объединившая ведущих производителей
        кабелЬНО-ПРОВОДНИКОВОЙ, кабеленесущих систем и эстакад для реализации
        сложных электротехнических проектов в нефтегазовой сфере
      </h1>
      <!-- <ui-button text="Получить консультацию" size="medium" variant="primary -->
    </div>
    <div class="absolute inset-0">
      <nuxt-img
        src="/hero.jpg"
        alt="1"
        class="h-full w-full object-cover object-left"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SplitType from 'split-type'
import { gsap } from 'gsap'
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
