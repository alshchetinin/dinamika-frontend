<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  descriptionOne: {
    type: String,
    default: '',
  },
  descriptionTwo: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle> команда</ui-subtitle>

        <div class="lg:col-span-4">
          <ui-title as="h2" size="big">
            <span v-html="title"></span>
          </ui-title>
          <div class="grid lg:grid-cols-2 mt-5 lg:mt-10 gap-10">
            <ui-text as="p">
              <span v-html="descriptionOne"></span>
            </ui-text>
            <ui-text as="p">
              <span v-html="descriptionTwo"></span>
            </ui-text>
            <div>
              <ui-button
                size="large"
                text="Работать у нас"
                link="/job"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
