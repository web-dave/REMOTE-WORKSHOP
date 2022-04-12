import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books$: Observable<IBook[]> = NEVER;

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  goToBook(e: IBook) {
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
