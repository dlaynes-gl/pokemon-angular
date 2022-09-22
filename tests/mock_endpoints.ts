import type { Page } from '@playwright/test';
import { bulbasaurJSON } from './data/pokemon/bulbasaur';
import { ivysaurJSON } from './data/pokemon/ivysaur';
import { venusaurJSON } from './data/pokemon/venusaur';
import { charmanderJSON } from './data/pokemon/charmander';
import { charmeleonJSON } from './data/pokemon/charmeleon';
import { charizardJSON } from './data/pokemon/charizard';
import { squirtleJSON } from './data/pokemon/squirtle';
import { pokemonListJSON } from './data/pokemonList';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const pokemonRoutes = function (page: Page) {
  page.route(baseUrl + 'pokemon', (route) => {
    route.fulfill({
      body: JSON.stringify(pokemonListJSON),
    });
  });
  page.route(baseUrl + 'pokemon/bulbasaur', (route) => {
    route.fulfill({
      body: JSON.stringify(bulbasaurJSON),
    });
  });
  page.route(baseUrl + 'pokemon/ivysaur', (route) => {
    route.fulfill({
      body: JSON.stringify(ivysaurJSON),
    });
  });
  page.route(baseUrl + 'pokemon/venusaur', (route) => {
    route.fulfill({
      body: JSON.stringify(venusaurJSON),
    });
  });

  page.route(baseUrl + 'pokemon/charmander', (route) => {
    route.fulfill({
      body: JSON.stringify(charmanderJSON),
    });
  });
  page.route(baseUrl + 'pokemon/charmeleon', (route) => {
    route.fulfill({
      body: JSON.stringify(charmeleonJSON),
    });
  });
  page.route(baseUrl + 'pokemon/charizard', (route) => {
    route.fulfill({
      body: JSON.stringify(charizardJSON),
    });
  });
  page.route(baseUrl + 'pokemon/squirtle', (route) => {
    route.fulfill({
      body: JSON.stringify(squirtleJSON),
    });
  });
};
