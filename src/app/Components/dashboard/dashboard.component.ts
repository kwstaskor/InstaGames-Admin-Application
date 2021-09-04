import { Component, OnInit } from '@angular/core';
import { Category } from '../CategoryComponents/category/category';
import { CategoryService } from '../CategoryComponents/category/category.service';
import { DeveloperService } from '../DeveloperComponents/developer/developer.service';
import { Rating } from '../RatingComponents/rating/rating';
import { RatingService } from '../RatingComponents/rating/rating.service';
import { User } from '../UserComponents/user/user';
import { UserService } from '../UserComponents/user/user.service';

declare const jQuery: any
declare const ApexCharts: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  p: number = 1;
  GameTitle: any;
  Games!: Rating[];
  Categories!: Category[];
  TopRatedGames!: Rating[];
  MostPopularGames!: Rating[];
  ChartCategories!: Category[];
  userChart: any;
  categoryChart: any;
  gamesChart: any;

  constructor(private developerService: DeveloperService, private userService: UserService, private userRatingService: RatingService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    //Get data from server
    this.ReadRatings();
    this.ReadUsers()
    this.ReadDevelopers()

  }

  ReadRatings() {
    this.userRatingService.GetUserGameRatings().subscribe((data) => {
      this.Games = data;

      this.ReadCategories();

      this.filterTopRated();
      this.filterMostPopular();

      setTimeout(() => {
        this.slider();
      }, 10);
    })
  }

  ReadCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.Categories = data;
      this.InitCategoryChart(data);
    })
  }

  ReadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.InitUsersChart(data);
    })
  }

  ReadDevelopers() {
    this.developerService.getDevelopers().subscribe((data) => {
      let instagamesDevs = data.filter(d => d.IsInstaGamesDev);
      let externalDevs = data.filter(d => !d.IsInstaGamesDev)
      let arr = [];
      arr.push((instagamesDevs.length / data.length) * 100);
      arr.push((externalDevs.length / data.length) * 100);
      this.thirdChart(arr);

    })
  }

  //Charts
  InitCategoryChart(data: any) {
    this.ChartCategories = this.Categories.filter(c => c.Games.length > 0);
    let arr = [];
    let lab = [];
    for (const cat of data) {
      arr.push(this.findCategoryPercentage(cat.Games.length, this.Games.length))
      lab.push(cat.Type);
    }
    this.secondChart(lab, arr);
  }

  InitUsersChart(data: User[]) {
    let admins = data.filter(d => d.Role == 'Admin');
    let basicSubscribers = data.filter(d => d.Role == 'Subscriber' && d.SubscribePlan == 'Basic');
    let premiumSubscribers = data.filter(d => d.Role == 'Subscriber' && d.SubscribePlan == 'Premium');
    let unsubscribed = data.filter(d => d.Role == 'Unsubscribed');
    let arr = [];
    arr.push(Math.round((unsubscribed.length / data.length) * 100))
    arr.push(Math.round((admins.length / data.length) * 100))
    arr.push(Math.round((premiumSubscribers.length / data.length) * 100))
    arr.push(Math.round((basicSubscribers.length / data.length) * 100))

    this.firstChart(arr);
  }

  //Helper Methods
  filterTopRated() {
    this.TopRatedGames = this.Games.filter(g => g.TotalRatingFloat >= 3);
  }

  filterMostPopular() {
    this.MostPopularGames = this.Games.filter(g => g.TotalRatingFloat);
  }

  findCategoryPercentage(catGameslength: any, gamesLength: any) {
    return Math.floor(catGameslength * 100 / gamesLength);
  }

  Search() {
    if (this.GameTitle) {
      this.Games = this.Games.filter(g =>
        g.GameTitle.toUpperCase().includes(this.GameTitle.toUpperCase())
      );
    } else {
      this.ReadRatings();
    }
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  slider() {
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
      }, {
        breakpoint: 798,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 1
        }
      }, {

        breakpoint: 300,
        settings: "unslick"
      }],
    });
  }

  //charts Options
  firstChart(series: any) {
    if (jQuery('#view-chart-01').length) {
      var options = {
        series: series,
        chart: {
          width: 300,
          type: 'donut',
        },
        colors: ['#e20e02', '#f68a04', '#007aff', '#545e75'],
        labels: ["Unsubscribed", "Admins", "Premium Subscribers", "Basic Subscribers"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      this.userChart = new ApexCharts(document.querySelector("#view-chart-01"), options);
      this.userChart.render();
    }
  }

  secondChart(labels: any, series: any) {

    if (jQuery('#view-chart-02').length) {
      var options = {
        series: series,
        chart: {
          width: 300,
          type: 'donut',
        },
        colors: ['#007aff', '#14e788', '#a2a4af', '#e20e02', '#f68a04', '#ca139c', '#123123', '#000000'],
        labels: labels,
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false,
          formatter: function (val: any, opts: any) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      this.categoryChart = new ApexCharts(document.querySelector("#view-chart-02"), options);
      this.categoryChart.render();
    }

  }

  thirdChart(series: any) {

    if (jQuery('#view-chart-03').length) {
      var options = {
        series: series,
        chart: {
          width: 350,
          type: 'donut',
        },
        colors: ['#e20e02','#14e788'],
        labels: ['Instagames Developers' , 'External Partners'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false,
          formatter: function (val: any, opts: any) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      this.categoryChart = new ApexCharts(document.querySelector("#view-chart-03"), options);
      this.categoryChart.render();
    }

  }

}
