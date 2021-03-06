import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../rating/rating';
import { RatingService } from '../rating/rating.service';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css']
})

export class RatingDetailsComponent implements OnInit {

  Rating!: Rating;
  GameId!: number;

  constructor(private actRoute: ActivatedRoute, private ratingService: RatingService, private router: Router) { 
    this.GameId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ReadRatingDetails();
  }

  ReadRatingDetails(){
    this.ratingService.GetRatingDetails(this.GameId).subscribe(data => this.Rating = data);
  }

  ViewUserRatings(userRatings: Rating){
    this.router.navigate(["/UserRatings", userRatings.GameId]);
  }
}
