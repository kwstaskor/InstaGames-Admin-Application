import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/GameComponents/game/game.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { ErrorComponent } from './Components/error/error.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DeveloperComponent } from './Components/developer/developer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { SummarizeTextPipe } from './summarize-text.pipe';
import { GameRatingComponent } from './Components/GameComponents/game-rating/game-rating.component';
import { GameDetailsComponent } from './Components/GameComponents/game-details/game-details.component';
import { CategoryDetailsComponent } from './Components/CategoryComponents/category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CategoryComponent,
    ErrorComponent,
    NavbarComponent,
    DeveloperComponent,
    DashboardComponent,
    SummarizeTextPipe,
    GameRatingComponent,
    GameDetailsComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
