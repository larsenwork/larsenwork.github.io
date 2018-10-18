module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-easing-gradients': {},
    'postcss-input-range': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: 'cover 90%, last 2 major versions',
    },
  },
}
