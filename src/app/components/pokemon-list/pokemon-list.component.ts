import { Component, Input, OnInit } from '@angular/core';
import type { PokemonItem } from 'src/app/models/app/PokemonItem';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList: PokemonItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trackById(idx: number, item: PokemonItem){
    return item.id
  }

}
