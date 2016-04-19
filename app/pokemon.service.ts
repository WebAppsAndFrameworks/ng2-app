import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

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
    return this.http.get([BASE_URL, 'generation', id].join('/'));
  }
}
