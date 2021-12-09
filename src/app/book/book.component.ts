import { Component, OnInit } from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  bookSearchTerm = '';
  books: IBook[] = [];

  constructor(private service: BookApiService) {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }
  pong(e: IBook) {
    console.table(e);
  }
}
