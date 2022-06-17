<template>
  <section
    class="doc developer-section">

    <ContentDoc path="/" />
  
    <!-- <pre>
      <code>
        const hello = 'hello world'
      </code>
    </pre> -->
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.developer-section {
  p,
  pre {
    margin-bottom: 20px;
  }

  pre {
    border-radius: var(--border-radius);
    background: var(--bg-color);
  }
}
</style>