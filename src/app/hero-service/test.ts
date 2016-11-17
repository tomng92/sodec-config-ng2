import {FakeHeroesService} from "./fake-heroes.service";
import {HttpModule, Http} from "@angular/http";
/**
 * Created by Thanh Nguyen on 2016-11-11.
 */


let http = new Http();
console.log("http = " + http.toString());
let fake  = new FakeHeroesService(http);

let countries = fake.getCountriesByRegion("asia");

console.log(countries);
