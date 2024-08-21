// @ts-check

import eslint from '@eslint/js';

import tseslint from 'typescript-eslint';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  reactJsxRuntime,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      globals: {
        module: true,
        require: true,
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  ...tseslint.configs.strict,
);
