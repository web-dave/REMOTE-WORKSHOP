import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private root = 'http://localhost:4730/books';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<any[]>(this.root).pipe();
    // filter(
    //   (books) => books.filter((book) => book.author)
    // )
  }
}
