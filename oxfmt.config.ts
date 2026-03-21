import { defineConfig } from "oxfmt"

export default defineConfig({
  ignorePatterns: [
    "**/_/**",
    ".agents",
    ".cursor",
    "**/dist/**",
    "**/node_modules/**",
    "worker-configuration.d.ts"
  ],
  semi: false,
  enabled: true,
  lineWidth: 100,
  indentWidth: 2,
  printWidth: 100,
  proseWrap: "never",
  arrowParens: "avoid",
  jsxSingleQuote: true,
  bracketSpacing: true,
  indentStyle: "space",
  quoteStyle: "single",
  trailingComma: "none",
  bracketSameLine: true,
  insertFinalNewline: true,
  attributePosition: "auto",
  indentScriptAndStyle: true,
  singleAttributePerLine: true,
  selfCloseVoidElements: "never"
})
