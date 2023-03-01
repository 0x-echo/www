<template>
  <section
    class="landing-button"
    id="landing-button"
    data-color-theme="light">
    <div
      class="container landing-button__container">
      <landing-section-header
        title="ECHO Button">
        <template
          #subtitle>
          <div
            class="landing-button__subtitle">
            <p>
              JS SDK for Embedding Like Button
            </p>
            
            <span
              class="landing-button__subtitle-divider">
              ·
            </span>
            
            <router-link
              class="landing-button__doc-link"
              target="_blank"
              to="/developer#echo-button">
              <span>
                Documentation
              </span>
              
              <i
                class="ri-arrow-right-up-line">
              </i>
            </router-link>
          </div>
        </template>
      </landing-section-header>
      
      <div class="landing-button__box">
        <div class="landing-button__box-item">
          <div id="echo-button-light"></div>
        </div>

        <div class="landing-button__box-item is-dark">
          <div id="echo-button-dark"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EchoButton from '@0xecho/button'

onMounted(() => {
  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
    alwaysShowPopover: true,
    popoverAutoFlip: false
  }).mount('#echo-button-light')

  new EchoButton({
    targetUri: 'https://0xecho.com',
    maxDisplayLikers: 5,
    alwaysShowPopover: true,
    theme: 'dark',
    partnerName: 'Partner',
    popoverAutoFlip: false,
    numberType: 'count'
  }).mount('#echo-button-dark')
})
</script>

<style lang="scss">
.landing-button {
  padding: 100px 0;
  
  &__container {
    max-width: 1024px;
  }
  
  &__subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    font-size: 16px;
    color: var(--text-color-muted);
  }
  
  &__subtitle-divider {
    margin: 0 10px;
  }
  
  &__doc-link {
    display: flex;
    align-items: center;
  }
  
  &__box {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--border-color);
  }
  
  &__box-item {
    width: 50%;
    padding: 240px 0 60px;
    text-align: center;
    
    &.is-dark {
      background: var(--bg-color-dark);
    }
  }
}

@media screen and (max-width: 600px) {
  .landing-button {
    &__box-item {
      width: 100%;
    }
  }
}
</style>