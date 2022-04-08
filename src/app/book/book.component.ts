import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/models/book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books: IBook[] = [];

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({ next: (data) => (this.books = data) });
  }

  goToBook(e: IBook) {
    console.table(e);
  }
}
