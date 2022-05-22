<template>
  <section
    class="landing-section">
    <div
      class="landing-section__container"
      :class="{
        'is-reverse': reverse
      }">
      <div
        class="landing-section__content">
        <h3
          class="landing-section__title">
          <strong>
            {{ strongTitle }}
          </strong>
          {{ title }}
        </h3>
        
        <div
          class="landing-section__desc">
          <slot
            name="desc">
            {{ desc }}
          </slot>
        </div>
      </div>
      
      <div
        class="landing-section__visual"
        :style="{
          'background-image': `url('/assets/${image}.svg')`
        }">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    desc: {
      type: String
    },
    image: {
      type: String
    },
    reverse: {
      type: Boolean,
      default: false
    },
    strongTitle: {
      type: String
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.landing-section {
  margin-bottom: 120px;
  
  &__container {
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &.is-reverse {
      flex-direction: row-reverse;
    }
  }
  
  &__content {
    width: 50%;
  }
  
  &__title {
    font-size: 28px;
    font-weight: 600;
    
    strong {
      position: relative;
      font-weight: 600;
      color: var(--color-primary);
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;;
        background: var(--color-primary-light);
        z-index: -1;
      }
    }
  }
  
  &__desc {
    margin-top: 15px;
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-color-secondary);
  }
  
  &__visual {
    width: 45%;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>