<template>
  <div
    class="changelog-item">
    <i
      class="ri-git-commit-line changelog-item__node">
    </i>
    
    <div
      class="changelog-item__content">
      <h3
        class="changelog-item__title">
        {{ data.title }}
      </h3>
      
      <div
        class="changelog-item__subtitle">
        {{ data.date }}
      </div>
      
      <div
        class="changelog-item__section"
        v-for="(section, index) in data.sections"
        :key="index">
        <el-tag
          class="changelog-item__section-label"
          effect="dark"
          round
          :type="section.type">
          {{ section.label }}
        </el-tag>
        
        <ul>
          <li
            v-for="(item, index) in section.list"
            :key="index">
            <p>
              {{ item.content }}
            </p>
            
            <img 
              v-for="(img, index) in item.images"
              :key="index"
              :alt="item.content"
              :src="img">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElTag } from 'element-plus'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
.changelog-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  
  &::before {
    content: '';
    position: absolute;
    left: 10px; 
    height: 100%;
    border-left: 1px solid var(--border-color);
    z-index: -1;
  }
  
  &__node {
    margin-right: 20px;
    background: white;
    font-size: 20px;
  }
  
  &__title {
    font-size: 20px;
    color: var(--text-color-primary);
  }
  
  &__subtitle {
    margin-top: 5px;
    font-size: 14px;
    color: var(--text-color-muted);
  }
  
  &__section {
    margin-top: 20px;
    padding-bottom: 60px;
    
    li {
      margin-left: 20px;
      padding-left: 5px;
      list-style: disc;
    }
    
    p {
      margin-bottom: 20px;
    }
    
    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  
  &__section-label {
    min-width: 60px;
    height: 28px;
    margin-bottom: 20px;
    font-weight: 500;
  }
}
</style>