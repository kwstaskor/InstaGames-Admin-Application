import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://localhost:44369/api/Account';
  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this.URL);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<User>(url, this.httpOptions);
  }

  editUser() {

  }

  deleteUser(id: string) {
    const url = `${this.URL}?id=${id}`;
    return this.httpService.delete<User>(url, this.httpOptions);
  }
}
