import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'hurz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  $books: Observable<IBook[]>;
  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.$books = this.service.getBooks();
  }
}
