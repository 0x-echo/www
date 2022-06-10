<template>
  <section
    class="landing-action"
    data-color-theme="dark">
    <div
      class="section-container">
      <div
        class="landing-action__subtitle">
        Start it now 
      </div>
      
      <h2
        class="landing-action__title">
        Let's buidl together!
      </h2>
      
      <div
        class="landing-action__action-bar">
        <el-button
          class="el-button--xlarge"
          type="primary">
          Get Your Widget
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-section__demo-button">
          Check Demo
        </el-button>
      </div>
      
      <div
        class="landing-action__link-list">
        <div
          class="landing-action__link-item"
          v-for="(item, index) in links"
          :key="index">
          <i
            class="landing-action__link-icon"
            :class="item.icon">
          </i>
          
          <div>
            <h4
              class="landing-action__link-title">
              {{ item.title }}
            </h4>
            
            <a 
              class="landing-action__link-label"
              :href="item.link"
              :target="item.isExternal ? '_blank' : ''"
              title="Discord">
              {{ item.link_label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'

const links = [{
  icon: 'ri-code-s-slash-line',
  title: 'Buidl things with our simple guides',
  link: '/developer',
  link_label: 'Check out Docs',
  isExternal: false
}, {
  icon: 'ri-discord-line',
  title: 'Join our Discord to keep updated',
  link: '',
  link_label: 'Jump in community',
  isExternal: true
}]
</script>

<style lang="scss">
.landing-action {
  padding: 100px 0;
  text-align: center;
  
  &__title {
    font-size: 60px;
  }
  
  &__subtitle {
    text-transform: uppercase;
  }
  
  &__action-bar {
    margin-top: 40px;
  }
  
  &__link-list {
    display: flex;
    margin-top: 60px;
  }
  
  &__link-item {
    flex: 1;
    padding: 40px;
    border-radius: var(--border-radius);
    background: linear-gradient(rgba(white, .03), transparent);
    text-align: left;
    
    & + & {
      margin-left: 30px;
    }
  }
  
  &__link-icon {
    font-size: 48px;
  }
  
  &__link-title {
    margin: 20px 0 10px;
    font-size: 24px;
    font-weight: 600;
  }
  
  &__link-label {
    position: relative;
    font-weight: 500;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: var(--color-primary);
      opacity: 0;
      transform: scale3d(0, 1, 1);
      transform-origin: left center;
      transition: all .3s;
    }
    
    &:hover {
      &::after {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }
}
</style>