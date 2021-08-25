import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private URL = 'https://localhost:44369/api/Message';
  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  getMessages(): Observable<Message[]> {
    return this.httpService.get<Message[]>(this.URL);
  }

  getMessage(id: number): Observable<Message> {
    const url = `${this.URL}/${id}`;
    return this.httpService.get<Message>(url, this.httpOptions);
  }

  editMessage(message:Message):Observable<Message> {
    const url = `${this.URL}/${message.MessageId}`;
    return this.httpService.put<Message>(url,message,this.httpOptions);
  }

  deleteMessage(id: number) {
    const url = `${this.URL}?id=${id}`;
    return this.httpService.delete<Message>(url, this.httpOptions);
  }

}
