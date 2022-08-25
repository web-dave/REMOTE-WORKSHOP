import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  searchStr = '';
  books: IBook[] = [];
  sub = new Subscription();

  constructor(private service: BookService) {
    // this.books = this.service.getAll();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub.add(
      this.service
        .getAll()
        // .pipe(map((fourBooks) => [fourBooks[0]]))
        .subscribe({ next: (data) => (this.books = data) })
    );
  }

  goToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
