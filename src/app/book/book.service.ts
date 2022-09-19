import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
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

  bookComponentBooks = this.getBooksSynchron();
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
    // return of(this.books);
  }
  public getBooksSynchron(): IBook[] {
    return this.books;
  }
}
