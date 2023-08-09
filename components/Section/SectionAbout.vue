<script setup>
defineProps({
  showVideo: {
    type: Boolean,
    default: true,
  },
})

const { getOnac } = useData()
const { data: onac, error } = await getOnac()
</script>

<template>
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle> о нас</ui-subtitle>

        <div class="lg:col-span-4">
          <ui-title as="h2" size="big">
            {{ onac?.data.attributes.title }}
          </ui-title>
          <div class="grid lg:grid-cols-5 mt-5 lg:mt-10 gap-10">
            <ui-text as="p" class="lg:col-span-3">
              {{ onac?.data.attributes.description }}
            </ui-text>
            <div class="lg:col-span-2">
              <ui-text as="p"> {{ onac.data.attributes.fact_text }}</ui-text>
              <p class="text-3xl lg:text-4xl leading-none font-bold">
                {{ onac.data.attributes.fact_number }}
              </p>
              <ui-text as="p"> {{ onac.data.attributes.fact_text_2 }} </ui-text>
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
  <video
    v-if="showVideo"
    id="video-background"
    class="h-[500px] w-full object-cover"
    autoplay
    muted
    loop
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>
</template>
