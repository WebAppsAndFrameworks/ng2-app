import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {upperFirst} from 'lodash';
import Rx from 'rxjs/Rx';

const cache = {
  generation: new Map,
  pokemon: new Map,
  species: new Map
};

const idRegex = /(\d+)\/$/;

const BASE_URL = 'http://pokeapi.co/api/v2';

@Injectable()
export class PokemonService {
  constructor(private http: Http) {
  }

  getGenerations() {
    return Promise.resolve([
      {
        id: 1,
        display: 'I',
      }, {
        id: 2,
        display: 'II',
      }, {
        id: 3,
        display: 'III',
      }, {
        id: 4,
        display: 'IV',
      }, {
        id: 5,
        display: 'V',
      }, {
        id: 6,
        display: 'VI',
      },
    ]);
  }

  getGeneration(id: number) {
    if (cache.generation.has(id)) {
      return Rx.Observable.of(cache.generation.get(id));
    }
    return this.http.get([BASE_URL, 'generation', id].join('/'))
      .map(response => {
        var result = response.json();
        cache.generation.set(id, result);
        return result;
      });
  }

  getSpecies(generation: number) {
    if (cache.species.has(generation)) {
      return Rx.Observable.of(cache.species.get(generation));
    }
    return this.getGeneration(generation)
      .map((generation:any) => generation.pokemon_species)
      .map(species => {
        var result = species.map((specimen) => {
          specimen.id = +idRegex.exec(specimen.url)[1];
          specimen.name = upperFirst(specimen.name);
          return specimen;
        });
        cache.species.set(generation, result);
        return result;
      });
  }

  getPokemon(id: number) {
    if (cache.pokemon.has(id)) {
      return Rx.Observable.of(cache.pokemon.get(id));
    }
    return this.http.get([BASE_URL, 'pokemon-species', id].join('/'))
      .map((response:any) => {
        var result = response.json(),
            name = result.name;

        result.img = 'http://img.pokemondb.net/artwork/' + name + '.jpg';
        result.name = upperFirst(name);

        cache.pokemon.set(id, result);
        return result;
      });
  }
}
