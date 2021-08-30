import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { NamesFormControl } from 'src/app/Components/SharedComponents/input/custom-formControls';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    email: new NamesFormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new NamesFormControl('',[
      Validators.required
    ])
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
  
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: () => { },
      error: err => {
        console.log(err);
      }
    });
  }

}
