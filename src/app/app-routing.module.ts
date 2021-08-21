import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeveloperComponent } from './Components/developer/developer.component';
import { ErrorComponent } from './Components/error/error.component';
import { GameDetailsComponent } from './Components/GameComponents/game-details/game-details.component';
import { GameComponent } from './Components/GameComponents/game/game.component';


const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent },
  { path: "Games", component: GameComponent },
  { path: "Categories", component: CategoryComponent },
  { path: "Developers", component: DeveloperComponent },
  { path: "GameDetails/"+":id", component: GameDetailsComponent },
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
