import { defineConfig, devices } from '@playwright/test';

const basePath = process.env.TEST_BASE_PATH ?? process.env.BASE_PATH ?? '/';
const port = Number(process.env.PLAYWRIGHT_PORT || 4321);
const baseURL = new URL(`${basePath.replace(/\/$/, '')}/`, `http://127.0.0.1:${port}`).href;

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  globalTimeout: 20 * 60 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  updateSnapshots: 'none',
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
    env: { BASE_PATH: basePath, TEST_BASE_PATH: basePath },
    reuseExistingServer: false,
    timeout: 300_000
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } }
  ]
});
