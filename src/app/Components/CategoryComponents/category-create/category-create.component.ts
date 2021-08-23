import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})

export class CategoryCreateComponent implements OnInit {

  type!: string;
  description!: string;
  isSubmitted = false;
  category!: Category;

  constructor(private router: Router, private CategoryService: CategoryService, private fb: FormBuilder) {

  }

  form = new FormGroup({
    type: new FormControl('', [Validators.required, Validators.minLength(3)])
  });


  submit() {
    console.log(this.form.valid);

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  ngOnInit(): void {
    this.saveCategory();
  }

  saveCategory(): void {

    this.isSubmitted = true;
    let category = <Category>{}
    category.Type = this.type
    category.Description = this.description;

    this.CategoryService.createCategory(category).subscribe(() => {

      this.router.navigate(["/Categories"]);

    });

  }
}
  
