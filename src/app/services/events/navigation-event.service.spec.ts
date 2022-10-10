import { TestBed } from '@angular/core/testing';

import { NavigationEventService } from './navigation-event.service';

describe('NavigationEventService', () => {
  let service: NavigationEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
