import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { NEVER, Observable, Subscription } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  searchStr = '';
  data: IBook[] = [];
  sub = new Subscription();
  constructor(private bookService: BookService) {}

  navigate(book: IBook) {
    console.table(book);
  }
  ngOnInit(): void {
    this.sub.add(
      this.bookService.getBooks().subscribe((books) => (this.data = books))
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
