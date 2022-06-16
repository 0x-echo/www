<template>
  <section
    class="landing-feature-item"
    :class="{
      'is-reverse': reverse
    }">
    <div
      class="landing-feature-item__content">
      <h3
        class="landing-feature-item__title">
        <strong>
          {{ strongTitle }}
        </strong>
        {{ title }}
      </h3>
      
      <div
        class="landing-feature-item__desc">
        <slot
          name="desc">
          {{ desc }}
        </slot>
      </div>
    </div>
    
    <img
      class="landing-feature-item__visual" 
      :src="`/${image}.svg`" 
      :alt="title">
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
.landing-feature-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &.is-reverse {
    flex-direction: row-reverse;
  }
    
  & + & {
    margin-top: 120px;
  }
  
  &__content {
    width: 52%;
  }
  
  &__title {
    font-size: 28px;
    
    strong {
      position: relative;
      color: var(--color-primary);
      z-index: 0;
      
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
    line-height: 2;
    color: var(--text-color-secondary);
  }
  
  &__visual {
    width: 48%;
    height: 250px;
    object-fit: contain;
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-feature-item {
    margin-bottom: 50px;
    
    &,
    &.is-reverse {
      flex-direction: column-reverse; 
      align-items: flex-start;
    }
    
    &__content {
      width: 100%;
    }
    
    &__visual {
      width: 50%;
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
  }
}
</style>