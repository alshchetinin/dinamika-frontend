<template>
  <section class="lg:min-h-screen flex flex-col justify-center relative">
    <div class="absolute inset-0 hidden lg:block">
      <TeamCircle />
    </div>
    <ui-block>
      <div class="grid container lg:grid-cols-5 gap-5 relative z-10">
        <div></div>
        <div class="lg:col-span-4">
          <ui-title as="h2" size="big">
            Наша история началась <br />
            <span class="text-primary">с 2009 года</span>
          </ui-title>
          <ui-text as="p" class="max-w-lg mt-5">
            Команда Динамики — это инициативные и вовлеченные люди, которые не
            боятся сложных задач и готовы к реализации масштабных проектов. У
            нас нет новичков, только квалифицированные специалисты с опытом
            работы от 4 лет в сфере электротехнической продукции и
            проектирования
          </ui-text>
          <nuxt-link
            class="text-xl underline text-primary hover:text-opacity-80 mt-7 block"
            to="/about"
          >
            Подробнее о компании
          </nuxt-link>
        </div>
      </div>
    </ui-block>
  </section>
</template>
