import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {DashboardComponent} from './dashboard.component';
import {GenerationDetailComponent} from './generation-detail.component';

import {PokemonService} from './pokemon.service';

@Component({
  selector: 'super-dope-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    PokemonService,
  ],
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true,
  }, {
    path: '/generation/:id',
    name: 'GenerationDetail',
    component: GenerationDetailComponent,
  }
])
export class AppComponent {
  title = 'Pokemon Findr';
  requestedGeneration;

  constructor() {
    // Handle Cortana activation adding the event listener before DOM Content Loaded
    // parse out the command type and call the respective game APIs
    var Windows: any = window['Windows'];
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
    } else {
        console.log('Windows namespace is unavaiable');
    }
  }

  ngOnInit() {

  }
}

