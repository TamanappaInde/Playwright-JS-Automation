const { defineConfig } = require('@playwright/test');
const { trace } = require('node:console');


module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  // Maximum time allowed for one compelete test
  timeout: 60 * 1000,
  // Time out for expect assertions
  expect: {
    timeout: 10 * 1000,
  },
  // Run tests in parallel
  fullyParallel: true,
  // Retries failed test cases
  retries: process.env.CI ? 2 : 1,
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  }
});



