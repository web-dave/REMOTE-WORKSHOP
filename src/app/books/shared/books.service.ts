import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
    //.pipe(map((arr) => arr.map((book) => book.title)));
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + isbn);
    //.pipe(map((arr) => arr.map((book) => book.title)));
  }
}
