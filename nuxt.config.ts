import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'Third.chat',
    meta: [{ 
      name: 'viewport', 
      content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' 
    }, {
      hid: 'keywords',
      name: 'keywords',
      content: 'chat, web3',
    }, {
      hid: 'description',
      name: 'description',
      content: 'third.chat',
    }]
  },
  css: [
    'remixicon/fonts/remixicon.css',
    'element-plus/dist/index.css',
    '@/styles/_element-plus.scss',
    '@/styles/_base.scss',
    '@/styles/_reset.scss',
    '@/styles/themes/_default.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_var.scss";',
        }
      }
    }
  },
  ssr: false
})
