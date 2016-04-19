import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PokemonService} from './pokemon.service';

@Component({
  selector: 'generation-detail',
  templateUrl: 'app/generation-detail.component.html',
  styleUrls: ['app/generation-detail.component.css'],
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

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._pokemonService.getGeneration(id)
      .subscribe((response) => {
        let {pokemon_species} = response.json();
        this.pokemonList = pokemon_species;
      })
  }

  goBack() {
    window.history.back();
  }
}
