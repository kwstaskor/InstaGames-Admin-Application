import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})

export class CategoryCreateComponent implements OnInit {
  categoryForm = new FormGroup({
    type: new NamesFormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    description!: new NamesFormControl('',
      [
        Validators.required, Validators.minLength(2),
        Validators.maxLength(10000),
      ])
  });

  category!: Category;
  constructor(private router: Router, private CategoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  isCreated: boolean = false;
  createdCategoryName:string|null = null
  saveCategory(): void {
    let category = <Category>{}
    category.Type = this.categoryForm.controls.type.value;
    category.Description = this.categoryForm.controls.description.value;

    this.CategoryService.createCategory(category).subscribe((data) => {
      this.isCreated = true;
      this.createdCategoryName = data.Type
      setTimeout(() => {
        this.router.navigate(["/Categories"]);
      }, 1250);
    });
  }
}

