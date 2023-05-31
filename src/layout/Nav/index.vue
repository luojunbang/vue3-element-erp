<template>
  <div class="h-full flex flex-col">
    <el-menu class="flex-1" :collapse="isCollaspe">
      <MenuItem :menu="menu" />
    </el-menu>
    <el-button class="leading-10 rounded-none text-left transition-all" :style="{ width: isCollaspe ? 'var(--up-collapse-width)' : 'var(--up-expand-width)' }" @click="handleToggleMenu">
      <i-ep-expand v-show="isCollaspe" />
      <i-ep-fold v-show="!isCollaspe" />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue'
import type { Menu } from './type'
import MenuItem from './Menu.vue'
import { useAppStore } from '@/pinia'

// refs
const menu = reactive<Menu[]>([])
const AppStore = useAppStore()

// computed
const isCollaspe = computed(() => AppStore.isMenuCollaspe)

//method
const handleToggleMenu = () => {
  AppStore.toggleMenu()
}
const fecthMenu = async () => {
  return [
    { title: '首页', path: '' },
    {
      title: '系统管理',
      path: 'system',
      children: [
        { title: '用户管理', path: 'user' },
        { title: '系统设置', path: 'setting' },
      ],
    },
  ]
}

//lifecycle
onMounted(async () => menu.push(...(await fecthMenu())))
</script>
