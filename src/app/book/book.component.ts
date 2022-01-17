import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  search = '';
  show = true;
  books: IBook[] = [];
  private sub = Subscription.EMPTY;
  constructor(private service: BookApiService) {}

  ngOnInit(): void {
    // Deprecated
    this.service.getBooks().subscribe((data) => {});
    console.log('1');
    this.sub = this.service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        console.log(2);
      },
      complete: () => console.log(3),
    });
  }

  navigateToDetails(data: IBook) {
    console.log('Data:', data);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
