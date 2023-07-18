<template>
  <SectionHero
    title="Мы гордимся тем, что являемся надежными поставщиками крупных компаний"
    video=""
    image="cases.jpg"
  />
  <SectionAbout :show-video="false" />
  <div class="container">
    <ui-block>
      <div class="grid gap-10">
        <CaseItem
          v-for="item in cases?.data"
          :key="item.id"
          :data="item.attributes"
        />
      </div>
    </ui-block>
  </div>
  <SectionCTA />
</template>

<script setup lang="ts">
const { getCases } = useData()
const { data: cases } = await getCases()
useSeoMeta({
  title: 'Наши кейсы',
  description:
    'Мы гордимся тем, что являемся надежными поставщиками крупных компаний',
})
</script>
