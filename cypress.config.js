import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1280,
    viewportHeight: 1024,
    setupNodeEvents(on, config) {
      // Keep this empty or add other plugins (like Percy) here
    },
  },
});
