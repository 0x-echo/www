<template>
  <footer
    class="chat-footer">
    <div
      class="container">
      <div
        class="chat-footer__top">
        <div
          class="chat-footer__info">
          <router-link
            class="chat-footer__logo"
            title="Echo"
            to="/">
            <img 
              class="chat-footer__logo-image"
              src="@/assets/echo-logo-white.svg" 
              alt="Echo">
          </router-link>
          
          <h3
            class="chat-footer__name">
            ECHO
          </h3>
          
          <p
            class="chat-footer__slogan">
            We value your opinions.
          </p>
          
          <div
            class="chat-footer__social-list">
            <a 
              class="chat-footer__social-item"
              v-for="item in socials"
              :key="item.value"
              :href="item.value"
              target="_blank"
              :title="item.value">
              <i
                class="chat-footer__social-icon"
                :class="item.icon">
              </i>
            </a>
          </div>
        </div>
        
        <div
          class="chat-footer__menu"
          v-for="(item, index) in links"
          :key="index">
          <h6
            class="chat-footer__menu-title">
            {{ item.label }}
          </h6>
          
          <ul>
            <li
              class="chat-footer__menu-item"
              v-for="link in item.list"
              :key="link.value">
              <a 
                class="chat-footer__menu-link"
                :href="link.value"
                :target="link.isExternal ? '_blank' : ''"
                :title="link.value">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div
        class="chat-footer__bottom">
        <p>
          © 2022 Echo
        </p>
      
        <router-link
          title="Privacy Policy"
          to="privacy">
          Privacy Policy
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [{
  icon: 'ri-twitter-fill',
  value: 'twitter'
}, {
  icon: 'ri-discord-fill',
  value: 'discord'
}, {
  icon: 'ri-github-fill',
  value: 'github'
}]

const links = [{
  label: 'About',
  list: [{
    label: 'Vision',
    value: '/vision'
  }, {
    label: 'Careers',
    value: '/careers'
  }, {
    label: 'Blog',
    value: '/blog'
  }]
}, {
  label: 'Dev Center',
  list: [{
    label: 'Developer',
    value: '/developer'
  }, {
    label: 'Github',
    value: 'https://github.com',
    isExternal: true
  }, {
    label: 'Credits',
    value: '/credits'
  }]
}, {
  label: 'Support',
  list: [{
    label: 'Contact',
    value: '/contact'
  }, {
    label: 'FAQ',
    value: '/faq'
  }]
}]
</script>

<style lang="scss">
.chat-footer {
  background: var(--bg-color-dark);
  color: white;
  
  &__container {
  }
  
  &__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 0;
  }
  
  &__logo {
    display: flex;
  }
  
  &__logo-image {
    width: 100px;
  }
  
  &__name {
    margin-top: 10px;
    font-size: 20px;
  }
  
  &__slogan {
    margin-top: 5px;
  }
  
  &__social-list {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  &__social-item {
    display: flex;
    color: white;
    
    & + & {
      margin-left: 20px;
    }
  }
  
  &__social-icon {
    font-size: 24px;
  }
  
  &__menu-title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  
  &__menu-item {
    & + & {
      margin-top: 15px;
    }
  }
  
  &__menu-link {
    color: rgba(white, .8);
      
    &:hover {
      color: white;
    }
  }
  
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-top: 1px solid rgba(white, .1);
    font-size: 14px;
    
    &,
    a {
      color: rgba(white, .6);
    }
    
    a {
      &:hover {
        color: white;
      }
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .chat-footer {
    &__info {
      width: 100%;
    }
    
    &__menu {
      margin-top: 50px;
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .chat-footer {
    &__info {
      flex-direction: column;
    }
    
    &__menu {
      width: 50%;
    }
  }
}
</style>