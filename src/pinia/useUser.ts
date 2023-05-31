import { defineStore } from 'pinia'

interface UserInfo {
  userName: string
}

async function fetchUseInfo(): Promise<UserInfo> {
  return {
    userName: '用户名',
  }
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: '--',
    }
  },
  actions: {
    async login() {
      const userInfo = await fetchUseInfo()
      this.$patch(userInfo)
    },
    logout() {
      this.$patch({
        userName: '--',
      })
    },
  },
})
