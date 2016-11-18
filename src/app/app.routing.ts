import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {WikiComponent} from "./wiki/wiki.component";
import {WikiSmartComponent} from "./wiki/wiki-smart.component";
import {TodoComponent} from "./todo/todo.component";
import {ShowDropDownComponent} from "./bennadel-dropdown/show-dropdown";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'heroes'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: "wiki", component: WikiComponent},
  {path: "wiki-smart", component: WikiSmartComponent},
  {path: "show-dropdown", component: ShowDropDownComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HeroesComponent, DashboardComponent, HeroDetailComponent,
  WikiComponent, WikiSmartComponent,
  TodoComponent];


