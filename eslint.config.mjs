import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1
        }
      ],
      'linebreak-style': [
        'error',
        'windows'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      '@typescript-eslint/ban-types': 'off',
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 1, maxBOF: 0 }
      ],
      'react/react-in-jsx-scope': 'off',
    }
  },
];