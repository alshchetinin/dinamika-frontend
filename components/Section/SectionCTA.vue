<template>
  <section
    class="relative min-h-[600px] py-28 bg-cover bg-no-repeat bg-right overflow-hidden"
    style="background-image: url('/CTA.png')"
  >
    <div
      class="absolute bottom-0 transform -rotate-[160deg] scale-75 z-0 opacity-10"
    >
      <LogoAnimation />
    </div>
    <div
      class="absolute inset-0 opacity-10 pointer-events-none z-0 bg-cover bg-no-repeat bg-right"
      style="background-image: url('/CTA.png')"
    ></div>
    <svg
      class="w-full absolute left-0 -top-[1px] right-0"
      viewBox="0 0 1440 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.03125H1440L0 97.0312V0.03125Z" fill="white" />
    </svg>
    <svg
      class="w-full absolute left-0 -bottom-[1px] right-0"
      viewBox="0 0 1440 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1440 97H0L1440 0V97Z" fill="white" />
    </svg>
    <div class="container relative z-10">
      <ui-block>
        <div class="grid lg:grid-cols-5 gap-5 mb-20 text-white">
          <ui-subtitle>сотрудничество</ui-subtitle>

          <div class="lg:col-span-2 -mt-2">
            <ui-title as="h2" size="small">
              Мы являемся членами Нефтегазового кластера Тюменской области
            </ui-title>
            <ui-text as="p" class="text-white mt-8 max-w-sm">
              — площадки для обмена опытом, поиска и реализации передовых
              решений в ТЭК. Поэтому мы всегда в повестке и знаем о вопросах
              сферы, которые стоят наиболее остро.
            </ui-text>
          </div>
          <div class="lg:col-span-2 place-items-end">
            <ApploaderForm />
          </div>
        </div>
      </ui-block>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
