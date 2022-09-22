import { test, expect } from '@playwright/test';

test('Dashboard page is available', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');

    await expect(page).toHaveTitle(/Pokemon Angular/);

    const search = page.locator('[data-id="search"]')
    console.log("Search component", search)
    expect(search).toHaveCount(1)

    const list = page.locator('[data-id="pokemon-list"]')
    console.log("List component", list)
    expect(list).toHaveCount(1)

    const detail = page.locator('[data-id="pokemon-detail"]')
    console.log("Detail component", detail)
    expect(detail).toHaveCount(1)

    const navigation = page.locator('[data-id="navigation"]')
    console.log("Navigation component", navigation)
    expect(navigation).toHaveCount(1)
})