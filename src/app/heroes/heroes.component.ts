/**
 * Component displaying the list of heroes.
 */


import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from '../hero-service/fake-heroes.service';
//import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {Hero} from '../hero-service/hero';
import {Subscription} from "rxjs";

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  getHeroes() {

    let completed : boolean = false;

    let subs : Subscription =
    //  heroService.getHeroes() returns an
    // this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

    // https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html

    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes,
      e => console.log("onError: %s", e),
      function() {
        console.log("COmpleted!!!!");
        completed = true;
        // console.log("this.heroes() size is %d", this.heroes.length);
        console.log("this.heroes() completed = " + completed);
      });



   }

  gotoDetail() {
    // this._router.navigate(['detail', { id: this.selectedHero.id }]);

    console.log("gotoDetail() for " + this.selectedHero.id);
    this._router.navigate(['/detail', this.selectedHero.id ]);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
