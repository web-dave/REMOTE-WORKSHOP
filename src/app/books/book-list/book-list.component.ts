import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { IBooksFeature } from '../redux/books.reducer';
import { getBooksSelector } from '../redux/books.selectors';
import { IBook } from '../shared/book.interface';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'ng-sw-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  mySub;
  parentsub = new Subscription();
  end$ = new Subject();

  oneBook = {
    title: 'Design Patterns',
    subtitle: 'Elements of Reusable Object-Oriented Software',
    isbn: '978-0-20163-361-0',
    abstract:
      'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
    numPages: 395,
    author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    publisher: {
      name: 'Addison-Wesley',
      url: 'http://www.addison-wesley.de/',
    },
    cover: 'http://localhost:4730/covers/978-0-20163-361-0.jpg',
  };

  books$: Observable<IBook[]>;
  constructor(
    private service: BooksService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IBooksFeature>
  ) {}

  ngOnInit(): void {
    this.books$ = this.store.select(getBooksSelector);
    // this.books$ = this.service.getBooks();
    // Manuel;
    this.mySub = this.service
      .getBooks()
      .pipe()
      .subscribe((data) => (this.books = data));
    // Halb Automatisch
    this.parentsub.add(
      this.service.getBooks().subscribe((data) => (this.books = data))
    );

    // 3/4 Automatisch
    this.service
      .getBooks()
      .pipe(takeUntil(this.end$))
      .subscribe((data) => (this.books = data));

    setInterval(() => {
      // this.oneBook = { ...this.oneBook };
      this.oneBook.numPages++;
      this.cdr.detectChanges();
    }, 1500);
  }

  bookWasSelected(b: IBook) {
    console.log(b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
    this.parentsub.unsubscribe();
    this.end$.next();
    this.end$.complete();
  }
}
