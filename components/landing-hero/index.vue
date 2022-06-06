<template>
  <section
    class="landing-hero"
    data-color-theme="dark">
    <div
      class="container landing-hero__container">
      <h1
        class="landing-hero__title">
        Our <strong>Opinion</strong><br>Is a Part of Things
      </h1>
      
      <div
        class="landing-hero__action-bar">
        <el-button
          class="el-button--xlarge"
          type="primary">
          Get It for Free
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-section__demo-button">
          Check Demo
        </el-button>
      </div>
      
      <div
        class="landing-hero__slogan">
        We help to collect opinions
      </div>
      
      <div
        class="landing-hero__slogan">
        We help to permanently store opinions
      </div>
      
      <div
        class="landing-hero__slogan">
        We help to aggregate opinions
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'
</script>

<style lang="scss">
.landing-hero {
  position: relative;
  padding: 150px 0;
  text-align: center;
  
  &__container {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  
  &__title {
    font-size: 72px;
    font-weight: 900;
    
    strong {
      position: relative;
      font-weight: 900;
      color: var(--color-primary);
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;;
        background: var(--color-primary-light);
        z-index: -1;
      }
    }
  }
  
  &__action-bar {
    margin-top: 50px;
  }
  
  &__slogan {
    font-size: 48px;
    font-weight: bold;
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