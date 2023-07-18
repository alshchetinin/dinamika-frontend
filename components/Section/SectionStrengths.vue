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
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">01</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[0].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[0].description"></span>
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            :src="strength[0].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">02</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[1].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[1].description"></span>
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            :src="strength[1].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="streng-animation">
          <nuxt-img
            :src="strength[2].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">03</p>
          <ui-title as="h3" size="small" class="mb-5">{{
            strength[2].title
          }}</ui-title>
          <ui-text as="p" small>
            <span v-html="strength[2].description"></span>
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            :src="strength[3].image.data.attributes.url"
            provider="strapi"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
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
          opacity: [0, 1],
          x: ['-100%', 0],
        },
        {
          // easing: spring(),
          duration: 1.5,
          delay: stagger(0.05),
        }
      )
    },
    { margin: '0px 500px 0px 0px' }
  )
})
</script>
