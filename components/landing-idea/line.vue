<template>
  <div
    class="idea-line">
    <div
      class="idea-line__line"
      :class="{
        'stretch': show,
        'fade': !show,
        'last': index === 5
      }"
      v-for="(item, index) in 6"
      :key="index"
      :style="show ? `animation-delay: ${index * .5}s` : ''">
    </div>
  </div>
</template>

<script setup>
let show = ref(true)

onMounted(() => {
  const line = document.querySelector('.idea-line__line.last')
  line.addEventListener('animationend', (e) => {
    if (e.animationName === 'stretch') {
      show.value = false
    } else if (e.animationName === 'fade') {
      show.value = true
    }
  })
})
</script>

<style lang="scss">
.idea-line {
  width: 200%;
  transform: rotate(135deg) translate(20%, 35%);
  
  &__line {
    width: 100%;
    height: 3px;
    background: white;
    animation-timing-function: cubic-bezier(.2, .68, .18, 1.08);
    
    &.stretch {
      transform: scaleX(0);
      transform-origin: left;
      animation-name: stretch;
      animation-fill-mode: forwards;
      animation-duration: 2s;
    }
    
    &.fade {
      animation-name: fade;
      animation-duration: .5s;
    }
    
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

@keyframes fade {
  from { 
    opacity: 1;
  }
  to { 
    opacity: 0;
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