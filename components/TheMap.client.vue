<template>
  <YandexMap
    :coordinates="coordinates"
    :detailed-controls="detailedControls"
    :controls="controls"
    :zoom="13"
  >
    <YandexMarker :coordinates="coordinates" :marker-id="1234" />
  </YandexMap>
</template>

<script setup>
import { yandexMap } from 'vue-yandex-maps'
const coordinates = [57.180495, 65.514098]
const controls = ['fullscreenControl']
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } }
</script>

<style>
.yandex-container {
  height: 490px;
}
</style>
