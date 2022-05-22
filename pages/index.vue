<template>
  <div>
    <section
      class="landing-hero">
      <div
        class="container">
        <h1
          class="landing-hero__title">
          Collect Comments and <br>Get Tips on Web3
        </h1>
        
        <el-button
          class="el-button--xlarge landing-hero__action-button"
          type="primary">
          Get Started
        </el-button>
      </div>
    </section>
    
    <landing-section
      v-for="(item, index) in features"
      :key="index"
      :desc="item.desc"
      :image="item.image"
      :reverse="item.reverse"
      :strong-title="item.strongTitle"
      :title="item.title">
    </landing-section>
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
  padding: 100px 0;
  margin-bottom: 220px;
  text-align: center;
  
  &__title {
    font-size: 50px;
    line-height: 1.2;
  }
  
  &__action-button {
    width: 180px;
    margin-top: 50px;
  }
}
</style>