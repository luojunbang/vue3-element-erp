import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

import { useUserStore } from '@/pinia'
import type { RouteLocationNormalized } from 'vue-router'

const whiteList = ['/login', '/404', '401']

router.beforeEach((to, from, next) => {
  const UserStore = useUserStore()
  NProgress.start()
  if (whiteList.includes(to.path)) next()
  else {
    if (!UserStore.isLogin) {
      next('/login')
    } else if (roleCheck(to)) {
      next()
    } else {
      next('/401')
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

function roleCheck(to: RouteLocationNormalized): boolean {
  console.log(to)
  if (to.path === '/system/user') return false
  const UserStore = useUserStore()
  return true
}
