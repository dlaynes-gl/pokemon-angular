import { test, expect } from '@playwright/test';

test('Dashboard page is available', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');

    await expect(page).toHaveTitle(/Pokemon Angular/);
})