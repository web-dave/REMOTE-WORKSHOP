import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';
import { map, takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy, AfterViewChecked {
  bookSearchTerm = '';
  foo = 'Hans';
  books: IBook[] = [];
  private sub = Subscription.EMPTY;
  $kill = new EventEmitter();

  constructor(
    private service: BookApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.service
      .getBooks()
      .pipe(
        map((book) => {
          book[0].title += ' 🦄';
          return book;
        })
      )
      .subscribe((data) => (this.books = data));
    this.service
      .getBooks()
      .pipe(takeUntil(this.$kill))
      .subscribe((data) => (this.books = data));
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.$kill.emit();
  }
  ngAfterViewChecked(): void {
    this.foo = 'Grete';
    this.cdr.detectChanges();
  }
  pong(e: IBook) {
    console.table(e);
  }
}
