module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'no-underscore-dangle': 0,
    'react/sort-comp': 0,
    'consistent-return': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
  },
};
