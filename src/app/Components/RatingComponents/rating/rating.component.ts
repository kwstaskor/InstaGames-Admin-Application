import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating, UserGameRatings } from './rating';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {

  Games!: Rating[];
  GameTitle!: string;

  constructor(private actRoute: ActivatedRoute, private UserGameRatingsService: RatingService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.ReadUserGameRatings();
  }

  ReadUserGameRatings(){
    this.UserGameRatingsService.GetUserGameRatings().subscribe(data => this.Games = data);
  }

  ViewRatingDetails(ratingDetails: Rating){
    this.router.navigate(["/UserGameRatings", ratingDetails.GameId]);
  }

  Search() {
    if (this.GameTitle) {
      this.Games = this.Games.filter(d =>
        d.GameTitle.toUpperCase().includes(this.GameTitle.toUpperCase())
      );
    } else {
      this.ReadUserGameRatings();
    }
  }
}
