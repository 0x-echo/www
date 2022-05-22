<template>
  <div
    class="widget-table__row">
    <div
      class="widget-table__row-header">
      <div
        class="widget-table__col widget-table__expand-col">
        <i
          class="ri-arrow-right-s-line widget-table__icon widget-table__expand-icon"
          :class="{
            'active': isExpanded
          }"
          @click="isExpanded = !isExpanded">
        </i>
      </div>
      
      <div
        class="widget-table__col"
        :style="[
          col.col ? `flex: ${col.col}` : '',
          col.width ? `width: ${col.width}` : ''
        ]"
        v-for="(col, index) in columns"
        :key="index">
        <template
          v-if="col.prop === 'modules'">
          {{ row[col.prop].join(' + ') }}
        </template>
        
        <span
          class="ellipsis"
          v-else-if="col.prop === 'uri'">
          {{ row[col.prop] }}
        </span>
        
        <template
          v-else-if="col.prop === 'action'">
          <i
            class="ri-edit-2-line widget-table__icon"
            title="Edit Widget"
            @click="$router.push(`/widgets/create?id=${row.id}`)">
          </i>
        </template>
        
        <template
          v-else>
          {{ row[col.prop] }}
        </template>
      </div>
    </div>
    
    <el-collapse-transition>
      <embed-code
        class="widget-table__row-content"
        v-show="isExpanded"
        :code="row.code"
        :tip="`Create at ${row.created_at}`">
      </embed-code>
    </el-collapse-transition>
  </div>
</template>

<script setup>
import { ElCollapseTransition } from 'element-plus'

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  row: {
    type: Object,
    required: true
  }
})

let isExpanded = ref(false)
</script>

<style lang="scss">

</style>