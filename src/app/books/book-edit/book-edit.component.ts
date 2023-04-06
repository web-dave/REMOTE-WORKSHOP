import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(BookService);
  book$ = this.service.getBook(this.route.snapshot.params['isbn']);
  book: IBook | undefined;
  sub: Subscription | undefined;
  buch: IBook = {
    title: 'Klaus',
    subtitle: '',
    isbn: '',
    abstract: '',
    numPages: 0,
    author: '',
    publisher: '',
    price: '',
    cover: '',
  };

  ngOnInit() {
    this.sub = this.book$.subscribe((data) => {
      console.log({ ...data, ...this.buch });
      this.book = { ...this.buch, ...data };
    });
  }

  getFoo(...data: string[]) {}

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  saveBook() {
    this.service.updateBook(this.book as IBook).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }
}
