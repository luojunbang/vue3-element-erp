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
import { reactive } from 'vue'

//ref
const form = reactive({
  username: '',
  password: '',
})

//methods
const handleLogin = () => {
  console.log('login', form)
}
</script>
