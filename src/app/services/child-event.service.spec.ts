import { Inject, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ChildEventService } from './child-event.service';
@Injectable({
  providedIn: 'root'
})
class DemoEventService extends ChildEventService<string> {

}

describe('ChildEventService', () => {
  let service: DemoEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an event listener', (done) => {
    const listener = service.getEventListener();
    expect(listener).toBeDefined();
    expect(listener).toBeInstanceOf(Observable);
    done();
  });

  it('should emit an event', (done) => {
    const listener = service.getEventListener();
    service.emitChildEvent('test');
    listener.subscribe({
      next: (ev) => {
        expect(ev).toBe('test')
        done();
      }
    });
  });

});
