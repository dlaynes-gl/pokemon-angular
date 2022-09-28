import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildEventService {
  private childEvent = new BehaviorSubject<string>('');

  emitChildEvent(msg: string) {
    this.childEvent.next(msg);
  }

  getEventListener() {
    return this.childEvent.asObservable();
  }
}
