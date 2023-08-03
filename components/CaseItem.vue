<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article>
    <div class="grid lg:grid-cols-2 gap-10 p-5 lg:p-10 rounded-xl bg-gray-100">
      <div>
        <ui-title as="h3" size="medium" class="mb-8">
          {{ data?.title }}
        </ui-title>
        <div class="mb-8">
          <ui-subtitle class="mb-4"> Задача</ui-subtitle>
          <ui-text as="p" class="max-w-lg">
            <span v-html="data?.task"></span>
          </ui-text>
        </div>
        <div>
          <ui-subtitle class="mb-4"> Решение</ui-subtitle>
          <ui-text as="p" class="max-w-lg">
            <span v-html="data?.result"></span>
          </ui-text>
        </div>
      </div>
      <div class="relative">
        <nuxt-img
          :src="data.image?.data?.attributes.url"
          provider="strapi"
          class="w-auto h-full object-cover rounded-md"
        />
      </div>
    </div>
  </article>
</template>
