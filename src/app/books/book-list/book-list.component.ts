import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'zeiss-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books;
  constructor(private service: BookService) {}
  getKeys(book) {
    return Object.keys(book);
  }
  ngOnInit(): void {
    // this.service.getBooks().subscribe({
    //   next: (data) => (this.books = data),
    //   error: (err) => console.error(err),
    //   complete: () => console.info('Fertitsch'),
    // });
    this.service.getBooks().subscribe(
      (data) => (this.books = data),
      (err) => console.error(err),
      () => console.info('Fertitsch')
    );
  }
}
