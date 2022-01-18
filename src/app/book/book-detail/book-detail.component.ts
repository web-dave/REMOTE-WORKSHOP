import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookApiService) {}

  ngOnInit(): void {
    // this.route.snapshot.params['isbn'];
    // this.book$ = this.service.getBook(this.route.snapshot.params.isbn);

    this.book$ = this.route.params.pipe(
      switchMap((parameter) => this.service.getBook(parameter['isbn']))
    );

    // .subscribe((parameter) => {
    //   this.book$ = this.service.getBook(parameter.isbn);
    // });
  }
}
