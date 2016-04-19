import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PokemonService} from './pokemon.service';
import {PokemonFilterPipe} from './pokemon-filter.pipe';

@Component({
  selector: 'generation-detail',
  templateUrl: 'app/generation-detail.component.html',
  styleUrls: ['app/generation-detail.component.css'],
  pipes: [PokemonFilterPipe],
})
export class GenerationDetailComponent implements OnInit {
  constructor(
    private _pokemonService: PokemonService,
    private _routeParams: RouteParams
  ) {

  }

  // @Input()
  // hero: Hero;

  pokemonList: any;
  selectedPokemon: any;
  generation: number;
  filterStr: string;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.generation = id;
    this._pokemonService.getSpecies(id)
      .subscribe((species) => {
        this.pokemonList = species;
      });
  }

  goBack() {
    window.history.back();
  }

  showPokemon(id: number) {
    this._pokemonService.getPokemon(id)
      .subscribe((pokemon) => {
        this.selectedPokemon = pokemon;
      });
  }
}
