import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TEST_PKM_DETAIL__MAIN_IMAGE,
  TEST_PKM_DETAIL__MOVE,
  TEST_PKM_DETAIL__MOVE_LABEL,
  TEST_PKM_DETAIL__NAME,
  TEST_PKM_DETAIL__NUMBER,
  TEST_PKM_DETAIL__SPRITE,
  TEST_PKM_DETAIL__SPRITE_LABEL,
  TEST_PKM_DETAIL__TYPE,
  TEST_PKM_DETAIL__TYPE_LABEL,
  TEST_PKM_DETAIL__WEIGHT,
  TEST_PKM_DETAIL__WEIGHT_LABEL,
} from 'src/app/config/test_ids';
import { findByTestId, findManyByTestId } from 'src/app/utils/tests';

import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the pokemon main image', () => {
    const spr =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

    component.mainImage = spr;
    fixture.detectChanges();

    const img = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__MAIN_IMAGE
    )! as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(spr);
  });

  it('should hide the main image block if there is no data', () => {
    const img = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__MAIN_IMAGE
    )! as HTMLImageElement;
    expect(img).toBeNull();
  });

  it('should show the pokemon name', () => {
    component.name = 'Pikachu';
    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__NAME
    )! as HTMLSpanElement;
    expect(el).not.toBeNull();
    expect(el.textContent).toBe('Pikachu');
  });

  it('should hide the name block if there is no data', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__NAME
    )! as HTMLSpanElement;
    expect(el).toBeNull();
  });

  it('should show the pokemon ID', () => {
    component.id = '176';
    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__NUMBER
    )! as HTMLSpanElement;
    expect(el).not.toBeNull();
    expect(el.textContent).toBe('# 176');
  });

  it('should hide the ID block if there is no data', () => {
    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__NUMBER
    )! as HTMLSpanElement;
    expect(el).toBeNull();
  });

  it('should show the types block', () => {
    component.types = ['grass', 'poison'];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__TYPE)!;
    expect(el).not.toBeNull();
  });

  it('should show the types label block', () => {
    component.types = ['grass', 'poison'];
    fixture.detectChanges();

    const label = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__TYPE_LABEL)!;
    expect(label).not.toBeNull();
  });

  it('should hide the types block if there is no data', () => {
    component.types = [];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__TYPE)!;
    expect(el).toBeNull();
  });

  it('should hide the types label block if there is no data', () => {
    component.types = [];
    fixture.detectChanges();
    const label = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__TYPE_LABEL)!;
    expect(label).toBeNull();
  });

  it('should show the weight block', () => {
    component.weight = 20;
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__WEIGHT)!;
    expect(el).not.toBeNull();
  });

  it('should show the weight label block', () => {
    component.weight = 20;
    fixture.detectChanges();

    const label = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__WEIGHT_LABEL
    )!;
    expect(label).not.toBeNull();
  });

  it('should hide the weight block if there is no data', () => {
    component.weight = 0;
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__WEIGHT)!;
    expect(el).toBeNull();
  });

  it('should hide the weight ñabel block if there is no data', () => {
    component.weight = 0;
    fixture.detectChanges();

    const label = findByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__WEIGHT_LABEL
    )!;
    expect(label).toBeNull();
  });

  it('should show the sprites block', () => {
    component.sprites = [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    ];

    fixture.detectChanges();

    const sprites = findManyByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__SPRITE
    )!;
    expect(sprites.length).toBe(4);
    sprites.forEach((item)=>{
      expect(item.getAttribute('src')).toBeTruthy();
    })
  });


  it('should show the sprites label block', () => {
    component.sprites = [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    ];

    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__SPRITE_LABEL)!;
    expect(el).not.toBeNull();
  });

  it('should hide the sprites block if there is no data', () => {
    component.sprites = [];

    fixture.detectChanges();

    const sprites = findManyByTestId(
      fixture.nativeElement,
      TEST_PKM_DETAIL__SPRITE
    )!;
    expect(sprites.length).toBe(0);
  });

  it('should hide the sprites label block if there is no data', () => {
    component.sprites = [];

    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__SPRITE_LABEL)!;
    expect(el).toBeNull();
  });

  it('should show the moves block', () => {
    component.moves = ['razor-wind', 'swords-dance', 'cut', 'bind'];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__MOVE)!;
    expect(el).not.toBeNull();
  });

  it('should show the moves label block', () => {
    component.moves = ['razor-wind'];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__MOVE_LABEL)!;
    expect(el).not.toBeNull();
  });

  it('should hide the moves block if there is no data', () => {
    component.moves = [];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__MOVE)!;
    expect(el).toBeNull();
  });

  it('should hide the moves label block if there is no data', () => {
    component.moves = [];
    fixture.detectChanges();

    const el = findByTestId(fixture.nativeElement, TEST_PKM_DETAIL__MOVE_LABEL)!;
    expect(el).toBeNull();
  });
});
