import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'https://demo.limantech.com/cards/public/api/';
  constructor(
    private http: HttpClient
  ) { }

  getCards():Observable<Card[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    return this.http.get<Card[]>(this.apiUrl+ 'cards', { headers });
  }

  addCard(card: Card):Observable<Card> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    return this.http.post<Card>(this.apiUrl+ 'cards', card, { headers });
  }

  updateCard(card: Card, cardId: number):Observable<Card> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    return this.http.put<Card>(this.apiUrl+ 'cards/' + cardId, card, { headers });
  }

  deleteCard(cardId: number):Observable<Card> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    return this.http.delete<Card>(this.apiUrl+ 'cards/' + cardId, { headers });
  }
  
}
