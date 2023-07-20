<template>
  <component :is="as" :class="[sizes[size], customColor]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { enumHeadingTags } from '~/types/tags'
import { headingSizes, enumHeadingSizes } from '~~/types/variants'
defineProps({
  as: {
    type: String as PropType<keyof typeof enumHeadingTags>,
    required: true,
  },
  size: {
    type: String as PropType<keyof typeof enumHeadingSizes>,
    required: true,
  },
  customColor: {
    type: String,
    default: '',
  },
})
const sizes: headingSizes = {
  big: 'text-2xl lg:text-[28px] font-medium uppercase  leading-tight',
  medium: 'text-base lg:text-[28px] leading-tight font-medium uppercase',
  small: 'text-sm lg:text-2xl uppercase leading-tight font-medium',
}
</script>
