import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';


@Injectable()
export class Old_HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHero(id: number) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.filter(h => h.id === id)[0]);
	}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
