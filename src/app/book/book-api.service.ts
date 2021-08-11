import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, share } from 'rxjs/operators';

import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books').pipe(share());
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http
      .get<IBook>('http://localhost:4730/books/' + isbn)
      .pipe(first());
  }
}
