import {Component} from "@angular/core";
import {HeroService} from './hero-service/fake-heroes.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  public title = 'Tour des Héros';
}
