import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book!: IBook;
  book$!: Observable<IBook>;
  end$ = new EventEmitter<void>();
  // window.onbeforeunload = function() {
  //      return 'Möchten Sie die Seite wirklich verlassen?';
  //   };
  constructor(private route: ActivatedRoute, private service: BookApiService) {}

  ngOnInit(): void {
    // this.service
    //   .getBook(this.route.snapshot.paramMap.get('isbn') as string)
    //   .pipe(takeUntil(this.end$))
    //   .subscribe((data) => (this.book = data));

    this.book$ = this.route.paramMap.pipe(
      switchMap((paramsAsMap) =>
        this.service.getBook(paramsAsMap.get('isbn') as string)
      ),
      tap((data) => (this.book = data))
    );
  }
  ngOnDestroy() {
    this.end$.next();
  }
}
