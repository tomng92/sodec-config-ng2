import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./hero-service/hero.service";
import {AppRoutingModule, routingComponents} from './app.routing';
import {WikiComponent} from './wiki/wiki.component';
import {WikiSmartComponent} from "./wiki/wiki-smart.component";
import {MaterialModule} from "@angular/material";
import {TodoComponent} from "./todo/todo.component";
import { AlmeroComponent } from './almero/almero.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    WikiComponent, WikiSmartComponent, TodoComponent, AlmeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
