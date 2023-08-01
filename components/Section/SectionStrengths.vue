<template>
  <section class="container container-streng-animation">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5 mb-20">
        <ui-subtitle>сильные стороны</ui-subtitle>

        <div class="lg:col-span-4 -mt-2">
          <ui-title as="h2" size="big"> работая с нами, вы получите </ui-title>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-5">
        <div class="p-2 relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <p class="text-[57px] font-medium leading-none mb-3">01</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[0].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[0].description"></span>
          </ui-text>
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <nuxt-img
            :src="strength[0].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <p class="text-[57px] font-medium leading-none mb-3">02</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[1].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[1].description"></span>
          </ui-text>
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <nuxt-img
            :src="strength[1].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <nuxt-img
            :src="strength[2].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <p class="text-[57px] font-medium leading-none mb-3">03</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[2].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[2].description"></span>
          </ui-text>
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <nuxt-img
            :src="strength[3].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 relative">
          <div
            class="absolute inset-0 w-full h-[105%] z-10 bg-white streng-animation"
          ></div>
          <p class="text-[57px] font-medium leading-none mb-3">04</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[3].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[3].description"></span>
          </ui-text>
        </div>
      </div>
    </ui-block>
  </section>
</template>

<script setup lang="ts">
import { animate, stagger, spring, inView } from 'motion'

const { getStrength } = useData()
const { data: strength } = await getStrength()

onMounted(() => {
  const anmationArray = document.querySelectorAll('.streng-animation')
  inView(
    '.container-streng-animation',
    (info) => {
      animate(
        anmationArray,
        {
          scaleX: 0,
          transformOrigin: 'left center',
          x: '100%',
        },
        {
          easing: 'linear',
          duration: 1.5,
          delay: stagger(0.05),
        }
      )
    },
    { margin: '500px 0px 0px 0px' }
  )
})
</script>

<style scoped></style>
