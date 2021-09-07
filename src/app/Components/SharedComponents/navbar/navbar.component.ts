import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userPhoto!: string;

  constructor(private router: Router, private authService: AuthService) { }
  user!: any;

  ngOnInit(): void {
    if (localStorage.getItem('userToken')) {
      let token = localStorage.getItem('userToken');
      this.GetUser(token);
    }
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.user = null;
    this.router.navigate(['signin'])
      .then(() => {
        window.location.reload();
      });
  }

  GetUser(token: string | null) {
    this.authService.getUser(token).subscribe(data => this.user = data);
  }
}
