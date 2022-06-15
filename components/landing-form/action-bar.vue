<template>
  <div
    class="landing-form__action-bar">
    <div>
      <el-button
        class="landing-form__action-button"
        size="large"
        @click="$emit('reset')">
        Reset
      </el-button>
      
      <el-button
        class="landing-form__action-button"
        v-if="isForm"
        size="large"
        type="primary"
        @click="$emit('submit')">
        Generate
      </el-button>
      
      <el-button
        class="landing-form__action-button"
        v-if="!isForm"
        size="large"
        type="primary"
        @click="$emit('edit')">
        Edit
      </el-button>
    </div>
    
    <a
      class="landing-form__more-link"
      href="/developer"
      target="_blank">
      <span>
        Advanced Configuration
      </span>
      
      <i
        class="ri-arrow-right-up-line">
      </i>
    </a>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'

const props = defineProps({
  isForm: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits([
  'edit',
  'reset',
  'submit'
])
</script>

<style lang="scss">

</style>