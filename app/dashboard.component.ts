import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Generation} from './generation';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  generations: Generation[] = [];

  constructor(
    private _pokemonService: PokemonService,
    private _router: Router) {

    }

  ngOnInit() {
    interface launchRequest {generationId: number};
    if(window['initialLaunch']){
      var initialLaunch: = <launchRequest>window['initialLaunch'];
      let link = ['GenerationDetail', {id: initialLaunch.generationId}];
      this._router.navigate(link);
    } else {

    this._pokemonService.getGenerations()
      .then((generations) => this.generations = generations);
    }
  }

  gotoDetail(generation: Generation) {
    let link = ['GenerationDetail', {id: generation.id}];
    this._router.navigate(link);
  }
}
