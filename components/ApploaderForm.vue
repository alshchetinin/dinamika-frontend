<template>
  <div
    class="bg-white p-10 text-text-basic rounded-md shadow-lg lg:-mt-5 lg:max-w-md"
  >
    <div class="flex flex-col justify-end w-full">
      <div class="space-y-6">
        <label class="block">
          <p class="mb-2">Как к вам обращаться *</p>
          <input
            v-model="name"
            type="text"
            placeholder="Укажите ФИО"
            class="h-14"
          />
        </label>
        <label class="block">
          <p class="mb-2">Телефон *</p>
          <input
            v-model="phone"
            v-maska
            type="tel"
            data-maska="+7 (###) ###-##-##"
            placeholder="+7 (_ _ _)  _ _ _ - _ _ - _ _"
            class="h-14"
          />
        </label>
        <ui-button
          size="large"
          text="Оставить заявку"
          variant="primary"
          class="w-full"
          @click="sendForm"
        />
        <p class="leading-tight opacity-70 mt-4 text-xs text-center">
          Нажимая кнопку вы соглашаетесь с политикой обработки персональных
          данных
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { VueFinalModal } from 'vue-final-modal'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { vMaska } from 'maska'
import { useVfm } from 'vue-final-modal'
const props = defineProps({
  title: {
    type: String,
    default: 'Заказать звонок',
  },
  description: {
    type: String,
    default:
      'Не беспокоим лишними звонками, ответим на интересующие вопросы и расскажем подробнее о проекте.',
  },
  macroID: {
    type: String,
    default: null,
  },
  goal: {
    type: String,
    default: null,
  },
})

const vfm = useVfm()
const emit = defineEmits(['close'])
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
    emit('close')
    toast.success('Заявка успешно отправлена')
  }
}
</script>
