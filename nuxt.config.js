const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Larsenwork',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Andreas Larsen is an ambitious and humble healthcare professional turned developer + designer from Cph, Denmark.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@larsenwork' },
      { name: 'twitter:creator', content: '@larsenwork' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/larsenwork/image/upload/v1517138735/andreas.jpg',
      },
      { hid: 'og:title', property: 'og:title', content: 'Larsenwork' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Andreas Larsen is an ambitious and humble healthcare professional turned developer + designer from Cph, Denmark.',
      },
      { name: 'apple-mobile-web-app-title', content: 'Larsenwork' },
      { name: 'application-name', content: 'Larsenwork' },
      { name: 'theme-color', content: '#ee2b7c' },
    ],
    link: [
      {
        rel: 'preload',
        href: '/fonts/gidole-regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ee2b7c' },
    ],
  },
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/eagle', ssr: false },
  ],

  /*
  ** Modules
  */
  modules: ['@nuxtjs/dotenv'],

  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vue-lazyload', 'eagle.js'],
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        openAnalyzer: false,
        logLevel: 'info',
      }),
    ],

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      // config.module.rules.push({
      //   test: /\.(js)$/,
      //   loader: 'babel-loader',
      //   include: /(node_modules\/eagle.js)/,
      // })

      // const babelLoader = config.module.rules.find(
      //   rule => rule.loader === 'babel-loader'
      // )
      // babelLoader.exclude = /node_modules\/(?!eagle.js)/

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },

    /*
    ** PostCSS config
    */
    postcss: [
      require('postcss-import')(),
      require('postcss-custom-media')(),
      require('postcss-nesting')(),
      require('postcss-easing-gradients')(),
      require('autoprefixer'),
    ],

    /*
    ** Babel config
    */
    babel: {},
  },
}
