<template>
  <Swiper
    class="mt-3 thumbs-swiper"
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperFreeMode]"
    :slides-per-view="5"
    :watch-slides-progress="true"
    :loop="true"
    :navigation="{
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    }"
    @swiper="setThumbsSwiper"
  >
    <SwiperSlide v-for="item in cases" :key="item.id" class="cursor-pointer">
      <p class="pb-5 border-b text-sm text-center">
        {{ item.title }}
      </p>
    </SwiperSlide>
  </Swiper>
  <Swiper
    ref="swiper"
    :modules="[SwiperAutoplay, SwiperThumbs]"
    :slides-per-view="1"
    :loop="true"
    :thumbs="{ swiper: thumbsSwiper }"
    @swiper="setSwiper"
  >
    <SwiperSlide v-for="item in cases" :key="item.id" class="p-2">
      <CaseItem />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const cases = [
  {
    id: 1,
    title: 'Антипинский НПЗ',
  },
  {
    id: 2,
    title: 'ЖК Европейский',
  },
  {
    id: 3,
    title: 'ЖК Октябрьский',
  },
  {
    id: 4,
    title: 'Улица Дзержинского',
  },
  {
    id: 5,
    title: 'Каюмовское месторождение',
  },
]
const mainSwiper = ref(null)
const thumbsSwiper = ref(null)

const setSwiper = (swiper: any) => {
  mainSwiper.value = swiper
}
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>
