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

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  GetUserGameRatings(): Observable<Rating[]>{
    return this.httpService.get<Rating[]>(this.URL)
  }

  GetRatingDetails(id: number): Observable<Rating> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Rating>(url, this.httpOptions);
  }
}
