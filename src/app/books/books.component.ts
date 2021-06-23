import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initBookList } from './redux/books.action';
import { IBook } from './shared/book.interface';

@Component({
  selector: 'ng-sw-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initBookList());
  }
}
