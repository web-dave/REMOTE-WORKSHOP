import { Component, inject, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookService = inject(BookService);

  books: any = [];
  @Input()
  error = false;

  hi(e: any) {
    console.log(e);
    //   this.error = Boolean((e.target as HTMLInputElement).value);
  }

  ngOnInit() {
    const foo = {
      value: 'bar',
    };
    foo.value;
    const key = 'value';
    foo[key];
    // Only next signal
    // this.bookService.getAll().subscribe((data) => (this.books = data));

    this.bookService.getAll().subscribe({
      next: (data) => (this.books = data),
      error: (err) => {
        console.error(err);
        this.error = true;
      },
      complete: () => console.info('DONE!!'),
    });
  }
}
