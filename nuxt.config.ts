// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/supabase','@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath:  '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  }
})
