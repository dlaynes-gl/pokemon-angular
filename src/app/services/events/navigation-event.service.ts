import { Injectable } from '@angular/core';
import { NavEvent } from 'src/app/config/constants/events';
import { ChildEventService } from '../child-event.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationEventService extends ChildEventService<NavEvent> {

}
