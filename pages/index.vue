<template>
  <main
    class="landing-page">
    <landing-hero>
    </landing-hero>
    
    <!-- <landing-idea>
    </landing-idea> -->
    
    <landing-demo>
    </landing-demo>
    
    <landing-button>
    </landing-button>
    
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
  layout: 'dark'
})

useHead({
  title: 'ECHO | Long live our opinion'
})

const features = [{
  strongTitle: 'Multi-chain',
  title: ' Login and Tip',
  desc: 'ECHO supports EVM chains and Solana. And will support most of the main chains in the future.',
  image: 'feature-wallet'
}, {
  strongTitle: 'Permanent Storage',
  title: ' With Arweave',
  desc: 'ECHO stores comments and reactions to Arweave. It is censorship-resistant. No one can erase or modify the archive.',
  image: 'feature-storage',
  reverse: true
}, {
  strongTitle: 'Decentralized',
  title: ' Comment Protocol',
  desc: 'Besides ECHO official gateway, users can use any other gateway to read and post comments. Our indexer will continuously aggregate data from Arweave.',
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
}
</style>