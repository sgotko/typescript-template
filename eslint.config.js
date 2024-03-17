import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import jest from 'eslint-plugin-jest';

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
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
    ...tseslint.configs.disableTypeChecked,
    files: ['**/*.js'],
    rules: {
      '@stylistic/semi': ['warn', 'always'],
    },
  },
  {
    ...jest.configs['flat/recommended'],
    ...jest.configs['flat/style'],
    files: ['test/**/*.test.ts'],
  },
);

export default config;
