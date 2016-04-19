import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {
  transform(value: any, [filterString]) {
    if (!filterString) return value;

    return value.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(filterString.toLowerCase());
    });
  }
}
