<template>
  <div>
    <section
      class="landing-hero">
      <div
        class="container landing-hero__container">
        <h1
          class="landing-hero__title">
          Our <strong>Opinion</strong><br>Is a Part of Things
        </h1>
        
        <el-button
          class="el-button--xlarge landing-hero__action-button"
          type="primary">
          Get Started
        </el-button>
      </div>
    </section>
    
    <landing-demo>
    </landing-demo>
    
    <landing-feature
      :data="features">
    </landing-feature>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'

const features = [{
  strongTitle: 'Omni chain',
  title: ' login and tip',
  desc: 'Beacons allow smart contract developers to connect Web3 applications to continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodities prices. ',
  image: 'feature-wallet'
}, {
  strongTitle: 'Permanent storage',
  title: ' with Arweave',
  desc: 'Beacons allow smart contract developers to connect Web3 applications to continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodities prices. ',
  image: 'feature-storage',
  reverse: true
}, {
  strongTitle: 'Decentralized',
  title: ' comment protocol',
  desc: 'Beacons allow smart contract developers to connect Web3 applications to continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodities prices. ',
  image: 'feature-decentralized'
}]
</script>

<style lang="scss">
.landing-hero {
  position: relative;
  padding: 150px 0;
  margin-bottom: 80px;
  text-align: center;
  // background: linear-gradient(var(--border-color) 1px, transparent 0),
  //       linear-gradient(90deg, var(--border-color) 1px, transparent 0);
  // background-size: 30px 30px, 30px 30px;
  // background-image: url('@/assets/hero-bg.svg');
  // background-repeat: no-repeat;
  // background-size: contain;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 1px);
    width: 1px;
    height: 90%;
    background: var(--text-color-primary);
    z-index: -1;
  }
  
  &__container {
    padding-top: 20px;
    padding-bottom: 40px;
    background: white;
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
  
  &__action-button {
    width: 180px;
    margin-top: 50px;
  }
}

.landing-section {
  &__title {
    font-size: 44px;
    text-transform: uppercase;
    text-align: center;
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
  
  .landing-section {
    &__title {
      font-size: 36px;
    }
  }
}
</style>