module.exports = {
  env: {
    node: true
  },

  parserOptions: {
    ecmaVersion: 12
  },

  extends: [
    'eslint:recommended',
    'airbnb-base'
  ],

  rules: {
    'comma-dangle': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ]
  }
};
