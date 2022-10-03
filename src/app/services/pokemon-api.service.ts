import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Pokemon } from '../models/api/Pokemon';
import type { PokemonList } from '../models/api/PokemonList';

import { handleHttpErrors } from '../utils/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  public static baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList() {
    return this.http.get<PokemonList>(PokemonApiService.baseUrl);
  }

  getPokemonDetail(slug: string) {
    return this.http
      .get<Pokemon>(`${PokemonApiService.baseUrl + '/' + slug}`);
  }
}
