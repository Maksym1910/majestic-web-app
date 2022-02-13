module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'no-restricted-exports': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
    }],
  },
};
