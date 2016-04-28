System.register(['angular2/core', 'angular2/router', 'angular2/http', './dashboard.component', './generation-detail.component', './pokemon.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, dashboard_component_1, generation_detail_component_1, pokemon_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (generation_detail_component_1_1) {
                generation_detail_component_1 = generation_detail_component_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Pokemon Findr';
                    // Handle Cortana activation adding the event listener before DOM Content Loaded
                    // parse out the command type and call the respective game APIs
                    var Windows = window['Windows'];
                    if (typeof Windows !== 'undefined') {
                        console.log('Windows namespace is available');
                        Windows.UI.WebUI.WebUIApplication.addEventListener('activated', function (args) {
                            console.log("ACTIVATED");
                            var activation = Windows.ApplicationModel.Activation;
                            // Check to see if the app was activated by a voice command
                            if (args.kind === activation.ActivationKind.voiceCommand) {
                                var speechRecognitionResult = args.result;
                                var textSpoken = speechRecognitionResult.text;
                                var command = speechRecognitionResult.rulePath[0];
                                console.log('The command is: ' + command);
                                if (command === 'find') {
                                    console.log('The speech reco result is: ' + speechRecognitionResult);
                                    console.log('The text spoken is: ' + textSpoken);
                                }
                                else {
                                    // No valid command specified
                                    console.log('No valid command specified');
                                }
                            }
                        });
                    }
                    else {
                        console.log('Windows namespace is unavaiable');
                    }
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'super-dope-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            pokemon_service_1.PokemonService,
                        ],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true,
                        }, {
                            path: '/generation/:id',
                            name: 'GenerationDetail',
                            component: generation_detail_component_1.GenerationDetailComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map