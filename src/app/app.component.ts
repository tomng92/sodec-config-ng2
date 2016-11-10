import {Component} from "@angular/core";
import {HeroService} from './hero-service/hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div>
      <a href="#" [routerLink]="['/dashboard']">Dashboard</a>
      <a href="#" [routerLink]="['/heroes']">Heroes</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  public title = 'Tour des Héros';
}
