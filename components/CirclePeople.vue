<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '100',
  },
  img: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="rounded-full bg-gray-300 absolute"
    :style="{
      width: width + 'px',
      height: width + 'px',
    }"
  ></div>
</template>
