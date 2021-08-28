import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private dom:DomSanitizer, private actRoute: ActivatedRoute, private GameService: GameService) {
    this.gameId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readGame();
  }

  readGame() {
    this.GameService.getGame(this.gameId).subscribe(data => {
      this.game = data

      if(this.game.GameUrl){
        this.game.GameUrl=this.dom.bypassSecurityTrustResourceUrl(this.game.GameUrl); 
      }
    });
  }

  showTrailerField: boolean = false;
  WatchTrailer() {
    this.showTrailerField = !this.showTrailerField;
  }

  tryGameField: boolean = false;
  TryGame() {
    this.tryGameField = !this.tryGameField;
  }

  @ViewChild('fullScreen') divRef:any;

openFullscreen() {
  // Use this.divRef.nativeElement here to request fullscreen
  const elem = this.divRef.nativeElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}
}
