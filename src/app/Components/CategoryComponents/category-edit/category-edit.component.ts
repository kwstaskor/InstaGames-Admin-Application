import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryId!: number;

  categoryEdit = new FormGroup({
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

  constructor(private router: Router, private CategoryService: CategoryService, private actRoute: ActivatedRoute) {
    this.categoryId = this.actRoute.snapshot.params['id'];
    this.readCategory();
  }

  ngOnInit(): void {
  }

  readCategory() {
    this.CategoryService.getCategory(this.categoryId).subscribe(data => {
      this.categoryEdit.controls.type.setValue(data.Type)
      this.categoryEdit.controls.description.setValue(data.Description)
    });
  }

  isEdited: boolean = false;
  editedCategoryName: string|null = null;
  editCategory(): void {

    let category = <Category>{}
    category.CategoryId = this.categoryId;
    category.Type = this.categoryEdit.controls.type.value;
    category.Description = this.categoryEdit.controls.description.value;

    this.CategoryService.updateCategory(category).subscribe((data) => {
      this.isEdited = true;
      this.editedCategoryName = data.Type;
      setTimeout(() => {
        this.router.navigate(["/Categories"]);
      }, 1250);
    });
  }
}
