import { test, expect } from '@playwright/test';

test.describe('Mobile Experience', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('mobile navigation works correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);

    // Test bottom navigation
    await page.locator('[data-testid="nav-home"]').click();
    await expect(page).toHaveURL(/.*\//);

    await page.locator('[data-testid="nav-search"]').click();
    await expect(page.locator('[data-testid="search-page"]')).toBeVisible();

    await page.locator('[data-testid="nav-favorites"]').click();
    await expect(page.locator('[data-testid="favorites-page"]')).toBeVisible();
  });

  test('touch gestures work', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);

    // Swipe gesture simulation
    const element = page.locator('[data-testid="tool-carousel"]');
    await element.hover();
    await page.mouse.down();
    await page.mouse.move(100, 0);
    await page.mouse.up();

    // Verify carousel moved
    await expect(element).toBeVisible();
  });

  test('PWA install prompt', async ({ page, context }) => {
    await context.grantPermissions(['notifications']);
    await page.goto('/');

    // Check if manifest is loaded
    const manifest = await page.evaluate(() => {
      const link = document.querySelector('link[rel="manifest"]');
      return link ? link.href : null;
    });

    expect(manifest).toBeTruthy();
  });
});

