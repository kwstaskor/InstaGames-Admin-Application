import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  isLoginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  isUser: boolean = false;
  userId!: string;
  token!:string
  onSubmit(userName: any, password: any) {
    this.authService.userAuthentication(userName, password).subscribe((data: any) => {
      this.token = data.access_token;
      if(this.token){
        this.authService.getUser(this.token).subscribe((user:any) => {
          if (user.Role == "Admin") {
            localStorage.setItem('userToken', this.token);
            this.router.navigate(['/Dashboard'])
            .then(() => {
              window.location.reload();
            });
          }
        });
      }
    }, (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}