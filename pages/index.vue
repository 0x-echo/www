<template>
  <main>
    <landing-hero>
    </landing-hero>
    
    <landing-idea>
    </landing-idea>
    
    <landing-demo>
    </landing-demo>
    
    <landing-form>
    </landing-form>
    
    <landing-feature
      :data="features">
    </landing-feature>
    
    <landing-action>
    </landing-action>
  </main>
</template>

<script setup>
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
.landing-section {
  &__title {
    font-size: 44px;
    text-transform: uppercase;
    text-align: center;
  }
  
  &__demo-button {
    &,
    &:focus:not(.el-button:hover) {
      background: transparent;
      color: white;
    }
    
    &:hover,
    &:focus {
      border-color: white;
      background: white;
    }
  }
}

@media screen and (max-width: 425px) {
  .landing-section {
    &__title {
      font-size: 36px;
    }
  }
}
</style>