<template>
  <div v-for="item in 10" :key="item">
    <div
      v-tada="{
        animation: 'zoom-in',
        delay: item * 100,
      }"
      :style="{
        width: '100px',
        height: '100px',
        background: '#000',
      }"
    ></div>
  </div>
</template>
<script lang="ts" setup></script>
