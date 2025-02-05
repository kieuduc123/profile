import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        format: 'esm',
      },
    },
    minify: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.ts': 'tsx',
      },
    },
  },
});
