import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  p: number =1;
  games!:Game[];
  Title:any;
  constructor(private GameService:GameService) {

   }

  ngOnInit(): void {
  this.ReadGames();
  }

  ReadGames(){
    this.GameService.getGames().subscribe(data => this.games = data);
  }

  Search(){
    if(this.Title){
      this.games = this.games.filter(g=>
       g.Title.toUpperCase().includes(this.Title.toUpperCase())
      );
    }else{
      this.ReadGames();
    }
  }
  
key:any;
reverse:boolean = false;
  sort(key: any){
this.key = key;
this.reverse = !this.reverse;
  }
}
