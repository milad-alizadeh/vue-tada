<template>
  <div class="grid md:grid-cols-2 gap-5 w-full">
    <slot></slot>
    <img class="rounded-md" :src="imageSrc" alt="" />
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  imageSrc: string
}>()
</script>
<style>
div[class*='language-'] {
  margin: 0 !important;
}
</style>
