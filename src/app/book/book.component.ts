import { Component, OnInit } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchStr = '';
  data: IBook[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => (this.data = books));
  }

  navigate(book: IBook) {
    console.table(book);
  }
}
