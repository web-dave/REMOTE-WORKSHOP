import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';

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

  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(this.books).pipe(
      delay(1500),
      map((books) =>
        books.map((data) => {
          data.title = data.title.toUpperCase();
          return data;
        })
      )
    );
  }
}
