<template>
  <SectionHero
    :title="pageHR?.data.attributes.hero.title"
    :name-button="pageHR.data.attributes.hero.button.name"
  />
  <SectionJobHR
    :title="pageHR.data.attributes.title"
    :description="pageHR.data.attributes.description"
    :photo="pageHR.data.attributes.photo"
  />
  <SectionJobVacan />
</template>

<script setup>
useSeoMeta({
  title: 'Карьера',
})
const { getPageHR } = useData()
const { data: pageHR, error } = await getPageHR()
</script>
