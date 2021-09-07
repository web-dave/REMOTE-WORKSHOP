import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>('http://localhost:4730/books')
      .pipe(tap(console.log));
  }

  getBook(isbn: string | null): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(
      'http://localhost:4730/books/' + book.isbn,
      book
    );
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:4730/books/', book);
  }
}
