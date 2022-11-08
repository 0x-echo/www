<template>
  <template-doc
    subtitle=""
    title="Contact">
    <div>
      <a
        class="contact-page__item"
        v-for="item in list"
        :key="item.value"
        :href="item.label === 'email' ? `mailto:${item.value}` : item.value"
        :target="item.label === 'email' ? '' : '_blank'">
        <div
          class="contact-page__item-icon">
          <i
            :class="item.icon">
          </i>
        </div>
        
        <div
          class="contact-page__item-value">
          {{ item.value }}
        </div>
      </a>
    </div>
  </template-doc>
</template>

<script setup>
useHead({
  title: 'Contact | ECHO | Long live our opinion'
})

const list = [{
  icon: 'ri-discord-line',
  label: 'discord',
  value: 'https://discord.gg/KFxyaw9Wdj'
}, {
  icon: 'ri-twitter-line',
  label: 'twitter',
  value: 'https://twitter.com/0x_ECHO'
}, {
  icon: 'ri-mail-line',
  label: 'email',
  value: 'we@0xecho.com'
}]
</script>

<style lang="scss">
.contact-page {
  &__item {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: var(--border-radius);
    background: var(--bg-color);
    color: var(--text-color-secondary);
    
    &:hover {
      .contact-page__item-icon {
        background: var(--color-primary);
        color: white;
      }
    }
    
    & + & {
      margin-top: 24px;
    }
  }
  
  &__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    font-size: 20px;
    background: white;
    transition: all .3s ease;
  }
}
</style>