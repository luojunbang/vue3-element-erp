import Layout from '@/layout/index.vue'

export default {
  path: '/system',
  component: Layout,
  children: [
    { path: 'setting', name: 'setting', component: () => import(/* webpackChunkName: "setting" */ '@/views/System/Setting/index.vue') },
    { path: 'user', name: 'user', component: () => import(/* webpackChunkName: "user" */ '@/views/System/User/index.vue') },
  ],
}
