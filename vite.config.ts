import { resolve } from 'path';
import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'cds',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    minify: false,
  },
  plugins: [react(), dts()],
});
