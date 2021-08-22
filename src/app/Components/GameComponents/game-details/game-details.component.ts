import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Game } from '../game/game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  gameId!: number;
  game!: Game;

  constructor(private actRoute: ActivatedRoute, private GameService: GameService) {
    this.gameId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readGame();
  }

  readGame() {
    this.GameService.getGame(this.gameId).subscribe(data => this.game = data);
  }

  showTrailerField: boolean = false;
  WatchTrailer() {
    this.showTrailerField = !this.showTrailerField;
  }

}
