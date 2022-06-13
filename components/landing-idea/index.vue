<template>
  <section
    class="landing-idea"
    data-color-theme="dark">
    <div
      class="section-container landing-idea__container">
      <div
        class="landing-idea__top">
        <idea-echo>
        </idea-echo>
        
        <idea-cube>
        </idea-cube>
        
        <idea-echo
          class="landing-idea__echo-right"
          reverse>
        </idea-echo>
      </div>
      
      <div
        class="landing-idea__bottom">
        <div
          class="landing-idea__slogan first">
          We help to <br><strong>aggregate</strong> opinions
        </div>
        
        <div
          class="landing-idea__slogan second">
          We help to <br><strong>connect</strong> opinions
        </div>
        
        <div
          class="landing-idea__slogan third">
          We help to <br><strong>permanently store</strong> opinions
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ideaCube from './cube'
import ideaEcho from './echo'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const slogans = gsap.utils.toArray('.landing-idea__slogan')
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.landing-idea',
      start: 'bottom bottom',
      end: '+=2000',
      scrub: true,
      pin: true,
      toggleActions: 'play pause play reset'
    }
  })
  
  // timeline.set(slogans, {
  //   autoAlpha: 0
  // })
  
  timeline.from('.landing-idea__top', {
    autoAlpha: 0,
    y: '-100%',
    duration: 1,
    ease: 'power1'
  }, 'a').from('.first', {
    autoAlpha: 0,
    y: '100%',
    duration: 1,
    ease: 'power1'
  }, 'a').to('.first', {
    autoAlpha: 0,
    y: '100%',
    duration: 1,
    ease: 'power1'
  }, '+=10').to('.idea-line', {
    autoAlpha: 0,
    duration: 1,
    ease: 'power1'
  }).to('.idea-echo', {
    autoAlpha: 1,
    duration: 1,
    ease: 'power1'
  }).from('.second', {
    autoAlpha: 0,
    y: '100%',
    duration: 1,
    ease: 'power1'
  }).to('.second', {
    autoAlpha: 0,
    y: '100%',
    duration: 1,
    ease: 'power1'
  }, '+=10').to('.idea-echo', {
    autoAlpha: 0,
    duration: 1,
    ease: 'power1'
  }).set('.idea-cube', {
    className: 'idea-cube spin'
  }).from('.third', {
    autoAlpha: 0,
    y: '100%',
    duration: 1,
    ease: 'power1'
  }, '+=1').add(() => {
  }, '+=10')
})
</script>

<style lang="scss">
.landing-idea {
  min-height: calc(100vh - 84px);
  padding: 150px 0;
  text-align: center;
  
  &__container {
  }
  
  &__top {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
  
  &__echo-right {
    align-self: flex-end;
  }
  
  &__bottom {
    position: relative;
  }
  
  &__slogan {
    position: absolute;
    width: 100%;
    font-size: 60px;
    font-weight: bold;
    
    strong {
      color: var(--color-primary);
    }
  }
}
</style>