<template>
  <section
    class="landing-demo"
    id="landing-demo"
    data-color-theme="light">
    <div
      class="container landing-demo__container">
      <landing-section-header
        class="landing-demo__headder"
        title="Live Demo">
        <div
          class="landing-demo__nav">
          <template
            v-for="(item, index) in nav"
            :key="item.value">
            <div
              class="landing-demo__nav-item"
              :class="{
                'active': item.value === activeNav
              }"
              @click="activeNav = item.value">
              <span
                class="landing-demo__nav-label">
                {{ item.label }}
              </span>
            </div>
            
            <div
              class="landing-demo__nav-divider"
              v-if="index < nav.length - 1">
              /
            </div>
          </template>
        </div>
      </landing-section-header>
      
      <div
        class="landing-demo__widget">
        <iframe
          class="landing-demo__iframe" 
          :src="`https://thirdchat-fe-deploy.vercel.app/?show-comment-dislike=true&has-v-padding=true&has-h-padding=true&modules=${activeNav}&color-theme=light&target_uri=https%3A%2F%2Fmirror.xyz%2Fthirdchat.eth%2F8cCUKVDKXGco4-O6JRSlX5_zZkmb7C0YwCurcIVyZ2g&rpc_url=https%3A%2F%2Flocal-dev.third.chat%2F&dark-theme-color=%23141414&width=720&display=iframe`" 
          frameborder="0">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
let activeNav = ref('comment,like,dislike,tip')

const nav = [{
  icon: 'ri-apps-line',
  label: 'Full Version',
  value: 'comment,like,dislike,tip'
}, {
  icon: 'ri-chat-3-line',
  label: 'Comment',
  value: 'comment'
}, {
  icon: 'ri-thumb-up-line',
  label: 'Like',
  value: 'like'
}, {
  icon: 'ri-money-dollar-circle-line',
  label: 'Tip',
  value: 'tip'
}]
</script>

<style lang="scss">
.landing-demo {
  &__headder {
    margin-bottom: 20px;
  }
  
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5px; 
  }
  
  &__nav-item {
    flex-shrink: 0;
    position: relative;
    padding: 0 4px;
    margin: 5px 0;
    font-size: 16px;
    color: var(--text-color-secondary);
    cursor: pointer;
    z-index: 0;
    transition: all .3s ease;
    
    &.active {
      color: var(--color-primary);
      
      &::after {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      z-index: -1;
      opacity: 0;
      background: var(--color-primary-light);
      transform: scale3d(0, 1, 1);
      transition: all .3s ease;
    }
  }
  
  &__nav-divider {
    margin: 0 20px;
    font-size: 12px;
    color: var(--text-color-muted);
  }
  
  &__widget {
    position: relative;
    height: 517px;
    padding: 0 15px;
    background: repeating-linear-gradient(135deg, var(--color-primary), var(--color-primary) 1px, white 0, white 10px);
  }
  
  &__iframe {
    width: 100%;
    height: 502px;
    border: 1px solid var(--bg-color-dark);
    background: white;
  }
}

@media screen and (max-width: $mobile-width) {
  .landing-demo {
    &__nav-divider {
      margin: 0 10px;
    }
  }
}

@media screen and (max-width: $small-mobile-width) {
  .landing-demo {
    &__widget {
      height: 502px;
      padding: 0;
    }
  }
}
</style>