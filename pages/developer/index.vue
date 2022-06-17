<template>
  <div
    class="container developer-page">
    <aside
      class="developer-page__aside">
      <developer-aside
        :data="nav">
      </developer-aside>
    </aside>
    
    <main
      class="developer-page__content">
      <content-doc 
        path="/" />
    </main>
  </div>
</template>

<script setup>
import { ElAffix } from 'element-plus'
import DeveloperAside from './components/developer-aside'

useHead({
  title: 'Developer | ECHO | We value your opinions'
})

const nav = [
// {
//   title: 'Introduction',
//   list: [{
//     label: 'Overview',
//     value: 'overview'
//   }, {
//     label: 'Hello',
//     value: 'hello'
//   }]
// },
{
  title: 'Iframe params',
  list: [{
    
  }]
}]
</script>

<style lang="scss">
.developer-page {
  display: flex;
  max-width: 1100px;
  padding-top: 180px;
  padding-bottom: 160px;
  
  &__aside {
    position: sticky;
    top: 124px;
    flex-shrink: 0;
    width: 240px;
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
      margin-bottom: 30px;
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
    
    table {
      width: 100%;
      font-size: 14px;
      text-align: left;
    }
    
    th,
    td {
      padding: 10px 15px;
      border-bottom: 1px solid var(--bg-color);
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
    }
    
    th {
      font-weight: 600;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .developer-page {
    &__aside {
      display: none;
    }
    
    &__content {
      max-width: none;
    }
  }
}
</style>