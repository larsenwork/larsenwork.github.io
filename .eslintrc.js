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

  // https://medium.com/@doppelmutzi/eslint-prettier-vue-workflow-46a3cf54332f
  // https://github.com/prettier/eslint-config-prettier
  extends: ["prettier", "prettier/standard", "plugin:vue/recommended"],
  // https://github.com/prettier/eslint-plugin-prettier
  rules: {
    "prettier/prettier": ["error",
      {
        singleQuote: true,
        semi: false
      }
    ]
  },
  plugins: ["vue", "prettier"],

  // Needed for future jest/mocha stuff
  globals: {
    expect: true,
    sinon: true
  }
}
