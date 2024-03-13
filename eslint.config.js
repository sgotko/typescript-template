// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  stylistic.configs['recommended-flat'],
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.ts', '**/*.d.ts', '**/*.tsx'],
    ignores: ['dist/**/*.d.ts'],
    rules: {
      '@stylistic/semi': ['warn', 'always'],
    },
  },
  {
    ...eslint.configs.recommended,
    ...tseslint.configs.disableTypeChecked,
    ...stylistic.configs['recommended-flat'],
    files: ['**/*.js'],
    rules: {
      '@stylistic/semi': ['warn', 'always'],
    },
  },
);

export default config;
