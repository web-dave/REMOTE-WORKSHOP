import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book!: IBook;
  end$ = new EventEmitter<void>();
  constructor(private route: ActivatedRoute, private service: BookApiService) {}

  ngOnInit(): void {
    this.service
      .getBook(this.route.snapshot.paramMap.get('isbn') as string)
      .pipe(takeUntil(this.end$))
      .subscribe((data) => (this.book = data));
  }

  ngOnDestroy() {
    this.end$.next();
  }
}
