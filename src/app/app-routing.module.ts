import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './Components/CategoryComponents/category-details/category-details.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { CategoryCreateComponent } from './Components/CategoryComponents/category-create/category-create.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeveloperComponent } from './Components/developer/developer.component';
import { ErrorComponent } from './Components/error/error.component';
import { GameCreateComponent } from './Components/GameComponents/game-create/game-create.component';
import { GameDetailsComponent } from './Components/GameComponents/game-details/game-details.component';
import { GameComponent } from './Components/GameComponents/game/game.component';


const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent },
  { path: "Games", component: GameComponent },
  { path: "GameDetails/" + ":id", component: GameDetailsComponent },
  { path: "GameCreate", component: GameCreateComponent },
  { path: "CategoryCreate", component: CategoryCreateComponent },
  { path: "Categories", component: CategoryComponent },
  { path: "CategoryDetails/" + ":id", component: CategoryDetailsComponent },
  { path: "Developers", component: DeveloperComponent },
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
