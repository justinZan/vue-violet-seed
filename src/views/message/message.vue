<template>
  <div class="message content">
    <SearchOperate @searchData='searchData' @refreshData='refreshData'></SearchOperate>
    <div class="message-body">
      <CommonTitle :title="'Table de resultados SMS'">
        <el-button class="icon-button" slot="add" type="primary" icon="iconfont icon-message"><span class="button-text">Enviar SMS</span></el-button>
        <el-button class="icon-button" slot="delete" icon="iconfont icon-mass"><span class="button-text">Mensagens EM Grupo</span></el-button>
      </CommonTitle>
      <MessageTable v-customLoading="loading" @deleteData="deleteData" :dataList="messageList"></MessageTable>
      <Pagination :dataList="messageList" @currentPage="currentPageChange"></Pagination>
    </div>
  </div>
</template>

<script lang="ts" src="./message.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './message.scss';
</style>
