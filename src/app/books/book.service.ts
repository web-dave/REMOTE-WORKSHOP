import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getBooks(): Observable<any> {
    return this.http
      .get<any>('http://localhost:4730/books')
      .pipe(shareReplay(1));
  }
}
