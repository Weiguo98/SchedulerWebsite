module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-multiple-template-root': "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
