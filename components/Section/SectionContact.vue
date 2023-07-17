<script setup lang="ts">
import ModalForm from '@/components/Modal/ModalForm.vue'
import { useModal } from 'vue-final-modal'

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
                <ui-text as="p">Тюмень, Коммунистическая, 70 к3 ст16</ui-text>
              </div>
              <div>
                <ui-subtitle class="text-primary mb-2"
                  >Время работы</ui-subtitle
                >
                <ui-text as="p">пн–пт: 08:30-17:30</ui-text>
              </div>
              <div>
                <ui-subtitle class="text-primary mb-2"
                  >Отдел продаж</ui-subtitle
                >
                <ui-text as="p">+7 (345) 258 84 88</ui-text>
                <ui-text as="p">dinamika-72@mail.ru</ui-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
