import {Component} from "@angular/core";
import {HeroService} from './hero-service/hero.service';
import './rxjs-operators';
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService]
})
export class AppComponent {

  constructor(private router: Router) {};
  public title = 'Tour des XHéros';


  gotoPanel(panelName: string) {
    console.log("gotoPanel %s", panelName);
    this.router.navigate(['/' + panelName]);
  }

}
