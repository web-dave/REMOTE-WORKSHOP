import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  searchTerm = '';
  books: IBook[] = [];
  tm: any;
  sub = new Subscription();
  kill$ = new EventEmitter();

  constructor(private service: BookService) {}
  ngOnDestroy(): void {
    clearTimeout(this.tm);
    this.sub.unsubscribe();
    this.kill$.emit();
  }

  ngOnInit(): void {
    this.tm = setTimeout(() => console.log('ölkydjösdaj'), 2000);
    this.sub.add(
      this.service.getBooks().subscribe({ next: (data) => (this.books = data) })
    );

    this.service
      .getBooks()
      .pipe(takeUntil(this.kill$))
      .subscribe({ next: (data) => (this.books = data) });
  }

  goToBook(e: IBook) {
    console.table(e);
  }
}
