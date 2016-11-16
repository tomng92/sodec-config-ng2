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
import {Observable} from "rxjs";

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  /**
   * Ctor par DI
   */
  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute
  ) {}


  /**
   * Extract the id from route, then look for the corresponding hero.
   */
  ngOnInit() {
    this._route.params.forEach(params => {
      console.log(`hero-detail.component.ngOnInit(): ${[params['id']]}`);

      // extraire id du route
      let id = Number.parseInt(params['id']);
      // this.person = this.peopleService.get(id);

      this._heroService.findHero(id).subscribe(hero => this.hero = hero);

    })
  }

  goBack() {
    window.history.back();
  }
}
