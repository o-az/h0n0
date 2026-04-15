import { defineConfig } from 'oxfmt'

/**
 * @schema https://esm.sh/oxfmt/configuration_schema.json
 */

export default defineConfig({
  ignorePatterns: ['**/_/**', '.agents', '.cursor', '**/dist/**', '**/node_modules/**'],
  semi: false,
  enabled: true,
  lineWidth: 100,
  indentWidth: 2,
  printWidth: 100,
  singleQuote: true,
  proseWrap: 'never',
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSpacing: true,
  indentStyle: 'space',
  quoteStyle: 'single',
  trailingComma: 'none',
  bracketSameLine: true,
  sortPackageJson: false,
  quoteProps: 'as-needed',
  insertFinalNewline: true,
  attributePosition: 'auto',
  indentScriptAndStyle: true,
  singleAttributePerLine: true,
  selfCloseVoidElements: 'never',
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: {
        printWidth: 1
      }
    }
  ]
})
