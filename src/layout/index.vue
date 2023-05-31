<template>
  <el-container class="h-screen">
    <el-header class="border-b" height="56px"><LayoutHeader /></el-header>
    <el-container class="overflow-hidden">
      <el-aside :width="AppStore.isMenuCollaspe ? 'var(--up-collapse-width)' : 'var(--up-expand-width)'" class="h-full transition-all">
        <el-scrollbar view-style="height:100%"><Nav /></el-scrollbar>
      </el-aside>
      <el-main class="h-full">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import LayoutHeader from './LayoutHeader.vue'
import Nav from './Nav/index.vue'
import { useAppStore } from '@/pinia'

const AppStore = useAppStore()

// computed
</script>

<style>
.el-main,
.el-header {
  padding: 0;
}
.el-aside {
  --up-expand-width: 200px;
  --up-collapse-width: 64px;
}
</style>
