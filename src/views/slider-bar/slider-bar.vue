<template>
  <div class="slider-bar">
    <p class="slider-title" v-if="!isSidebar">SYSTEM NAVIGATION</p>
    <el-menu class="slider" mode="vertical" :default-active="$route.path" :collapse="isSidebar">
      <SliderMenu :routes='permission_routers'></SliderMenu>
    </el-menu>
  </div>

</template>

<script lang="ts" src="./slider-bar.ts">

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './slider-bar.scss';
</style>
