<template>
  <SectionHero
    :title="pageReviews?.data.attributes.hero.title"
    video=""
    :image="pageReviews?.data.attributes.hero.image.data.attributes.url"
  />
  <SectionAbout :show-video="false" />
  <SectionReviews />
</template>
<script setup lang="ts">
const { getPageReviews } = useData()
const { data: pageReviews } = await getPageReviews()
useSeoMeta({
  title: 'Отзывы',
})
</script>
