<template>
  <section
    class="landing-feature"
    data-color-theme="light">
    <div
      class="container landing-feature__container">
      <landing-section-header
        subtitle="A smart solution for your need"
        title="Key Features">
      </landing-section-header>
      
      <landing-feature-item
        v-for="(item, index) in data"
        :key="index"
        :desc="item.desc"
        :image="item.image"
        :reverse="item.reverse"
        :strong-title="item.strongTitle"
        :title="item.title">
      </landing-feature-item>
    </div>
  </section>
</template>

<script setup>
import LandingFeatureItem from './landing-feature-item'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.landing-feature {
  padding: 160px 0;
  
  &__container {
    max-width: 1000px;
  }
}
</style>