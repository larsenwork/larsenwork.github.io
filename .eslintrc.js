module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },

  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true
  },

  plugins: [
    "vue",
    "prettier"
  ],

  // https://medium.com/@doppelmutzi/eslint-prettier-vue-workflow-46a3cf54332f
  // https://github.com/prettier/eslint-config-prettier
  // https://github.com/vuejs/eslint-plugin-vue
  extends: [
    "prettier",
    "prettier/standard",
    "plugin:vue/recommended"
  ],

  // https://github.com/prettier/eslint-plugin-prettier
  rules: {
    "prettier/prettier": ["error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false
      }
    ]
  },

  // Needed for future jest/mocha stuff
  globals: {
    expect: true,
    sinon: true
  }
}
