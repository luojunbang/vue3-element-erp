<template>
  <el-form :model="form">
    <el-form-item label="账号">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
  </el-form>
  <el-button @click="handleLogin">登录</el-button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/pinia'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const UserStore = useUserStore()
//ref
const form = reactive({
  username: '',
  password: '',
})

//methods
const handleLogin = async () => {
  UserStore.login().then(res => {
    router.push('/')
  })
}
</script>
