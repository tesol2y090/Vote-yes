const BASE_URL = 'https://elect.in.th/once-we-voted-yes/'
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'จากคนเคยรับ แล้วคิดใหม่',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'เสียงของผู้ที่ลงประชามติ รับร่างรธน. ปี 59 แล้วเปลี่ยนใจ',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'จากคนเคยรับ แล้วคิดใหม่',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'เสียงของผู้ที่ลงประชามติ รับร่างรธน. ปี 59 แล้วเปลี่ยนใจ',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: BASE_URL + 'og_image.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: BASE_URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'จากคนเคยรับ แล้วคิดใหม่',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'เสียงของผู้ที่ลงประชามติ รับร่างรธน. ปี 59 แล้วเปลี่ยนใจ',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image:src',
        content: BASE_URL + 'og_image.png',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: BASE_URL,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-awesome-swiper.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    dir: 'dist/once-we-voted-yes'
  },

  router: {
    base: '/once-we-voted-yes/'
  }
}
