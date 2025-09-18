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
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {},
    },
    extends: compat.extends(
      'prettier',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ),
    settings: {
      react: {
        version: 'detect',
        jsxRuntime: 'automatic',
      },
    },
    rules: {
      'react/jsx-key': 'off',
      'react/react-in-jsx-scope': 'off',
      // 所有引用了@react-three/fiber的文件，在文件中单独禁用这个规则
      // 方法是使用文件头标记 /* eslint-disable react/no-unknown-property */
      // 'react/no-unknown-property': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    extends: compat.extends('prettier', 'plugin:react/recommended'),
    settings: {
      react: {
        version: 'detect',
        jsxRuntime: 'automatic',
      },
    },
    rules: {
      'react/jsx-key': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
])
