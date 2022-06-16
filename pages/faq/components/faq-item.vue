<template>
  <section
    class="faq-item">
    <h3
      class="faq-item__title">
      {{ title }}
    </h3>
    
    <div
      class="faq-item__content">
      <slot>
        <div v-html="content"></div>
      </slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  content: {
    type: String
  }
})
</script>

<style lang="scss">
.faq-item {
  & + & {
    margin-top: 60px;
  }
  
  &__title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    color: var(--text-color-primary);
  }
}
</style>