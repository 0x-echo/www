<template>
  <div
    class="landing-section-header">
    <slot>
    </slot>
    
    <h2
      class="landing-section-header__title">
      {{ title }}
    </h2>
    
    <slot
      name="subtitle">
      <p
        class="landing-section-header__subtitle"
        v-if="subtitle">
        {{ subtitle }}
      </p>
    </slot>
    
    <slot
      name="bottom">
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  subtitle: {
    type: String
  },
  title: {
    type: String
  }
})
</script>

<style lang="scss">
.landing-section-header {
  margin-bottom: 80px;
  text-align: center;
  
  &__title {
    font-size: 44px;
    text-transform: uppercase;
    text-align: center;
  }
  
  &__subtitle {
    margin-top: 10px;
    font-size: 16px;
    color: var(--text-color-muted);
  }
}

@media screen and (max-width: 425px) {
  .landing-section-header {
    &__title {
      font-size: 36px;
    }
  }
}
</style>