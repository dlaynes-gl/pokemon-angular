import { test, expect } from '@playwright/test';
import { pokemonRoutes } from './mock_endpoints';
import {
  PW_PKM_DETAIL,
  PW_PKM_DETAIL__MOVE,
  PW_PKM_DETAIL__SPRITE,
  PW_PKM_DETAIL__TYPE,
  PW_PKM_LIST,
  PW_PKM_LIST_ITEM,
  PW_PKM_LIST_ITEM__ID,
  PW_PKM_LIST_ITEM__IMAGE,
  PW_PKM_LIST_ITEM__NAME,
  PW_PKM_NAVIGATION,
  PW_PKM_NAVIGATION__NEXT,
  PW_PKM_NAVIGATION__PREV,
  PW_PKM_SEARCH_BAR,
} from './test_ids';

const baseURL = 'https://pokeapi.co/api/v2/pokemon'

test.describe("Pokemon dashboard", () => {
    test.beforeEach(async function({page}){
        pokemonRoutes(page);
    });

    test('Dashboard page is available', async ({ page, baseURL }) => {
        await page.goto(baseURL + '/');
        // TODO: Update this assertion when needed
        await expect(page).toHaveTitle(/Pokemon Angular/);
      
        const search = page.locator(PW_PKM_SEARCH_BAR);
        expect(search).not.toBeEmpty();
      
        //const list = page.locator(PW_PKM_LIST);
        //expect(list).not.toBeEmpty();
      
        //const detail = page.locator(PW_PKM_DETAIL);
        //expect(detail).not.toBeEmpty();
      
        //const navigation = page.locator(PW_PKM_NAVIGATION);
        //expect(navigation).not.toBeEmpty();
      });

})

/*
test('Check if the pokemon list loads properly by default', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  await expect(page.locator(PW_PKM_LIST_ITEM)).toHaveCount(4);
  const item = page.locator(PW_PKM_LIST_ITEM).first();

  expect(item.locator(PW_PKM_LIST_ITEM__ID)).toHaveCount(1);
  expect(item.locator(PW_PKM_LIST_ITEM__IMAGE)).toHaveCount(1);
  expect(item.locator(PW_PKM_LIST_ITEM__NAME)).toHaveCount(1);
});

test('Check if the pokemon detail loads properly by default', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  // You could also test the request URL
  await page.waitForRequest((request) => request.method() === 'GET');

  // The detail component is empty by default
  const item = page.locator(PW_PKM_DETAIL);

  expect(item.locator(PW_PKM_DETAIL__MOVE)).toHaveCount(0)
  expect(item.locator(PW_PKM_DETAIL__SPRITE)).toHaveCount(0)
  expect(item.locator(PW_PKM_DETAIL__TYPE)).toHaveCount(0)

  await page.locator(PW_PKM_LIST_ITEM).first().click();

  expect(item.locator(PW_PKM_DETAIL__MOVE)).toHaveCount(1)
  expect(item.locator(PW_PKM_DETAIL__SPRITE)).toHaveCount(4) // TODO: add the sprite amount
  expect(item.locator(PW_PKM_DETAIL__TYPE)).toHaveCount(1)
});

test('Check if the search field is working properly', async ({
  page,
  baseURL,
}) => {
    await page.goto(baseURL + '/');

    await page.waitForRequest((request) => request.method() === 'GET');

    const item = page.locator(PW_PKM_SEARCH_BAR);

});

test('Check if the navigation buttons are working properly', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  const prevNav = page.locator(PW_PKM_NAVIGATION__PREV);
  await expect(prevNav).toHaveCount(1);
  const nextNav = page.locator(PW_PKM_NAVIGATION__NEXT);
  await expect(nextNav).toHaveCount(1);

  await page.waitForRequest((request) => request.method() === 'GET');
  await nextNav.click();

  await expect(page.locator(PW_PKM_LIST_ITEM)).toHaveCount(3);
  await expect(nextNav).toBeDisabled();

  await page.waitForRequest((request) => request.method() === 'GET');
  await prevNav.click();
  await expect(page.locator(PW_PKM_LIST_ITEM)).toHaveCount(4);
  await expect(prevNav).toBeDisabled();
});
*/