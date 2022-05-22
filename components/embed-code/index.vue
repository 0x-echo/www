<template>
  <div>
    <div
      class="embed-code__title">
      Embed Code 
    </div>
    
    <div
      class="embed-code__subtitle">
      Place this code in your HTML where you want to embed the widget.
    </div>
    
    <div
      class="embed-code__code">
      {{ code }}
    </div>
    
    <div
      class="embed-code__tip"
      v-if="tip">
      {{ tip }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true
  },
  tip: {
    type: String
  }
})
</script>

<style lang="scss">
.embed-code {
  &__title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color-secondary);
  }
  
  &__subtitle {
    margin: 5px 0 20px;
    font-size: 12px;
    color: var(--text-color-muted);
  }
  
  &__code {
    padding: 20px;
    border-radius: var(--border-radius);
    font-size: 14px;
    background: var(--bg-color);
    color: var(--text-color-secondary);
  }
  
  &__tip {
    margin-top: 20px;
    font-size: 12px;
    color: var(--text-color-muted);
    text-align: right;
  }
}
</style>