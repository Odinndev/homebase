export default {
  router: {
    base: '/klor/'
   },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'homebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default'},
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** PWA OPTIONS
  */
  manifest: {
  theme_color: '#FFFFFF',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "uikit/dist/css/uikit.min.css",
    "buefy/dist/buefy.css",
    "../styl/foo.styl",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/postcss.config.js', ssr: false },
    { src: '~/plugins/Moment.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-buefy',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyA1u8TyeGqXaPrUlWpOheuJrWhZIEGf88Y',
          authDomain: 'sundlaug-a5515.firebaseapp.com',
          databaseURL: 'https://sundlaug-a5515.firebaseio.com',
          projectId: 'sundlaug-a5515',
          storageBucket: 'sundlaug-a5515.appspot.com',
          messagingSenderId: '775718098398',
          appId: '1:775718098398:web:27520fa0e903bda9c7b94f',
          measurementId: 'G-FH9W55GDJB',
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction'
            },
            ssr: false // default
          }
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
