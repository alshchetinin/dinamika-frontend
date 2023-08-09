<template>
  <SectionHero
    :title="pageCases?.data.attributes.hero.title"
    video=""
    :image="pageCases?.data.attributes.hero.image.data.attributes.url"
    :name-button="pageCases?.data.attributes.hero.button.name"
  />
  <SectionAbout :show-video="false" />
  <div class="container" v>
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

<script setup>
const { getCases, getPageCases } = useData()
const { data: pageCases } = await getPageCases()
const { data: cases, error, pending } = await getCases()

useSeoMeta({
  title: 'Наши кейсы',
  description:
    'Мы гордимся тем, что являемся надежными поставщиками крупных компаний',
})
</script>
