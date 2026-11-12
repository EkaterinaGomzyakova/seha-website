import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT || 4321);
const baseURL = `http://127.0.0.1:${port}/`;

export default defineConfig({
  testDir: './tests',
  timeout: 45_000,
  fullyParallel: true,
  workers: 2,
  globalTimeout: 10 * 60 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  outputDir: process.env.PLAYWRIGHT_OUTPUT_DIR || 'test-results',
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    [
      'html',
      { open: 'never', outputFolder: process.env.PLAYWRIGHT_HTML_OUTPUT_DIR || 'playwright-report' }
    ],
    ['junit', { outputFile: process.env.PLAYWRIGHT_JUNIT_OUTPUT_FILE || 'test-results/junit.xml' }]
  ],
  use: {
    baseURL,
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 300_000
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } }
  ]
});
