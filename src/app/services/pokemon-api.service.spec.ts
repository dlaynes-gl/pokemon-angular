import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { bulbasaurJSON } from 'tests/data/pokemon/bulbasaur';
import { pokemonListJSON } from 'tests/data/pokemonList';

import { PokemonApiService } from './pokemon-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PokemonList } from '../models/api/PokemonList';
import { Pokemon } from '../models/api/Pokemon';

describe('PokemonApiService', () => {
  let service: PokemonApiService;

  let httpTestingController: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get the list of pokemon', fakeAsync(() => {
    const service = TestBed.inject(PokemonApiService);

    let succeeded = false;
    let body: PokemonList | undefined;

    service.getPokemonList().subscribe((response) => {
      succeeded = true;
      body = response;
    });

    const req = httpTestingController.expectOne(PokemonApiService.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(pokemonListJSON);

    expect(succeeded).toBeTrue();
    expect(body).toBe(pokemonListJSON);
  }));

  it('should get the detail information of a pokemon', fakeAsync(() => {
    const service = TestBed.inject(PokemonApiService);

    let succeeded = false;
    let body: Pokemon | undefined;

    service.getPokemonDetail('bulbasaur').subscribe((response) => {
      succeeded = true;
      body = response;
    });

    const req = httpTestingController.expectOne(
      PokemonApiService.baseUrl + '/bulbasaur'
    );
    expect(req.request.method).toBe('GET');
    req.flush(bulbasaurJSON);

    expect(succeeded).toBeTrue();
    expect(body).toBe(bulbasaurJSON);
  }));

  it('should return an error when the list API server returns a 404', fakeAsync(() => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    const service = TestBed.inject(PokemonApiService);

    let succeeded = false;
    let body: PokemonList | undefined;

    service.getPokemonList().subscribe({
      next: (response) => {
        succeeded = true;
        body = response;
      },
      error: (e: HttpErrorResponse) => {
        succeeded = true;
        expect(e.status).toEqual(404);
        expect(e.error).toContain('404 Error');
      },
    });

    const req = httpTestingController.expectOne(PokemonApiService.baseUrl);
    req.flush('404 Error', errorResponse);

    tick();

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  }));

  it('should return an error when the detail API server returns a 404', fakeAsync(() => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    const service = TestBed.inject(PokemonApiService);

    let succeeded = false;
    let body: Pokemon | undefined;

    service.getPokemonDetail('pikachu').subscribe({
      next: (response) => {
        succeeded = true;
        body = response;
      },
      error: (e: HttpErrorResponse) => {
        succeeded = true;
        expect(e.status).toEqual(404);
        expect(e.error).toContain('404 Error');
      },
    });

    const req = httpTestingController.expectOne(
      PokemonApiService.baseUrl + '/pikachu'
    );
    req.flush('404 Error', errorResponse);

    tick();

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  }));
});
