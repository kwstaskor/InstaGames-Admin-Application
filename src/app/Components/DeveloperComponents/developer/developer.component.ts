import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {
  p: number = 1;
  developers!: Developer[];
  FirstName: any;


  constructor(private DeveloperService: DeveloperService, private router: Router) {
  }

  ngOnInit(): void {
    this.ReadDevelopers();
  }

  ReadDevelopers() {
    this.DeveloperService.getDevelopers().subscribe((data) => this.developers = data);
  }

  ViewDevs(developer: Developer) {
    this.router.navigate(["/DeveloperDetails", developer.DeveloperId]);
  }

  EditDevs(developer: Developer) {
    this.router.navigate(["/DeveloperEdit", developer.DeveloperId]);
  }

  isDeleted: boolean = false;
  deletedDevName: string|null = null
  DeleteDev(developer: Developer) {
    this.DeveloperService.deleteDeveloper(developer.DeveloperId).subscribe((data) => {
      this.DeleteAlert(data);
      this.ReadDevelopers();
    },
      (error) => console.log(error));
  }

  Search() {
    if (this.FirstName) {
      this.developers = this.developers.filter(d =>
        d.FirstName.toUpperCase().includes(this.FirstName.toUpperCase())
      );
    } else {
      this.ReadDevelopers();
    }
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  DeleteAlert(data:any) {
    this.isDeleted = true;
    this.deletedDevName =  `${data.FirstName} ${data.LastName}`;
    setTimeout(() => {
      this.isDeleted = false
    }, 3000);
  }
}