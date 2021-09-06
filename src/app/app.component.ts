import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'InstaGames';
  signedin = false;
  
  public loggedin = new EventEmitter();

  constructor(private authService: AuthService) {
    this.authService.signedin = this.signedin;
  }

  ngOnInit() {
  }
}
