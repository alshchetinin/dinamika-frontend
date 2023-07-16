<template>
  <article>
    <div class="grid lg:grid-cols-2 gap-10 p-5 lg:p-10 rounded-xl shadow-md">
      <div>
        <ui-title as="h3" size="medium" class="mb-8">
          Антипинский НПЗ
        </ui-title>
        <div class="mb-8">
          <ui-subtitle class="mb-4"> Задача</ui-subtitle>
          <ui-text as="p" class="max-w-lg">
            В нашу компанию обратился закупочный отдел ЗАО «Антипинский НПЗ» с
            запросом на кабельно-поводниковую продукцию.
          </ui-text>
        </div>
        <div>
          <ui-subtitle class="mb-4"> Решение</ui-subtitle>
          <ui-text as="p" class="max-w-lg">
            В нашу компанию обратился проектный институт с просьбой помочь в
            проектировании крупного Казанского завода по производству полимеров
            «ПАО Казаньоргсинтез». Особенности данного проекта: лотки в
            несколько рядов, сложные технические переходы кабельных трасс.
          </ui-text>
        </div>
      </div>
      <div class="relative">
        <nuxt-img
          src="/hero.jpg"
          class="w-auto h-full object-cover rounded-md"
        />
      </div>
    </div>
  </article>
</template>
