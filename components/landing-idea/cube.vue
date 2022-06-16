<template>
  <div
    class="idea-cube">
    <div
      class="idea-cube__square idea-cube__one">
    </div>
    
    <div
      class="idea-cube__square idea-cube__two">
      <img 
        class="idea-cube__arweave-logo"
        src="@/assets/arweave.svg" 
        alt="Arweave">
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

.idea-cube {
  --box-size: 160px;
  height: var(--box-size);
  width: var(--box-size);
  transform-style: preserve-3d;
  will-change: transform;
  transform: rotateY(-45deg) rotateX(60deg);
  
  &.spin {
    animation: spin 5s infinite linear;
  }
  
  &__square {
    position: absolute;
    height: 100%;
    width: 100%;
    border: 3px solid white;
    background: var(--bg-color-dark);
    overflow: hidden;
  }
  
  &__one { 
    transform: rotateX(90deg) translateZ(calc(var(--box-size) / 2)); 
  }

  &__two { 
    transform: translateZ(calc(var(--box-size) / 2)); 
  }

  &__three { 
    transform: rotateY(90deg) translateZ(calc(var(--box-size) / 2)); 
  }

  &__four { 
    transform: rotateY(180deg) translateZ(calc(var(--box-size) / 2)); 
  }

  &__five { 
    transform: rotateY(-90deg) translateZ(calc(var(--box-size) / 2)); 
  }

  &__six { 
    transform: rotateX(-90deg) translateZ(calc(var(--box-size) / 2));
  }
  
  &__arweave-logo {
    width: 60%;
  }
}

@keyframes spin {
  from { 
    transform: rotateY(-45deg) rotateX(60deg); 
  }
  to { 
    transform: rotateY(-405deg) rotateX(420deg); 
  }
}

@media screen and (max-width: 600px) {
  .idea-cube {
    --box-size: 80px;
  }
}
</style>