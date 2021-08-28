import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating, UserGameRatings } from '../rating/rating';
import { RatingService } from '../rating/rating.service';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css']
})

export class RatingDetailsComponent implements OnInit {

  Rating!: Rating;
  GameId!: number;

  constructor(private actRoute: ActivatedRoute, private ratingService: RatingService) { 
    this.GameId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ReadRatingDetails();
  }

  ReadRatingDetails(){
    this.ratingService.GetRatingDetails(this.GameId).subscribe(data => this.Rating = data);
  }
}
