<template>
  <section
    class="landing-hero"
    ref="landingHero"
    data-color-theme="dark">
    <div
      id="heroBackground"
      class="landing-hero__background">
    </div>
    
    <div
      class="section-container landing-hero__container">
      <h1
        class="landing-hero__title">
        Our <strong>Opinion</strong><br>Is a Part of Things
      </h1>
      
      <div
        class="landing-hero__action-bar">
        <el-button
          class="el-button--xlarge"
          type="primary"
          @click="anchorClick('landing-form')">
          Get It for Free
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-section__demo-button"
          @click="anchorClick('landing-demo')">
          Check Demo
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'
import particles from '../../packages/particles'

const anchorClick = (id) => {
  document.querySelector(`#${id}`).scrollIntoView()
}

onMounted(() => {
  initHeroBackground()
})

const initHeroBackground = () => {
  particlesJS('heroBackground', {
    particles: {
      color: {
        value: ['#4E75F6', '#83BF1C', '#FFAA02', '#FF4838']
      },
      line_linked: {
        enable: false
      },
      number: {
        value: 50
      },
      size: {
        value: 3,
        random: true
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: false
      }
    }
  }) 
}
</script>

<style lang="scss">
// https://codepen.io/edmundojr/details/xOYJGw

.landing-hero {
  position: relative;
  min-height: calc(100vh - 84px);
  padding: 150px 0;
  text-align: center;
  z-index: 1;
  
  &__background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    pointer-events: none;
  }
  
  &__title {
    font-size: 72px;
    font-weight: 900;
    
    strong {
      font-weight: 900;
      color: var(--color-primary);
    }
  }
  
  &__action-bar {
    margin-top: 50px;
  }
}

@media screen and (max-width: $mobile-width) {
  .landing-hero {
    &__title {
      font-size: 60px;
    }
  }
}

@media screen and (max-width: 425px) {
  .landing-hero {
    &__title {
      font-size: 44px;
    }
  }
}
</style>