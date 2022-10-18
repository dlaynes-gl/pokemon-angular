import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NavigationButtonComponent } from 'src/app/components/navigation-button/navigation-button.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { PokemonDetailComponent } from 'src/app/components/pokemon-detail/pokemon-detail.component';
import { PokemonListItemComponent } from 'src/app/components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from 'src/app/components/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import {
  TEST_PKM_DETAIL,
  TEST_PKM_LIST,
  TEST_PKM_NAVIGATION,
  TEST_PKM_SEARCH_BAR,
} from 'src/app/config/test_ids';
import { findByTestId } from 'src/app/utils/tests';
import { SinglePokemonComponent } from '../single-pokemon/single-pokemon.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchBarComponent,
        DashboardComponent,
        NavigationButtonComponent,
        NavigationComponent,
        PokemonListComponent,
        PokemonListItemComponent,
        SinglePokemonComponent,
        PokemonDetailComponent
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Integration Tests go elsewhere

  it('should show the nav bar', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_NAVIGATION
    )! as HTMLImageElement;
    expect(el).not.toBeNull();
  });

  it('should show the search bar', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_SEARCH_BAR
    )! as HTMLImageElement;
    expect(el).not.toBeNull();
  });

  it('should show the main list', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_LIST
    )! as HTMLImageElement;
    expect(el).not.toBeNull();
  });

  it('should show the detail', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL
    )! as HTMLImageElement;
    expect(el).not.toBeNull();
  });
});
