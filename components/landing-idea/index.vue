<template>
  <section
    class="landing-idea"
    data-color-theme="dark">
    <div
      class="container landing-idea__container">
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
          We help to<br><strong>aggregate</strong> opinions
        </div>
        
        <div
          class="landing-idea__slogan second">
          We help to<br>ignite <strong>talking vibe</strong>
        </div>
        
        <div
          class="landing-idea__slogan third">
          We help to<br>store opinions <strong>forever</strong>
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
  animate()
})

const animate = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.landing-idea',
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
      toggleActions: 'play pause play reset'
    }
  })
  
  timeline.to('.first', {
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
}
</script>

<style lang="scss">
.landing-idea {
  min-height: 100vh;
  padding: 200px 0 150px;
  text-align: center;
  
  &__top {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    margin-bottom: 60px;
  }
  
  &__echo-right {
    align-self: flex-end;
  }
  
  &__bottom {
    position: relative;
  }
  
  &__slogan {
    width: 100%;
    font-size: 60px;
    font-weight: bold;
    line-height: 1.2;
    
    &.second,
    &.third {
      position: absolute;
      top: 0;
      left: 0;
    }
    
    strong {
      color: var(--color-primary);
    }
  }
}

@media screen and (max-width: 600px) {
  .landing-idea {
    &__slogan {
      font-size: 10vw;
    }
  }
}
</style>