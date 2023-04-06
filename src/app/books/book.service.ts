import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }

  updateBook(b: IBook): Observable<IBook> {
    return this.http.put<IBook>('http://localhost:4730/books/' + b.isbn, b);
  }

  createBook(b: any): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:4730/books/', b);
  }
}
