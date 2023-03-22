<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from '@/components/common/BaseHeader.vue'
</script>

<template>
  <BaseHeader />
  <main class="fluid-container px-5 mt-5">
    <RouterView />
  </main>
</template>

<style scoped></style>
