<template>
  <header
    class="text-white border-b border-b-white absolute top-0 z-10 w-full py-5 border-opacity-20"
  >
    <div class="flex container justify-between items-center">
      <nuxt-link to="/">
        <nuxt-img
          src="/logo.png"
          alt="Логотип компании «Динамика»"
          class="max-w-[185px]"
        />
      </nuxt-link>
      <div class="flex gap-5 py-2">
        <nav
          class="border-r border-white px-5 border-opacity-20 hidden lg:block"
        >
          <ul class="flex gap-6">
            <li>
              <nuxt-link
                class="hover:opacity-70 transition-all"
                to="/#direction"
                >Направления</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover:opacity-70 transition-all" to="/about"
                >О компании</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover:opacity-70 transition-all" to="/cases"
                >Кейсы</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover:opacity-70 transition-all" to="/job"
                >Карьера</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover:opacity-70 transition-all" to="/reviews"
                >Отзывы</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover:opacity-70 transition-all" to="/contacts"
                >Контакты</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <a
          :href="`tel:${contact?.data.attributes.phone}`"
          class="font-semibold hidden lg:block"
          >{{ contact?.data.attributes.phone }}</a
        >
        <button
          class="border-l border-white px-5 border-opacity-20 lg:hidden"
          @click="open"
        >
          <tailwind-svg-icon name="burger" class="text-white text-2xl" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import ModalNavigation from '~/components/Modal/ModalNavigation.vue'
const { getContact } = useData()
const { data: contact } = await getContact()
const { open, close } = useModal({
  component: ModalNavigation,
  attrs: {
    onClose() {
      close()
    },
  },
})
</script>
