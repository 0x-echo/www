<template>
  <section
    class="landing-idea"
    data-color-theme="dark">
    <div
      class="section-container landing-idea__container">
      <!-- <landing-cube>
      </landing-cube> -->
      
      <div>
        <div
          class="landing-idea__slogan">
          We help to <br>collect opinions
        </div>
        
        <!-- <div
          class="landing-idea__slogan">
          We help to <br>permanently store opinions
        </div>
        
        <div
          class="landing-idea__slogan">
          We help to <br>aggregate opinions
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.landing-idea {
  min-height: calc(100vh - 84px);
  padding: 150px 0;
  text-align: center;
  
  &__container {
    position: relative;
  }
  
  &__slogan {
    font-size: 72px;
    font-weight: bold;
  }
}
</style>