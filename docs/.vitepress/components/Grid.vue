<template>
  <div 
    v-for="item in 10" 
    v-tada="{ animation: 'fade-in' }"
  >
    <div class="w-40 h-40 bg-red-400"></div>
  </div>
</template>

<script lang="ts" setup>

</script>