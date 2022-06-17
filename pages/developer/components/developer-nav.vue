<template>
  <section
    class="developer-nav__section"
    v-for="(item, index) in data"
    :key="index">
    <div
      class="developer-nav__link developer-nav__section-title"
      @click="onClick(item.id)">
      {{ item.text }}
    </div>
    
    <div
      class="developer-nav__section-content">
      <div
        class="developer-nav__link"
        :class="{
          'active': $route.hash === `#${link.value}`
        }"
        v-for="link in item.children"
        :key="link.id"
        @click="onClick(link.id)">
        {{ link.text }}
      </div>
    </div>
  </section>
</template>

<script setup>
const { $jumpTo } = useNuxtApp()

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const emits = defineEmits([
  'on-click'
])

const onClick = (id) => {
  $jumpTo(`#${id}`, -100)
  emits('on-click')
}
</script>

<style lang="scss">
.developer-nav {
  &__section {
    margin-bottom: 30px;
    font-family: 'Inter', sans-serif;
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
