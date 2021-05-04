import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub = new Subscription();
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  getKeys(book) {
    return Object.keys(book);
  }
  ngOnInit(): void {
    // this.service.getBooks().subscribe({
    //   next: (data) => (this.books = data),
    //   error: (err) => console.error(err),
    //   complete: () => console.info('Fertitsch'),
    // });
    console.log(this.service.name);
    console.log(this.sub);
    this.sub.add(
      this.service.getBooks().subscribe((data) => (this.books = data))
    );
  }

  goToBook(b: IBook) {
    this.router.navigate([b.isbn], {
      relativeTo: this.route,
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
