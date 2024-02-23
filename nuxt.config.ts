// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // TODO Initial configuration for dark theme
  // colorMode: {
  //   preference: 'dark',
  //   fallback: 'dark',
  //   classSuffix: '',
  // }
})
