<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="grid lg:grid-cols-7 lg:gap-5 gap-2">
    <div class="lg:col-span-5 bg-gray-100 p-5 lg:p-10 rounded-md shadow-md">
      <ui-title as="h3" size="medium" class="mb-3">
        {{ data.title }}
      </ui-title>
      <ui-text as="p">
        {{ data.description }}
      </ui-text>
    </div>
    <div
      class="lg:col-span-2 text-primary font-medium shadow-md p-5 lg:p-10 bg-gray-100 hover:bg-primary transition-all hover:text-white relative flex items-center justify-center rounded-md"
    >
      <nuxt-link
        :to="data.link"
        target="_blank"
        external
        class="w-full h-full absolute inset-0"
      >
      </nuxt-link>
      <div>Подробнее</div>
    </div>
  </article>
</template>
