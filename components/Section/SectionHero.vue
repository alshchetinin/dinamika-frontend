<template>
  <section class="min-h-screen flex flex-col justify-end py-16 relative">
    <div class="container z-10 text-white">
      <h1
        ref="element"
        class="animation-title text-base lg:text-3xl font-semibold uppercase mb-5"
        v-html="title"
      ></h1>
      <div ref="button">
        <ui-button
          :text="nameButton"
          size="large"
          variant="primary"
          @click="open"
        />
      </div>
    </div>
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[#000] bg-opacity-30"></div>
      <video
        v-if="video"
        id="video-background"
        class="h-full w-full object-cover"
        autoplay
        muted
        loop
      >
        <source :src="video" type="video/mp4" />
      </video>
      <nuxt-img
        v-else
        provider="strapi"
        :src="image"
        alt="1"
        class="h-full w-full object-cover lg:object-center"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SplitType from 'split-type'
import { animate, stagger, spring } from 'motion'
import { useModal } from 'vue-final-modal'
import ModalForm from '../Modal/ModalForm.vue'

defineProps({
  title: {
    type: String,
    default:
      'динамика – Команда, объединившая ведущих производителей кабелЬНО-ПРОВОДНИКОВОЙ продукции, кабеленесущих систем и эстакад для реализации сложных электротехнических проектов в нефтегазовой сфере',
  },
  image: {
    type: String,
    default: '',
  },
  video: {
    type: String,
    default: '/hero.mp4',
  },
  height: {
    type: String,
    default: 'min-h-screen',
  },
  withButton: {
    type: Boolean,
    default: true,
  },
  nameButton: {
    type: String,
    default: 'Связаться с нами',
  },
})
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
