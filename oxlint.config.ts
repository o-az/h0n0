import { defineConfig } from 'oxlint'

/** @schema https://esm.sh/oxlint/configuration_schema.json */

export default defineConfig({
  plugins: [
    'oxc',
    'react',
    'node',
    'eslint',
    'vitest',
    'unicorn',
    'promise',
    'typescript',
    'react-perf'
  ],
  options: {
    typeCheck: true,
    typeAware: true,
    reportUnusedDisableDirectives: 'warn'
  },
  env: {
    node: true,
    es2024: true,
    browser: true,
    'shared-node-browser': true
  },
  rules: {
    'sort-keys': 'off'
  },
  overrides: [
    {
      files: ['test/**', '**/**.test.ts', '**/**.test.tsx'],
      rules: {
        'typescript/unbound-method': 'off'
      }
    }
  ],
  ignorePatterns: [
    '**/_/**',
    '.agents',
    '.cursor',
    '**/dist/**',
    '**/node_modules/**',
    'worker-configuration.d.ts'
  ]
})
