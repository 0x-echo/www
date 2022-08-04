<template>
  <template-doc
    subtitle="Have questions? We are here to help."
    title="FAQ">
    <faq-item
      v-for="(item, index) in faqs"
      :key="index"
      :content="item.content"
      :title="item.title">
    </faq-item>
  </template-doc>
</template>

<script setup>
import FaqItem from './components/faq-item'
import faqs from './components/faq'

useHead({
  title: 'FAQ | ECHO | Long live our opinion'
})
</script>

<style lang="scss">

</style>