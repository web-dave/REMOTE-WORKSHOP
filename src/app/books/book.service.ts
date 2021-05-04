import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './ibook.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  name = 'Hildegard';
  private restRoot = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.restRoot);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.restRoot + '/' + isbn);
  }
}
