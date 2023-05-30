<template>
  <div class="h-full flex flex-col">
    <el-menu class="flex-1">
      <MenuItem :menu="menu" />
    </el-menu>
    <el-button class="leading-7 w-full rounded-none">
      <i-ep-d-arrow-left />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import type { Menu } from './type'
import MenuItem from './Menu.vue'
const menu = reactive<Menu[]>([])

//method
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
