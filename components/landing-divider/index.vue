<template>
  <div
    class="landing-divider"
    :class="{
      'is-reverse': reverse
    }">
  </div>
</template>

<script setup>
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.landing-divider {
  position: relative;
  width: 50%;
  height: 100px;
  margin: 50px auto;
  
  &.is-reverse {
    &::before {
      border-width: 0 0 1px 1px;
    }
    
    &::after {
      border-width: 0 1px 0 0;
    }
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    border-style: solid;
    border-color: var(--text-color-primary);
  }
  
  &::before {
    top: 0;
    border-width: 0 1px 1px 0;
  }
  
  &::after {
    bottom: 0;
    border-width: 0 0 0 1px;
  }
}
</style>