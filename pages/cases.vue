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
        <CaseItem v-for="item in 10" :key="item" />
      </div>
    </ui-block>
  </div>
  <SectionCTA />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Наши кейсы',
  description:
    'Мы гордимся тем, что являемся надежными поставщиками крупных компаний',
})
</script>
