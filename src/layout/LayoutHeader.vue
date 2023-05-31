<template>
  <div class="header h-full flex items-center px-5">
    <el-avatar shape="square" />
    <h2 class="ml-2">项目管理系统</h2>
    <div class="flex-1"></div>
    <el-avatar />
    <div class="ml-2">{{ UserStore.userInfo.userName }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/pinia'
const UserStore = useUserStore()
//lifecycle
onMounted(() => {
  UserStore.fetchUserInfo()
})
</script>

<style lang="scss" scoped>
.header {
  mix-blend-mode: color;
  background-image: linear-gradient(276.62deg, #036cff 0%, rgba(3, 108, 255, 0) 100%);
}
</style>
