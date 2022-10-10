import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonEventService } from 'src/app/services/events/pokemon-event.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

  /* Main Sprite of the Pokemon */
  @Input() sprite = ''

  /* Name of the Pokemon */
  @Input() name = ''

  /* ID of the Pokemon */
  @Input() identifier = ''

  constructor(private event: PokemonEventService) {

  }

  ngOnInit(): void {
  
  }

  click() {
    this.event.emitChildEvent(this.identifier)
  }

}
