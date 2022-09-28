import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_PKM_NAVIGATION__NEXT, TEST_PKM_NAVIGATION__PREV } from 'src/app/config/test_ids';
import { findByTestId } from 'src/app/utils/tests';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent, NavigationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Next button', (done) => {
    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__NEXT)!;
    expect(button.textContent).toEqual('Next');
    done();
  });

  it('should show the Prev button', (done) => {
    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__PREV)!;
    expect(button.textContent).toEqual('Prev');
    done();
  });

  it('should disable the Prev button', (done) => {
    component.prevEnabled = true;
    fixture.detectChanges();

    component.prevEnabled = false;
    fixture.detectChanges();

    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__PREV)! as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
    done();
  });

  it('should disable the Next button', (done) => {
    component.nextEnabled = true;
    fixture.detectChanges();

    component.nextEnabled = false;
    fixture.detectChanges();

    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__NEXT)! as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
    done();
  });

  it('should enable the Prev button', (done) => {
    component.prevEnabled = false;
    fixture.detectChanges();

    component.prevEnabled = true;
    fixture.detectChanges();

    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__PREV)! as HTMLButtonElement;
    expect(button.disabled).toBeFalsy();
    done();
  });

  it('should enable the Next button', (done) => {
    component.nextEnabled = false;
    fixture.detectChanges();
    component.nextEnabled = true;
    fixture.detectChanges();

    const button = findByTestId(fixture.nativeElement as HTMLElement, TEST_PKM_NAVIGATION__NEXT)! as HTMLButtonElement;
    expect(button.disabled).toBeFalsy();
    done();
  });


});
