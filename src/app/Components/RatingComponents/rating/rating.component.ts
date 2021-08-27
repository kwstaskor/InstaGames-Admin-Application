import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from './rating';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {

  userGameRatings!: Rating[];
  filteredGames!: Rating[];
  GameId!: number;
  GameTitle!: string;
  UserId!: string;

  constructor(private actRoute: ActivatedRoute, private UserGameRatingsService: RatingService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.ReadUserGameRatings();
  }
  FilterGames() {
  this.filteredGames = this.userGameRatings.filter(Rating => Rating.GameId === this.GameId && Rating.UserId === this.UserId);
}

  ReadUserGameRatings(){
    this.UserGameRatingsService.getUserGameRatings().subscribe(data => this.userGameRatings = data);
  }

  Search() {
    if (this.GameTitle) {
      this.userGameRatings = this.userGameRatings.filter(d =>
        d.GameTitle.toUpperCase().includes(this.GameTitle.toUpperCase())
      );
    } else {
      this.ReadUserGameRatings();
    }
  }
}
