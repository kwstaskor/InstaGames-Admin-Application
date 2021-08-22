import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiKakaoTalkFill } from 'angular-remix-icon';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { Game } from './game';
import { GameService } from './game.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {
  p: number =1;
  isDeleted:boolean = false;
  games!:Game[];
  Title:any;

  constructor(private GameService:GameService, private router:Router) {

   }

  ngOnInit(): void {
  this.ReadGames();
  }

  ReadGames(){
    this.GameService.getGames().subscribe(data => this.games = data);
  }

  DeleteGame(game:Game){
    this.GameService.deleteGame(game.GameId).subscribe(()=>{
      this.isDeleted = true;

      setTimeout(()=>{
        this.isDeleted = false
      },3000);

      this.ReadGames();
    },(error)=>console.log(error));
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

  ViewGames(game:Game){
    this.router.navigate(["/GameDetails" , game.GameId]);
  }
  
key:any;
reverse:boolean = false;
  sort(key: any){
this.key = key;
this.reverse = !this.reverse;
  }
}


