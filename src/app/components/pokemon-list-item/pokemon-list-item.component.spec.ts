import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  TEST_PKM_LIST_ITEM__ID,
  TEST_PKM_LIST_ITEM__IMAGE,
  TEST_PKM_LIST_ITEM__NAME,
  formatTestId,
  TEST_PKM_LIST_ITEM,
} from 'src/app/config/test_ids';

import { PokemonListItemComponent } from './pokemon-list-item.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should show the pokemon sprite', (done) => {
    const spr =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

    component.sprite = spr;

    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const el = mainElement.querySelector(
      formatTestId(TEST_PKM_LIST_ITEM__IMAGE)
    )!;
    expect(el.getAttribute('src')).toBe(spr);
    done();
  });

  it('should show the pokemon name', (done) => {
    component.name = 'Bulbasaur';

    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const p = mainElement.querySelector(
      formatTestId(TEST_PKM_LIST_ITEM__NAME)
    )!;
    expect(p.textContent).toEqual('Bulbasaur');
    done();
  });

  it('should show the pokemon id', (done) => {
    component.identifier = 'bulbasaur';

    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const p = mainElement.querySelector(formatTestId(TEST_PKM_LIST_ITEM__ID))!;
    expect(p.textContent).toEqual('bulbasaur');
    done();
  });

  it('should show call the action function when clicked', (done) => {
    component.identifier = 'ivysaur';
    component.selected.subscribe((id: string) => {
      console.log('Id', id);
      expect(id).toBe('ivysaur');
      done();
    });
    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const a: HTMLAnchorElement = mainElement.querySelector(
      formatTestId(TEST_PKM_LIST_ITEM)
    )!;
    expect(a).toBeDefined();
    a.click();
  });
});
