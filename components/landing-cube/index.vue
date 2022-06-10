<template>
  <div class="cube-container">
    <div class="cube spin" data-id="cube">
      <figure class="square square--front"></figure>
      <figure class="square square--left"></figure>
      <figure class="square square--right"></figure>
      <figure class="square square--top"></figure>
      <figure class="square square--bottom"></figure>
      <figure class="square square--back"></figure>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  spin: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss">
// credit https://codepen.io/oliverjam/pen/MOZKmL
// credit https://codepen.io/olach/details/AXPvRN

$size: 15rem;

.cube-container {
  max-width: 40em;
  margin: 0 auto;
  padding: calc(1rem + 4vw) 0;
  display: grid;
  place-items: center;
  justify-content: center;
  perspective: 1000px;
}

.cube {
  display: grid;
  grid-area: 1 / 1;
  transform-style: preserve-3d;
  transform: translateZ(($size / 2) * -1) rotateY(0deg);
  transition: transform 0.5s;
  will-change: transform;  
}
.square {
  display: grid;
  place-items: center;
  color: #333;
  grid-area: 1 / 1;
  width: $size;
  height: $size;
  background-color: var(--bg-color-bg);
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  // backface-visibility: hidden;
}

.square--left {
  transform: rotateY(-90deg) translateZ($size / 2);
  // background-color: rgba(green, 0.75);
  // background-color: hsla(30, 80, 80, 0.8);
}

.square--right {
  transform: rotateY(90deg) translateZ($size / 2);
  // background-color: rgba(blue, 0.75);
  // background-color: hsla(90, 80, 80, 0.8);
}

.square--top {
  transform: rotateX(90deg) translateZ($size / 2);
  // background-color: rgba(yellow, 0.75);
  // background-color: hsla(150, 80, 80, 0.8);
}

.square--bottom {
  transform: rotateX(-90deg) translateZ($size / 2);
  // background-color: rgba(purple, 0.75);
  // background-color: hsla(210, 80, 80, 0.8);
}

.square--front {
  transform: translateZ($size / 2);
  // background-color: rgba(pink, 0.75);
  // background-color: hsla(270, 80, 80, 0.8);
}

.square--back {
  transform: rotateX(-180deg) translateZ($size / 2);
  // background-color: rgba(skyblue, 0.75);
  // background-color: hsla(330, 80, 80, 0.8);
}

.spin {
  animation: spin 6s infinite linear;
}

@keyframes spin {
  from {
    transform: translateZ(($size / 2) * -1) rotate3d(1, 1, 1, 0deg);
  }
  to {
    transform: translateZ(($size / 2) * -1) rotate3d(1, 1, 1, 360deg);
  }
  
  // from { transform: rotateX(-35deg) rotateY(56deg); }
    // to { transform: rotateX(325deg) rotateY(416deg); }
}
</style>