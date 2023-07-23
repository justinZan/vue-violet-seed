<template>
  <div :class="['slider-menu',{'hidden-aside':isSidebar}]">
    <template v-for="item in routes">
      <router-link v-bind:key="item.path" v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <i :aria-hidden="true" :class="item.icon" />
          <span :show="!isSidebar" class="menu-title" slot="title" v-html="item.children[0].name"></span>
        </el-menu-item>
      </router-link>
      <el-submenu v-bind:key="item.name" :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <i :aria-hidden="true" :class="item.icon" />
          <span class="menu-title" v-if="!isSidebar" slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item v-bind:key="child.name" class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link v-bind:key="child.path" v-else class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <span :show="!isSidebar" class="menu-title" slot="title">{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script lang="ts" src="./slider-menu.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './slider-menu.scss';
</style>

