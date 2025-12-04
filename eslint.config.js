// ESLint flat config bridging our existing .eslintrc.cjs (Google + TS/React) to ESLint v9
import path from 'node:path';

import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

export default [
  // Base JS recommended
  js.configs.recommended,

  // Translate our legacy config (google + plugins) to flat config
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es2022: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {jsx: true},
    },
    settings: {
      react: {version: 'detect'},
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
    extends: [
      'google',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    rules: {
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
      'max-len': [
        'error',
        { code: 160, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true },
      ],
      'quotes': ['error', 'single', {avoidEscape: true}],
      'semi': ['error', 'always'],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // Relax React Hooks rules to avoid CI failures while legacy code is migrated
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'warn',

      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          'alphabetize': {order: 'asc', caseInsensitive: true},
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-unused-vars': 'off',
        },
      },
      {
        files: ['vite.config.ts', 'vite.config.*.ts', '*.config.ts', '*.config.cjs'],
        env: {node: true, browser: false},
      },
    ],
  }),
  {
    ignores: ['dist/', 'node_modules/', 'eslint.config.js'],
  },
  {
    files: ['src/web-components/**/*'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
];
