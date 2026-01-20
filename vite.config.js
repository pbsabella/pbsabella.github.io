import { defineConfig } from 'vite';

export default defineConfig({
  // Use absolute path for user/org page (pbsabella.github.io)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Minify with esbuild (default) for speed
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        styleguide: 'styleguide.html',
      },
    },
  },
  server: {
    open: true,
  },
});
