import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { restroot } from './../api';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);
  private restRoot = 'http://localhost:4730/books';

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.restRoot);
  }

  getOne(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.restRoot + '/' + isbn);
  }
}
