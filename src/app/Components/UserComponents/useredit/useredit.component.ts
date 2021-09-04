import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';
import { Role, User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  userForm = new FormGroup({
    userName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    email: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.email
      ]),
    role: new FormControl('', [
      Validators.required
    ]),
    firstName: new NamesFormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    lastName: new NamesFormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    dateOfBirth: new FormControl('',
      [
        Validators.required,
        Validators.min(1950),
        Validators.max(2100)
      ])
  });

  userId!: string;
  roles!: Role[];

  constructor(private actRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.userId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readRoles();
    this.readUser();
  }

  readRoles() {
    this.userService.getRoles().subscribe((data) => this.roles = data)
  }

  readUser() {
    this.userService.getUser(this.userId).subscribe((data) => {
      this.userForm.controls.userName.setValue(data.UserName);
      this.userForm.controls.email.setValue(data.Email);
      this.userForm.controls.firstName.setValue(data.FirstName);
      this.userForm.controls.lastName.setValue(data.LastName);
      this.userForm.controls.role.setValue(data.RoleId);
      this.userForm.controls.dateOfBirth.setValue(data.DateOfBirth);
    });
  }

  isEdited: boolean = false;
  EditUser() {

    let user = <User>{};

    user.Id = this.userId;
    user.UserName = this.userForm.controls.userName.value;
    user.FirstName = this.userForm.controls.firstName.value;
    user.LastName = this.userForm.controls.lastName.value;
    user.Email = this.userForm.controls.email.value;
    user.Roles = new Array();
    user.Roles.push(<any>{RoleId:this.userForm.controls.role.value,UserId:this.userId})
    user.DateOfBirth = this.userForm.controls.dateOfBirth.value;

    this.userService.editUser(user).subscribe(() => {
      this.isEdited = true;
      setTimeout(() => {
        this.router.navigate(['/Users']);
      }, 1250);

    });
  }
}
