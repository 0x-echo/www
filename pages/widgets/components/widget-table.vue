<template>
  <div
    class="widget-table">    
    <div
      class="widget-table__wrapper">
      <div
        class="widget-table__header">
        <div
          class="widget-table__col widget-table__expand-col">
        </div>
          
        <div
          class="widget-table__col"
          :style="[
            col.col ? `flex: ${col.col}` : '',
            col.width ? `width: ${col.width}` : ''
          ]"
          v-for="(col, index) in columns"
          :key="index">
          {{ col.label }}
        </div>
      </div>
      
      <div
        class="widget-table__body">
        <widget-table-row
          v-for="row in data"
          :key="row.id"
          :columns="columns"
          :row="row">
        </widget-table-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import WidgetTableRow from './widget-table-row'

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.widget-table {
  overflow-x: scroll;
  overflow-y: hidden;
  
  &__wrapper {
    width: 100%;
    min-width: 1024px;
  }
  
  &__header {
    display: flex;
    border-bottom: 1px solid var(--text-color-secondary);
    
    .widget-table__col {
      padding-top: 10px;
      padding-bottom: 10px;
      color: var(--text-color-muted);
    }
  }
  
  &__row {
    & + & {
      border-top: 1px solid var(--border-color);
    }
  }
  
  &__row-header {
    display: flex;
  }
  
  &__row-content {
    border-top: 1px dashed var(--border-color);
    padding: 20px 15px 30px 65px;
  }
  
  &__col {
    display: flex;
    align-items: center;
    min-width: 0;
    padding: 20px 15px;
    font-size: 14px;
    color: var(--text-color-secondary);
  }
  
  &__expand-col {
    width: 50px;
  }
  
  &__icon {
    font-size: 16px;
    color: var(--text-color-muted);
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover {
      color: var(--color-primary);
    }
  }
  
  &__expand-icon {
    &.active {
      transform: rotate(90deg);
    }
  }
}
</style>