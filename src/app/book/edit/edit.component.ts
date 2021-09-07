import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  book$: Observable<IBook> = NEVER;
  end$ = new EventEmitter();
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.service.getBook(params.isbn))
    );
  }

  save(book: IBook) {
    this.service.updateBook(book).pipe(takeUntil(this.end$)).subscribe();
  }

  ngOnDestroy() {
    this.end$.next();
  }
}
