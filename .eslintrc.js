module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'react/prop-types': 'off',
    // 'no-param-reassign': 0,
    'react/jsx-no-bind': ['error', { ignoreDOMComponents: true }],
    // 'no-alert': 'off',
  },
};
