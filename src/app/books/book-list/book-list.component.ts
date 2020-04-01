import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hurz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub = new Subscription();
  constructor(private service: BooksService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub.add(
      this.service.getBooks().subscribe(data => (this.books = data))
    );
    this.sub.add(
      this.service.getBooks().subscribe(data => (this.books = data))
    );
    this.sub.add(
      this.service.getBooks().subscribe(data => (this.books = data))
    );
    this.sub.add(
      this.service.getBooks().subscribe(data => (this.books = data))
    );
    this.sub.add(
      this.service.getBooks().subscribe(data => (this.books = data))
    );
  }
}
