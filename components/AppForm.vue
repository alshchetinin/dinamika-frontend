<template>
  <section style="box-shadow: 0px -36px 104px 0px rgba(0, 0, 0, 0.1)">
    <ui-block>
      <div class="container bg-primary text-white p-5 rounded-lg lg:p-20">
        <ui-title as="h2" size="big" class="mb-6 lg:mb-10">
          Получите консультацию по вашему проекту
        </ui-title>
        <div class="flex flex-col lg:flex-row gap-4">
          <input
            v-model="email"
            type="text"
            placeholder="yourname@email.com"
            class="h-14 text-text-basic"
          />

          <input
            v-model="name"
            type="text"
            placeholder="Укажите ФИО"
            class="h-14 text-text-basic"
          />

          <input
            v-model="phone"
            v-maska
            type="tel"
            data-maska="+7 (###) ###-##-##"
            placeholder="+7 (_ _ _)  _ _ _ - _ _ - _ _"
            class="h-14 text-text-basic"
          />

          <ui-button
            size="large"
            text="Оставить заявку"
            variant="secondary"
            class="w-full"
            @click="sendForm"
          />
        </div>
        <p class="leading-tight opacity-70 mt-4 text-xs">
          Нажимая кнопку вы соглашаетесь с политикой обработки персональных
          данных
        </p>
      </div>
    </ui-block>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { vMaska } from 'maska'
const name = ref('')
const phone = ref('')
const email = ref('')
const toast = useToast()
const rules = {
  name: { required },
  phone: { required },
}

const { sendTelegram } = useTickets()
const v$ = useVuelidate(rules, { name, phone })
const { utmParams } = useUtm()
const sendForm = async () => {
  if (!v$.value.$invalid) {
    await sendTelegram(name.value, phone.value, utmParams.value)
    name.value = ''
    phone.value = ''
    toast.success('Заявка успешно отправлена')
  }
}
</script>
