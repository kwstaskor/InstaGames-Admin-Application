import { Component, Injectable, OnInit } from '@angular/core';
import { Game, Category } from './category';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

@Injectable()
export class CategoryComponent implements OnInit {

  p: number = 1;
  isDeleted: boolean = false;
  categories!: Category[];
  Type: any;
  isCreated: boolean = false;


  ReadCategories() {
    this.CategoryService.getCategories().subscribe(data => this.categories = data);
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

  CreateCategory(Type: string, Description: string) {
    this.CategoryService.createCategory({ Type, Description } as Category).subscribe(() => {
      this.isCreated = true;
      setTimeout(() => {
        this.isCreated = false
      }, 3000);
      this.ReadCategories();
    });
  }

  DeleteCategory(category: Category) {
    this.CategoryService.deleteCategory(category.CategoryId).subscribe(() => {
      this.isDeleted = true;
      setTimeout(() => {
        this.isDeleted = false
      }, 3000);
      this.ReadCategories();
    });
  }

  UpdateCategory(category: Category) {
    this.CategoryService.updateCategory(category).subscribe(() => this.ReadCategories())
  }

  ReadCategory(id: number) {
    this.CategoryService.getCategory(id).subscribe(() => this.ReadCategories())
  }

  ViewCategories(category: Category) {
    this.router.navigate(["/CategoryDetails", category.CategoryId]);
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private CategoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.ReadCategories();
  }
}
