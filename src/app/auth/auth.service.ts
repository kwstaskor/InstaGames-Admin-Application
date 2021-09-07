import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly rootUrl = "https://localhost:44369";
  readonly Url = "https://localhost:44369/api/Account/Claims"
  signedin!: boolean;

  constructor(private http: HttpClient) { }

  userAuthentication(userName: string, password: string) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader }).pipe(tap(() => {
      this.signedin = true;
    }));
  }

  getUser(token:string|null) {
   let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }
    return this.http.get(this.Url, httpOptions);
  }
}
