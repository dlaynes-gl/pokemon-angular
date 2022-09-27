import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleHttpErrors } from '../utils/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService<List, Detail> {
  public static baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList() {
    return this.http.get<List>(PokemonApiService.baseUrl);
  }

  getPokemonDetail(slug: string) {
    return this.http
      .get<Detail>(`${PokemonApiService.baseUrl + '/' + slug}`);
  }
}
