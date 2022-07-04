module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@emotion', 'react-native'],
  overrides: [
    {
      rules: {
        'react-native/no-unused-styles': 0,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 0,
        'react-native/no-single-element-style-arrays': 2,
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { "ignoreRestSiblings": true }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
      },
    },
  ],
}
