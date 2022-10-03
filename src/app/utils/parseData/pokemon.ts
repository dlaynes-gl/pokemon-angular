import { Pokemon } from 'src/app/models/api/Pokemon';
import { PokemonSingle } from 'src/app/models/app/PokemonSingle';

export function convertPokemonDetail(json: Pokemon): PokemonSingle {
  return {
    id: json.id.toString(),
    mainImage: '',
    name: json.name,
    moves: [],
    sprites: [],
    types: [],
    weight: json.weight,
  };
}
