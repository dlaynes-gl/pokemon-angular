import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EVENT_NAV_CLICK_PREV } from 'src/app/config/constants/events';
import { TEST_PKM_NAVIGATION__NEXT, TEST_PKM_NAVIGATION__PREV } from 'src/app/config/test_ids';
import { ChildEventService } from 'src/app/services/child-event.service';
import { formatTestId } from 'src/app/utils/tests';

import { NavigationButtonComponent } from './navigation-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;
  let service: ChildEventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationButtonComponent ],
      providers: [
        ChildEventService
      ]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(NavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should change the button label', (done) => {
    component.label = 'Next';
    component.testId = TEST_PKM_NAVIGATION__NEXT

    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const button = mainElement.querySelector(
      formatTestId(TEST_PKM_NAVIGATION__NEXT)
    )!;
    expect(button).toBeDefined();
    expect(button).not.toBeNull();
    expect(button.textContent).toEqual('Next');
    done();
  });

  it('should emit an event when clicked', (done) => {
    service = TestBed.inject(ChildEventService);
    component.label = 'Prev';
    component.testId = TEST_PKM_NAVIGATION__PREV;
    component.eventName = EVENT_NAV_CLICK_PREV;
    fixture.detectChanges();

    const mainElement: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = mainElement.querySelector(
      formatTestId(TEST_PKM_NAVIGATION__PREV)
    )!;
    expect(button).not.toBeNull();
    button.click();
    service.getEventListener().subscribe((evt: string) => {
      expect(evt).toBe(EVENT_NAV_CLICK_PREV);
      done();
    });
  })

});
