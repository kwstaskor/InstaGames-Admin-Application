import { Component, OnInit,OnChanges,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-rating',
  templateUrl: './game-rating.component.html',
  styleUrls: ['./game-rating.component.css']
})
export class GameRatingComponent implements OnInit,OnChanges {

@Input() Rating!:number;

stars!:number[];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = new Array(Math.round(this.Rating));
  }

  ngOnInit(): void {
    this.stars = new Array(Math.round(this.Rating));
  }

}
