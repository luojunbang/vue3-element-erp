const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const ElementPlus = [
  AutoImport({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
  }),
  Components({
    resolvers: [
      // Auto register icon components
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep'],
      }),
      ElementPlusResolver(),
    ],
  }),
  Icons({
    autoInstall: true,
  }),
]
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [...ElementPlus],
  },
  chainWebpack: config => {},
})
