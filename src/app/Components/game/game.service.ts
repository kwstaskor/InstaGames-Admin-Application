import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GameService {

private URL = 'https://localhost:44369/api/game';
  constructor(private httpService:HttpClient) { }

  getGames():Observable<Game[]>{
    return this.httpService.get<Game[]>(this.URL);
    }
}


