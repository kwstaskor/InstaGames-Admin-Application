import { Component, OnInit } from '@angular/core';
import { Rating } from '../RatingComponents/rating/rating';
import { RatingService } from '../RatingComponents/rating/rating.service';
declare const jQuery : any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  Games!: Rating[];
  TopRatedGames!:Rating[];
  constructor(private userRatingService : RatingService) { }

  ngOnInit(): void {
    this.ReadRatings();
   
  }

  ReadRatings(){
    this.userRatingService.GetUserGameRatings().subscribe((data)=>{
      this.Games=data;
      this.filterTopRated();
      setTimeout( ()=>{
        this.slider();
      }, 10);
    })
  }

  filterTopRated(){
    this.TopRatedGames = this.Games.filter(g=> g.TotalRatingFloat >= 3);
  }

   slider(){
    jQuery(".topRated").not('.slick-initialized').slick({
      slidesToShow: 4,
      speed: 300,
      slidesToScroll: 1,
      focusOnSelect: true,
       appendArrows: $('#topRated-item-slick-arrow'),
      responsive: [{
          breakpoint: 1200,
          settings: {
              slidesToShow: 3
          }
      },{
          breakpoint: 798,
          settings: {
              slidesToShow: 2
          }
      },{
          breakpoint: 480,
          settings: {
              arrows: false,
              autoplay:true,
              slidesToShow: 1
          }
      }, {

        breakpoint: 300,
        settings: "unslick"
      }],
    });
  }

}
