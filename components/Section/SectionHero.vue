<template>
  <section class="min-h-screen flex flex-col justify-end py-16 relative">
    <div class="container z-10 text-white">
      <h1
        ref="element"
        class="animation-title text-base lg:text-3xl font-semibold uppercase mb-5"
      >
        динамика – Команда, объединившая ведущих производителей
        кабелЬНО-ПРОВОДНИКОВОЙ продукции, кабеленесущих систем и эстакад для
        реализации сложных электротехнических проектов в нефтегазовой сфере
      </h1>
      <p ref="text" class="mb-4">
        Над нашим сайтом ведутся работы, он скоро заработает в новом формате.
        <br />
        А пока оставьте ваш номер и мы свяжемся с вами
      </p>
      <div ref="button">
        <ui-button
          text="Оставить заявку"
          size="large"
          variant="primary"
          @click="open"
        />
      </div>
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
import { animate, stagger, spring } from 'motion'
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

const element = ref<HTMLElement | null>(null)
const text = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

onMounted(() => {
  const splitTitle = new SplitType('.animation-title', {
    types: 'words',
  })

  let anmationArray: (HTMLElement | null)[] = splitTitle.words || []

  if (text.value) {
    anmationArray.push(text.value)
  }
  if (button.value) {
    anmationArray.push(button.value)
  }

  anmationArray = anmationArray.filter((el): el is HTMLElement => el !== null)

  if (anmationArray.length > 0) {
    animate(
      anmationArray as HTMLElement[],
      {
        opacity: [0, 1],
        y: [40, 0],
      },
      {
        easing: spring(),
        duration: 1.5,
        delay: stagger(0.03),
      }
    )
  }
})
</script>

<style></style>
