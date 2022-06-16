<template>
  <section
    class="landing-hero"
    ref="landingHero"
    data-color-theme="dark">
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
        class="landing-hero__action-bar">
        <el-button
          class="el-button--xlarge"
          type="primary"
          @click="$jumpTo('#landing-form', -40)">
          Get It for Free
        </el-button>
        
        <el-button
          class="el-button--xlarge landing-page__demo-button"
          @click="$jumpTo('#landing-demo')">
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

let typewriter = ref(null)
const titleKeyword = ref(null)
let landingHero = ref(null)

onMounted(() => {
  typewriter = new Typewriter(titleKeyword.value, {
    strings: ['Things', 'NFT', 'Article', 'Transation', 'Address', 'Opinion', 'Dweb File'],
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
let camera, scene, renderer, group, geometry, material, raycaster
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
  geometry = new THREE.BoxBufferGeometry(8, 8, 8)
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
  }
}

@media screen and (max-width: 500px) {
  .landing-hero {
    &__title {
      font-size: 13vw;
    }
  }
}
</style>