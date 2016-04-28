System.register(['angular2/core', 'angular2/http', 'lodash', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, lodash_1, Rx_1;
    var cache, idRegex, BASE_URL, PokemonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            cache = {
                generation: new Map,
                pokemon: new Map,
                species: new Map
            };
            idRegex = /(\d+)\/$/;
            BASE_URL = 'http://pokeapi.co/api/v2';
            PokemonService = (function () {
                function PokemonService(http) {
                    this.http = http;
                }
                PokemonService.prototype.getGenerations = function () {
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
                };
                PokemonService.prototype.getGeneration = function (id) {
                    if (cache.generation.has(id)) {
                        return Rx_1.default.Observable.of(cache.generation.get(id));
                    }
                    return this.http.get([BASE_URL, 'generation', id].join('/'))
                        .map(function (response) {
                        var result = response.json();
                        cache.generation.set(id, result);
                        return result;
                    });
                };
                PokemonService.prototype.getSpecies = function (generation) {
                    if (cache.species.has(generation)) {
                        return Rx_1.default.Observable.of(cache.species.get(generation));
                    }
                    return this.getGeneration(generation)
                        .map(function (generation) { return generation.pokemon_species; })
                        .map(function (species) {
                        var result = species.map(function (specimen) {
                            specimen.id = +idRegex.exec(specimen.url)[1];
                            specimen.name = lodash_1.upperFirst(specimen.name);
                            return specimen;
                        });
                        cache.species.set(generation, result);
                        return result;
                    });
                };
                PokemonService.prototype.getPokemon = function (id) {
                    if (cache.pokemon.has(id)) {
                        return Rx_1.default.Observable.of(cache.pokemon.get(id));
                    }
                    return this.http.get([BASE_URL, 'pokemon-species', id].join('/'))
                        .map(function (response) {
                        var result = response.json(), name = result.name;
                        result.img = 'http://img.pokemondb.net/artwork/' + name + '.jpg';
                        result.name = lodash_1.upperFirst(name);
                        cache.pokemon.set(id, result);
                        return result;
                    });
                };
                PokemonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PokemonService);
                return PokemonService;
            }());
            exports_1("PokemonService", PokemonService);
        }
    }
});
//# sourceMappingURL=pokemon.service.js.map