<template>
  <div
    class="template-doc"
    :style="{
      maxWidth: maxWidth
    }">
    <div
      class="template-doc__header"
      v-if="title">
      <i
        class="template-doc__header-icon"
        :class="icon"
        v-if="icon">
      </i>
      
      <h1
        class="template-doc__title">
        {{ title }}
      </h1>
      
      <p
        class="template-doc__subtitle"
        v-if="subtitle">
        {{ subtitle }}
      </p>
    </div>
    
    <div
      class="template-doc__content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String
  },
  maxWidth: {
    type: String,
    default: '780px'
  },
  subtitle: {
    type: String
  },
  title: {
    type: String
  }
})
</script>

<style lang="scss">
.template-doc {
  width: 100%;
  min-height: calc(100vh - 84px - 96px);
  padding: 100px 20px 200px;
  margin: 0 auto;
  
  &__header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  &__header-icon {
    font-size: 50px;
  }
  
  &__title {
    font-weight: 600;
  }
 
  &__subtitle {
    margin-top: 10px;
    font-size: 14px;
    color: var(--text-color-muted);
  }
  
  &__content {
    color: var(--text-color-secondary);
    line-height: 1.7;
  }
}
</style>