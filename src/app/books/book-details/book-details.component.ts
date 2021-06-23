import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getBookSelector } from '../redux/books.selectors';
import { IBook } from '../shared/book.interface';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'ng-sw-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  book$: Observable<IBook>;
  text = 'Guten abend!';
  constructor(
    private route: ActivatedRoute,
    private service: BooksService,
    private store: Store
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.text = 'Tach! (Hummel Hummel)';
    }, 1500);

    // this.route.params.subscribe((params: { isbn: string }) =>
    //   this.service.getBook(params.isbn).subscribe((data) => (this.book = data))
    // );

    // this.book$ = this.service.getBook(this.route.snapshot.params.isbn);

    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) =>
        this.store.select(getBookSelector(params.isbn))
      )
    );
  }

  add(a: number, b: number) {
    return a + b;
  }

  format(value: string): string {
    console.log('format ==>', value);
    return value.toUpperCase() + '🤳';
  }
}
