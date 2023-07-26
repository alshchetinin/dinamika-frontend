<template>
  <button
    v-if="isButton"
    :class="[classButton, attrs.class]"
    class="leading-none text-center overflow-hidden gap-2 rounded-md transition duration-200 ease-in-out uppercase flex items-center disabled:cursor-not-allowed font-medium disabled:bg-opacity-30"
    @click="emit('click')"
  >
    <span class="text-center w-full relative z-10" v-html="text"></span>
  </button>
  <NuxtLink
    v-if="isLink"
    :to="link"
    :class="classButton"
    class="leading-none gap-2 text-center rounded-md no-underline transition duration-200 ease-in-out uppercase inline-flex items-center border"
  >
    <span v-html="text"></span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { enumSizes, enumVariants, variants, sizes } from '@/types/variants'
import { PropType } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<keyof typeof enumVariants>,
    required: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<keyof typeof enumSizes>,
    default: 'medium',
  },
  animation: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])
const attrs = useAttrs()
const styleSize: sizes = {
  small: 'px-4 py-3 text-[12px] max-h-14',
  medium: 'py-3 px-6 text-xs max-h-14 ',
  large: 'px-8 py-4 text-sm max-h-14',
}

const styleButton: variants = {
  primary:
    'button-primary group button-primary text-white hover:text-white ' +
    styleSize[props.size],
  secondary:
    'text-white  bg-button-secondary hover:text-white border-primary hover:border-white ' +
    styleSize[props.size],
  third:
    'bg-blue group hover:bg-white text-white hover:text-blue border-primary ' +
    styleSize[props.size],
}

const isButton = computed(() => {
  return props.link === ''
})

const isLink = computed(() => {
  return props.link !== ''
})

const classButton = computed(() => {
  return styleButton[props.variant]
})
</script>

<style scoped>
.button-primary {
  position: relative;
  background: linear-gradient(135deg, #0b7076 0%, #0b7076 100%);
  transition: background 1s ease;
}

.button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(135deg, #0b7076 0%, #44eded 47.92%, #0b7076 100%);
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 1;
}

.button-primary:hover::before {
  opacity: 1;
}
</style>
