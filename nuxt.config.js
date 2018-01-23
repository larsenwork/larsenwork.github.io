module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'larsenwork',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'hsl(110, 90%, 35%)' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
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
      require('autoprefixer')
    ],

    /*
    ** Babel config
    */
    babel: {
      // plugins: ['lodash']
    }
  }
}
