<template>
  <div
    class="idea-line">
    <div
      class="idea-line__line"
      v-for="(item, index) in 6"
      :key="index"
      :style="{
        'animation-delay': `${index * .5}s`,
      }">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.idea-line {
  width: 200%;
  transform: rotate(135deg) translate(20%, 35%);
  
  &__line {
    width: 100%;
    height: 3px;
    background: white;
    animation-name: stretch;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.2, .68, .18, 1.08);
    animation-fill-mode: both;
    transform-origin: left;
    
    & + & {
      margin-top: 30px;
    }
  }
}

@keyframes stretch {
  0% { 
    transform: scaleX(0);
  }
  100% { 
    transform: scaleX(1);
  }
}

@media screen and (max-width: 600px) {
  .idea-line {
    &__line {
      & + & {
        margin-top: 12px;
      }
    }
  }
}
</style>