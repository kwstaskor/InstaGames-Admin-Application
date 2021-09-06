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
  token:string|null = localStorage.getItem('userToken');

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  }
  
  getCategories(): Observable<Category[]> {
    return this.httpService.get<Category[]>(this.URL,this.httpOptions);
  }
  
  getCategory(id:number):Observable<Category>{
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Category>(url,this.httpOptions);
  }

  createCategory(category:Category){
    return this.httpService.post<Category>(this.URL,category,this.httpOptions)
  }

  deleteCategory(id: number) {
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Category>(url, this.httpOptions)
  }
  
  updateCategory(category:Category):Observable<Category>{
    const url = `${this.URL}/${category.CategoryId}`;
    return this.httpService.put<Category>(url , category, this.httpOptions);
  }
  

}
