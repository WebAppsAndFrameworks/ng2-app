import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

  selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router: Router) { }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  getHeroes() : Promise<Hero[]> {
    return this._heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes().then((heroes) => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}
