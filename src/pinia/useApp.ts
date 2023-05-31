import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMenuCollaspe: false,
    }
  },
  actions: {
    toggleMenu() {
      this.isMenuCollaspe = !this.isMenuCollaspe
    },
  },
})
