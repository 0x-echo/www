<template>
  <div>
    <section
      class="landing-hero">
      <div
        class="container">
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
  padding: 150px 0;
  margin-bottom: 160px;
  text-align: center;
  // background: linear-gradient(var(--border-color) 1px, transparent 0),
  //       linear-gradient(90deg, var(--border-color) 1px, transparent 0);
  // background-size: 30px 30px, 30px 30px;
  // background-image: url('@/assets/hero-bg.svg');
  // background-repeat: no-repeat;
  // background-size: contain;
  
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
</style>