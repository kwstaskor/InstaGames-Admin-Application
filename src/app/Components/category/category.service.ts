import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Game } from './category';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private URL = 'https://localhost:44369/api/category';
  constructor(private httpService: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpService.get<Category[]>(this.URL);
  }

  httpOptions = {
    headers:new HttpHeaders({'content-Type': 'application/json'})
  }

  createCategory(category:Category){
    return this.httpService.post<Category>(this.URL,category, this.httpOptions)
  }

  deleteCategory(id: number) {
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Category>(url, this.httpOptions)
  }
  
  updateCategory(category:Category){
    const url = `${this.URL}/${category.id}`;
    return this.httpService.put(this.URL, category, this.httpOptions);
  }
  
  readCategory(category:Category){
    const url = `${this.URL}/${category.id}`;
    return this.httpService.post(this.URL, category, this.httpOptions);
  }
}
