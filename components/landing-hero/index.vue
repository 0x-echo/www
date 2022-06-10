<template>
  <section
    class="landing-hero"
    ref="landingHero"
    data-color-theme="dark">
    <div
      class="landing-hero__background"
      ref="heroBackground">
      <canvas
        id="heroBackground">
      </canvas>
    </div>
    
    <div
      class="section-container landing-hero__container">
      <h1
        class="landing-hero__title">
        Our <strong>Opinion</strong><br> Is a Part of <span class="landing-hero__title-keyword" ref="titleKeyword"></span>
      </h1>
      
      <div
        class="landing-hero__action-bar">
        <el-button
          class="el-button--xlarge"
          type="primary"
          @click="anchorClick('landing-form')">
          Get It for Free
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-section__demo-button"
          @click="anchorClick('landing-demo')">
          Check Demo
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'
import Typewriter from 'typewriter-effect/dist/core'
import * as THREE from 'three'

let heroBackground = ref(null)
let typewriter = ref(null)
const titleKeyword = ref(null)

onMounted(() => {
  initHeroBackground()
  animateHeroBackground()
  
  typewriter = new Typewriter(titleKeyword.value, {
    strings: ['Things', 'NFT', 'Article', 'Transation', 'Address', 'Opinion', 'Dweb File'],
    loop: true,
    autoStart: true,
    pauseFor: 800,
    deleteSpeed: 50
  })
  
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  typewriter.stop()
  
  window.removeEventListener('resize', onResize)
})

// https://codepen.io/vadymhimself/details/mNVdVE
let camera, scene, renderer, group, geometry, material, raycaster
let dirs = []
const initHeroBackground = () => {
  camera = new THREE.PerspectiveCamera(45, heroBackground.value.clientWidth / heroBackground.value.clientHeight, 1, 10000) 
  camera.position.z = 1000
  
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x16171c)
  scene.add(new THREE.AmbientLight(0x16171c))
  scene.add(new THREE.DirectionalLight(0xffffff, 0.5))
  
  geometry = new THREE.BoxBufferGeometry(8, 8, 8);
  material = new THREE.MeshPhongMaterial({
    color: 0xeeeeee, specular: 0xffffff, shininess: 250
  })
  
  raycaster = new THREE.Raycaster()
  
  group = new THREE.Group()
  for (let i = 0; i < 750; i++) {
    const mesh = new THREE.Mesh(geometry, material)
    const dX = Math.random() * 2000 - 1000
    const dY = Math.random() * 2000 - 1000
    const dZ = Math.random() * 2000 - 1000
    
    dirs.push({
      x: dX,
      y: dY,
      z: dZ
    })
    
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 0
    
    mesh.rotation.x = Math.random() * 2 * Math.PI
    mesh.rotation.y = Math.random() * 2 * Math.PI
    
    mesh.matrixAutoUpdate = false
    mesh.updateMatrix()
    
    group.add(mesh)
  }
  
  scene.add(group)
  
  const canvas = document.querySelector('#heroBackground')
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(heroBackground.value.clientWidth, heroBackground.value.clientHeight)
}

const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

const animateHeroBackground = () => {
  requestAnimationFrame(animateHeroBackground)
  let mouse = new THREE.Vector2(-5, -5)
  group.rotation.y += 0.005
  camera.position.x += (mouse.x - camera.position.x) * 0.02
  camera.position.y += (mouse.y - camera.position.y) * 0.02
  
  group.children.forEach((el, i) => {
    el.position.x = lerp(el.position.x, dirs[i].x, 0.008)
    el.position.y = lerp(el.position.y, dirs[i].y, 0.008)
    el.position.z = lerp(el.position.z, dirs[i].z, 0.008)
    el.rotateX(0.02)
    el.updateMatrix()
  })
  camera.lookAt( scene.position )
  renderer.render(scene, camera)
}

const onResize = () => {
  camera.aspect = heroBackground.value.clientWidth / heroBackground.value.clientHeight
  camera.updateProjectionMatrix()
  
  renderer.setSize(heroBackground.value.clientWidth, heroBackground.value.clientHeight)
}

const anchorClick = (id) => {
  document.querySelector(`#${id}`).scrollIntoView()
}
</script>

<style lang="scss">
// https://codepen.io/edmundojr/details/xOYJGw

.landing-hero {
  position: relative;
  min-height: calc(100vh - 84px);
  padding: 150px 0;
  text-align: center;
  z-index: 1;
  
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  
  &__title {
    font-size: 72px;
    font-weight: 900;
    
    strong {
      font-weight: 900;
    }
  }
  
  &__title-keyword {
    color: #ffeb3b;
  }
  
  &__action-bar {
    margin-top: 50px;
  }
}

@media screen and (max-width: $mobile-width) {
  .landing-hero {
    &__title {
      font-size: 60px;
    }
  }
}

@media screen and (max-width: 425px) {
  .landing-hero {
    &__title {
      font-size: 44px;
    }
  }
}
</style>