<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle> руководитель</ui-subtitle>

        <div class="lg:col-span-4 p-10 bg-gray-100 rounded-2xl">
          <div class="grid lg:grid-cols-5 gap-10">
            <div class="lg:col-span-3">
              <MarkdownRender :md="text" class="prose prose-a:no-underline" />
              <ui-text as="p" class="text-primary mt-10">
                Основатель компании «Динамика»
                <br />
                <b>Анна Сергеевна Шадская</b></ui-text
              >
            </div>
            <div class="lg:col-span-2">
              <nuxt-img
                provider="strapi"
                :src="photo.data.attributes.url"
                class="w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
