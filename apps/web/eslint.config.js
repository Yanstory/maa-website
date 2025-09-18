const { defineConfig, globalIgnores } = require('eslint/config')
const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  globalIgnores(['**/dist/', '**/node_modules/', '**/build/']),
  {
    extends: compat.extends('prettier', 'plugin:react/recommended'),
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-key': 'off',
    },
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  },
])
