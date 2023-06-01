import Layout from '@/layout/index.vue'
import TabView from '@/layout/TabView.vue'

export default {
  path: '/contract',
  component: Layout,
  children: [
    {
      path: '',
      name: 'contract',
      component: TabView,
      children: [
        {
          path: 'inner',
          component: () => import(/* WebpackChunkName: contract-inner */ '@/views/Contract/inner.vue'),
        },
        {
          path: 'outer',
          component: () => import(/* WebpackChunkName: contract-outer */ '@/views/Contract/outer.vue'),
        },
      ],
    },
  ],
}
