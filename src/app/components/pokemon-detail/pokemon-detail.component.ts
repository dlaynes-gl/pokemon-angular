import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() mainImage = ''
  @Input() sprites: string[] = []
  @Input() id = ''
  @Input() name = ''
  @Input() types: string[] = []
  @Input() weight = 0
  @Input() moves: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
