// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import stylistic from '@stylistic/eslint-plugin'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const __dirname = dirname(fileURLToPath(import.meta.url))

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  stylistic.configs['recommended-flat'],
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname, // `or import.meta.dirname` on node >=20.11/21.2
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ["dist/**/*.d.ts"],
    rules: {
      '@stylistic/semi': ['warn', 'always'],
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
    ...stylistic.configs['recommended-flat'],
    rules: {
      '@stylistic/semi': ['warn', 'always'],
    }
  },
)

export default config
