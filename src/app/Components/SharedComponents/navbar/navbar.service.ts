import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  readonly rootUrl = "https://localhost:44369/api/Account/Claims"
  constructor(private httpService: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
  }

  getUser() {

    var token = "Authorization=Bearer" + localStorage.getItem('userToken');
    
    return this.httpService.get(this.rootUrl, this.httpOptions);
  }

}
