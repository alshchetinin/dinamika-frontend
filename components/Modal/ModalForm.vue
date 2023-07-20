<template>
  <VueFinalModal
    content-transition="vfm-slide-left"
    class="flex justify-start items-start"
    content-class="h-screen w-screen lg:w-1/2 bg-white flex flex-col justify-center items-center relative"
  >
    <button
      class="w-7 h-7 lg:h-14 lg:w-14 flex items-center transition-all justify-center dark:bg-white bg-black rounded-full absolute right-5 top-5"
      @click="emit('close')"
    >
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5687 23.4998L35.4814 33.4125C36.0527 33.9838 36.0527 34.9101 35.4814 35.4814C34.9101 36.0527 33.9838 36.0527 33.4125 35.4814L23.4998 25.5687L13.5872 35.4814C13.0159 36.0527 12.0896 36.0527 11.5183 35.4814C10.947 34.9101 10.947 33.9838 11.5183 33.4125L21.431 23.4998L11.5183 13.5872C10.947 13.0159 10.947 12.0896 11.5183 11.5183C12.0896 10.947 13.0159 10.947 13.5872 11.5183L23.4998 21.431L33.4125 11.5183C33.9838 10.947 34.9101 10.947 35.4814 11.5183C36.0527 12.0896 36.0527 13.0159 35.4814 13.5872L25.5687 23.4998Z"
          fill="#2D2D2D"
        />
      </svg>
    </button>
    <div class="bg-white p-5">
      <div class="relative h-full">
        <div class="flex flex-col justify-end w-full">
          <div class="mb-7">
            <h3 class="text-lg lg:text-[2.25rem] uppercase mb-2 font-semibold">
              Оставьте заявку
            </h3>
            <p class="max-w-md">Мы свяжемся с вами в течении 1 часа</p>
          </div>
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
            <p class="leading-tight opacity-70 mt-4 text-xs">
              Нажимая кнопку вы соглашаетесь с политикой обработки персональных
              данных
            </p>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
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
  } else {
    toast.error('Заполните все поля')
  }
}
</script>
