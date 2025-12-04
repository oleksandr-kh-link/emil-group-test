// eslint-disable-next-line import/no-unresolved
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    // Ignore Playwright end-to-end specs; they run via `npm run test:e2e`
    exclude: [
      'e2e/**',
      '**/e2e/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
});
