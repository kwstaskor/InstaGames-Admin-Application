import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from './game';
import { GameService } from './game.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  p: number = 1;
  games!: Game[];
  Title: any;

  constructor(private GameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.ReadGames();
  }

  ReadGames() {
    this.GameService.getGames().subscribe(data => this.games = data);
  }

  EditGame(game: Game) {
    this.router.navigate(["/GameEdit", game.GameId]);
  }

  isDeleted: boolean = false;
  deleteGameName: string|null = null;
  DeleteGame(game: Game) {
    this.GameService.deleteGame(game.GameId).subscribe((data) => {
      this.DeleteAlert(data);
      this.ReadGames();
    }, (error) => console.log(error));
  }

  Search() {
    if (this.Title) {
      this.games = this.games.filter(g =>
        g.Title.toUpperCase().includes(this.Title.toUpperCase())
      );
    } else {
      this.ReadGames();
    }
  }

  ViewGames(game: Game) {
    this.router.navigate(["/GameDetails", game.GameId]);
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  DeleteAlert(data:Game) {
    this.isDeleted = true;
    this.deleteGameName = data.Title;
    setTimeout(() => {
      this.isDeleted = false
      this.deleteGameName = null;
    }, 3000);
  }

}


