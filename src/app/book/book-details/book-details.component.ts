import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private api: BookApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Dynamische Parameter
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.api.getBook(params.isbn))
    );

    // Statische Parameter
    this.book$ = this.api.getBook(this.route.snapshot.params.isbn);
  }
}
