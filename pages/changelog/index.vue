<template>
  <template-doc
    subtitle="Every single change made to enhance ECHO"
    title="Changelog">
    <changelog-item
      v-for="(item, index) in logs"
      :key="index"
      :data="item">
    </changelog-item>
  </template-doc>
</template>

<script setup>
import ChangelogItem from './components/changelog-item'

const logs = [{
  title: 'Markdown is Supported!',
  date: 'August 13, 2022',
  sections: [{
    label: 'Feature',
    type: 'success',
    list: [{
      content: 'The comment editor supports Markdown syntax now(except Headline).'
    }]
  }]
}]
</script>

<style lang="scss">
</style>