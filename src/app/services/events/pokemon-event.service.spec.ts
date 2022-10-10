import { TestBed } from '@angular/core/testing';

import { PokemonEventService } from './pokemon-event.service';

describe('PokemonEventService', () => {
  let service: PokemonEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
