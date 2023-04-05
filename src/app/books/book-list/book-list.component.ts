import { Component, inject, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  private service = inject(BookService);

  ngOnInit(): void {
    const foo$ = this.service.getBooks();

    foo$.subscribe((data) => (this.books = data));
    foo$.subscribe((data) => (this.books = data));
    foo$.subscribe((data) => (this.books = data));
    foo$.subscribe((data) => (this.books = data));
    foo$.subscribe((data) => (this.books = data));
  }

  goToBook(b: IBook) {
    console.log(b);
  }
}
