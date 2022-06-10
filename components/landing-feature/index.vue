<template>
  <section
    class="landing-feature">
    <div
      class="section-container landing-feature__container">
      <section
        class="landing-feature__header">
        <h2
          class="landing-section__title">
          Key Features
        </h2>
      </section>
      
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
  
  &__header {
    margin-bottom: 80px;
    text-align: center;
  }
  
  &__title {
    font-size: 44px;
    text-transform: uppercase;
  }
  
  &__subtitle {
    margin-top: 15px;
    font-size: 12px;
    color: var(--text-color-muted);
  }
}
</style>