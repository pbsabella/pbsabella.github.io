/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Use absolute path for user/org page (pbsabella.github.io)
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@context': path.resolve(__dirname, './src/context'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/images'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'cypress/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['playwright/**', 'dist/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: ['node_modules/', 'src/test/', '**/*.d.ts', '**/*.test.ts', '**/*.test.tsx'],
      lines: 70,
      functions: 70,
      branches: 65,
      statements: 70,
    },
  } as Record<string, unknown>,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Minify with esbuild (default) for speed
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        // Vendor chunks: stable filenames that browsers cache between deployments.
        // A version bump to one library only busts that library's chunk, not all vendor code.
        manualChunks: {
          'vendor-router': ['react-router-dom'],
          'vendor-icons': ['lucide-react'],
          // prism-react-renderer is only used in labs pages (ThemingBuildNotes,
          // DesignSystemBuildNotes). After route splitting, it will only download
          // when a user first navigates to one of those routes.
          'vendor-prism': ['prism-react-renderer'],
        },
      },
    },
  },
  server: {
    open: true,
  },
});
