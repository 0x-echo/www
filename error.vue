<template>
  <default-layout>
    <div
      class="container error-page">
      <div
        class="error-page__content">
        <img 
          class="error-page__image"
          src="@/assets/error.svg" 
          alt="Something is wrong">
        
        <h1
          class="error-page__title">
          Something is wrong
        </h1>
        
        <el-button
          class="error-page__action-button" 
          size="large"
          type="primary"
          @click="$router.push('/')">
          Back to Home
        </el-button>
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import DefaultLayout from './layouts/default'
import { ElButton } from 'element-plus'

definePageMeta({
  title: 'Something is wrong | ECHO'
})

const props = defineProps({
  error: Object
})
</script>

<style lang="scss">
.error-page {
  padding-top: 160px;
  padding-bottom: 160px;
  
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  &__image {
    width: 80%;
    max-width: 400px;
  }
  
  &__title {
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
  }
  
  &__action-button {
    margin-top: 30px;
  }
}
</style>