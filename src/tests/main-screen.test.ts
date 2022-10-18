import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NavigationButtonComponent } from '../app/components/navigation-button/navigation-button.component';
import { NavigationComponent } from '../app/components/navigation/navigation.component';
import { PokemonDetailComponent } from '../app/components/pokemon-detail/pokemon-detail.component';
import { PokemonListItemComponent } from '../app/components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from '../app/components/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from '../app/components/search-bar/search-bar.component';
import { DashboardComponent } from '../app/containers/dashboard/dashboard.component';
import { SinglePokemonComponent } from '../app/containers/single-pokemon/single-pokemon.component';

describe('MainScreen', () => {
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
        PokemonDetailComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should select a pokemon when an item in the list is clicked', () => {});

  it('should show the selected pokemon in the sidebar when clicked', () => {});

  it('should navigate to the next page when the button is clicked', () => {});

  it('should navigate to the previous page when the button is clicked', () => {});
});
