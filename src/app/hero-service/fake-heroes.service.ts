import {Injectable} from "@angular/core"
import {Http} from '@angular/http';
import 'rxjs/Rx'
//import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Injectable()
export class FakeHeroService {

  endpoint_url: string = "http://localhost:8080/api/v1/shipwrecks"; //"https://restcountries.eu/rest/v1/region/";

  constructor(private http: Http) {
  }


  // getCountriesByRegion(region: string) {
  //   return this.http.get(this.endpoint_url + region).map(res => res.json());
  // }

  getHeroes() {
    return this.http.get(this.endpoint_url).map(res => res.json());
  }

  getHero(id: number) {
    console.log("getHero-Fake() at id = " + id);
    return this.http.get(this.endpoint_url).map(res => res.json())
      .filter(h => h.id === id)[0];
  }
}

