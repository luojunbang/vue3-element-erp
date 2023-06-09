import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'
import Login from '../views/Apps/Login.vue'
import Layout from '@/layout/index.vue'

// route
import system from './system'
import contract from './contract'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', name: 'login', component: Login },
  { path: '/', component: Layout, children: [{ path: 'dashboard', name: 'Dashboard', component: Dashboard }] },
  // { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '/404', component: () => import(/* webpackChunkName: "404" */ '@/views/Apps/404.vue') },
  { path: '/401', component: () => import(/* webpackChunkName: "401" */ '@/views/Apps/401.vue') },
  system,
  contract,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
