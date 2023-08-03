<script setup lang="ts">
const { getRequisites } = useData()
const { data: url, pending } = getRequisites()
</script>

<template>
  <ui-block>
    <section class="container relative overflow-hidden">
      <div class="absolute -left-32 -top-14 transform -rotate-[10deg] scale-75">
        <LogoAnimation />
      </div>

      <div
        class="grid lg:grid-cols-5 gap-5 bg-button-primary text-white rounded-lg py-20"
      >
        <div
          class="lg:col-start-2 lg:col-end-6 lg:flex grid gap-10 lg:justify-between lg:items-center lg:pr-40"
        >
          <div class="text-center lg:text-left">
            <ui-title as="h2" size="big"> Скачайте карточку компании </ui-title>
            <ui-text as="p" class="lg:max-w-sm mt-3">
              Получите полное представление о нашей компании, услугах и
              стоимости
            </ui-text>
          </div>
          <a
            v-if="!pending"
            class="hover: transition-all transform hover:scale-105 ease-in-out flex flex-col items-center"
            :href="url"
            target="_blank"
          >
            <TailwindSvgIcon name="save_alt" class="text-[80px] text-white" />
            <ui-text as="p" class="mt-2"> Скачать </ui-text>
          </a>
        </div>
      </div>
    </section>
  </ui-block>
</template>
