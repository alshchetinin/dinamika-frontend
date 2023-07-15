<template>
  <AdvantagesItem v-for="item in 4" :key="item" />
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const cards = gsap.utils.toArray('.card')

  cards.forEach((card, index) => {
    const tween = gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: () => `top bottom-=100`,
        end: () => `top top+=40`,
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
      },
      ease: 'none',
      // scale: () => 1 - (cards.length - index) * 0.025,
    })

    ScrollTrigger.create({
      trigger: card,
      start: 'top top',
      pin: true,
      pinSpacing: false,
      // markers: true,
      id: 'pin',
      end: 'max',
      invalidateOnRefresh: true,
    })
  })
})
</script>
