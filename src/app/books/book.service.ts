import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { filter, map, Observable } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private root = 'http://localhost:4730/books';
  private http = inject(HttpClient);

  getAll(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>(this.root)
      .pipe(map((books) => books.filter((book) => book.author)));
  }
  getBook(isbn: string) {
    return this.http.get<IBook>(this.root + '/' + isbn);
  }

  updateBook(book: IBook): Observable<IBook> {
    const url = `${this.root}/${book.isbn}`;
    return this.http.put<IBook>(url, book);
  }

  createBook(book: IBook) {
    return this.http.post<IBook>(this.root, book);
  }

  getBookKeys() {
    return {
      title: '',
      subtitle: '',
      isbn: '',
      abstract: '',
      numPages: 0,
      author: '',
      publisher: '',
      price: '',
      cover: '',
    };
  }
}
