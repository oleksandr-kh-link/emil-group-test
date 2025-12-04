import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  timeout: 60_000,
  retries: 0,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5501',
    trace: 'on-first-retry',
  },
  webServer: {
    // Build the web component bundles, then serve the repo root on 5501
    command: 'sh -lc "npm run build:wc && npx serve . -l 5501"',
    url: 'http://localhost:5501',
    reuseExistingServer: true,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'firefox',
      use: {...devices['Desktop Firefox']},
    },
    {
      name: 'webkit',
      use: {...devices['Desktop Safari']},
    },
  ],
});
