import {
  AfterViewChecked,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NEVER, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchStr = '';
  books$: Observable<IBook[]> = NEVER;
  constructor(private bookService: BookService) {}

  navigate(book: IBook) {
    console.table(book);
  }
  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
}
