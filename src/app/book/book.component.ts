import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  books: IBook[] = [];
  sub: Subscription = Subscription.EMPTY;
  constructor(private service: BookService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    // this.service.getBooks().subscribe((data) => (this.books = data));
    this.sub = this.service.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (err) => {
        this.books = [];
      },
    });
    // setInterval(() => {
    //   this.searchTerm = 'why';
    //   console.log('ping');
    // }, 1500);
  }
  navigateToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
  }
}
