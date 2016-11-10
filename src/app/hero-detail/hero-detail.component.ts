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
   * @param location
   */
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
    // private location: Location
  ) {}


  /**
   * Extract the id from route, then look for the corresponding hero.
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      // extraire id du route
      console.log("param = " + params.toString());
      let id: number = params['id'];

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
