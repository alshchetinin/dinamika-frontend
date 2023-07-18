<template>
  <div class="grid lg:grid-cols-5 gap-5 mt-10">
    <div class="gap-2 hidden lg:flex">
      <button
        class="swiper-team-prev h-10 w-10 bg-white shadow-md hover:shadow-lg transition-all rounded-full flex items-center justify-center"
      >
        <TailwindSvgIcon
          name="arrow-right"
          class="text-[24px] text-text-basic pl-1 flex-shrink-0 transform rotate-180"
        />
      </button>
      <button
        class="swiper-team-next h-10 w-10 bg-white shadow-md hover:shadow-lg transition-all rounded-full flex items-center justify-center"
      >
        <TailwindSvgIcon
          name="arrow-right"
          class="text-[24px] text-text-basic pl-1 flex-shrink-0"
        />
      </button>
    </div>

    <div class="lg:col-span-4 w-full overflow-hidden">
      <div class="hidden lg:block">
        <Swiper
          ref="swiper"
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :space-between="20"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-team-next',
            prevEl: '.swiper-team-prev',
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
        >
          <SwiperSlide v-for="item in 10" :key="item">
            <TeamItem />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="overflow-x-scroll overflow-hidden w-full lg:hidden">
        <div class="flex items-center gap-5">
          <TeamItem v-for="item in 10" :key="item" class="flex-shrink-0" />
        </div>
      </div>
    </div>
  </div>
</template>
