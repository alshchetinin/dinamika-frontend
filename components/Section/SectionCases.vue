<template>
  <section class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-x-5 gap-y-10">
        <ui-subtitle> наши кейсы</ui-subtitle>

        <div class="lg:col-span-4">
          <ui-title as="h2" size="big">
            Мы гордимся тем, что являемся надежными поставщиками крупных
            компаний
          </ui-title>
        </div>
        <div class="col-span-full">
          <CasesSwiper />
        </div>
      </div>
    </ui-block>
  </section>
</template>
