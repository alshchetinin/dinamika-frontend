<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="py-2 text-left">
        <article class="grid lg:grid-cols-7 lg:gap-5 gap-2">
          <div
            class="lg:col-span-5 bg-gray-100 p-5 lg:p-10 rounded-md shadow-md"
          >
            <ui-title as="h3" size="medium" class="mb-3">
              {{ data.title }}
            </ui-title>
            <ui-text as="p">
              {{ data.description }}
            </ui-text>
          </div>
          <div
            class="lg:col-span-2 text-primary font-medium shadow-md p-5 lg:p-10 bg-gray-100 hover:bg-primary transition-all hover:text-white relative flex items-center justify-center rounded-md"
          >
            <div>{{ open ? 'Скрыть' : 'Подробнее' }}</div>
          </div>
        </article>
      </DisclosureButton>
      <DisclosurePanel
        class="bg-gray-100 rounded-md shadow-md p-5 lg:p-10 mt-3"
      >
        <MarkdownRender :md="data.content" class="prose prose-a:no-underline" />
        <nuxt-link
          v-if="data.link"
          :to="data.link"
          target="_blank"
          external
          class="mt-10 inline-block"
        >
          Подробнее на hh.ru
        </nuxt-link>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
