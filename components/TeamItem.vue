<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <nuxt-img
      v-if="data?.photo?.data?.attributes?.url"
      :src="data?.photo?.data?.attributes?.url"
      provider="strapi"
      class="h-96 lg:w-full object-cover object-top rounded-md mb-4"
    />
    <div>
      <h3 class="mb-2 text-lg">{{ data.name }}</h3>
      <ui-text as="p" small>
        <span class="opacity-70">Должность:</span>
        {{ data.job }}
      </ui-text>
      <ui-text as="p" small>
        <span class="opacity-70">Стаж:</span>
        {{ data.year }}
      </ui-text>
    </div>
  </div>
</template>
