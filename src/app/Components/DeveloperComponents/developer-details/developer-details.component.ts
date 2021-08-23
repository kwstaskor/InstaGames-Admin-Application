import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {

  developerId!: number;
  developer!: Developer;

  constructor(private actRoute: ActivatedRoute, private DeveloperService: DeveloperService) {
    this.developerId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readDev();
  }

  readDev() {
    this.DeveloperService.getDeveloper(this.developerId).subscribe(data => this.developer = data);
  }
}
