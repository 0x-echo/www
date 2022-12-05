import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API: process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://node1.0xecho.com',
      DID_PARENT: process.env.NODE_ENV === 'development' ? 'imac.bit' : '0xecho.bit'
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  meta: {
    meta: [{ 
      name: 'viewport', 
      content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' 
    }, {
      hid: 'keywords',
      name: 'keywords',
      content: 'comment, like, unlike, tip, upvote, downvote, widget, arweave, decentralized, decentralized comment protocol, chat, web3',
    }, {
      hid: 'description',
      name: 'description',
      content: 'ECHO',
    }],
    script: [{
      src: 'https://analytics.0xecho.com/js/plausible.js',
      'data-domain': '0xecho.com',
      defer: true
    }],
    link: [{
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon'
    }, {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    }, {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: ''
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&family=Inter:wght@400;600&display=swap'
    }]
  },
  css: [
    'remixicon/fonts/remixicon.css',
    'element-plus/dist/index.css',
    '@/styles/_element-plus.scss',
    '@/styles/_base.scss',
    '@/styles/_reset.scss',
    '@/styles/themes/_default.scss',
    '@/styles/highlight/github.scss'
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
