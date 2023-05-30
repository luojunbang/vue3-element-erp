<template>
  <el-container class="h-screen overflow-hidden">
    <el-aside width="200px" class="h-full">
      <el-scrollbar max-height="h-full" view-style="height:100%"><Nav /></el-scrollbar>
    </el-aside>
    <el-container class="overflow-hidden">
      <el-header class="border-b"><LayoutHeader /></el-header>
      <el-main class="h-full">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import LayoutHeader from './LayoutHeader.vue'
import Nav from './Nav/index.vue'
</script>

<style>
.el-main {
  padding: 0;
}
</style>
