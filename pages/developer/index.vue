<template>
  <div
    class="container chat-template">
    <el-affix
      :offset="134">
      <aside
        class="chat-template__aside">
        <developer-aside
          :data="nav">
        </developer-aside>
      </aside>
    </el-affix>
    
    <main
      class="chat-template__content">
      <developer-section>
      </developer-section>
    </main>
    
    <el-backtop 
      :right="80" 
      :bottom="160">
      <i
        class="ri-arrow-up-line">
      </i>
    </el-backtop>
  </div>
</template>

<script setup>
import { ElAffix, ElBacktop } from 'element-plus'
import DeveloperAside from './components/developer-aside'
import DeveloperSection from './components/developer-section'

const nav = [{
  title: 'Introduction',
  list: [{
    label: 'Overview',
    value: 'overview'
  }, {
    label: 'Hello',
    value: 'hello'
  }]
}, {
  title: 'Payments'
}]
</script>

<style lang="scss">
.chat-template {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 100px;
  
  &__aside {
    flex-shrink: 0;
    width: 240px;
  }
  
  &__content {
    width: 100%;
    max-width: 740px;
  }
}
</style>