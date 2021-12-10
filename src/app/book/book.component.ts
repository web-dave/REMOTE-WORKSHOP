import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';
import { NEVER, Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, AfterViewChecked {
  bookSearchTerm = '';
  foo = 'Hans';
  books$: Observable<IBook[]> = NEVER;

  constructor(
    private service: BookApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  ngAfterViewChecked(): void {
    this.foo = 'Grete';
    this.cdr.detectChanges();
  }
  pong(e: IBook) {
    console.table(e);
  }
}
