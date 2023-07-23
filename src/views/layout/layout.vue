<template>
  <div class="layout">
    <el-container class="layout-container">
      <el-header >
        <Header />
      </el-header>
      <el-container class="layout-main">
        <el-aside width="250px" :class="{'hidden-aside':isSidebar}">
          <SliderBar />
        </el-aside>
        <el-main>
          <transition :name="transitionState" >
            <router-view class="main">
            </router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./layout.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './layout.scss';
</style>

