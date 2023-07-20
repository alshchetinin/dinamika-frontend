<template>
  <ui-block>
    <article class="container pt-20 text-text-basic">
      <div class="prose lg:prose-lg mx-auto">
        <ui-title as="h1" size="big" class="text-text-basic">
          {{ data?.data.attributes.title }}
        </ui-title>
        <MarkdownRender :md="data.data.attributes.content" />
      </div>
    </article>
  </ui-block>
</template>

<script setup>
useSeoMeta({
  title: 'Соглашение об обработке персональных данных',
})
useHead({
  bodyAttrs: {
    class: 'dark',
  },
})

const { findOne } = useStrapi()
const { data, pending, error, refresh } = await useAsyncData(
  'personalnye-dannye',
  () =>
    findOne('personalnye-dannye', {
      populate: 'deep',
    })
)
</script>
