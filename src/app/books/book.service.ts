import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { filter, Observable } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private root = 'http://localhost:4730/books';
  private http = inject(HttpClient);

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root).pipe();
    // filter(
    //   (books) => books.filter((book) => book.author)
    // )
  }
  getBook(isbn: string) {
    return this.http.get<IBook>(this.root + '/' + isbn);
  }
}
