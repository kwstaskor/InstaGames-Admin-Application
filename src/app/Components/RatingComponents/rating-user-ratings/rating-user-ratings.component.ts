import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../rating/rating';
import { RatingService } from '../rating/rating.service';

@Component({
  selector: 'app-rating-user-ratings',
  templateUrl: './rating-user-ratings.component.html',
  styleUrls: ['./rating-user-ratings.component.css']
})
export class RatingUserRatingsComponent implements OnInit {

  p: number = 1;
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

  ViewRatingDetails(userDetails: Rating){
    this.router.navigate(["/UserGameRatings", userDetails.GameId]);
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
