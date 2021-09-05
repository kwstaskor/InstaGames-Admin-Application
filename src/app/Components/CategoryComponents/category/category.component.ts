import { Component, Injectable, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

@Injectable()
export class CategoryComponent implements OnInit {

  p: number = 1;
  categories!: Category[];
  Type: any;

  constructor(private actRoute: ActivatedRoute, private CategoryService: CategoryService, private router: Router) {
    this.ReadCategories();
   }

  ngOnInit(): void {
  }

  ReadCategories() {
    this.CategoryService.getCategories().subscribe(data => this.categories = data);
  }

  ViewCategories(category: Category) {
    this.router.navigate(["/CategoryDetails", category.CategoryId]);
  }

  EditCategory(category: Category) {
    this.router.navigate(["/CategoryEdit", category.CategoryId]);
  }

  DeleteCategory(category: Category) {
    this.CategoryService.deleteCategory(category.CategoryId).subscribe((data) => {
      this.DeleteAlert(data.Type);
      this.ReadCategories();
    });
  }

  Search() {
    if (this.Type) {
      this.categories = this.categories.filter(g =>
        g.Type.toUpperCase().includes(this.Type.toUpperCase())
      );
    } else {
      this.ReadCategories();
    }
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  isDeleted: boolean = false;
  deletedCategoryName!:string|null
  DeleteAlert(categoryType:string) {
    this.isDeleted = true;
    this.deletedCategoryName = categoryType;
    setTimeout(() => {
      this.isDeleted = false
      this.deletedCategoryName = null;
    }, 3000);
  }
}
