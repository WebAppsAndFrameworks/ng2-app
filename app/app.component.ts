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
  title = 'Pokemon Findr'
}
