import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private URL = 'https://localhost:44369/api/Developer';
  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  getDevelopers(): Observable<Developer[]> {
    return this.httpService.get<Developer[]>(this.URL);
  }

  getDeveloper(id: number): Observable<Developer> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Developer>(url, this.httpOptions);
  }

  createDeveloper(developer: Developer):Observable<Developer> {
    return this.httpService.post<Developer>(this.URL, developer, this.httpOptions);
  }

  editDeveloper() {

  }

  deleteDeveloper(id: number) {
    const url = `${this.URL}?id=${id}`;
    return this.httpService.delete<Developer>(url, this.httpOptions);
  }

}
