<template>
  <SectionContact class="bg-white z-30 relative" />
  <TheMap class="z-30 bg-white relative" />
  <footer class="bg-background-dark-gray relative z-30 text-white py-16">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-5">
        <div>
          <div class="space-y-7">
            <div>
              <ui-subtitle class="text-white opacity-30 mb-2"
                >Адрес</ui-subtitle
              >
              <ui-text class="text-white" as="p">{{
                contact?.data.attributes.address
              }}</ui-text>
            </div>
            <div>
              <ui-subtitle class="text-white opacity-30 mb-2"
                >Время работы</ui-subtitle
              >
              <ui-text class="text-white" as="p"
                ><span v-html="contact?.data.attributes.workingHours"></span
              ></ui-text>
            </div>
            <div>
              <ui-subtitle class="text-white opacity-30 mb-2"
                >Отдел продаж</ui-subtitle
              >
              <ui-text class="text-white" as="p">{{
                contact?.data.attributes.phone
              }}</ui-text>
              <ui-text class="text-white" as="p">{{
                contact?.data.attributes.email
              }}</ui-text>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-7">
          <div>
            <ui-subtitle class="text-white opacity-30 mb-2"
              >О компании</ui-subtitle
            >
            <div class="grid gap-2">
              <nuxt-link to="/about">
                <ui-text class="text-white" as="p">О компании</ui-text>
              </nuxt-link>
              <nuxt-link to="/cases">
                <ui-text class="text-white" as="p">Кейсы</ui-text>
              </nuxt-link>
              <nuxt-link to="/job">
                <ui-text class="text-white" as="p">Карьера</ui-text>
              </nuxt-link>
              <nuxt-link to="/reviews">
                <ui-text class="text-white" as="p">Отзывы</ui-text>
              </nuxt-link>
              <nuxt-link to="/contacts">
                <ui-text class="text-white" as="p">Контакты</ui-text>
              </nuxt-link>
            </div>
          </div>
          <div class="max-w-xs">
            <ui-subtitle class="text-white opacity-30 mb-2"
              >Документы</ui-subtitle
            >
            <div class="grid gap-2">
              <nuxt-link to="/policy">
                <ui-text class="text-white opacity-40" as="p"
                  >Политика обработки ПД</ui-text
                >
              </nuxt-link>
              <nuxt-link to="/personal-data">
                <ui-text class="text-white opacity-40" as="p"
                  >Соглашение об обработке персональных данных</ui-text
                >
              </nuxt-link>
              <nuxt-link :to="requisites" external="true">
                <ui-text class="text-white opacity-40" as="p"
                  >Реквизиты</ui-text
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { getContact, getRequisites } = useData()
const { data: contact } = await getContact()
const { data: requisites } = await getRequisites()
</script>
