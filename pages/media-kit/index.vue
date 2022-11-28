<template>
  <template-doc
    subtitle=""
    title="Media Kit">
    <div
      class="media-kit__list">
      <div
        class="media-kit__logo">
        <img 
          class="media-kit__logo-image"
          src="@/assets/echo-logo.svg" 
          alt="logo black">
      </div>
      
      <div
        class="media-kit__logo white">
        <img 
          class="media-kit__logo-image"
          src="@/assets/echo-logo-white.svg" 
          alt="logo white">
      </div>
      
      <div
        class="media-kit__logo with-label">
        <img 
          class="media-kit__logo-image"
          src="@/assets/echo-logo-with-label.svg" 
          alt="logo black">
      </div>
      
      <div
        class="media-kit__logo white with-label">
        <img 
          class="media-kit__logo-image"
          src="@/assets/echo-logo-white-with-label.svg" 
          alt="logo white">
      </div>
    </div>
    
    <div
      class="media-kit__link">
      <a 
        href="/ECHO-Media-Kit.zip"
        target="_blank">
        Download All
      </a>
    </div>
  </template-doc>
</template>

<script setup>

</script>

<style lang="scss">
.media-kit {
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    margin: 10px;
    border: 1px solid var(--border-color);
    background: white;
    
    &.white {
      background: var(--text-color-primary);
    }
    
    &.with-label {
      .media-kit__logo-image {
        width: 100px;
      }
    }
  }
  
  &__logo-image {
    width: 60px;
  }
  
  &__link {
    margin: 10px;
  }
}

@media screen and (max-width: 800px) {
  .media-kit {
    &__link {
      text-align: center;
    }
  }
}

@media screen and (max-width: 425px) {
  .media-kit {
    &__logo {
      width: 100%;
    }
  }
}
</style>