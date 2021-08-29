import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Role } from './user';

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

  getRoles(): Observable<Role[]>{
    const url = 'https://localhost:44369/api/Account/GetRoles';
    return this.httpService.get<Role[]>(url, this.httpOptions);
  }

  editUser(user:User):Observable<User> {
    const url = `${this.URL}/${user.Id}`;
    return this.httpService.put<User>(url, user, this.httpOptions);
  }

  deleteUser(id: string) {
    const url = `${this.URL}?id=${id}`;
    return this.httpService.delete<User>(url, this.httpOptions);
  }
}
