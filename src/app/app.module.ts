import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/GameComponents/game/game.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { ErrorComponent } from './Components/error/error.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DeveloperComponent } from './Components/DeveloperComponents/developer/developer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { SummarizeTextPipe } from './summarize-text.pipe';
import { GameRatingComponent } from './Components/GameComponents/game-rating/game-rating.component';
import { GameDetailsComponent } from './Components/GameComponents/game-details/game-details.component';
import { CategoryDetailsComponent } from './Components/CategoryComponents/category-details/category-details.component';
import { GameCreateComponent } from './Components/GameComponents/game-create/game-create.component';
import { CategoryCreateComponent } from './Components/CategoryComponents/category-create/category-create.component';
import { DeveloperDetailsComponent } from './Components/DeveloperComponents/developer-details/developer-details.component';
import { DeveloperCreateComponent } from './Components/DeveloperComponents/developer-create/developer-create.component';
import { MessageComponent } from './Components/MessageComponets/message/message.component';
import { UserComponent } from './Components/UserComponents/user/user.component';
import { MessageDetailsComponent } from './Components/MessageComponets/message-details/message-details.component';


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
    CategoryDetailsComponent,
    GameCreateComponent,
    CategoryCreateComponent,
    DeveloperDetailsComponent,
    DeveloperCreateComponent,
    MessageComponent,
    UserComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
