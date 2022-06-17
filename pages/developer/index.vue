<template>
  <div
    class="container developer-page">
    <aside
      class="developer-page__aside">
      <developer-aside
        :data="data.body.toc.links">
      </developer-aside>
    </aside>
    
    <main
      class="developer-page__content">
      <div
        class="developer-page__nav">
        <div
          class="developer-page__nav-content">
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
    </main>
  </div>
</template>

<script setup>
import DeveloperAside from './components/developer-aside'

useHead({
  title: 'Developer | ECHO | We value your opinions'
})

const { data } = await useAsyncData('dev', () => queryContent('/').findOne())
</script>

<style lang="scss">
.developer-page {
  display: flex;
  max-width: 1160px;
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
    }
    
    h3 {
      padding-top: 40px;
      margin: 80px 0 30px;
      border-top: 1px solid var(--border-color);
      font-size: 24px;
    }
    
    p,
    pre {
      margin-bottom: 20px;
    }
    
    p {
      color: var(--text-color-secondary);
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
</style>