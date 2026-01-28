import globals from 'globals';
import eslintJsPkg from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

const { configs: pluginJsConfigs } = eslintJsPkg;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', '*.config.js'],
  },

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Vite handles this
      'react/prop-types': 'off', // TypeScript handles this
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
  },

  pluginJsConfigs.recommended,
];
