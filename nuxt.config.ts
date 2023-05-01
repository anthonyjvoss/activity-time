// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase','@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath:  '~/src/assets/css/main.css',
    configPath: '~/tailwind.config.ts'
  }
})
