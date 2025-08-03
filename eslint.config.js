import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'unused-imports': eslintPluginUnusedImports,
        },
        rules: {
            'no-console': ['warn'],
            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'unused-imports/no-unused-imports': 'error',
            'react/react-in-jsx-scope': 'off',
        },
    },

    js.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat['jsx-runtime'],
]);
