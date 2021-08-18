import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'InstaGames';

  jquery: HTMLScriptElement;
  popper: HTMLScriptElement;
  bootstarp: HTMLScriptElement;
  jqueryDataTables: HTMLScriptElement;
  bootstarpDataTables: HTMLScriptElement;
  jqueryApear: HTMLScriptElement;
  countDown: HTMLScriptElement;
  select2: HTMLScriptElement;
  waypoints: HTMLScriptElement;
  jqueryCounterup: HTMLScriptElement;
  wow: HTMLScriptElement;
  slick: HTMLScriptElement;
  owlCarousel: HTMLScriptElement;
  jqueryMagnifiqPopup: HTMLScriptElement;
  smoothScrollbar: HTMLScriptElement;
  apexCharts: HTMLScriptElement;
  chartCustom: HTMLScriptElement;
  customJs: HTMLScriptElement;

  constructor() {
    this.jquery = document.createElement("script");
    this.jquery.src = "/src/js/jquery.min.js";

    this.popper = document.createElement("script");
    this.popper.src = "/src/js/popper.min.js";

    this.bootstarp = document.createElement("script");
    this.bootstarp.src = "/src/js/bootstrap.min.js";

    this.jqueryDataTables = document.createElement("script");
    this.jqueryDataTables.src = "/src/js/jquery.dataTables.min.js";

    this.bootstarpDataTables = document.createElement("script");
    this.bootstarpDataTables.src = "/src/js/dataTables.bootstrap4.min.js";

    this.jqueryApear = document.createElement("script");
    this.jqueryApear.src = "/src/js/jquery.appear.js";

    this.countDown = document.createElement("script");
    this.countDown.src = "/src/js/countdown.min.js";

    this.select2 = document.createElement("script");
    this.select2.src = "/src/js/select2.min.js";

    this.waypoints = document.createElement("script");
    this.waypoints.src = "/src/js/waypoints.min.js";

    this.jqueryCounterup = document.createElement("script");
    this.jqueryCounterup.src = "/src/js/jquery.counterup.min.js";

    this.wow = document.createElement("script");
    this.wow.src = "/src/js/wow.min.js";

    this.slick = document.createElement("script");
    this.slick.src = "/src/js/slick.min.js";

    this.owlCarousel = document.createElement("script");
    this.owlCarousel.src = "/src/js/owl.carousel.min.js";

    this.jqueryMagnifiqPopup = document.createElement("script");
    this.jqueryMagnifiqPopup.src = "/src/js/jquery.magnific-popup.min.js";

    this.smoothScrollbar = document.createElement("script");
    this.smoothScrollbar.src = "/src/js/smooth-scrollbar.js";

    this.apexCharts = document.createElement("script");
    this.apexCharts.src = "/src/js/apexcharts.js";

    this.chartCustom = document.createElement("script");
    this.chartCustom.src = "/src/js/chart-custom.js";

    this.customJs = document.createElement("script");
    this.customJs.src = "/src/js/custom.js";
  }

  ngOnInit() {

  }
}
