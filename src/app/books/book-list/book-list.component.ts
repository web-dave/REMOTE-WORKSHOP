import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book';

@Component({
  selector: 'hurz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }
}
