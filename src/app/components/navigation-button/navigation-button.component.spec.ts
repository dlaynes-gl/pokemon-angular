import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavEvent } from 'src/app/config/constants/events';
import {
  TEST_PKM_NAVIGATION__NEXT,
  TEST_PKM_NAVIGATION__PREV,
} from 'src/app/config/test_ids';
import { NavigationEventService } from 'src/app/services/events/navigation-event.service';
import { findByTestId } from 'src/app/utils/tests';

import { NavigationButtonComponent } from './navigation-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;
  let service: NavigationEventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationButtonComponent],
      providers: [NavigationEventService],
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(NavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change the button label', (done) => {
    component.label = 'Next';
    component.testId = TEST_PKM_NAVIGATION__NEXT;

    fixture.detectChanges();

    const button = findByTestId(
      fixture.nativeElement,
      TEST_PKM_NAVIGATION__NEXT
    )!;
    expect(button).toBeDefined();
    expect(button).not.toBeNull();
    expect(button.textContent).toEqual('Next');
    done();
  });

  it('should emit an event when clicked', (done) => {
    service = TestBed.inject(NavigationEventService);
    component.label = 'Prev';
    component.testId = TEST_PKM_NAVIGATION__PREV;
    component.eventName = NavEvent.clickPrev;
    fixture.detectChanges();

    const button = findByTestId(
      fixture.nativeElement,
      TEST_PKM_NAVIGATION__PREV
    )! as HTMLButtonElement;
    expect(button).not.toBeNull();
    button.click();
    service.getEventListener().subscribe((evt: NavEvent|null) => {
      expect(evt).toBe(NavEvent.clickPrev);
      done();
    });
  });

  it('enabled set to false disables the button', () => {
    component.enabled = false;
    component.label = 'Prev';
    component.testId = TEST_PKM_NAVIGATION__PREV;
    fixture.detectChanges();
    const button = findByTestId(
      fixture.nativeElement,
      TEST_PKM_NAVIGATION__PREV
    )! as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });

  it('enabled set to true enables the button', () => {
    component.enabled = true;
    component.label = 'Prev';
    component.testId = TEST_PKM_NAVIGATION__PREV;
    fixture.detectChanges();
    const button = findByTestId(
      fixture.nativeElement,
      TEST_PKM_NAVIGATION__PREV
    )! as HTMLButtonElement;
    expect(button.disabled).toBeFalsy();
  });
});
