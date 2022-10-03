import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/api/Pokemon';
import { PokemonSingle } from 'src/app/models/app/PokemonSingle';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { convertPokemonDetail } from 'src/app/utils/parseData/pokemon';

// We need this wrapper component, since the API is badly designed
@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit {

  pokemon: PokemonSingle|null = null;

  pokemonJSON: Pokemon|null = null;

  @Input() name = ''

  error = '';

  constructor(private service: PokemonApiService) {
    console.log("Calling constructor SPC")
  }

  ngOnInit(): void {
    console.log("Element has been created", this.name)
    if(!this.name){
      this.error = "Missing pokemon ID";
      return;
    }
    this.getDetail(this.name);
  }

  getDetail(name: string){
    this.service.getPokemonDetail(name).subscribe({
      next: (data) => {
        console.log("Got data", data)
        this.handlePokemon(data)
      }
    });
  }

  handlePokemon = (data: Pokemon) => {
    this.pokemonJSON = data;
    this.pokemon = convertPokemonDetail(data)
  }

}
