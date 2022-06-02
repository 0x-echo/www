<template>
  <template-doc
    max-width="1064px"
    title="Widgets">
    <widget-table
      :data="data"
      :columns="columns">
    </widget-table>
    
    <div
      class="widgets-page__action-bar">
      <el-button
        size="large"
        type="primary"
        @click="$router.push('/widgets/create')">
        Add New Widget
      </el-button>
    </div>
  </template-doc>
</template>

<script setup>
import { ElButton } from 'element-plus'
import WidgetTable from './components/widget-table'

const data = [{
  id: '12gwagwaega',
  name: 'My first widget',
  created_at: '2022-10-10 10:00',
  modules: ['comment', 'like', 'dislike'],
  uri: 'hgwagwagwega',
  code: 'Hello world'
}, {
  id: '12gwagwaega3',
  name: 'My first widget',
  created_at: '2022-10-10 10:00',
  modules: ['comment', 'like', 'dislike'],
  uri: 'hgwagwagwegagwaegewagewgewjakgjewklagjlwekgjwkeljgklwej',
  code: 'Hello world'
}]

const columns = [{
  label: 'Widget Name',
  prop: 'name',
  col: 1
}, {
  label: 'Target URI',
  prop: 'uri',
  col: 1
}, {
  label: 'Modules',
  prop: 'modules',
  col: 2
}, {
  prop: 'action',
  width: '50px'
}]
</script>

<style lang="scss">
.widgets-page {
  &__action-bar {
    margin-top: 30px;
    text-align: center;
  }
}
</style>