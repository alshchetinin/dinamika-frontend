<template>
  <section class="card bg-white min-h-screen">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5 container">
        <ui-subtitle> о нас</ui-subtitle>

        <div class="lg:col-span-4">
          <div class="grid lg:grid-cols-2 gap-10">
            <div>
              <ui-title as="h2" size="big">
                Финансовый аудит электротехнического проекта
              </ui-title>
              <ui-text as="p" class="mt-5">
                Проанализируем проект на предмет экономического соответствия
                материалов и оборудования — подберем продукцию, которая будет
                отвечать требованиям, но по более выгодной стоимости.
              </ui-text>
              <div class="mt-10">
                <ui-subtitle class="mb-3">Результат</ui-subtitle>
                <ui-title as="h3" size="medium" class="mb-5">
                  Экономия<br />БЮДЖЕТА
                </ui-title>
                <p class="text-primary text-[72px] font-bold leading-none mb-3">
                  >20%
                </p>
                <ui-text as="p" class="mb-3 max-w-sm">
                  при закупке кабельно-проводниковой продукции, КНС и эстакад
                </ui-text>
              </div>
              <ui-button
                text="Получить консультацию"
                size="large"
                variant="primary"
              />
            </div>
            <div>
              <nuxt-img
                src="/hero.jpg"
                alt="1"
                class="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </ui-block>
  </section>
</template>
