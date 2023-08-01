<template>
  <div class="w-full h-full relative circle_people_container">
    <CirclePeople
      width="132"
      class="circle_people top-8 -left-4"
      img="team/1.png"
    />
    <CirclePeople
      width="108"
      class="circle_people top-16 left-[19vw]"
      img="team/2.png"
    />
    <CirclePeople
      width="118"
      class="circle_people top-[24vw] left-[10vw]"
      img="team/3.png"
    />
    <CirclePeople
      width="100"
      class="circle_people top-[2vw] left-[50vw]"
      img="team/4.png"
    />
    <CirclePeople
      width="160"
      class="circle_people bottom-[4vw] left-[12vw]"
      img="team/8.png"
    />
    <CirclePeople
      width="160"
      class="circle_people top-8 -right-4"
      img="team/6.png"
    />
    <CirclePeople
      width="108"
      class="circle_people top-[10vw] right-[19vw]"
      img="team/7.png"
    />
    <CirclePeople
      width="90"
      class="circle_people top-[25vw] right-[10vw]"
      img="team/5.png"
    />
    <CirclePeople
      width="120"
      class="circle_people bottom-[7vw] right-[25vw]"
      img="team/9.png"
    />
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
