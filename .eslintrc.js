// https://eslint.org/
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    // semi: ['error', 'never'],
    // 'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-var': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'unicode-bom': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      // https://github.com/yannickcr/eslint-plugin-react#configuration
      version: 'detect',
    },
  },
}
