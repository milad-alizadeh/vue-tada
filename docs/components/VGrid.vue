<template>
  <div class="grid grid-cols-4 gap-5">
    <div
      v-for="item in 40"
      :key="item"
      class="bg-red-400 h-40"
      v-tada="{
        animation: 'zoom-in',
        delay: (item % 4 === 0 ? 4 : item % 4) * 100,
      }"
    ></div>
  </div>
</template>
<script lang="ts" setup></script>
