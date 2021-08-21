import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private URL = 'https://localhost:44369/api/game';
  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.URL);
  }

  getGame(id:number):Observable<Game>{
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Game>(url, this.httpOptions);
  }

  createGame(game: Game) {

  }

  editGame() {

  }

  deleteGame(id: number) {
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Game>(url, this.httpOptions);
  }

}


