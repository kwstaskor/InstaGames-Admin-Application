import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RiCheckLine } from 'angular-remix-icon';


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


  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
  }

  getUser() {

    let Url = "https://localhost:44369/api/Account/Claims";
    let token = "Authorization=Bearer" + localStorage.getItem('userToken');
    
    return this.http.get(Url, this.httpOptions);
  }


}
