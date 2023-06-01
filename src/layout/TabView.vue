<template>
  <div class="no-scroll-container block-wrapper flex flex-col">
    <div class="h-[50px] border-b flex px-4">
      <div
        class="px-4 text-center cursor-pointer rounded-t-xl flex items-center justify-center bg-gray-100"
        :class="cpIsActive(item.key) ? 'tab-active' : ''"
        @click="handleNav(item)"
        v-for="item in tabList"
        :key="item.key"
      >
        {{ item.label }}
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue'
import type { Tab } from './type'
import { useRoute, useRouter } from 'vue-router'
// refs
const tabList = reactive<Tab[]>([])
const router = useRouter()
const route = useRoute()
// computed
const cpIsActive = computed(() => (path: string) => route.path.includes(path))

//methods
const fetchTabList = async () => {
  return [
    { label: '内部项目', key: 'inner', baseUrl: '/contract' },
    { label: '外部项目', key: 'outer', baseUrl: '/contract' },
  ]
}
const handleNav = (item: Tab) => {
  router.push(`${item.baseUrl}/${item.key}`)
}

//lifecycle
onMounted(async () => {
  console.log('onMounted')

  tabList.push(...(await fetchTabList()))
  router.push(`${tabList[0].baseUrl}/${tabList[0].key}`)
})
</script>

<style lang="scss" scoped>
.tab-active {
  @apply bg-primary text-white shadow-lg relative;

  --width: 16px;
  @mixin ear-style {
    content: '';
    position: absolute;
    height: var(--width);
    width: var(--width);
    @apply bg-primary;
    bottom: 0px;
  }
  &::before {
    @include ear-style;
    right: 99%;
    mask-image: radial-gradient(circle at left top, transparent 0px, transparent var(--width), white var(--width));
    mask-position: center center;
    mask-size: var(--width) var(--width);
    mask-repeat: no-repeat;
  }
  &::after {
    @include ear-style;
    left: 99%;
    mask-image: radial-gradient(circle at right top, transparent 0px, transparent var(--width), white var(--width));
    mask-position: center center;
    mask-size: var(--width) var(--width);
    mask-repeat: no-repeat;
  }
}
</style>
