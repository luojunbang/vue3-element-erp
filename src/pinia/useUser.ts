import { defineStore } from 'pinia'

interface UserInfo {
  userName: string | null
}

async function fetchUserInfo(): Promise<UserInfo> {
  return {
    userName: '用户名',
  }
}

export const useUserStore = defineStore('user', {
  state: (): { isLogin: boolean; userInfo: UserInfo } => {
    return {
      isLogin: false,
      userInfo: {
        userName: null,
      },
    }
  },
  actions: {
    async login() {
      this.isLogin = true
    },
    async fetchUserInfo() {
      const userInfo = await fetchUserInfo()
      this.$patch({ userInfo })
    },
    logout() {
      this.isLogin = false
      this.$patch({
        userInfo: {
          userName: null,
        },
      })
    },
  },
})
