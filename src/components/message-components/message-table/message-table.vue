<template>
  <div class="message-table">
    <el-table :data="dataList.data" height="100%" stripe>
      <el-table-column align="center" type="index" width="55" highlight-current-row show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="Enviar tempo" show-overflow-tooltip min-width="150">
        <template slot-scope="scope">
          {{$d(new Date(scope.row.time), 'date-time')}}
        </template>
      </el-table-column>
      <el-table-column prop="number" label="Número de telefone" show-overflow-tooltip min-width="150"></el-table-column>
      <el-table-column prop="complete" label="Enviar status" class-name="data-status" show-overflow-tooltip min-width="150">
        <template slot-scope="scope">
          <i :class=" scope.row.complete | status-icon "></i>
          <span>{{statusTransform(scope.row.complete)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="sms" label="Teor de SMS" show-overflow-tooltip min-width="150"></el-table-column>
      <el-table-column label="Operação" width="185" min-width="100">
        <template slot-scope="scope">
          <div class="delete-button" @click="deleteData(scope.row.id)">
            <i :aria-hidden="true" class="iconfont icon-delete"></i>
            <span>Deletar</span>
          </div>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" src="./message-table.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './message-table.scss';
</style>
