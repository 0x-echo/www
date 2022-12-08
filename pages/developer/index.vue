<template>
  <div
    class="container developer-page">
    <aside
      class="developer-page__aside">
      <developer-nav
        :data="data.body.toc.links">
      </developer-nav>
    </aside>
    
    <main
      class="developer-page__content">
      <div
        class="developer-page__nav">
        <div
          class="developer-page__nav-content"
          @click="developerDrawerVisible = true">
          <i
            class="ri-menu-2-line developer-page__menu"> 
          </i>
          
          <span>
            Table of Content
          </span>
        </div>
      </div>
    
      <content-renderer 
        :value="data" />

      <h2
        id="#echo-button">
        ECHO Button
      </h2>

      <h3
        id="package-manager">
        Installing with package manager
      </h3>

      <div 
        v-html="installCode">
      </div>

      <h3
        id="cdn">
        Using CDN
      </h3>

      <div 
        v-html="installCDNCode">
      </div>

      <h3
        id="usage">
        Usage
      </h3>

      <div 
        v-html="code">
      </div>

      <h3
        id="always-show-popover">
        Always Show Popover
      </h3>
      
      <div 
        class="developer-page__button-box">
        <div
          class="developer-page__button-box-item">
          <div 
            id="echo-button-light">
          </div>
        </div>

        <div 
          class="developer-page__button-box-item is-dark">
          <div 
            id="echo-button-dark">
          </div>
        </div>
      </div>

      <h3
        id="show-popover-on-hover">
        Show Popover on hover
      </h3>
      
      <div 
        class="developer-page__button-box">
        <div
          class="developer-page__button-box-item">
          <div 
            id="echo-button-light-2">
          </div>
        </div>

        <div 
          class="developer-page__button-box-item is-dark">
          <div 
            id="echo-button-dark-2">
          </div>
        </div>
      </div>
    </main>
    
    <el-drawer
      v-model="developerDrawerVisible"
      append-to-body
      custom-class="developer-page__drawer"
      direction="ltr"
      :show-close="false"
      size="70%"
      :with-header="false">
      <developer-nav
        :data="data.body.toc.links"
        @on-click="developerDrawerVisible = false">
      </developer-nav>
    </el-drawer>
  </div>
</template>

<script setup>
import { ElDrawer } from 'element-plus'
import DeveloperNav from './components/developer-nav'
import EchoButton from '@0xecho/button'
import hljs from '@0xecho/highlight.js/es/common'

useHead({
  title: 'Developer | ECHO | Long live our opinion'
})

let developerDrawerVisible = ref(false)

const installCode = '<pre class="hljs"><code>' + hljs.highlight(`
  npm install @0xecho/button

  // or

  yarn add @0xecho/button
  `, { language: 'shell', ignoreIllegals: true }).value +
               '</code></pre>';

const installCDNCode = '<pre class="hljs"><code>' + hljs.highlight(`https://cdn.jsdelivr.net/npm/@0xecho/button/dist/button.min.js

  or

  https://unpkg.com/@0xecho/button/dist/button.min.js`,

   { language: 'html', ignoreIllegals: true }).value + '</code></pre>';
              console.log(installCDNCode)

// maxDisplayLikers: 5, // max display likers on popover, default: 5 
const code = '<pre class="hljs"><code>' + hljs.highlight(`import EchoButton from '@0xecho/button'
  
  new EchoButton({
     targetUri: 'https://0xecho.com', // commenting target, required
     alwaysShowPopover: true, // whether always show popover, default: false
     partnerName: '', // if spcified, partner name will be shown on popover
     numberType: 'power' // button display number type, power(default) or count,
     theme: 'light' // dark or light(default)
  }).mount('#echo-button-light')`, { language: 'js', ignoreIllegals: true }).value +
               '</code></pre>';

let data = reactive({
  body: {
    toc: {
      links: []
    }
  }
})

onMounted(async () => {
  const rs = await queryContent('/').findOne()
  Object.assign(data, rs)
  
  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
    alwaysShowPopover: true,
    popoverAutoFlip: false
  }).mount('#echo-button-light')

  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
    alwaysShowPopover: true,
    theme: 'dark',
    partnerName: 'Partner',
    popoverAutoFlip: false,
    numberType: 'count'
  }).mount('#echo-button-dark')

  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
  }).mount('#echo-button-light-2')

  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
    theme: 'dark',
    numberType: 'count'
  }).mount('#echo-button-dark-2')
})
</script>

<style lang="scss">
.developer-page {
  display: flex;
  max-width: 1160px;
  min-height: 100vh;
  padding-top: 180px;
  padding-bottom: 160px;
  font-family: 'Inter', sans-serif;
  
  &__aside {
    position: sticky;
    top: 124px;
    flex-shrink: 0;
    width: 260px;
    height: 300px;
    margin-right: 40px;
  }
  
  &__content {
    flex: 1;
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    
    h2,
    h3 {
      a {
        color: var(--text-color-primary);
      }
    }
    
    h2 {
      font-size: 36px;
      
      + p {
        margin-top: 30px;
      }
    }
    
    h3 {
      margin: 30px 0;
      font-size: 24px;
    }
    
    p,
    pre {
      margin-bottom: 20px;
    }

    pre {
      padding: 10px;

      code {
        white-space: break-spaces;
      }
    }

    
    p {
      color: var(--text-color-secondary);
      
      + h2 {
        margin-top: 80px;
        padding-top: 40px;
        border-top: 1px solid var(--border-color);
      }
    }
    
    code {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      background: var(--bg-color);
      color: var(--text-color-secondary);
    }
    pre {
      border-radius: var(--border-radius);
      background: var(--bg-color);
    }
    
    .table-wrapper {
      width: 100%;
      overflow-x: auto;
      
      + h3 {
        margin-top: 80px;
      }
    }
    
    table {
      width: 100%;
      font-size: 14px;
      text-align: left;
    }
    
    th,
    td {
      padding: 10px 15px;
      border-bottom: 1px solid var(--bg-color);
      min-width: 120px;
    }
    
    th:first-of-type,
    td:first-of-type {
      padding-left: 0;
    }
    
    th:last-of-type,
    td:last-of-type {
      padding-right: 0;
    }
    
    td:nth-child(3) {
      max-width: 250px;
      min-width: 200px;
    }
    
    th {
      font-weight: 600;
    }
  }
  
  &__nav {
    position: sticky;
    top: 84px;
    display: none;
    padding-bottom: 20px;
    background: white;
  }
  
  &__nav-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    border-radius: var(--border-radius);
    font-size: 12px;
    color: var(--text-color-secondary);
    background: var(--bg-color);
    cursor: pointer;
  }
  
  &__menu {
    margin-right: 10px;
    font-size: 16px;
  }
  
  &__drawer {
    .el-drawer__body  {
      padding-top: 84px;
      padding-right: 50px;
    }
  }
  
  &__button-box {
    border: 1px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
  }
  
  &__button-box-item {
    width: 50%;
    padding: 240px 0 60px;
    text-align: center;
    
    &.is-dark {
      background: var(--bg-color-dark);
    }
  }
}
@media screen and (max-width: 960px) {
  .developer-page {
    &__aside {
      display: none;
    }
    
    &__content {
      width: 100%;
    }
    
    &__nav {
      display: flex;
    }
  }
}

@media screen and (max-width: 600px) {
  .developer-page {
    &__button-box-item {
      width: 100%;
    }
  }
}
</style>