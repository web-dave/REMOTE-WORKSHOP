import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { IBook } from '../shared/book.interface';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'ng-sw-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  mySub;
  parentsub = new Subscription();
  end$ = new Subject();

  books$: Observable<IBook[]>;
  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
    // Manuel
    this.mySub = this.service
      .getBooks()
      .pipe()
      .subscribe((data) => (this.books = data));
    // Halb Automatisch
    this.parentsub.add(
      this.service.getBooks().subscribe((data) => (this.books = data))
    );

    // 3/4 Automatisch
    this.service
      .getBooks()
      .pipe(takeUntil(this.end$))
      .subscribe((data) => (this.books = data));
  }

  bookWasSelected(b) {
    console.log(b);
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
    this.parentsub.unsubscribe();
    this.end$.next();
    this.end$.complete();
  }
}
