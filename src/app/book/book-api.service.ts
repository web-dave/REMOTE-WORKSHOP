import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
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

  books$$ = new BehaviorSubject<IBook[]>([]);
  books$ = this.books$$.asObservable();
  constructor(private http: HttpClient) {
    this.books$$.next(this.books);
    this.books$$.next([]);
    this.books$$.next([this.books[0]]);
    setInterval(() => this.books$$.next([]), 1600);
  }

  getAllBooks(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>('http://localhost:4730/books')
      .pipe(shareReplay());
    // return of(this.books).pipe(delay(1500));
  }

  get2ndBook() {
    this.getAllBooks().pipe();
  }
}