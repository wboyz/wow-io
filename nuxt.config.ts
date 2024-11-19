// https://nuxt.com/docs/api/configuration/nuxt-config

import daisyui from 'daisyui';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
  runtimeConfig: {
    battleNetClientId: process.env.BATTLE_NET_CLIENT_ID,
    battleNetClientSecret: process.env.BATTLE_NET_CLIENT_SECRET,
  },
});
