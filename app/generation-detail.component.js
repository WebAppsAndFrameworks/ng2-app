System.register(['angular2/core', 'angular2/router', './pokemon.service', './pokemon-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, pokemon_service_1, pokemon_filter_pipe_1;
    var GenerationDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            },
            function (pokemon_filter_pipe_1_1) {
                pokemon_filter_pipe_1 = pokemon_filter_pipe_1_1;
            }],
        execute: function() {
            GenerationDetailComponent = (function () {
                function GenerationDetailComponent(_pokemonService, _routeParams) {
                    this._pokemonService = _pokemonService;
                    this._routeParams = _routeParams;
                }
                GenerationDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.generation = id;
                    this._pokemonService.getSpecies(id)
                        .subscribe(function (species) {
                        _this.pokemonList = species.sort(function (a, b) { return a.id - b.id; });
                    });
                };
                GenerationDetailComponent.prototype.showPokemon = function (id) {
                    var _this = this;
                    this.loading = true;
                    this.selectedId = id;
                    this.selectedPokemon = null;
                    this._pokemonService.getPokemon(id)
                        .subscribe(function (pokemon) {
                        if (_this.selectedId === id) {
                            _this.loading = false;
                            _this.selectedPokemon = pokemon;
                        }
                    });
                };
                GenerationDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'generation-detail',
                        templateUrl: 'app/generation-detail.component.html',
                        styleUrls: ['app/generation-detail.component.css'],
                        pipes: [pokemon_filter_pipe_1.PokemonFilterPipe],
                    }), 
                    __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.RouteParams])
                ], GenerationDetailComponent);
                return GenerationDetailComponent;
            }());
            exports_1("GenerationDetailComponent", GenerationDetailComponent);
        }
    }
});
//# sourceMappingURL=generation-detail.component.js.map