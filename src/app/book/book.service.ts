import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay, tap, shareReplay } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books').pipe(
      map((books) =>
        books.map((data) => {
          data.title = data.title.toUpperCase();
          return data;
        })
      )
      // shareReplay()
    );
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }
  createBook(b: IBook): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:4730/books', b);
  }
}
