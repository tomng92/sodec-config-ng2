/**
 * Created by tnguyen on 2016-11-14.
 */

import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class HeroService {

  //private heroesUrl = 'app/heroes';  // URL to web API

  private heroesUrl = "http://localhost:8080/api/v1/shipwrecks"; //"https://restcountries.eu/rest/v1/region/";


  constructor(private http: Http) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(HeroService.extractData)
      .catch(HeroService.handleError);
  }

  private static extractData(res: Response) {
    let body:Object[] = res.json();

    console.log(body);


    let heroList : Hero[] = [];

    for (let item of body) {
      let hero : Hero= new HeroObj(item["id"], item["name"]);
      console.log(" item = " + item);
      heroList.push(hero);
      console.log(hero);
    }



    return heroList;

    //return body.data || {};
  }

  private static handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  // getHero(id: number): Observable<Hero> {
  //   return this.getHeroes().filter(h => h.id === id).takeLast();
  // }
}




class HeroObj implements Hero {
  constructor(public id: number, public name: string) {};
}

