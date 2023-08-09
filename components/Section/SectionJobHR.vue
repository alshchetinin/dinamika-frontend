<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
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
        <ui-subtitle> о нас</ui-subtitle>

        <div class="lg:col-span-4 grid lg:grid-cols-2 gap-10">
          <div>
            <ui-title as="h2" size="big" class="mb-7 lg:mb-11">
              <span v-html="title"></span>
            </ui-title>
            <MarkdownRender
              :md="description"
              class="prose prose-a:no-underline"
            />
            <nuxt-link
              class="text-xl underline text-primary hover:text-opacity-80 mt-7 lg:mt-11 block"
              to="/about"
            >
              Подробнее о компании
            </nuxt-link>
          </div>
          <div>
            <nuxt-img
              provider="strapi"
              :src="photo.data.attributes.url"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
