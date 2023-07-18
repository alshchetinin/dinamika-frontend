<template>
  <div class="hidden lg:block">
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
      <SwiperSlide
        v-for="item in cases?.data"
        :key="item.id"
        class="cursor-pointer"
      >
        <p class="pb-5 border-b text-sm text-center">
          {{ item.attributes.title }}
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
      <SwiperSlide v-for="item in cases?.data" :key="item.id" class="p-2">
        <CaseItem :data="item.attributes" />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="lg:hidden grid gap-10">
    <CaseItem
      v-for="item in cases?.data"
      :key="item.id"
      :data="item.attributes"
    />
  </div>
</template>

<script setup lang="ts">
const { getMainCase } = useData()
const { data: cases } = await getMainCase()
const mainSwiper = ref(null)
const thumbsSwiper = ref(null)
const setSwiper = (swiper: any) => {
  mainSwiper.value = swiper
}
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>
