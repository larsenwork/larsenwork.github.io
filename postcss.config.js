module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {
      extensions: {
        '--small': '(min-width: 320px)',
        '--medium': '(min-width: 600px)',
        '--large': '(min-width: 900px)',
        '--xlarge': '(min-width: 1440px)',
        '--highRes': '(min-resolution: 190dpi)',
      },
    },
    'postcss-nesting': {},
    'postcss-easing-gradients': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: 'cover 90%, last 2 major versions',
    },
  },
}
