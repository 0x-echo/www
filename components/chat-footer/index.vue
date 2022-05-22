<template>
  <footer
    class="chat-footer">
    <div
      class="chat-footer__container">
      <p>
        2022 © All rights reserved
      </p>
      
      <div
        class="chat-footer__link-list">
        <a 
          class="chat-footer__link-item"
          v-for="item in links"
          :key="item.value"
          :href="item.value"
          :title="item.value">
          <i
            class="chat-footer__link-icon"
            :class="item.icon">
          </i>
        </a>
        
        <router-link
          class="chat-footer__link-item"
          title="Privacy Policy"
          to="privacy">
          Privacy Policy
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [{
  icon: 'ri-twitter-fill',
  value: 'twitter'
}, {
  icon: 'ri-discord-fill',
  value: 'discord'
}, {
  icon: 'ri-github-fill',
  value: 'github'
}]
</script>

<style lang="scss">
.chat-footer {
  padding: 36px 0;
  background: var(--text-color-primary);
  font-size: 15px;
  color: rgba(white, .9);
  
  &__container {
    width: 100%;
    max-width: 1064px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__link-list {
    display: flex;
    align-items: center;
  }
  
  &__link-item {
    display: flex;
    color: rgba(white, .9);
    
    & + & {
      margin-left: 20px;
    }
  }
  
  &__link-icon {
    font-size: 16px;
  }
}
</style>