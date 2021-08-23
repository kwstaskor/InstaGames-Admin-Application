import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})

export class CategoryCreateComponent implements OnInit {

  
  submitted = false;
  type!:string;
  description!:string;

  category! :Category;

  constructor(private actRoute:ActivatedRoute, private categoryService: CategoryService) { 
    
  }



  ngOnInit(): void {
    this.saveCategory();
  }
  
  saveCategory():void{
    this.categoryService.createCategory(this.category);
    // this.actRoute.navigate(['/Category'])
  }

}
