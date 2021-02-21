export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Simple Portfolio Web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'simple portfolio web with simple transitions and motion design' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // PWA setting
  pwa: {
    meta: {
      title: 'Simple Portfolio Web',
      description: 'Simple Portfolio Web dibuat dg Nuxt JS, Anime JS, Locomotive JS',
      author: 'Black Initial',
      theme_color: '#0B0B0D',
      lang: 'id'
    },
    manifest: {
      name: 'Simple Portfolio Web',
      short_name: 'SPW',
      description: 'Simple Portfolio Web dibuat dg Nuxt JS, Anime JS, Locomotive JS',
      lang: 'id',
      background_color: '#0B0B0D',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/locomotive-scroll.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
