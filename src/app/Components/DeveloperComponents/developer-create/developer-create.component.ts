import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  developerForm = new FormGroup({
    firstName: new NamesFormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    lastName!: new NamesFormControl('',
      [
        Validators.required, Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    isInstagameDev!: new FormControl('')
  });

  constructor(private router: Router, private developerService: DeveloperService) { }

  ngOnInit(): void {
  }

  isCreated: boolean = true
  saveDeveloper(): void {

    let developer = <Developer>{};
    developer.FirstName = this.developerForm.controls.firstName.value;
    developer.LastName = this.developerForm.controls.lastName.value;

     if(this.developerForm.controls.isInstagameDev.value){
      developer.IsInstaGamesDev =  this.developerForm.controls.isInstagameDev.value;
     }else{
       developer.IsInstaGamesDev = false;
     }
     
    this.developerService.createDeveloper(developer).subscribe(()=>{
      this.router.navigate(['/Developers',this.isCreated]);
    });

  }

}
