import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: IBook | undefined;
  book$: Observable<IBook> = NEVER;
  kill = false;
  constructor(private api: BookApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Dynamische Parameter
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.api.getBook(params.isbn)),
      takeWhile(() => !this.kill)
    );

    this.book$.subscribe((data) => (this.book = data));
  }
  ngOnDestroy(): void {
    this.kill = true;
  }
}
