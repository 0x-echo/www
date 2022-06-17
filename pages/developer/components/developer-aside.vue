<template>
  <section
    class="developer-aside__section"
    v-for="(item, index) in data"
    :key="index">
    <div
      class="developer-aside__link developer-aside__section-title"
      @click="$jumpTo(`#${item.id}`, -100)">
      {{ item.text }}
    </div>
    
    <div
      class="developer-aside__section-content">
      <div
        class="developer-aside__link"
        :class="{
          'active': $route.hash === `#${link.value}`
        }"
        v-for="link in item.children"
        :key="link.id"
        @click="$jumpTo(`#${link.id}`, -100)">
        {{ link.text }}
      </div>
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
    margin-bottom: 30px;
  }
  
  &__link {
    display: block;
    font-size: 14px;
    padding: 6px 0;
    color: var(--text-color-secondary);
    cursor: pointer;
    transition: color .3s ease;
    
    &:hover {
      color: var(--color-primary);
    }
  }
  
  &__section-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color-primary);
  }
}
</style>
