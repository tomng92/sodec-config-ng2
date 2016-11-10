import {Injectable} from "@angular/core"
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class CountryService{

  endpoint_url:string = "https://restcountries.eu/rest/v1/region/";

  constructor(private http: Http) {}


  getCountriesByRegion (region:string) {
    return this.http.get(this.endpoint_url + region).map(res => res.json());
}
}
