export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'customerFeedback',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: "icon",
        type: 'image/svg',
        href: "https://cdn.shopify.com/s/files/1/2337/7003/files/favicon.svg?v=1652946186",
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css',
  ],

  router: {
    extendRoutes(routes, resolve) {
      return [
        // {
        //   name: 'collection-pages',
        //   path: '/collections/*', // <--- change this
        //   component: resolve(__dirname, 'pages/collections'),
        //   chunkName: 'pages/collection'
        // },
        {
          name: 'feedback-page',
          path: '/*', // <--- change this
          component: resolve(__dirname, 'pages/index'),
          chunkName: 'pages/index'
        },
      ]
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/svg",
    '@nuxt/postcss8',
    // '@nuxtjs/composition-api/module',
    // '@pinia/nuxt',


  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

}
