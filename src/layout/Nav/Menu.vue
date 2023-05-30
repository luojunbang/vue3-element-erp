<template>
  <template v-for="item in menu" :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="cpHref(item.path)">
      <template #title>{{ item.title }}</template>
      <Menu :menu="item.children" :baseUrl="cpHref(item.path)" />
    </el-sub-menu>
    <el-menu-item v-else :index="cpHref(item.path)">
      <Link :to="cpHref(item.path)">{{ item.title }}</Link>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
import type { PropType } from 'vue'
import { onMounted, computed } from 'vue'
import type { Menu } from './type'

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
