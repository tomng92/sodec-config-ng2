/**
 * Created by tnguyen on 2016-11-14.
 */

import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';


class HeroObj implements Hero {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  };

  toString(): string {
    return `Hero ${this.id} ${this.name}`;
  }

}


/**
 * Service Hero, qui invoke the REST service.
 */
@Injectable()
export class HeroService {

  //private heroesUrl = 'app/heroes';  // URL to web API

  // url du rest service  das boot m2 (voir le coirs Spring Boot dans pluralsight)
  private heroesUrl = "http://localhost:8080/api/v1/shipwrecks"; //"https://restcountries.eu/rest/v1/region/";


  constructor(private http: Http) {
  }

  /**
   *
   * @returns {Observable<R>}
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(HeroService.extractData)
      .catch(HeroService.handleError);
  }

  /**
   * Invoked from getHeroes().
   * @param res
   * @returns {Hero[]}
   */
  private static extractData(res: Response) {
    let body: Object[] = res.json();

    //console.log(body);


    let heroList: Hero[] = [];

    // Convertir la table d'objet tuples en objet Heros.
    /**
     * Le url "http://localhost:8080/api/v1/shipwrecks" nous donne ceci:
     * [{"id":1,"name":"U869","description":"A very deep German UBoat","condition":"FAIR","depth":200,"latitude":44.12,"longitude":138.44,"yearDiscovered":1994},
     * {"id":2,"name":"Thistlegorm","description":"British merchant boat in the Red Sea","condition":"GOOD","depth":80,"latitude":44.12,"longitude":138.44,"yearDiscovered":1994},
     * {"id":3,"name":"S.S. Yongala","description":"A luxury passenger ship wrecked on the great barrier reef","condition":"FAIR","depth":50,"latitude":44.12,"longitude":138.44,"yearDiscovered":1994}]
     */
    for (let item of body) {
      let hero: Hero = new HeroObj(item["id"], item["name"]);
      //console.log(" From hero.service.ts: item = " + item);
      heroList.push(hero);
      //console.log(hero);
    }

    return heroList;
  }

  /**
   *
   * @param error
   * @returns {ErrorObservable}
   */
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

  /**
   * Find the hero in the Observable<Hero[]>
   * @param heroId
   */
  public findHero(heroId: number): Observable<Hero> {

    return this.getHeroes().map(hs => hs.filter(function () {
      return heroId == heroId;
    })).map(heroes => heroes[0]);// not the most optimized.
  }

}
