import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  TEST_PKM_LIST_ITEM__ID,
  TEST_PKM_LIST_ITEM__IMAGE,
  TEST_PKM_LIST_ITEM__NAME,
  TEST_PKM_LIST_ITEM,
} from 'src/app/config/test_ids';
import { PokemonEventService } from 'src/app/services/events/pokemon-event.service';
import { findByTestId } from 'src/app/utils/tests';

import { PokemonListItemComponent } from './pokemon-list-item.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;
  let service: PokemonEventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListItemComponent],
    }).compileComponents();

    service = TestBed.inject(PokemonEventService);
    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the pokemon sprite', (done) => {
    const spr =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

    component.sprite = spr;

    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_LIST_ITEM__IMAGE
    )! as HTMLImageElement;
    expect(el).not.toBeNull();
    expect(el.getAttribute('src')).toBe(spr);
    done();
  });

  it('should show the pokemon name', (done) => {
    component.name = 'Bulbasaur';

    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_LIST_ITEM__NAME
    )! as HTMLSpanElement;
    expect(el).not.toBeNull();
    expect(el.textContent).toEqual('Bulbasaur');
    done();
  });

  it('should show the pokemon id', (done) => {
    component.identifier = '1';

    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_LIST_ITEM__ID
    )! as HTMLSpanElement;
    expect(el).not.toBeNull();
    expect(el.textContent).toEqual('# 1');
    done();
  });

  it('should emit a PokemonEventService event when clicking on an item', (done)=>{
    spyOn(service, 'emitChildEvent')
    component.identifier = '1';
    fixture.detectChanges();

    const el = findByTestId(
      fixture.nativeElement,
      TEST_PKM_LIST_ITEM
    )! as HTMLAnchorElement;
    el.click();

    expect(service.emitChildEvent).toHaveBeenCalledOnceWith('1');
    done();
  })
});
