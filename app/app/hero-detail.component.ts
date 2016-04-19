import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) {

  }

  @Input()
  hero: Hero;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then((hero) => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
