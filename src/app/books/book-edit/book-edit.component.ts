import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private service = inject(BookService);
  book$ = this.service.getBook(this.route.snapshot.params['isbn']);
  book: IBook | undefined;
  sub: Subscription | undefined;

  ngOnInit() {
    this.sub = this.book$.subscribe((data) => (this.book = data));
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  saveBook() {}
}
