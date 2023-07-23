<template>
  <div class="time-control">
    <div class="time-range">
      <span class="time-text control-title">Tempo</span>
      <el-date-picker v-model="date" format="dd/MM//yyyy" :picker-options="pickOptions" type="daterange" range-separator="Fim" start-placeholder="Data de início" end-placeholder="Data final">
      </el-date-picker>
      <div class="search-box">
        <span class="search-title control-title">Tipo de negócio</span>
        <el-input v-model="searchText" :clearable="true"></el-input>
      </div>
    </div>
    <div class="search-btn">
      <el-button class="icon-button" type="primary" icon="iconfont icon-search" @click="searchData()"><span class="button-text">Consultar</span></el-button>
      <el-button class="icon-button" icon="iconfont icon-reset" @click="refreshData()"><span class="button-text">Redefinir</span></el-button>
    </div>
  </div>
</template>

<script lang="ts" src="./search-operate.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './search-operate.scss';
</style>
