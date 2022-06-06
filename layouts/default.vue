<template>
  <div>
    <chat-header
      theme="dark"
      @connect-wallet="connectDialogVisible = true">
    </chat-header>
    
    <slot />
    
    <chat-footer>
    </chat-footer>
    
    <dialog-connect
      v-model="connectDialogVisible">
    </dialog-connect>
  </div>
</template>

<script setup>
let connectDialogVisible = ref(false)
</script>

<style lang="scss">

</style>