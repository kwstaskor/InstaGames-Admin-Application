import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'InstaGames';
  signedin = false;
 
  constructor() {
   if(localStorage.getItem('userToken') != null){
    this.signedin = true;
   } 
  }

  ngOnInit() {
  }
}
