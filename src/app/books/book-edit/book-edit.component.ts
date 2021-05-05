import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { first, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book!: IBook;
  book$: Observable<IBook>;
  end$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((data) => this.service.getBook(data.isbn))
    );
    this.book$
      .pipe(takeUntil(this.end$))
      .subscribe((data) => (this.book = data));
  }
  saveBook(b = this.book) {
    console.log(b);
    this.service
      .updateBook(b)
      .pipe(takeUntil(this.end$))
      .subscribe((data) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }
  ngOnDestroy() {
    this.end$.next();
  }
}
