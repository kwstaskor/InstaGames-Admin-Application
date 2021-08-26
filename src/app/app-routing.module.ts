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
import { MessageDetailsComponent } from './Components/MessageComponets/message-details/message-details.component';


const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent },
  { path: "Games", component: GameComponent },
  { path: "Games/" + ":isCreated", component: GameComponent },
  { path: "GameDetails/" + ":id", component: GameDetailsComponent },
  { path: "GameCreate", component: GameCreateComponent },
  { path: "CategoryCreate", component: CategoryCreateComponent },
  { path: "Categories", component: CategoryComponent },
  { path: "Categories/" + ":isCreated", component: CategoryComponent },
  { path: "CategoryDetails/" + ":id", component: CategoryDetailsComponent },
  { path: "Developers", component: DeveloperComponent },
  { path: "Developers/"+ ":isCreated", component: DeveloperComponent },
  { path: "DeveloperDetails/" + ":id", component: DeveloperDetailsComponent },
  { path: "DeveloperCreate", component: DeveloperCreateComponent },
  { path: "Messages", component: MessageComponent },
  { path: "Messages/" + ":isReplied", component: MessageComponent },
  { path: "MessageDetails/" + ":id", component: MessageDetailsComponent },
  { path: "Users", component: UserComponent },
  { path: "Users/" + ":id", component: UserDetailsComponent },
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
