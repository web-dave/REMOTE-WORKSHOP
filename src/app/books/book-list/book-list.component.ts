import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  books: IBook[] = [];
  @Input()
  error = false;

  hi(e: IBook) {
    console.log(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
    //   this.error = Boolean((e.target as HTMLInputElement).value);
  }

  ngOnInit() {
    console.log(this.route);
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
