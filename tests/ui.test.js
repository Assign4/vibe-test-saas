const { test, expect } = require('@playwright/test');
const path = require('path');

// Basic UI test to demonstrate Playwright using a local page

test('local example page has correct title', async ({ page }) => {
  const filePath = path.join(__dirname, 'example.html');
  await page.goto('file://' + filePath);
  await expect(page).toHaveTitle(/Example Domain/);
});
