<template>
  <el-popover popper-class="menu-pop" class="menu-popover" trigger="click">
    <ul class="menu-box">
      <li @click="menuHidden">
        <el-button>Menu Change</el-button>
      </li>
      <li>
        <el-radio-group v-model="skin" @change="handleCommandSkin(skin)">
          <el-radio v-for="(item,index) in skins" :key="index" :label="item">{{item}}</el-radio>
        </el-radio-group>
      </li>
    </ul>
    <div slot="reference" class="menu-button iconfont icon-menu">
    </div>
  </el-popover>

</template>

<script lang="ts" src="./menu-button.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './menu-button.scss';
</style>
