import { Component, OnDestroy, OnInit } from '@angular/core';
import { NEVER, Observable, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  title = ' bookmonkey-client';
  foo: IBook[] = [];
  bar = 'pojpjo';
  searchTerm = '';
  books$: Observable<IBook[]> = NEVER;
  kill = false;

  // sub = new Subscription();

  constructor(private api: BookApiService) {}

  showDetails(data: IBook) {
    console.table(data);
  }

  // setBooks(data: IBook[]) {
  //   this.books = data;
  // }

  ngOnInit(): void {
    this.books$ = this.api.getAllBooks();
    // this.sub.add(this.api.getAllBook().subscribe(this.setBooks.bind(this))); //auch cool ;)

    this.api.books$.pipe(takeWhile(() => !this.kill)).subscribe((data) => {
      console.log('======>', data);
      this.foo = data;
    });
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
    this.kill = true;
  }
}
