import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http';
import { LoadBooks } from './+state/books.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  url = 'http://localhost:4730/books/';

  constructor(private http: HttpClient, private store: Store<{}>) {}
  loadBooks() {
    this.getBooks().subscribe((books) => {
      this.store.dispatch(new LoadBooks(books));
    });
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.url + book.isbn, book);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }
}
