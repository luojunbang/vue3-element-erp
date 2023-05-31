<template>
  <el-container class="h-screen">
    <el-header class="border-b" height="56px"><LayoutHeader /></el-header>
    <el-container class="overflow-hidden">
      <el-aside :width="AppStore.isMenuCollaspe ? 'var(--up-collapse-width)' : 'var(--up-expand-width)'" class="h-full transition-all">
        <el-scrollbar view-style="height:100%"><Nav /></el-scrollbar>
      </el-aside>
      <el-main class="h-full">
        <el-scrollbar height="100%" wrap-class="p-[--up-main-padding] bg-[--up-background-color]">
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
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
import { useRoute } from 'vue-router'

const AppStore = useAppStore()
const route = useRoute()
// computed
</script>

<style>
.el-main,
.el-header {
  padding: 0;
}
</style>
