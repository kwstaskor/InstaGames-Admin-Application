import { Component, OnInit } from '@angular/core';
import { Category } from '../../CategoryComponents/category/category';
import { CategoryService } from '../../CategoryComponents/category/category.service';
import { Game, Pegi } from '../game/game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  Categories!:Category[];
  Pegilist!:Pegi[];
  constructor(private GameService:GameService,private CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.ReadCategories();
    this.ReadPegi();
  }

  ReadCategories(){
   this.CategoryService.getCategories().subscribe((data)=>this.Categories = data);
  }

  ReadPegi(){
    this.GameService.getPegi().subscribe((data)=>this.Pegilist = data);
  }

CreateGame(title:string,photo:string,trailer:string,pegi:any,description:string,releaseDate:any,isReleased:any,isEarlyAccess:any,tag:string
  ,gameCategories: any,gameDevelopers:any){

  // this.GameService.createGame(game).subscribe();
}

}
