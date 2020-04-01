import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: IBook[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software'
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web'
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming'
    }
  ];
  constructor() {}
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
}
