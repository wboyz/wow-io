// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  tailwindcss: {
    configPath: './tailwind.config.js',
    quiet: true,
  },
  runtimeConfig: {
    battleNetClientId: process.env.BATTLE_NET_CLIENT_ID,
    battleNetClientSecret: process.env.BATTLE_NET_CLIENT_SECRET,
  },
});
