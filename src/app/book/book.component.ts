import {
  AfterViewChecked,
  Component,
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
})
export class BookComponent implements OnInit {
  searchStr = '';
  books$: Observable<IBook[]> = NEVER;
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigate(book: IBook) {
    this.router.navigate(['details', book.isbn], {
      relativeTo: this.route,
    });
  }
  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
}
