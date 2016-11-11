import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../hero-service/hero';
import {HeroService} from '../hero-service/fake-heroes.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    this._router.navigate(['detail', { id: hero.id }]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
