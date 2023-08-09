<script setup>
const { getMainPage } = useData()
const { data: mainPage, error, pending } = await getMainPage()
</script>
<template>
  <SectionHero
    :title="mainPage.data.attributes.title"
    video=""
    :image="mainPage.data.attributes.hero.image.data.attributes.url"
    :name-button="mainPage.data.attributes.hero.button.name"
  />
  <SectionAbout />
  <SectionAdvantages />
  <AppForm class="z-30 bg-white relative" />
  <SectionCompany class="z-30 bg-white relative" />
  <SectionStrengths class="z-30 bg-white relative" />
  <SectionCases class="z-30 bg-white relative" />
  <SectionCTA class="z-30 bg-primary relative" />
</template>
