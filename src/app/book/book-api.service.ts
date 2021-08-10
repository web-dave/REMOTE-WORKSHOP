import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private books: IBook[] = [
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      isbn: '',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'In this book ...',
      isbn: '879-9879-654-654-5',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
      isbn: '',
    },
  ];
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }
}
