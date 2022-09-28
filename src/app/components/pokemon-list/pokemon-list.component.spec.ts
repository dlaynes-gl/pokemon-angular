import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_PKM_LIST_ITEM } from 'src/app/config/test_ids';
import { convertPokemonDetail } from 'src/app/utils/parseData/pokemon';
import { findManyByTestId } from 'src/app/utils/tests';
import { bulbasaurJSON } from 'tests/data/pokemon/bulbasaur';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListItemComponent, PokemonListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a list of pokemon', () => {
    const bulbasaur = convertPokemonDetail(bulbasaurJSON);
    component.pokemonList = [bulbasaur, bulbasaur, bulbasaur, bulbasaur];
    fixture.detectChanges();

    const list = findManyByTestId(fixture.nativeElement, TEST_PKM_LIST_ITEM)!;
    expect(list.length).toBe(4);
  });
});
