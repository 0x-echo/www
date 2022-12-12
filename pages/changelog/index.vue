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
  title: 'Protocol Update',
  date: 'December 12, 2022',
  sections: [{
    label: 'Feature',
    type: 'success',
    list: [{
      content: 'Add field: from_uri to mark where comment is from'
    }]
  }]
}, {
  title: 'ECHO Extension',
  date: 'December 10, 2022',
  sections: [{
    label: 'Feature',
    type: 'success',
    list: [{
      content: 'The ECHO Chrome extension is available now.'
    }]
  }]
}, {
  title: 'ECHO Button',
  date: 'December 4, 2022',
  sections: [{
    label: 'Feature',
    type: 'success',
    list: [{
      content: 'The Button JS SDK has been released.'
    }]
  }]
}, {
  title: 'Markdown is Supported!',
  date: 'August 13, 2022',
  sections: [{
    label: 'Feature',
    type: 'success',
    list: [{
      content: 'The comment editor supports Markdown syntax now.'
    }]
  }]
}]
</script>

<style lang="scss">
</style>