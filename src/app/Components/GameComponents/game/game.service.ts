import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Pegi } from './game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private URL = 'https://localhost:44369/api/Game';
  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.URL);
  }

  getPegi(): Observable<Pegi[]> {
    const pegiUrl = 'https://localhost:44369/api/Pegi';
    return this.httpService.get<Pegi[]>(pegiUrl);
  }

  getGame(id: number): Observable<Game> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Game>(url, this.httpOptions);
  }

  createGame(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.URL, game, this.httpOptions);
  }

  updateGame(game: Game): Observable<Game> {
    const url = `${this.URL}/${game.GameId}`;
    return this.httpService.put<Game>(url, game, this.httpOptions);
  }

  deleteGame(id: number) {
    const url = `${this.URL}?id=${id}`;
    return this.httpService.delete<Game>(url, this.httpOptions);
  }

}


