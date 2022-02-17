<template>
  <div 
    v-for="item in 10" 
    v-tada="{ animation: 'fade-in' }"
  >
    <div :style="{ width: 100, height: 100, background: '#000' }"></div>
  </div>
</template>
<script lang="ts" setup>

</script>