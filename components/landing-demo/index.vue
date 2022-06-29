<template>
  <section
    class="landing-demo"
    id="landing-demo"
    :data-color-theme="darkTheme ? 'dark' : 'light'">
    <div
      class="container landing-demo__container">
      <landing-section-header
        title="Live Demo">
        <el-switch
          class="landing-demo__theme-switch"
          v-model="darkTheme"
          style="--el-switch-on-color: #ffffff; --el-switch-off-color: #16171C">
        </el-switch>
      </landing-section-header>
      
      <div
        class="landing-demo__section"
        v-for="item in nav"
        :key="item.value"> 
        <div
          class="landing-demo__section-info">
          <h3
            class="landing-demo__section-title">
            <span>#</span>{{ item.label }}
          </h3>
          
          <div
            class="landing-demo__section-desc">
            {{ item.desc }}
          </div>
        </div>
        
        <div
          class="landing-demo__widget">
          <iframe
            class="landing-demo__iframe" 
            :src="`https://thirdchat-fe-deploy.vercel.app/?show-comment-dislike=true&has-v-padding=true&has-h-padding=true&modules=${item.value}&color-theme=${darkTheme ? 'dark' : 'light'}&target_uri=https%3A%2F%2Fmirror.xyz%2Fthirdchat.eth%2F8cCUKVDKXGco4-O6JRSlX5_zZkmb7C0YwCurcIVyZ2g&rpc_url=https%3A%2F%2Flocal-dev.third.chat%2F&dark-theme-color=%23141414&width=720&display=iframe`" 
            frameborder="0">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElSwitch } from 'element-plus'

let darkTheme = ref(false)

const nav = [{
  label: 'Comment',
  value: 'comment,like,dislike,tip',
  desc: 'Let people leave their feedback, ask questions, offer their own point of view.'
}, {
  label: 'Reaction',
  value: 'like',
  desc: 'Increase visitors’ engagement. Collect their reactions.'
}, {
  label: 'Tip',
  value: 'tip',
  desc: 'Accept supports from visitors.'
}]
</script>

<style lang="scss">
.landing-demo {
  padding: 160px 0 100px;
  
  &[data-color-theme=dark] {
    .landing-demo__theme-switch {
      .el-switch__action {
        background: var(--bg-color-dark);
      }
    }
    
    .landing-demo__section-desc {
      color: white;
    }
    
    .landing-demo__widget {
      background: repeating-linear-gradient(135deg, var(--color-primary), var(--color-primary) 1px, var(--bg-color-dark) 0, var(--bg-color-dark) 10px);
    }
    
    .landing-demo__iframe {
      border-color: #373946;
    }
  }
  
  &__section {
    display: flex;
    
    & + & {
      margin-top: 60px;
    }
  }
  
  &__section-info {
    width: 300px;
    margin: 30px 60px 0 0;
  }
  
  &__section-title {
    font-size: 28px;
    
    span {
      margin-right: 10px;
      color: var(--color-primary);
    }
  }
  
  &__section-desc {
    margin-top: 15px;
    line-height: 2;
    color: var(--text-color-secondary);
  }
  
  &__widget {
    flex: 1;
    position: relative;
    height: 517px;
    padding: 0 15px;
    background: repeating-linear-gradient(135deg, var(--color-primary), var(--color-primary) 1px, white 0, white 10px);
  }
  
  &__iframe {
    width: 100%;
    height: 502px;
    border: 1px solid var(--bg-color-dark);
    background: white;
  }
}

@media screen and (max-width: $tablet-width) {
  .landing-demo {
    &__section-info {
      margin-right: 30px;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-demo {
    &__section {
      display: block;
    }
    
    &__section-info {
      width: 100%;
      margin: 0 0 20px;
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .landing-demo {
    &__nav-divider {
      margin: 0 10px;
    }
  }
}

@media screen and (max-width: $small-mobile-width) {
  .landing-demo {
    &__widget {
      height: 502px;
      padding: 0;
    }
  }
}
</style>