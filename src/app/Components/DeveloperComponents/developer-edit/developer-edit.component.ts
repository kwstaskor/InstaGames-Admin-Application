import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {

  developerId!: number;
  
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

  constructor(private actRoute: ActivatedRoute, private router: Router, private developerService: DeveloperService) {
    this.developerId = this.actRoute.snapshot.params['id'];
    this.readDeveloper();
  }

  ngOnInit(): void {
  }

  readDeveloper() {
    this.developerService.getDeveloper(this.developerId).subscribe((data) =>{
     this.developerForm.controls.firstName.setValue(data.FirstName);
     this.developerForm.controls.lastName.setValue(data.LastName);
     this.developerForm.controls.isInstagameDev.setValue(data.IsInstaGamesDev);
    });
  }

  isEdited: boolean = false;
  editDeveloper() {

    let developer = <Developer>{};

    developer.DeveloperId = this.developerId;
    developer.FirstName = this.developerForm.controls.firstName.value;
    developer.LastName = this.developerForm.controls.lastName.value;

    if (this.developerForm.controls.isInstagameDev.value) {
      developer.IsInstaGamesDev = this.developerForm.controls.isInstagameDev.value;
    } else {
      developer.IsInstaGamesDev = false;
    }

    this.developerService.editDeveloper(developer).subscribe(() => {
      this.isEdited = true;
      setTimeout(() => {
        this.router.navigate(['/Developers']);
      }, 1250);

    });
  }
}
