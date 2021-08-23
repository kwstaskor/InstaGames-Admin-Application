import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  firstName!:string;
  lastName!:string;
  isInstagameDev!:boolean;

  developer!:Developer;

  constructor(private router:Router, private developerService: DeveloperService) { }

  ngOnInit(): void {
  }

  saveDeveloper():void{
    let developer = <Developer>{};
    developer.FirstName = this.firstName;
    developer.LastName = this.lastName;
    developer.IsInstaGamesDev = this.isInstagameDev;

    this.developerService.createDeveloper(developer).subscribe(()=>{
      this.router.navigate(['/Developers']);
    });
  }

}
