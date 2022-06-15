<template>
  <main
    class="landing-page">
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
definePageMeta({
  layout: 'dark',
})

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
.landing-page {    
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
  
  section[data-color-theme=light] {
    padding-top: 160px;
  }
}

.landing-feature {
  padding-bottom: 160px;
}
</style>