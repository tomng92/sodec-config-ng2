import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from '../hero-service/hero.service';
import {Hero} from '../hero-service/hero';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {
  }

  private errorMessage: string;


  getHeroes() {
    console.log("ALLO!~~~~~~~~~~~~~~~~~~~~~~Heroes are " + this.heroes == null);

    this._heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => this.errorMessage = <any>error);
  }


  gotoDetail() {
    // this._router.navigate(['detail', { id: this.selectedHero.id }]);

    console.log("gotoDetail() for " + this.selectedHero.id);
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit() {
    console.log("ngOninit()");
    this.getHeroes();

  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
