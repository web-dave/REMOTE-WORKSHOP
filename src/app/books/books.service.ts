import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'http://localhost:4730/books/';

  constructor(private http: HttpClient) {}
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.url + book.isbn, book);
  }
}
