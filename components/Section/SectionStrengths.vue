<template>
  <section class="container container-streng-animation">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5 mb-20">
        <ui-subtitle>сильные стороны</ui-subtitle>

        <div class="lg:col-span-4 -mt-2">
          <ui-title as="h2" size="big"> работая с нами, вы получите </ui-title>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-5">
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">01</p>
          <ui-title as="h3" size="small" class="mb-5">Цельность</ui-title>
          <ui-text as="p" small>
            Мы погружаемся в проект, чтобы создать комплексное техническое
            предложение. Мы готовы к коммуникации на всех уровнях и со всеми
            участниками процесса —  проектными институтами, подрядчиками,
            заказчиками и производителями.  <br />
            <br />Мы обеспечиваем прозрачность и результативность в
            переговорах. 
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            src="/hero.jpg"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">02</p>
          <ui-title as="h3" size="small" class="mb-5">Надежность</ui-title>
          <ui-text as="p" small>
            Мы проверяем все наши технические решения — симулируем реальные
            условия на оборудовании заводов-изготовителей, где тщательно
            контролируем каждый технологический этап.
            <br />
            <br />
            Мы защищаем предложенные нами альтернативные технические решения
            перед заказчиками.
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            src="/hero.jpg"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="streng-animation">
          <nuxt-img
            src="/hero.jpg"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">03</p>
          <ui-title as="h3" size="small" class="mb-5">Прозрачность</ui-title>
          <ui-text as="p" small>
            Мы организуем аудиты заводов, чтобы заказчик мог убедиться в их
            мощности и качестве производственного процесса.
            <br /><br />
            Создаем рабочие группы для максимально быстрой работы по
            пересогласованию проектных решений. В них входят инженеры
            заводов-изготовителей, профессионалы нашей компании, главные
            инженеры проекта и специалисты закупа подрядчика. 
          </ui-text>
        </div>
        <div class="streng-animation">
          <nuxt-img
            src="/hero.jpg"
            alt="1"
            class="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div class="p-2 streng-animation">
          <p class="text-[57px] font-medium leading-none mb-3">04</p>
          <ui-title as="h3" size="small" class="mb-5">Оптимизация</ui-title>
          <ui-text as="p" small>
            Мы знаем, что в проекты часто закладываются неоправданно дорогие
            импортные продукты, которые можно заменить на российские аналоги и
            снизить стоимость закупа без потери качества. 
            <br />
            <br />
            Наша цель — помочь максимально оптимизировать проект и предоставить
            модернизированное техническое решение.
          </ui-text>
        </div>
      </div>
    </ui-block>
  </section>
</template>

<script setup lang="ts">
import { animate, stagger, spring, inView } from 'motion'

onMounted(() => {
  const anmationArray = document.querySelectorAll('.streng-animation')
  inView(
    '.container-streng-animation',
    (info) => {
      animate(
        anmationArray,
        {
          opacity: [0, 1],
          x: ['-100%', 0],
        },
        {
          // easing: spring(),
          duration: 1.5,
          delay: stagger(0.05),
        }
      )
    },
    { margin: '0px 500px 0px 0px' }
  )
})
</script>
