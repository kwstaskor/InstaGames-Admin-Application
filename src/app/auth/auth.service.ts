import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SigninCredentials{
  Email:string;
  Password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://localhost:44369/api/Account';
  constructor(private http: HttpClient) { }

  signin(credentials: SigninCredentials ){
    const url = `${this.URL}`
    return this.http.get(url)
  }
}
