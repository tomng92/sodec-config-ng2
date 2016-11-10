import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'heroes'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HeroesComponent, DashboardComponent, HeroDetailComponent];


