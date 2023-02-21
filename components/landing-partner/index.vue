<template>
  <section
    class="landing-partner"
    id="landing-partner">
    <div
      class="container landing-partner__container">
      <landing-section-header
        subtitle=""
        title="ECHO Partners">
      </landing-section-header>
      
      <div
        class="landing-partner__content">    
        <a 
          class="landing-partner__item"
          v-for="item in list"
          :key="item.value"
          :href="item.link"
          target="_blank">
          <img 
            :class="`${item.value}-logo`"
            :src="item.logo" 
            :alt="item.value">
            
          <span
            class="landing-partner__item-label">
            {{ item.label }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ArweaveLogo from '@/assets/partners/arweave.svg'
import ArconnectLogo from '@/assets/partners/arconnect.png'
import BressLogo from '@/assets/partners/bress.png'
import Cc0Logo from '@/assets/partners/cc0.svg'
import EverpayLogo from '@/assets/partners/everpay.svg'
import EverlandLogo from '@/assets/partners/4everland.png'
import DotbitLogo from '@/assets/partners/dotbit.png'
import GuoyuLogo from '@/assets/partners/guoyu.jpeg'
import Mail3Logo from '@/assets/partners/mail3.svg'
import MasknetworkLogo from '@/assets/partners/masknetwork.svg'
import MirrorLogo from '@/assets/partners/mirror.png'
import mogulsdaoLogo from '@/assets/partners/mogulsdao.png'
import PermadaoLogo from '@/assets/partners/permadao.png'
import PermafactsLogo from '@/assets/partners/permafacts.png'
import PlanetLogo from '@/assets/partners/planet.png'
import OrangexyzLogo from '@/assets/partners/orangexyz.png'

const list = [{
  link: 'https://www.arweave.org/',
  logo: ArweaveLogo,
  value: 'arweave',
  label: "Arweave"
}, {
  link: 'https://www.did.id/',
  logo: DotbitLogo,
  value: 'dotbit',
  label: '.bit'
}, {
  link: 'https://everpay.io/',
  logo: EverpayLogo,
  value: 'everpay',
  label: 'Everpay'
}, {
  link: 'https://mirror.xyz/',
  logo: MirrorLogo,
  value: 'mirror',
  label: 'Mirror'
}, {
  link: 'https://permadao.notion.site/PermaDAO-4c0bd73f5a1c4410ad72a32e1718ebb6',
  logo: PermadaoLogo,
  value: 'permaDao',
  label: 'PermaDAO'
}, {
  link: 'https://planetable.xyz/',
  logo: PlanetLogo,
  value: 'planet',
  label: 'Planet'
}, {
  link: 'https://www.4everland.org/',
  logo: EverlandLogo,
  value: '4everland',
  label: '4EVERLAND'
}, {
  link: 'https://mail3.me/',
  logo: Mail3Logo,
  value: 'mail3',
  label: 'Mail3'
}, {
  link: 'https://bress.xyz/',
  logo: BressLogo,
  value: 'bress',
  label: 'Bress'
}, {
  link: 'https://cc0.io/',
  logo: Cc0Logo,
  value: 'cc0',
  label: 'cc0'
}, {
  link: 'https://www.arconnect.io/',
  logo: ArconnectLogo,
  value: 'arconnect',
  label: 'ArConnect'
}, {
  link: 'https://permafacts.arweave.dev/',
  logo: PermafactsLogo,
  value: 'permafacts',
  label: 'Permafacts'
}, {
  link: 'https://magic-wand.arweave.dev/',
  logo: mogulsdaoLogo,
  value: 'mogulsdao',
  label: 'MogulsDAO'
}]
</script>

<style lang="scss">
.landing-partner {
  padding: 120px 0; 
  background: var(--bg-color);
  
  &__container {
    max-width: 1024px;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
  
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: var(--border-radius);
    background: white;
    transition: all .3s ease;
    
    &:hover {
      transform: translateY(-5%);
    }
    
    img {
      height: 48px;
      max-width: 100%;
      object-fit: contain;
      
      &.guoyu-logo {
        border-radius: 50%;
      }
    }
  }
  
  &__item-label {
    margin-top: 12px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-color-secondary);
    text-align: center;
  }
}

@media screen and (max-width: #{$small-desktop-width - 1}) {
  .landing-partner {
    &__content {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-partner {
    &__content {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
    }
    
    &__item {
      padding: 16px;
      
      img {
        height: 36px;
      }
    }
  }
}

@media screen and (max-width: #{$mobile-width}) {
  .landing-partner {
    &__content {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>