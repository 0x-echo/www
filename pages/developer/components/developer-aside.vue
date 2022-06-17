<template>
  <section
    class="developer-aside__section"
    v-for="(item, index) in data"
    :key="index">
    <div
      class="developer-aside__section-title">
      {{ item.text }}
    </div>
    
    <div
      class="developer-aside__section-content">
      <a
        class="developer-aside__link"
        :class="{
          'active': $route.hash === `#${link.value}`
        }"
        v-for="link in item.children"
        :key="link.id"
        :href="`#${link.id}`">
        - {{ link.text }}
      </a>
    </div>
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
.developer-aside {
  
  
  &__section {
    margin-bottom: 10px;
  }
  
  &__section-title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  
  &__section-content {
    padding-left: 10px;
  }
  
  &__link {
    display: block;
    padding: 0 5px;
    font-size: 14px;
    line-height: 30px;
    color: var(--text-color-secondary);
    
    &:hover {
      color: var(--text-color-primary);  
    }
    
    &.active {
      &,
      &:hover {
        color: var(--color-primary); 
      }
    }
  }
}
</style>
