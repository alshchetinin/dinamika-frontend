<script setup>
const { getVacancie } = useData()
const { data: vacancie } = getVacancie()
</script>

<template>
  <section class="container">
    <ui-block>
      <div v-if="vacancie.data.length > 0" class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle>Карьера</ui-subtitle>
        <div class="lg:col-span-4 grid gap-5">
          <JobItem
            v-for="item in vacancie.data"
            :key="item.id"
            :data="item.attributes"
          />
        </div>
      </div>
    </ui-block>
  </section>
</template>
