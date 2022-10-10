import { Injectable } from '@angular/core';
import { ChildEventService } from '../child-event.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonEventService extends ChildEventService<string> {

}
