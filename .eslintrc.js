/* eslint-env node */
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "off",
      "error",
        2
      ],
    "linebreak-style": [
      "off",
      "windows",
    ],
    "quotes": [
      "off",
      "single",
    ],
    "semi": [
      "off",
      "never",
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    'no-console': 'off',
    "react/prop-types": 0
  }
}
