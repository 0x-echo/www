<template>
  <el-drawer
    v-bind="$attrs"
    append-to-body
    custom-class="menu-drawer"
    direction="ltr"
    :show-close="false"
    size="100%"
    :with-header="false">
    <div
      class="menu-drawer__header">
      <img 
        class="menu-drawer__logo"
        src="@/assets/echo-logo-white.svg" 
        alt="ECHO">
      
      <div
        class="menu-drawer__close-button"
        role="button"
        @click="$emit('update:modelValue', false)">
        <i
          class="ri-close-line">
        </i>
      </div>
    </div>
    
    <div
      class="menu-drawer__content">
      <div
        class="menu-drawer__list">
        <router-link
          class="menu-drawer__item"
          v-for="item in menu"
          :key="item.value"
          :to="item.value"
          @click="$emit('update:modelValue', false)">
          {{ item.label }}
        </router-link>
      </div>
      
      <div
        class="menu-drawer__action">
        <el-button
          class="el-button--xlarge menu-drawer__action-button"
          type="primary"
          @click="getWidget">
          Get My Widget
        </el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ElButton, ElDrawer } from 'element-plus' 

const emits = defineEmits([
  'get-widget',
  'update:modelValue'
])

const menu = [{
  icon: 'ri-home-line',
  label: 'Home',
  value: '/'
}, {
  icon: 'ri-question-line',
  label: 'FAQ',
  value: '/faq'
}, {
  icon: 'ri-code-s-slash-line',
  label: 'Developer',
  value: '/developer'
}, {
  icon: 'ri-file-text-line',
  label: 'Changelog',
  value: '/changelog'
}]

const getWidget = () => {
  emits('update:modelValue', false)
  emits('get-widget')
}
</script>

<style lang="scss">
.menu-drawer {
  .el-drawer__body {
    padding: 0;
    background: var(--bg-color-dark);
  }
  
  &__header {
    height: 84px;
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__logo {
    width: 40px;
  }
  
  &__close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    font-size: 24px;
    color: white;
    opacity: .8;
    cursor: pointer;
    transition: opacity .3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
  
  &__content {
    min-height: calc(100vh - 84px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 30px;
  }
  
  &__list {
    flex: 1;
  }
  
  &__item {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 24px;
    color: white;
    outline: none;
    
    & + & {
      margin-top: 30px;
    }
    
    &::before {
      content: '·';
      margin-right: 20px;
      opacity: .8;
    }
  }
  
  &__action {
    margin-top: 30px;
    
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
      background: repeating-linear-gradient(135deg, rgba(white, .5), rgba(white, .5) 1px, var(--bg-color-dark) 0, var(--bg-color-dark) 10px);
    }
  }
  
  &__action-button {
    width: 100%;
    margin-top: 30px;
    font-size: 16px;
  }
}
</style>