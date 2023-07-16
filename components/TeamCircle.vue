<template>
  <div class="w-full h-full relative circle_people_container">
    <CirclePeople width="132" class="circle_people top-8 -left-4" />
    <CirclePeople width="108" class="circle_people top-16 left-[19vw]" />
    <CirclePeople width="118" class="circle_people top-[15vw] left-[10vw]" />
    <CirclePeople width="100" class="circle_people top-[7vw] left-[50vw]" />
    <CirclePeople width="160" class="circle_people bottom-[4vw] left-[25vw]" />
    <CirclePeople width="160" class="circle_people top-8 -right-4" />
    <CirclePeople width="108" class="circle_people top-16 right-[19vw]" />
    <CirclePeople width="90" class="circle_people top-[15vw] right-[10vw]" />
    <CirclePeople width="120" class="circle_people bottom-[7vw] right-[25vw]" />
  </div>
</template>

<script setup lang="ts">
import { animate, stagger, spring, inView } from 'motion'

onMounted(() => {
  const anmationArray = document.querySelectorAll('.circle_people')
  inView(
    '.circle_people_container',
    (info) => {
      animate(
        anmationArray,
        {
          opacity: [0, 1],
          scale: [0, 1],
        },
        {
          easing: spring(),
          duration: 1.5,
          delay: stagger(0.05),
        }
      )
    },
    { margin: '0px 500px 0px 0px' }
  )
})
</script>
