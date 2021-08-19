import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/game/game.component';
import { CategoryComponent } from './Components/category/category.component';
import { ErrorComponent } from './Components/error/error.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DeveloperComponent } from './Components/developer/developer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CategoryComponent,
    ErrorComponent,
    NavbarComponent,
    DeveloperComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
