import { Component, Input, OnInit } from '@angular/core';
import { PokemonMetaLink } from 'src/app/models/api/Pokemon';
import type { PokemonSingle } from 'src/app/models/app/PokemonSingle';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  static PER_PAGE = 4;

  @Input() pokemonList: PokemonMetaLink[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trackById(idx: number, item: PokemonMetaLink){
    return item.name
  }

}
