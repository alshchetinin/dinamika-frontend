<script setup>
import ModalReview from '@/components/Modal/ModalReview.vue'
import { useModal } from 'vue-final-modal'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const { open, close } = useModal({
  component: ModalReview,
  attrs: {
    image: props.data?.img_review?.data?.attributes.url,
    onClose() {
      close()
    },
  },
})
</script>

<template>
  <article class="grid lg:grid-cols-7 lg:gap-5 gap-2">
    <div class="lg:col-span-3 shadow-md p-5 lg:p-10 bg-gray-100 rounded-md">
      <div
        v-if="data.client_photo?.data?.attributes.url"
        class="h-20 w-20 mb-5 bg-gray-200 rounded-full"
      >
        <nuxt-img
          :src="data.client_photo.data.attributes.url"
          provider="strapi"
          class="rounded-full w-full h-full object-cover"
        />
      </div>
      <h3 class="mb-1 text-xl font-medium leading-tight">
        {{ data.client_name }}
      </h3>
      <ui-text as="p" class="mb-2"> {{ data.client_job }} </ui-text>
      <ui-button
        v-if="data.img_review?.data?.attributes.url"
        text="Рекомендательное письмо"
        size="medium"
        variant="primary"
        @click="open"
      />
    </div>
    <div class="lg:col-span-4 bg-gray-100 p-5 lg:p-10 rounded-md shadow-md">
      <ui-text as="p">
        {{ data.review }}
      </ui-text>
    </div>
  </article>
</template>
