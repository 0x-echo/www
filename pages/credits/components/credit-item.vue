<template>
  <div
    class="credit-item">
    <div
      class="credit-item__header"
      @click="isExpanded = !isExpanded">
      <div
        class="credit-item__header-content">
        <h3
          class="credit-item__title">
          {{ data.title }}
        </h3>
        
        <div
          class="credit-item__subtitle"
          v-if="data.license">
          <i
            class="ri-scales-3-line">
          </i>
          
          <span>
            {{ data.license }}
          </span>
        </div>
      </div>
      
      <i
        class="ri-arrow-right-s-line credit-item__expand-icon"
        :class="{
          'active': isExpanded
        }">
      </i>
    </div>
    
    <el-collapse-transition>
      <div
        class="credit-item__content"
        v-show="isExpanded">
        <pre>
          {{ data.content }}
        </pre>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script setup>
import { ElCollapseTransition } from 'element-plus'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

let isExpanded = ref(false)
</script>

<style lang="scss">
.credit-item {
  & + & {
    border-top: 1px solid var(--bg-color);
  }
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    cursor: pointer;
    
    &::before {
      content: '#';
      margin-right: 30px;
      font-size: 40px;
      line-height: 1;
      font-weight: 700;
      color: var(--bg-color);
    }
  }
  
  &__header-content {
    flex: 1;
  }
  
  &__title {
    font-size: 20px;
    font-weight: 500;
  }
  
  &__subtitle {
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 14px;
    color: var(--text-color-muted);
    
    i {
      margin-right: 5px;
    }
  }
  
  &__expand-icon {
    margin-left: 10px;
    font-size: 18px;
    color: var(--text-color-muted);
    transition: all .3s ease;
    
    &:hover {
      color: var(--text-color-secondary);
    }
    
    &.active {
      transform: rotate(90deg);
    }
  }
  
  &__content {
    padding: 30px 20px;
    border-top: 1px dashed var(--bg-color);
    
    pre {
      white-space: pre-wrap;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .credit-item {
    &__header {
      &::before {
        margin-right: 15px;
        font-size: 32px;
      }
    }
    
    &__content {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
}
</style>