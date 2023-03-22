<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="shadow px-5 py-3 d-flex justify-content-center justify-content-sm-between">
    <RouterLink to="/">
      <img src="@/assets/svg/logo.svg" alt="Logo StackGames" id="logo" />
    </RouterLink>

    <div class="d-none user-header d-sm-flex gap-2 align-items-center">
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
