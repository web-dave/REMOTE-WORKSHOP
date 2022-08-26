import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }
}
