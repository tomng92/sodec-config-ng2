/**
 * hero-detail.
 *
 * 1. Reçoit le id du hero
 */
import {Component, OnInit, Input} from '@angular/core';
// import {RouteParams} from '@angular/router';
import {Hero} from '../hero-service/hero';
import {HeroService} from '../hero-service/hero.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  /**
   * Ctor uses injection dependencies.
   * @param heroService
   * @param route
   */
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}


  /**
   * Extract the id from route, then look for the corresponding hero.
   */
  ngOnInit() {
    this.route.params.forEach(params => {

      // extraire id du route
      let id = Number.parseInt(params['id']);
      // this.person = this.peopleService.get(id);

      // invoke the hero service.
      this.heroService.getHero(id).then(hero => this.hero = hero);
    })
  }

  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
