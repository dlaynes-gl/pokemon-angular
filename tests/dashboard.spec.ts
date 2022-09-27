import { test, expect } from '@playwright/test';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { pokemonRoutes } from './mock_endpoints';
import {
  TEST_PKM_DETAIL,
  TEST_PKM_DETAIL__MOVE,
  TEST_PKM_DETAIL__SPRITE,
  TEST_PKM_DETAIL__TYPE,
  TEST_PKM_LIST,
  TEST_PKM_LIST_ITEM,
  TEST_PKM_LIST_ITEM__ID,
  TEST_PKM_LIST_ITEM__IMAGE,
  TEST_PKM_LIST_ITEM__NAME,
  TEST_PKM_NAVIGATION,
  TEST_PKM_NAVIGATION__NEXT,
  TEST_PKM_NAVIGATION__PREV,
  TEST_PKM_SEARCH_BAR
} from '../src/app/config/test_ids';
import { formatTestId } from 'src/app/utils/tests';

const baseURL = PokemonApiService.baseUrl

test.describe("Pokemon dashboard", () => {
    test.beforeEach(async function({page}){
        pokemonRoutes(page);
    });

    test('Dashboard page is available', async ({ page, baseURL }) => {
        await page.goto(baseURL + '/');
        // TODO: Update this assertion when needed
        await expect(page).toHaveTitle(/Pokemon Angular/);
      
        const search = page.locator(formatTestId(TEST_PKM_SEARCH_BAR));
        expect(search).not.toBeEmpty();
      
        //const list = page.locator(formatTestId(TEST_PKM_LIST));
        //expect(list).not.toBeEmpty();
      
        //const detail = page.locator(formatTestId(TEST_PKM_DETAIL));
        //expect(detail).not.toBeEmpty();
      
        //const navigation = page.locator(formatTestId(TEST_PKM_NAVIGATION));
        //expect(navigation).not.toBeEmpty();
      });

})

/*
test('Check if the pokemon list loads properly by default', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  await expect(page.locator(TEST_PKM_LIST_ITEM)).toHaveCount(4);
  const item = page.locator(TEST_PKM_LIST_ITEM).first();

  expect(item.locator(TEST_PKM_LIST_ITEM__ID)).toHaveCount(1);
  expect(item.locator(TEST_PKM_LIST_ITEM__IMAGE)).toHaveCount(1);
  expect(item.locator(TEST_PKM_LIST_ITEM__NAME)).toHaveCount(1);
});

test('Check if the pokemon detail loads properly by default', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  // You could also test the request URL
  await page.waitForRequest((request) => request.method() === 'GET');

  // The detail component is empty by default
  const item = page.locator(TEST_PKM_DETAIL);

  expect(item.locator(TEST_PKM_DETAIL__MOVE)).toHaveCount(0)
  expect(item.locator(TEST_PKM_DETAIL__SPRITE)).toHaveCount(0)
  expect(item.locator(TEST_PKM_DETAIL__TYPE)).toHaveCount(0)

  await page.locator(TEST_PKM_LIST_ITEM).first().click();

  expect(item.locator(TEST_PKM_DETAIL__MOVE)).toHaveCount(1)
  expect(item.locator(TEST_PKM_DETAIL__SPRITE)).toHaveCount(4) // TODO: add the sprite amount
  expect(item.locator(TEST_PKM_DETAIL__TYPE)).toHaveCount(1)
});

test('Check if the search field is working properly', async ({
  page,
  baseURL,
}) => {
    await page.goto(baseURL + '/');

    await page.waitForRequest((request) => request.method() === 'GET');

    const item = page.locator(TEST_PKM_SEARCH_BAR);

});

test('Check if the navigation buttons are working properly', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL + '/');

  const prevNav = page.locator(TEST_PKM_NAVIGATION__PREV);
  await expect(prevNav).toHaveCount(1);
  const nextNav = page.locator(TEST_PKM_NAVIGATION__NEXT);
  await expect(nextNav).toHaveCount(1);

  await page.waitForRequest((request) => request.method() === 'GET');
  await nextNav.click();

  await expect(page.locator(TEST_PKM_LIST_ITEM)).toHaveCount(3);
  await expect(nextNav).toBeDisabled();

  await page.waitForRequest((request) => request.method() === 'GET');
  await prevNav.click();
  await expect(page.locator(TEST_PKM_LIST_ITEM)).toHaveCount(4);
  await expect(prevNav).toBeDisabled();
});
*/