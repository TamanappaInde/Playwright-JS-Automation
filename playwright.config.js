const { defineConfig } = require('@playwright/test');
const { trace } = require('node:console');


module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  }
});



