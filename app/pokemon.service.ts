import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

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
    return this.http.get([BASE_URL, 'generation', id].join('/'))
             .map(response => response.json());
  }

  getSpecies(generation: number) {
    const idRegex = /(\d+)\/$/;

    return this.getGeneration(generation)
             .map(generation => generation.pokemon_species)
             .map(species => {
                return species.map((specimen) => {
                  specimen.id = +idRegex.exec(specimen.url)[1];
                  specimen.name = capitalize(specimen.name);
                  return specimen;
                });
             });
  }

  getPokemon(id: number) {
    return this.http.get([BASE_URL, 'pokemon-species', id].join('/'))
      .map(response => response.json())
      .map(pokemon => {
        // pokemon.img = [
        //   'http://img.pokemondb.net/sprites',
        //   'black-white',
        //   'normal',
        //   pokemon.name + '.png'
        // ].join('/');
        pokemon.img = [
          'http://img.pokemondb.net/artwork',
          pokemon.name + '.jpg'
        ].join('/');
        pokemon.name = capitalize(pokemon.name);
        return pokemon;
      });
  }
}

function capitalize(str: string) {
  return str && str[0].toUpperCase() + str.slice(1);
}
