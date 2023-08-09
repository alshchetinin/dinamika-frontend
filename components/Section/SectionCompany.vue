<script setup>
const { getOnac } = useData()
const { data: onac, error } = await getOnac()
</script>
<template>
  <section class="lg:min-h-screen flex flex-col justify-center relative">
    <div class="absolute inset-0 hidden lg:block">
      <TeamCircle />
    </div>
    <ui-block>
      <div class="grid container lg:grid-cols-5 gap-5 relative z-10">
        <div></div>
        <div class="lg:col-span-4">
          <ui-title as="h2" size="big">
            <span v-html="onac.data.attributes.block_history.title"></span>
          </ui-title>
          <ui-text as="p" class="max-w-lg mt-5">
            {{ onac.data.attributes.block_history.description }}
          </ui-text>
          <nuxt-link
            class="text-xl underline text-primary hover:text-opacity-80 mt-7 block"
            to="/about"
          >
            Подробнее о компании
          </nuxt-link>
        </div>
      </div>
    </ui-block>
  </section>
</template>
