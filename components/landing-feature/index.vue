<template>
  <section
    class="landing-feature">
    <section
      class="landing-feature__header">
      <div
        class="section-container">
        <h2
          class="landing-feature__title">
          Key Features
        </h2>
        
        <div
          class="landing-feature__subtitle">
          ///
        </div>
      </div>
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
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.landing-feature {
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