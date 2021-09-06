import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NamesFormControl } from 'src/app/Components/SharedComponents/input/custom-formControls';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Components/UserComponents/user/user.service';
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


  onSubmit(userName: any, password: any) {
    this.authService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.authService.getUser().subscribe((user:any) => {
        if (user.Role == "Admin") {
          console.log(user.Role);
          this.router.navigate(['/Dashboard']);
        }
      })
    }, (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}

