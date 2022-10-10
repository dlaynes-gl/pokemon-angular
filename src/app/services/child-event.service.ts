import { BehaviorSubject } from 'rxjs';
export abstract class ChildEventService<T> {
  private childEvent = new BehaviorSubject<T|null>(null);

  emitChildEvent(msg: T) {
    this.childEvent.next(msg);
  }

  getEventListener() {
    return this.childEvent.asObservable();
  }
}
