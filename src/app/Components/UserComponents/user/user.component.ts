import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  p: number = 1;
  isDeleted:boolean = false;
  users!:User[];
  UserName:any;

  constructor(private userService: UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.ReadUsers();
  }

  ReadUsers(){
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  Search(){
    if(this.UserName){
      this.users = this.users.filter(u=>
       u.UserName.toUpperCase().includes(this.UserName.toUpperCase())
      );
    }else{
      this.ReadUsers();
    }
  }

  ViewUsers(user:User){
    this.router.navigate(["/UserDetails", user.Id]);
  }

  key:any;
  reverse:boolean = false;
    sort(key: any){
  this.key = key;
  this.reverse = !this.reverse;
    }

}
