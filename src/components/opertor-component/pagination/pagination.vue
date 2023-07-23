<template>
  <div class="pagination">
    <el-pagination 
    @current-change="handleCurrentChange" 
    :current-page.sync="currentPage" 
    :page-size="pageSize"
    :total="dataList.total"
    :page-count="5" 
    :layout="layout"></el-pagination>
  </div>
</template>

<script lang="ts" src="./pagination.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './pagination.scss';
</style>
