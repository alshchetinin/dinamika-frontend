<template>
  <SectionHero
    title="Каждый клиент <br/>наша гордость"
    video=""
    image="reviews.jpg"
  />
  <SectionAbout :show-video="false" />
  <SectionReviews />
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Отзывы',
})
</script>
