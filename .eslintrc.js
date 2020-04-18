module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "quotes": 0, // [1, "single"],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }], // 支持哪些扩展名
  },
};
