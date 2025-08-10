
import { defineConfig, devices } from '@playwright/test';


module.exports = {
  testDir: './tests',
  use: {
    baseURL:'https://www.eventbookings.com/',
    timeout: 30000, 
    actionTimeout: 10000, 
    navigationTimeout: 15000, 
    retries: 2, 
    storageState: undefined,   
     screenshot: 'on',
     viewport: { width: 375, height: 667 },
  },


   projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
}
