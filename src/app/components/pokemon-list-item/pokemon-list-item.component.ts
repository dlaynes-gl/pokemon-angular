import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  
  }

  click() {
    this.selected.emit(this.identifier)
  }

}
