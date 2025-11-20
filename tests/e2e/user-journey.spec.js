import { test, expect } from '@playwright/test';

test.describe('User Journey', () => {
  test('complete user flow from splash to tool usage', async ({ page }) => {
    // Navigate to app
    await page.goto('/');

    // Wait for splash screen
    await expect(page.locator('text=UnifAI')).toBeVisible();

    // Wait for home page
    await page.waitForTimeout(1500); // Splash duration
    await expect(page.locator('text=כלי AI')).toBeVisible();

    // Browse tools
    const toolCard = page.locator('[data-testid="tool-card"]').first();
    await expect(toolCard).toBeVisible();

    // Click on a tool
    await toolCard.click();

    // Verify tool page opened
    await expect(page.locator('[data-testid="tool-page"]')).toBeVisible();

    // Try to use tool (will trigger auth for non-logged users)
    await page.locator('button:has-text("השתמש בכלי")').click();

    // Verify auth popup appeared
    await expect(page.locator('[data-testid="auth-popup"]')).toBeVisible();
  });

  test('search functionality', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500); // Skip splash

    // Open search
    await page.locator('[data-testid="search-button"]').click();

    // Type in search
    await page.locator('[data-testid="search-input"]').fill('ChatGPT');

    // Verify results
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
  });

  test('responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Verify mobile layout
    await expect(page.locator('[data-testid="mobile-nav"]')).toBeVisible();
  });
});

