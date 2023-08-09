<template>
  <SectionHero
    :title="contact?.data.attributes.hero.title"
    video=""
    :image="contact?.data.attributes.hero.image.data.attributes.url"
    :name-button="contact?.data.attributes.hero.button.name"
  />
  <!-- <SectionAbout :show-video="false" /> -->
  <!-- <SectionCTA /> -->
</template>

<script setup>
useSeoMeta({
  title: 'Контакты',
})
const { getContact } = useData()
const { data: contact } = await getContact()
</script>
