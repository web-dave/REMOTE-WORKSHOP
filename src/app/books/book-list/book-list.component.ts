import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  private service = inject(BookService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  books$ = this.service.getBooks();

  goToBook(b: IBook) {
    console.log(b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }

  // sub: Subscription | undefined;
  // books: IBook[] = [];
  // ngOnInit(): void {
  //   // const foo$ = this.service.getBooks();

  //   // this.sub = this.service.getBooks().subscribe((data) => (this.books = data));
  //   // foo$.subscribe((data) => (this.books = data));
  //   // foo$.subscribe((data) => (this.books = data));
  //   // foo$.subscribe((data) => (this.books = data));
  //   // foo$.subscribe((data) => (this.books = data));
  // }

  // ngOnDestroy(): void {
  //   this.sub?.unsubscribe();
  // }
}
