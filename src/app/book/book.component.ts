import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, DoCheck {
  searchStr = '';
  foo = '';
  books$: Observable<IBook[]> = NEVER;
  books: IBook[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  // ngAfterViewChecked(): void {
  //   this.foo += '!';
  //   this.cdr.detectChanges();
  // }

  navigate(book: IBook) {
    this.router.navigate(['details', book.isbn], {
      relativeTo: this.route,
    });
  }
  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
    this.books$.subscribe((data) => {
      this.books = data;
      this.cdr.detectChanges();
    });

    setInterval(() => {
      const b: IBook = {
        ...this.books[0],
        numPages: this.books[0].numPages + 1,
      };

      this.books[0] = b;
      console.log(this.books[0].numPages);
      this.cdr.markForCheck();
    }, 2000);
  }

  ngDoCheck() {
    console.log('Check mate!');
  }
}
