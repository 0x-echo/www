<template>
  <header
    class="chat-header"
    :class="theme ? `chat-header--${theme}` : ''">
    <div
      class="section-container chat-header__container">
      <div
        class="chat-header__left">
        <router-link
          class="chat-header__logo"
          title="Echo"
          to="/">
          <img 
            class="chat-header__logo-image"
            :src="theme === 'dark' ? LogoWhite : Logo" 
            alt="Echo">
            
          <span
            class="chat-header__logo-label">
            ECHO
          </span>
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
        <el-button
          size="large"
          type="primary"
          @click="getWidget">
          Get Your Widget
        </el-button>
      </div>
      
      <i
        class="ri-menu-line chat-header__menu"
        @click="menuDrawerVisible = true">
      </i>
    </div>
    
    <menu-drawer
      v-model="menuDrawerVisible">
    </menu-drawer>
  </header>
</template>

<script setup>
import { ElButton } from 'element-plus'
import Logo from '/assets/echo-logo.svg'
import LogoWhite from '/assets/echo-logo-white.svg'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import jump from 'jump.js'

const props = defineProps({
  theme: {
    type: String
  }
})

const nav = [{
  label: 'Home',
  value: '/'
}, {
  label: 'FAQ',
  value: '/faq'
}, {
  label: 'Developer',
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

const menuDrawerVisible = ref(false)

onMounted(() => {
  ScrollTrigger.create({
    trigger: '.chat-header',
    start: 0,
    end: 99999,
    toggleClass: 'chat-header--fixed'
  })
  
  // const sectionDark = document.querySelectorAll('[data-color-theme=dark]')
  // console.log(sectionDark)
  // sectionDark.forEach(el => {
    // ScrollTrigger.create({
    //   trigger: '.landing-feature',
    //   toggleClass: {
    //     target: '.chat-header',
    //     className: 'chat-header--hello'
    //   }
    // })
  // })
})

const route = useRoute()
const router = useRouter()

const getWidget = () => {
  if (route.path === '/') {
    jump('#landing-form', {
      offset: 0
    })
  } else {
    router.push('/widget')
  }
}
</script>

<style lang="scss">
.chat-header {
  width: 100%;
  height: 84px;
  background: rgba(white, .8);
  backdrop-filter: blur(10px);
  
  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  
  &--dark {
    background: var(--bg-color-dark);
    
    .chat-header__logo-label,
    .chat-header__nav-item,
    .chat-header__menu {
      color: white;
    }
  }
  
  &__container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  &__left,
  &__right {
    flex: 1;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    
    &,
    &:hover {
      color: var(--text-color-primary);
    }
  }
  
  &__logo-image {
    width: 40px;
  }
  
  &__logo-label {
    margin-left: 10px;
    font-weight: bold;
  }
  
  &__nav {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  }
  
  &__nav-item {
    position: relative;
    padding: 0 5px;
    line-height: 32px;
    color: var(--text-color-primary);
    opacity: .6;
    transition: all .3s ease;
    
    &:hover,
    &.router-link-active {
      opacity: 1;
    }
    
    & + & {
      margin-left: 40px;
    }
  }
  
  &__right {
    display: flex;
    justify-content: flex-end;
  }
  
  &__menu {
    display: none;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .chat-header {
    &__nav,
    &__right {
      display: none;
    }
    
    &__menu {
      display: block;
    }
  }
}
</style>