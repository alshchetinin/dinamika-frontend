<script setup lang="ts">
import ModalForm from '@/components/Modal/ModalForm.vue'
import { useModal } from 'vue-final-modal'
const { getContact } = useData()
const { data: contact } = await getContact()
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
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle>контакты</ui-subtitle>

        <div class="lg:col-span-4">
          <div class="grid lg:grid-cols-2 gap-10">
            <div>
              <ui-title as="h2" size="medium" class="mb-5">
                Свяжитесь с нами любым удобным способом
              </ui-title>
              <ui-button
                text="Оставить заявку"
                size="large"
                variant="primary"
                @click="open"
              />
            </div>
            <div class="space-y-7">
              <div>
                <ui-subtitle class="text-primary mb-2">Адрес</ui-subtitle>
                <ui-text as="p">{{ contact?.data.attributes.address }}</ui-text>
              </div>
              <div>
                <ui-subtitle class="text-primary mb-2"
                  >Время работы</ui-subtitle
                >
                <ui-text as="p"
                  ><span v-html="contact?.data.attributes.workingHours"></span
                ></ui-text>
              </div>
              <div>
                <ui-subtitle class="text-primary mb-2"
                  >Отдел продаж</ui-subtitle
                >
                <ui-text as="p">{{ contact?.data.attributes.phone }}</ui-text>
                <ui-text as="p">{{ contact?.data.attributes.email }}</ui-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
