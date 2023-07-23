<template>
  <div class="commom-tilte">
    <p class="title">{{title}}</p>
    <div class="operate-btn">
      <slot name="add"></slot>
      <slot name="delete"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./commom-tilte.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './commom-tilte.scss';
</style>
