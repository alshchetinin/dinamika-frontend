<template>
  <SectionHero
    title="Начните сотрудничать уже сегодня <br/>на выгодных условиях"
    video=""
    image="contact.jpg"
  />
  <SectionAbout :show-video="false" />
  <SectionCTA />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Контакты',
})
</script>
