import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
    {
      title: 'Moby Click',
      author: 'Hurz',
      abstract: 'Click, puff, paff...',
    },
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    // return of(this.books);
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }
}
