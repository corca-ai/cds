import { resolve } from 'path';
import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// tsconfg 설정 인식이 잘 안됨. 설정파일이라서 그냥 무시하도록 설정
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import packageJson from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: convertExportsToEntries(packageJson.exports),
      name: 'cds',
      fileName: 'index',
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/react/jsx-runtime',
      ],
      output: [
        {
          format: 'cjs',
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].mjs',
        },
      ],
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      jsxRuntime: 'automatic',
    }),
    dts({ tsconfigPath: './tsconfig.build.json' }),
    viteStaticCopy({
      targets: [
        {
          src: ['src/*.css'],
          dest: resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
});

function convertExportsToEntries(exports: object) {
  const entries: Record<string, string> = {};

  for (const key in exports) {
    if (key === './package.json') continue; // Ignore package.json entry
    const entryPath = key === '.' ? './src/index.ts' : `src/${key}/index.ts`;
    const formattedKey = key === '.' ? 'index' : `${key.slice(2)}/index`;
    entries[formattedKey] = resolve(__dirname, entryPath);
  }

  return entries;
}
