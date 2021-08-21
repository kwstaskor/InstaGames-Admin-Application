import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  categoryId!: number;
  category!: Category;

  constructor(private actRoute: ActivatedRoute, private CategoryService: CategoryService) {
    this.categoryId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readCategory();
  }

  readCategory() {
    this.CategoryService.getCategory(this.categoryId).subscribe(data => this.category = data);
  }

}
