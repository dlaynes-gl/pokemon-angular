import type { PokemonMetaLink } from './Pokemon';

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonMetaLink[];
}
