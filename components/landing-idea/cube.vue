<template>
  <div
    class="idea-cube">
    <div
      class="idea-cube__square idea-cube__one">
    </div>
    
    <div
      class="idea-cube__square idea-cube__two">
    </div>
    
    <div
      class="idea-cube__square idea-cube__three">
    </div>
    
    <div
      class="idea-cube__square idea-cube__four">
    </div>
    
    <div
      class="idea-cube__square idea-cube__five">
    </div>
    
    <div
      class="idea-cube__square idea-cube__six">
      <idea-line></idea-line>
    </div>
  </div>
</template>

<script setup>
import ideaLine from './line'
</script>

<style lang="scss">
// https://codepen.io/rauldronca/pen/qNPPXr
$box-size: 160px;

.idea-cube {
  height: $box-size;
  width: $box-size;
  transform-style: preserve-3d;
  will-change: transform;
  transform: rotateY(-45deg) rotateX(60deg);
  
  &.spin {
    animation : spin 5s infinite linear;
  }
  
  &__square {
    position: absolute;
    height: $box-size;
    width: $box-size;
    border: 3px solid white;
    background: var(--bg-color-dark);
    overflow: hidden;
  }
  
  &__one { 
    transform: rotateX(90deg) translateZ(80px); 
  }

  &__two { 
    transform: translateZ(80px); 
  }

  &__three { 
    transform: rotateY(90deg) translateZ(80px); 
  }

  &__four { 
    transform: rotateY(180deg) translateZ(80px); 
  }

  &__five { 
    transform: rotateY(-90deg) translateZ(80px); 
  }

  &__six { 
    transform: rotateX(-90deg) translateZ(80px);
  }
}

@keyframes spin {
  from { 
    transform: rotateY(0) rotateX(0); 
  }
  to { 
    transform: rotateY(-360deg) rotateX(360deg); 
  }
}
</style>