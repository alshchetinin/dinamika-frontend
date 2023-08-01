<script setup>
import ModalForm from '@/components/Modal/ModalForm.vue'
import { useModal } from 'vue-final-modal'
defineProps({
  block: {
    type: Object,
    required: true,
  },
})
const { open, close } = useModal({
  component: ModalForm,
  attrs: {
    onClose() {
      close()
    },
  },
})
</script>

<template>
  <section
    class="card bg-white min-h-screen"
    style="box-shadow: 0px -36px 104px 0px rgba(0, 0, 0, 0.1)"
  >
    <ui-block class="h-full">
      <div class="grid lg:grid-cols-5 gap-5 container h-full">
        <ui-subtitle> о нас</ui-subtitle>

        <div class="lg:col-span-4 lg:flex">
          <div class="grid lg:grid-cols-2 gap-10">
            <div class="flex flex-col justify-between h-full pb-24">
              <div>
                <ui-title as="h2" size="big">
                  <span v-html="block.title"></span>
                </ui-title>
                <ui-text as="p" class="mt-5">
                  <span v-html="block.description"></span>
                </ui-text>
              </div>
              <div class="mt-10">
                <ui-subtitle class="mb-3">Результат</ui-subtitle>
                <ui-title
                  v-if="block.result.title"
                  as="h3"
                  size="medium"
                  class="mb-5"
                >
                  <span v-html="block.result?.title"></span>
                </ui-title>
                <p
                  v-if="block.result.fact"
                  class="text-primary text-[72px] font-bold leading-none mb-3"
                >
                  {{ block.result?.fact }}
                </p>
                <ui-text v-if="block.result?.text" as="p" class="mb-3 max-w-sm">
                  <span v-html="block.result?.text"></span>
                </ui-text>
                <ul v-if="block.result.list.length > 0" class="grid gap-3 mb-6">
                  <li
                    v-for="(item, i) in block.result.list"
                    :key="item.id"
                    class="uppercase text-lg"
                  >
                    <span class="opacity-40">0{{ i + 1 }} / </span
                    >{{ item.title }}
                  </li>
                </ul>
                <ui-button
                  :text="block.button.name"
                  size="large"
                  variant="primary"
                  class="mb-10 lg:mb-0"
                  @click="open"
                />
              </div>
            </div>
            <div>
              <nuxt-img
                :src="block.image.data.attributes.url"
                provider="strapi"
                alt="1"
                class="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
