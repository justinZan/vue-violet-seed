<template>
  <div class="header">
    <div class="header-left">
      <p class="shadow"></p>
      <p class="shadow-in"></p>
      <img class="logo" src="@/assets/imgs/logo.png" alt="logo">
      <h1 class="app-title wave">SISTEMA CENTRAL DE CONTACTO</h1>
    </div>
    <div class="header-right">
      <UserInfo></UserInfo>
      <MenuButton></MenuButton>
      <CloseApp></CloseApp>
    </div>
  </div>
</template>

<script lang="ts" src="./header.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './header.scss';
</style>
