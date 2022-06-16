<template>
  <section
    class="landing-action"
    data-color-theme="dark">
    <div
      class="container">
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
          type="primary"
          @click="$jumpTo('#landing-form', -40)">
          Get My Widget
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-page__demo-button"
          @click="$jumpTo('#landing-demo')">
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
              :title="item.link_label">
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
  link: 'https://discord.gg/KFxyaw9Wdj',
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
    font-weight: 500;
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-action {
    &__action-bar {
      display: flex;
      flex-direction: column;
      
      .el-button {
        + .el-button {
          margin: 15px 0 0;
        }
      }
    }
    
    &__link-list {
      flex-direction: column;
    }
    
    &__link-item {
      width: 100%;
      padding: 20px;
      
      & + & {
        margin: 30px 0 0;
      }
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .landing-action {
    &__title {
      margin-top: 10px;
      font-size: 12vw;
      line-height: 1.2;
    }
  }
}
</style>