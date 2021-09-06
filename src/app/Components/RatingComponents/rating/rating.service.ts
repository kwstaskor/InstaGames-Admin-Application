import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from './rating';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

  private URL = 'https://localhost:44369/api/UserGameRatings';
  constructor(private httpService: HttpClient) { }
  token:string|null = localStorage.getItem('userToken');

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  }
  
  GetUserGameRatings(): Observable<Rating[]>{
    return this.httpService.get<Rating[]>(this.URL,this.httpOptions)
  }

  GetRatingDetails(id: number): Observable<Rating> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Rating>(url, this.httpOptions);
  }
}
