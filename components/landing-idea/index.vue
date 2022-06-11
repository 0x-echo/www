<template>
  <section
    class="landing-idea"
    data-color-theme="dark">
    <div
      class="section-container landing-idea__container">
      <!-- <landing-cube>
      </landing-cube> -->
      
      <div>
        <div
          class="landing-idea__slogan first">
          We help to <br>collect opinions
        </div>
        
        <div
          class="landing-idea__slogan second">
          We help to <br>permanently store opinions
        </div>
        
        <div
          class="landing-idea__slogan third">
          We help to <br>aggregate opinions
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const slogans = gsap.utils.toArray('.landing-idea__slogan')
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.landing-idea',
      start: 'bottom bottom',
      scrub: true,
      pin: true
    }
  })
  
  timeline.to('.first', {
    opacity: 0,
    duration: 6
  })
  
  timeline.from('.second', {
    opacity: 0,
    duration: 6
  }).to('.second', {
    opacity: 0,
    duration: 6
  })
  
  timeline.from('.third', {
    opacity: 0,
    duration: 6
  })
})
</script>

<style lang="scss">
.landing-idea {
  min-height: calc(100vh - 84px);
  padding: 150px 0;
  text-align: center;
  
  &__container {
    position: relative;
  }
  
  &__slogan {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 72px;
    font-weight: bold;
  }
}
</style>