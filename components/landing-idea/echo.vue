<template>
  <div
    class="idea-echo"
    :class="{
      'reverse': reverse
    }">
    <div
      class="idea-echo__wrapper">
      <div
        class="idea-echo__square">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.idea-echo {
  width: 60px;
  height: 60px;
  animation: echo 3s infinite;
  opacity: 0;
  
  &.reverse {
    animation: echoReverse 3s infinite;
    
    .idea-echo__square {
      border-bottom-width: 0;
      border-top: 3px solid #fff;
      transform: rotateY(90deg) translateZ(80px);
    }
  }
  
  &__wrapper {
    width: 100%;
    height: 100%;
    transform: rotateY(-45deg) rotateX(60deg);
    transform-style: preserve-3d;
  }
  
  &__square {
    width: 100%;
    height: 100%;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotateY(-90deg) translateZ(80px);
    // background: linear-gradient(135deg, transparent 50%, rgba(white, .2));
  }
}

@keyframes echo {
  0% {
    transform: translateX(50%) translateY(35%);
  }
  50% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(50%) translateY(35%);
  }
}

@keyframes echoReverse {
  0% {
    transform: translateX(-50%) translateY(-35%);
  }
  50% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(-35%);
  }
}
</style>