import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './Components/CategoryComponents/category-details/category-details.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { CategoryCreateComponent } from './Components/CategoryComponents/category-create/category-create.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeveloperComponent } from './Components/DeveloperComponents/developer/developer.component';
import { ErrorComponent } from './Components/SharedComponents/error/error.component';
import { GameCreateComponent } from './Components/GameComponents/game-create/game-create.component';
import { GameDetailsComponent } from './Components/GameComponents/game-details/game-details.component';
import { GameComponent } from './Components/GameComponents/game/game.component';
import { DeveloperDetailsComponent } from './Components/DeveloperComponents/developer-details/developer-details.component';
import { DeveloperCreateComponent } from './Components/DeveloperComponents/developer-create/developer-create.component';
import { MessageComponent } from './Components/MessageComponets/message/message.component';
import { UserComponent } from './Components/UserComponents/user/user.component';
import { UserDetailsComponent } from './Components/UserComponents/user-details/user-details.component';
import { UsereditComponent } from './Components/UserComponents/useredit/useredit.component';
import { MessageDetailsComponent } from './Components/MessageComponets/message-details/message-details.component';
import { RatingComponent } from './Components/RatingComponents/rating/rating.component';
import { RatingDetailsComponent } from './Components/RatingComponents/rating-details/rating-details.component';
import { RatingUserRatingsComponent } from './Components/RatingComponents/rating-user-ratings/rating-user-ratings.component';
import { CategoryEditComponent } from './Components/CategoryComponents/category-edit/category-edit.component';
import { DeveloperEditComponent } from './Components/DeveloperComponents/developer-edit/developer-edit.component';
import { GameEditComponent } from './Components/GameComponents/game-edit/game-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth.guard';




export const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "Games", component: GameComponent, canActivate: [AuthGuard] },
  { path: "GameDetails/" + ":id", component: GameDetailsComponent, canActivate: [AuthGuard] },
  { path: "GameCreate", component: GameCreateComponent, canActivate: [AuthGuard] },
  { path: "GameEdit/" + ":id", component: GameEditComponent, canActivate: [AuthGuard] },
  { path: "CategoryCreate", component: CategoryCreateComponent, canActivate: [AuthGuard] },
  { path: "Categories", component: CategoryComponent, canActivate: [AuthGuard] },
  { path: "CategoryDetails/" + ":id", component: CategoryDetailsComponent, canActivate: [AuthGuard] },
  { path: "CategoryEdit/" + ":id", component: CategoryEditComponent, canActivate: [AuthGuard] },
  { path: "Developers", component: DeveloperComponent, canActivate: [AuthGuard] },
  { path: "DeveloperDetails/" + ":id", component: DeveloperDetailsComponent, canActivate: [AuthGuard] },
  { path: "DeveloperCreate", component: DeveloperCreateComponent, canActivate: [AuthGuard] },
  { path: "DeveloperEdit/" + ":id", component: DeveloperEditComponent, canActivate: [AuthGuard] },
  { path: "Messages", component: MessageComponent, canActivate: [AuthGuard] },
  { path: "MessageDetails/" + ":id", component: MessageDetailsComponent, canActivate: [AuthGuard] },
  { path: "Users", component: UserComponent, canActivate: [AuthGuard] },
  { path: "Users/" + ":id", component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: "UserEdit/" + ":id", component: UsereditComponent, canActivate: [AuthGuard] },
  { path: "UserGameRatings", component: RatingComponent, canActivate: [AuthGuard] },
  { path: "UserGameRatings/" + ":id", component: RatingDetailsComponent, canActivate: [AuthGuard] },
  { path: "UserRatings/" + ":id", component: RatingUserRatingsComponent, canActivate: [AuthGuard] },
  { path: "signin", component: SigninComponent },
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
