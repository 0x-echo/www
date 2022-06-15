<template>
  <template-doc
    subtitle="Have questions? We are here to help."
    title="Frequently Asked Questions">
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

const faqs = [{
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}, {
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}, {
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}, {
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}, {
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}, {
  title: 'Who maintains Vue? ',
  content: 'Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.'
}]
</script>

<style lang="scss">

</style>