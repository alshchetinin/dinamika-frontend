<script setup>
const { getReviews } = useData()
const { data: reviews } = await getReviews()
</script>

<template>
  <section v-if="reviews.data.length > 0" class="container">
    <ui-block>
      <div class="grid lg:grid-cols-5 gap-5">
        <ui-subtitle> отзывы</ui-subtitle>

        <div class="lg:col-span-4 grid gap-5">
          <ReviewItem
            v-for="item in reviews.data"
            :key="item.id"
            :data="item.attributes"
          />
        </div>
      </div>
    </ui-block>
  </section>
</template>
