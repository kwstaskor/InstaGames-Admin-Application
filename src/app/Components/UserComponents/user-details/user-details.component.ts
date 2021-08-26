import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  Id!: string;
  user!: User;

  constructor(private actRoute: ActivatedRoute, private UserService: UserService) { 
    this.Id = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readUser();
  }

  readUser(){
    this.UserService.getUser(this.Id).subscribe(data => this.user = data);
  }
}
