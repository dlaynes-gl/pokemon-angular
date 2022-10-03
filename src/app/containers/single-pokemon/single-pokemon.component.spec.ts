import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { findByTestId } from 'src/app/utils/tests';
import { bulbasaurJSON } from 'tests/data/pokemon/bulbasaur';

import { SinglePokemonComponent } from './single-pokemon.component';

describe('SinglePokemonComponent', () => {
  let component: SinglePokemonComponent;
  let fixture: ComponentFixture<SinglePokemonComponent>;
  let service: PokemonApiService;

  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SinglePokemonComponent],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonApiService);

    fixture = TestBed.createComponent(SinglePokemonComponent);
    component = fixture.componentInstance;
  });

  it('should create', (done) => {
    // Won't work elsewhere for now
    component.name = 'bulbasaur';
    fixture.detectChanges();
    expect(component).toBeTruthy();
    done();
  });

  it('should emit an error if no pokemon id is provided', (done) => {
    component.name = '';
    fixture.detectChanges();

    const e = findByTestId(fixture.nativeElement, 'error');
    expect(e).not.toBeNull();
    done();
  });

  it('should get the details of a pokemon if an id is provided', (done) => {

    const serviceSpy = spyOn(service, 'getPokemonDetail').and.returnValue(of(bulbasaurJSON));
    const componentSpy = spyOn(component, 'getDetail').and.callThrough();

    expect(serviceSpy).not.toHaveBeenCalled();
    expect(componentSpy).not.toHaveBeenCalled();

    component.name = 'bulbasaur';
    fixture.detectChanges();

    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(componentSpy).toHaveBeenCalledTimes(1);
    httpTestingController.verify();
    done();

  });
});
