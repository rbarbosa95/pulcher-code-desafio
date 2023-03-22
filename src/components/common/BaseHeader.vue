<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="shadow px-5 py-3 d-flex justify-content-between">
    <RouterLink to="/">
      <img src="@/assets/svg/logo.svg" alt="Logo StackGames" />
    </RouterLink>

    <div class="user-header d-flex gap-2 align-items-center">
      <img class="img-fluid rounded-circle" src="@/assets/img/rbarbosa.png" alt="Ramon Barbosa" />
      <span class="text-bg-custom-color">Ramon Barbosa</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.user-header {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
