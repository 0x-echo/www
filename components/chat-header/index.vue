<template>
  <el-affix 
    :offset="0"
    :z-index="101">
    <header
      class="chat-header">
      <div
        class="container chat-header__container">
        <div
          class="chat-header__left">
          <router-link
            class="chat-header__logo"
            title="Third.chat"
            to="/">
            third.chat
          </router-link>
        </div>
        
        <nav
          class="chat-header__nav">
          <router-link
            class="chat-header__nav-item"
            v-for="item in nav"
            :key="item.value"
            :title="item.label"
            :to="item.value">
            {{ item.label }}
          </router-link>
        </nav>
        
        <div
          class="chat-header__right">
          <!-- <el-button
            size="large"
            type="primary"
            @click="$emit('connect-wallet')">
            Connect Wallet
          </el-button> -->
          
          <el-popover
            :offset="0"
            placement="bottom"
            popper-class="chat-header__user-popover"
            :show-arrow="false"
            trigger="click"
            :width="140">
            <template 
              #reference>
              <div
                class="chat-header__user">
                <!-- <img
                  class="chat-header__user-wallet-icon" 
                  src="@/assets/metamask.svg" 
                  alt="metamask"> -->
                  
                <span
                  class="chat-header__user-name">
                  {{ $ellipsisInMiddle('0x1243353533456') }}
                </span>
                
                <i
                  class="ri-arrow-drop-down-line chat-header__user-arrow-icon">
                </i>
              </div>
            </template>
            
            <template 
              #default>
              <menu-item
                v-for="item in userMenu"
                :key="item.value"
                :icon="item.icon"
                :is-link="item.isLink"
                :label="item.label"
                :link="item.value">
              </menu-item>
            </template>
          </el-popover>
        </div>
      </div>
    </header>
  </el-affix>
</template>

<script setup>
import { ElAffix, ElButton, ElPopover } from 'element-plus'

const nav = [{
  label: 'FAQ',
  value: '/faq'
}, {
  label: 'Docs',
  value: '/developer'
}]

const userMenu = [{
  icon: 'ri-apps-line',
  label: 'Widgets',
  value: '/widgets',
  isLink: true
}, {
  icon: 'ri-logout-circle-r-line',
  label: 'Logout',
  value: 'logout'
}]
</script>

<style lang="scss">
.chat-header {
  height: 84px;
  background: rgba(white, .8);
  backdrop-filter: blur(10px);
  
  &__container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  &__left,
  &__nav,
  &__right {
    flex: 1;
  }
  
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  }
  
  &__nav-item {
    position: relative;
    color: var(--text-color-primary);
    transition: all .3s ease;
    
    &:hover {
      color: var(--color-primary);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: calc(50% - 5px);
      width: 10px;
      height: 2px;
      background: var(--color-primary);
      opacity: 0;
      transform: scale3d(0, 1, 1);
      transition: all .3s ease;
      z-index: 1;
    }
    
    &.router-link-active {
      color: var(--color-primary);
      
      &::after {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
    
    & + & {
      margin-left: 40px;
    }
  }
  
  &__right {
    display: flex;
    justify-content: flex-end;
  }
  
  &__user-popover {
    &.el-popper {
      box-shadow: var(--popover-box-shadow);
      border: 0;
    }
  }
  
  &__user {
    display: flex;
    align-items: center;
    width: 140px;
    height: 40px;
    padding: 0 8px 0 12px;
    border-radius: var(--border-radius);
    background: var(--bg-color);
    cursor: pointer;
  }
  
  &__user-wallet-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  
  &__user-name {
    flex: 1;
    margin: 0 6px 0 10px;
    font-size: 12px;
    color: var(--text-color-primary);
  }
  
  &__user-arrow-icon {
    color: var(--text-color-muted);
  }
}
</style>