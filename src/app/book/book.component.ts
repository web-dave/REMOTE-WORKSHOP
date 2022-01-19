import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  books$: Observable<IBook[]> = NEVER;
  sub = Subscription.EMPTY;

  constructor(
    private service: BookApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
    this.sub = this.service
      .getBook('1001606140805')
      .subscribe((data) => console.table(data));
  }

  navigateToDetails(data: IBook) {
    console.log('Data: ', data);
    this.router.navigate(['details', data.isbn], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
