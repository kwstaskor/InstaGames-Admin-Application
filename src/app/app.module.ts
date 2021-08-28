import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { SummarizeTextPipe } from './summarize-text.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/GameComponents/game/game.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { ErrorComponent } from './Components/SharedComponents/error/error.component';
import { NavbarComponent } from './Components/SharedComponents/navbar/navbar.component';
import { DeveloperComponent } from './Components/DeveloperComponents/developer/developer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
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
import { UserDetailsComponent } from './Components/UserComponents/user-details/user-details.component';
import { RatingComponent } from './Components/RatingComponents/rating/rating.component';
import { InputComponent } from './Components/SharedComponents/input/input.component';
import { TextAreaComponent } from './Components/SharedComponents/text-area/text-area.component';
import { UploadComponent } from './Components/SharedComponents/upload/upload.component';
import { UploadVideoComponent } from './Components/SharedComponents/upload-video/upload-video.component'


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
    MessageDetailsComponent,
    UserDetailsComponent,
    InputComponent,
    TextAreaComponent,
    RatingComponent,
    UploadComponent,
    UploadVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
