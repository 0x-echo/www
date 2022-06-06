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
      
      <div>
        <div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'

const links = [{
  title: '',
  link: ''
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
}
</style>