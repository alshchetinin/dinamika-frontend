<template>
  <SectionHero
    :title="about?.data.attributes.hero.title"
    :image="about?.data.attributes.hero.image.data.attributes.url"
    video=""
  />
  <SectionAboutCEO
    :text="about?.data.attributes.CEO.text"
    :photo="about?.data.attributes.CEO.photo"
  />
  <SectionAboutCareer
    :title="about?.data.attributes.team.title"
    :description-one="about.data.attributes.team.description1"
    :description-two="about.data.attributes.team.description2"
  />
  <SectionAboutTeam />
  <SectionRequisites />
</template>

<script setup>
const { getAboutPage } = useData()
const { data: about, error, pending } = await getAboutPage()
useSeoMeta({
  title: 'О компании',
  description: 'Наша история началась с 2009 года',
})
</script>
