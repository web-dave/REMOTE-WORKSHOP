import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { filter, map, shareReplay } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable()
export class BookApiService {
  private books: IBook[] = [];

  socket = webSocket(
    'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
  );

  books$$ = new BehaviorSubject<IBook[]>([]);
  books$ = this.books$$.asObservable();
  constructor(private http: HttpClient) {
    this.books$$.next(this.books);
    this.books$$.next([]);
    this.books$$.next([this.books[0]]);
    setInterval(() => this.books$$.next([]), 1600);

    this.socket
      .pipe(filter((data: any) => data.hurz === 'Wolf'))
      .subscribe((data) => console.log('socket', data));
  }

  getAllBooks(): Observable<IBook[]> {
    this.socket.next({ message: 'Moin L & R' });
    return this.http
      .get<IBook[]>('http://localhost:4730/books')
      .pipe(shareReplay());
    // return of(this.books).pipe(delay(1500));
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }

  checkIsbn(isbn: string): Observable<boolean> {
    return this.getAllBooks().pipe(
      map((books: IBook[]) => books.map((book) => book?.isbn)),
      map((isbnse: string[]) => !isbnse.includes(isbn))
    );
  }

  get2ndBook() {
    this.getAllBooks().pipe();
  }
}
