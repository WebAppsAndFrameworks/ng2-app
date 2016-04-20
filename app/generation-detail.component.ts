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
  loading: boolean;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.generation = id;
    this._pokemonService.getSpecies(id)
      .subscribe((species: any[]) => {
        this.pokemonList = species.sort((a, b) => a.id - b.id);
      });
  }

  showPokemon(id: number) {
    this.loading = true;
    this.selectedPokemon = null;

    this._pokemonService.getPokemon(id)
      .subscribe((pokemon) => {
        this.loading = false;
        this.selectedPokemon = pokemon;
      });
  }
}
