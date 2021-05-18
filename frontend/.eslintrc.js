module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'eslint:recommended', '@vue/prettier'
  ],

  rules: {
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
