import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TEST_PKM_LIST_ITEM } from 'src/app/config/test_ids';
import { SinglePokemonComponent } from 'src/app/containers/single-pokemon/single-pokemon.component';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { findManyByTestId } from 'src/app/utils/tests';
import { bulbasaurJSON } from 'tests/data/pokemon/bulbasaur';
import { pokemonListJSON } from 'tests/data/pokemonList';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let service: PokemonApiService;

  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Is it doing something?
      declarations: [PokemonListItemComponent, SinglePokemonComponent, PokemonListComponent],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonApiService);

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
  });

  it('should show a list of pokemon', (done) => {
    const serviceSpy = spyOn(service, 'getPokemonDetail').and.returnValue(
      of(bulbasaurJSON)
    );

    const pkList = pokemonListJSON.results.slice(0, PokemonListComponent.PER_PAGE)
    component.pokemonList = pkList;
    fixture.detectChanges();

    // All pokemon components will show the same result

    fixture.whenStable().then(()=>{
      const list = findManyByTestId(fixture.nativeElement, TEST_PKM_LIST_ITEM)!;
      expect(list.length).toBe(Math.min(pkList.length, PokemonListComponent.PER_PAGE));
      done();
    });
  });
});
