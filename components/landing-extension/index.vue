<template>
  <section
    class="landing-extension"
    id="landing-extension"
    data-color-theme="light">
    <div
      class="container landing-extension__container">
      <landing-section-header
        subtitle="Experience More in Your Browser"
        title="ECHO Extension">
        <template
          #bottom>
          <a
            class="landing-extension__download-link"
            href="https://chrome.google.com/webstore/detail/echo/cbmifpaenihfoaegkiaogmeknmhbfhgf"
            target="_blank">
            <img 
              class="landing-extension__download-link-logo"
              src="@/assets/chrome.png" 
              alt="">
            
            <div>
              <div
                class="landing-extension__download-link-sublabel">
                Download for
              </div>
              
              <div
                class="landing-extension__download-link-label">
                Google Chrome 
              </div>
            </div>
          </a>
        </template>
      </landing-section-header>
      
      <div
        class="landing-extension__content">    
        <div
          class="landing-extension__feature-list">
          <div
            class="landing-extension__feature-item"
            :class="{
              'active': item.value === active
            }"
            v-for="item in list"
            :key="item.value"
            @click="active = item.value"
            @mouseenter="active = item.value">
            <div
              class="landing-extension__feature-icon">
              <i
                :class="item.icon"> 
              </i>
            </div>
            
            <div
              class="landing-extension__feature-desc">
              {{ item.label }}
            </div>
          </div>
        </div>
        
        <div
          class="landing-extension__visual">
          <img 
            class="landing-extension__visual-image"
            :src="visualMap[active]" 
            :alt="active">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'
import ExtensionAggregation from '@/assets/extension-aggregation.svg'
import ExtensionComment from '@/assets/extension-comment.svg'
import ExtensionPopup from '@/assets/extension-popup.svg'
let active = ref('popup')

const visualMap = {
  'popup': ExtensionPopup,
  'comment': ExtensionComment,
  'aggregation': ExtensionAggregation
}

const list = [{
  icon: 'ri-pencil-ruler-2-line',
  label: 'Embed ECHO to Mirror With One Click',
  value: 'popup'
}, {
  icon: 'ri-image-line',
  label: 'Comment on NFTs as You Want',
  value: 'comment'
}, {
  icon: 'ri-stack-line',
  label: 'Aggregate Comments in One Place',
  value: 'aggregation'
}]
</script>

<style lang="scss">
.landing-extension {
  padding: 100px 0;
  
  &__container {
    max-width: 1024px;
  }
  
  &__download-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 60px;
    padding: 0 24px 0 16px;
    margin-top: 32px;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    line-height: 1;
    font-weight: 500;
    background: white;
    color: var(--text-color-secondary);
    
    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }
  
  &__download-link-sublabel {
    text-align: left;
    font-size: 12px;
  }
  
  &__download-link-label {
    margin-top: 4px;
    text-align: left;
  }
  
  &__download-link-logo {
    width: 36px;
    margin-right: 10px;
  }
  
  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  &__feature-list {
    width: 40%;
    margin-right: 30px;
  }
  
  &__feature-item {
    display: flex;
    align-items: center;
    padding: 32px 0;
    border-radius: 14px;
    cursor: pointer;
    transition: all .3s ease;
    
    &.active {
      .landing-extension__feature-icon {
        background: var(--color-primary);
        color: white;
      }
      
      .landing-extension__feature-desc {
        color: var(--text-color-primary);
      }
    }
  }
  
  &__feature-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: var(--border-radius);
    font-size: 18px;
    background: var(--bg-color);
    color: var(--text-color-secondary);
    transition: all .3s ease;
  }
  
  &__feature-desc {
    font-size: 16px;
    color: var(--text-color-secondary);
  }
  
  &__visual {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      // background: var(--color-primary-light);
      z-index: -1;
    }
  }
  
  &__visual-image {
    width: 100%;
    max-width: 500px;
  }
}

@media screen and (max-width: #{$small-desktop-width - 1}) {
  .landing-extension {
    &__feature-list {
      width: 45%;
    }
  }
}

@media screen and (max-width: 600px) {
  .landing-extension {
    &__feature-list {
      width: 100%;
      max-width: inherit;
      margin-right: 0;
    }
    
    &__feature-item {
      padding-left: 16px;
      padding-right: 16px;
      border: 1px solid var(--border-color);
      cursor: default;
      
      + .landing-extension__feature-item {
        margin-top: 16px;
      }
      
      &.active {
        .landing-extension__feature-icon {
          background: var(--bg-color);
          color: var(--text-color-secondary);
        }
      }
    }
    
    &__feature-desc {
      color: var(--text-color-primary);
    }
    
    &__visual {
      display: none;
    }
  }
}
</style>