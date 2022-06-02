<template>
  <el-drawer
    v-bind="$attrs"
    append-to-body
    custom-class="menu-drawer"
    direction="ltr"
    size="100%">
    <router-link
      class="menu-drawer__item"
      v-for="item in menu"
      :key="item.value"
      :to="item.value"
      @click="$emit('update:modelValue', false)">
      {{ item.label }}
    </router-link>
  </el-drawer>
</template>

<script setup>
import { ElDrawer } from 'element-plus' 

const menu = [{
  icon: 'ri-question-line',
  label: 'FAQ',
  value: '/faq'
}, {
  icon: 'ri-code-s-slash-line',
  label: 'Developer',
  value: '/developer'
}, {
  icon: 'ri-apps-line',
  label: 'Widgets',
  value: '/widgets'
}, {
  icon: 'ri-logout-circle-r-line',
  label: 'Logout',
  value: 'logout'
}]
</script>

<style lang="scss">
.menu-drawer {
  .el-drawer__body {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-primary);
    height: 40px;
    font-size: 20px;
    background: white;
    
    & + & {
      margin-top: 30px;
    }
  }
}
</style>