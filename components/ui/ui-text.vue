<template>
  <component
    :is="as"
    class="text-text-basic opacity-80"
    :class="small ? 'text-xs' : 'text-base'"
    ><slot
  /></component>
</template>

<script setup lang="ts">
import { enumHtmlTags } from '~/types/tags'

defineProps({
  as: {
    type: String as PropType<keyof typeof enumHtmlTags>,
    required: true,
  },
  small: {
    type: Boolean,
    default: false,
  },
})
</script>
