<template>
  <section
    class="developer-aside__section"
    v-for="(item, index) in data"
    :key="index">
    <a
      class="developer-aside__section-title"
      :href="`#${item.id}`">
      {{ item.text }}
    </a>
    
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
        {{ link.text }}
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
    margin-bottom: 30px;
  }
  
  &__section-title {
    display: block;
    padding: 6px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color-primary);
  }
  
  &__link {
    display: block;
    font-size: 14px;
    padding: 6px 0;
    color: var(--text-color-secondary);
  }
}
</style>
