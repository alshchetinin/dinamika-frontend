<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '100',
  },
  img: {
    type: String,
    default: 'team/2.png',
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
  >
    <nuxt-img
      :src="img"
      alt="команда «Динамика»"
      class="w-full h-full object-cover rounded-full"
    />
  </div>
</template>
