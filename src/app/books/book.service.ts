import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { restroot } from './../api';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);
  private restRoot = 'http://localhost:4730/books';

  getAll(): Observable<any> {
    return this.http.get<any>(this.restRoot);
  }
}
