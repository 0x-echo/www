import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0, behaviour: 'smooth' }
  }
})