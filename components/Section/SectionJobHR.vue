<template>
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle> о нас</ui-subtitle>

        <div class="lg:col-span-4 grid lg:grid-cols-2 gap-10">
          <div>
            <ui-title as="h2" size="big" class="mb-7 lg:mb-11">
              Мы — команда, инициативных и вовлеченных людей
            </ui-title>
            <ui-text as="p">
              Команда, объединившая ведущих производителей кабелей и и
              кабеленеесущих систем и эстакад для реализации сложных
              электротехнических проектов в нефтегазовой сфере

              <br /><br />
              Проводим технический и финансовый анализ электротехнического
              проекта и предлагаем оптимальный вариант его исполнения
            </ui-text>
            <nuxt-link
              class="text-xl underline text-primary hover:text-opacity-80 mt-7 lg:mt-11 block"
              to="/about"
            >
              Подробнее о компании
            </nuxt-link>
          </div>
          <div>
            <nuxt-img
              src="hh.jpg"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
