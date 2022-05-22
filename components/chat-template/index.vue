<template>
  <div
    class="container chat-template">
    <el-affix
      :offset="134">
      <aside
        class="chat-template__aside">
        <slot
          name="aside">
        </slot>
      </aside>
    </el-affix>
    
    <main
      class="chat-template__content">
      <slot>
      </slot>
    </main>
    
    <el-backtop 
      :right="80" 
      :bottom="160">
      <i
        class="ri-arrow-up-line">
      </i>
    </el-backtop>
  </div>
</template>

<script setup>
import { ElAffix, ElBacktop } from 'element-plus'
</script>

<style lang="scss">
.chat-template {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 100px;
  
  &__aside {
    flex-shrink: 0;
    width: 240px;
  }
  
  &__content {
    width: 100%;
    max-width: 740px;
  }
}
</style>