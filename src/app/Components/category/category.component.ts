import { Component, Injectable, OnInit } from '@angular/core';
import { Game, Category } from './category';
import { CategoryService } from './category.service';

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
    this.CategoryService.createCategory({ Type, Description } as Category).subscribe(() => this.ReadCategories());
  }

  DeleteCategory(id: number) {
    this.CategoryService.deleteCategory(id).subscribe(() => this.ReadCategories())
  }

  UpdateCategory(category: Category) {
    this.CategoryService.updateCategory(category).subscribe(() => this.ReadCategories())
  }

  ReadCategory(category: Category) {
    this.CategoryService.readCategory(category).subscribe(() => this.ReadCategories())
  }
  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.ReadCategories();
  }
}
