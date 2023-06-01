<template>
  <template v-for="item in menu" :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="cpHref(item.path)">
      <template #title>
        <el-icon><i-ep-circle-check-filled /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <Menu :menu="item.children" :baseUrl="cpHref(item.path)" />
    </el-sub-menu>

    <template v-else>
      <Link :to="cpHref(item.path)">
        <el-menu-item :index="cpHref(item.path)">
          <el-icon><i-ep-location /></el-icon>
          <template #title>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </Link>
    </template>
  </template>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
import type { PropType } from 'vue'
import { onMounted, computed } from 'vue'
import type { Menu } from '../type'

const props = defineProps({
  menu: {
    type: Array as PropType<Menu[]>,
    required: true,
  },
  baseUrl: {
    type: String,
    default: '',
  },
})

//computed
const cpHref = computed(() => {
  return (path: string) => `${props.baseUrl}/${path}`
})

onMounted(() => {})
</script>
