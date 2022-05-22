<template>
  <template-doc
    icon="ri-open-arm-line"
    title="Your widget is ready!">
    <embed-code
      :code="code">
    </embed-code>
    
    <div
      class="widget-create-success__action-bar">
      <el-button
        size="large"
        type="primary"
        @click="$router.push('/widgets')">
        Check My Widgets
      </el-button>
    </div>
  </template-doc>
</template>

<script setup>
import { ElButton } from 'element-plus'

const code = 'hello world'
</script>

<style lang="scss">
.widget-create-success {
  &__action-bar {
    margin-top: 30px;
    text-align: center;
  }
}
</style>