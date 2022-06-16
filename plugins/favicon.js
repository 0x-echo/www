import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  setTimeout(() => {
    try {
      var element = document.querySelector('link')

      if (!element || element.getAttribute('rel') !== 'icon') {
        return
      }
      const darkModeListener = (event) => {
        if (event.matches) {
          element.setAttribute('href', '/favicon-white.ico')
        } else {
          element.setAttribute('href', '/favicon.ico')
        }
      }

      // Update favicon on Mode change
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener)

      // Check Mode on load
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        element.setAttribute('href', '/favicon-white.ico')
      } else {
        element.setAttribute('href', '/favicon.ico')
      }
    } catch (e) {
      console.log(e)
    }
  }, 500)
})
