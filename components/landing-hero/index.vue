<template>
  <section
    class="landing-hero"
    ref="landingHero"
    data-color-theme="dark">
    <h5
      class="landing-hero__subtitle">
      <span
        class="landing-hero__subtitle-text">
        The First Decentralized <br class="landing-hero__subtitle-br">Social Engagement Protocol
      </span>
    </h5>
    
    <canvas
      class="landing-hero__canvas"
      id="heroCanvas">
    </canvas>
    
    <div
      class="container landing-hero__container">
      <h1
        class="landing-hero__title">
        Our Opinion<br> Is a Part of <span class="landing-hero__title-keyword" ref="titleKeyword"></span>
      </h1>
      
      <div
        class="landing-hero__keyword-list">
        <span
          class="landing-hero__keyword-item"
          v-for="item in keywords"
          :key="item">
          {{ item }}.
        </span>
      </div>
      
      <div
        class="landing-hero__action-bar">
        <!-- <a
          class="el-button el-button--primary el-button--xlarge"
          href="https://grant-explorer.gitcoin.co/#/round/1/0xd95a1969c41112cee9a2c931e849bcef36a16f4c/0x0f648ff5caf73611e70ebaaa9df9bf0dc81f5a633af3996672c6a5e44df791b1-0xd95a1969c41112cee9a2c931e849bcef36a16f4c"
          target="_blank"
          title="Support on GitCoin">
          Support on GitCoin
        </a>
         -->
         
        <el-button
          class="el-button--xlarge"
          type="primary"
          @click="$jumpTo('#landing-demo')">
          Check Demo
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-page__sub-button landing-hero__sub-button"
          @click="$jumpTo('#landing-form', -40)">
          Get It for Free
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton } from 'element-plus'
import Typewriter from 'typewriter-effect/dist/core'
import * as THREE from 'three'

let typewriter = ref(null)
const titleKeyword = ref(null)
let landingHero = ref(null)

const keywords = [
  'Decentralized', 
  'Permissionless',
  'Censorship-resistant',
  'Permanent'
]

onMounted(() => {
  typewriter = new Typewriter(titleKeyword.value, {
    strings: ['Thing', 'NFT', 'Article', 'Podcast', 'Transaction', 'Address', 'Opinion', 'Contract'],
    loop: true,
    autoStart: true,
    pauseFor: 800,
    deleteSpeed: 50
  })
  
  initCanvas()
  animateCanvas()
  
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  typewriter.stop()
  
  window.removeEventListener('resize', onResize)
})

// https://codepen.io/vadymhimself/details/mNVdVE
let camera, scene, renderer, group
let dirs = []
const initCanvas = () => {
  // camera
  camera = new THREE.PerspectiveCamera(45, landingHero.value.clientWidth / landingHero.value.clientHeight, 1, 10000) 
  camera.position.z = 1000
  
  // scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x16171c)
  scene.add(new THREE.AmbientLight(0x16171c))
  scene.add(new THREE.DirectionalLight(0xffffff, 0.5))
  
  // cubes
  const geometry = new THREE.BoxBufferGeometry(8, 8, 8)
  const material = new THREE.MeshPhongMaterial({
    color: 0xd1d2d7
  })
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
  
  // renderer
  const canvas = document.querySelector('#heroCanvas')
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(landingHero.value.clientWidth, landingHero.value.clientHeight)
}

const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

const animateCanvas = () => {
  // animate meshes
  let mouse = new THREE.Vector2(-5, -5)
  group.rotation.y += 0.001

  // animate camera
  camera.position.x += (mouse.x - camera.position.x) * 0.02
  camera.position.y += (mouse.y - camera.position.y) * 0.02

  group.children.forEach((el, i) => {
    el.position.x = lerp(el.position.x, dirs[i].x, 0.008)
    el.position.y = lerp(el.position.y, dirs[i].y, 0.008)
    el.position.z = lerp(el.position.z, dirs[i].z, 0.008)
    el.rotateX(0.02)
    el.updateMatrix()
  }) 
  
  camera.lookAt(scene.position)
  
  // renderer
  renderer.render(scene, camera)
  
  // call again on next frame
  requestAnimationFrame(animateCanvas)
}

const onResize = () => {
  // update camera
  camera.aspect = landingHero.value.clientWidth / landingHero.value.clientHeight
  camera.updateProjectionMatrix()
  
  // update renderer
  renderer.setSize(landingHero.value.clientWidth, landingHero.value.clientHeight)
}
</script>

<style lang="scss">
// https://codepen.io/edmundojr/details/xOYJGw

.landing-hero {
  position: relative;
  min-height: 100vh;
  padding: 250px 0 150px;
  text-align: center;
  z-index: 1;
  
  &__subtitle {
    padding: 0 10px;
    margin-bottom: 10px;
  }
  
  &__subtitle-text {
    display: inline-flex;
    border-radius: 4px;
    padding: 2px 10px;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color-primary);
    background: #15EBB7;
  }
  
  &__subtitle-br {
    display: none;
  }
  
  &__canvas {
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
  
  &__keyword-list {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: white;
    opacity: .6;
  }
  
  &__keyword-item {
    margin-right: 15px;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
  
  &__action-bar {
    margin-top: 50px;
  }
}

@media screen and (max-width: 900px) {
  .landing-hero {
    &__title {
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-hero {  
    &__action-bar {
      display: flex;
      flex-direction: column;
      
      .el-button {
        + .el-button {
          margin: 15px 0 0;
        }
      }
    }
    
    &__sub-button {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .landing-hero {
    &__title {
      font-size: 13vw;
    }
    
    &__subtitle-br {
      display: inline-block;
    }
  }
}
</style>