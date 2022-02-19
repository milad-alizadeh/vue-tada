<template>
  <div class="grid gap-20 w-full">
    <div v-tada="{ animation: 'fade-up', target: () => fadeUp }">
      <img ref="fadeUp" src="../assets/02.jpg" />
    </div>

    <div v-tada="{ animation: 'fade-down', target: () => fadeDown }">
      <img ref="fadeDown" src="../assets/03.jpg" />
    </div>

    <div v-tada="{ animation: 'fade-left' }">
      <img src="../assets/04.jpg" v-tada="{ animation: 'fade-left' }" />
    </div>

    <div v-tada="{ animation: 'fade-right' }">
      <img src="../assets/05.jpg" />
    </div>

    <div v-tada="{ animation: 'zoom-in' }">
      <img src="../assets/06.jpg" />
    </div>

    <div v-tada="{ animation: 'zoom-out' }">
      <img src="../assets/07.jpg" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const fadeUp = ref<HTMLElement>()
const fadeDown = ref<HTMLElement>()
</script>
