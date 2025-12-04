/* ESLint configuration aligned with Google JavaScript Style Guide
 * with TypeScript and React support. Uses legacy eslintrc format for
 * compatibility with community configs.
 */
module.exports = {
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
    // Google style adjustments for TS/React app
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    // Formatting nuances typically handled by Prettier; keep ESLint focused on code quality.
    'max-len': ['error', {code: 100, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true}],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'semi': ['error', 'always'],

    // TypeScript-specific tweaks
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // React JSX runtime (no need to import React)
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // Import ordering sanity (optional)
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        'alphabetize': {order: 'asc', caseInsensitive: true},
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Prefer TS-aware versions where applicable
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['vite.config.ts', 'vite.config.*.ts', '*.config.ts', '*.config.cjs'],
      env: {node: true, browser: false},
    },
  ],
};
