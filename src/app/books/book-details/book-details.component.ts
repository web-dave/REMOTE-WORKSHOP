import { Component, inject, isDevMode, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../book.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  book?: IBook;
  keys: string[] = [];

  book$!: Observable<IBook>;

  sub?: Subscription;

  foo = 'Hallo';

  transform(value: string): string {
    console.log('Methode');
    return String(value)
      .replaceAll('&amp;quot;', '"')
      .replaceAll('&amp;amp;', '&');
  }

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];
    this.book$ = this.service.getOne(isbn);

    this.sub = this.service
      .getOne(isbn)
      .pipe()
      .subscribe((data) => {
        this.keys = Object.values(data);
        this.book = data;
      });
    // setInterval(() => (this.foo = 'Moin'), 1500);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
