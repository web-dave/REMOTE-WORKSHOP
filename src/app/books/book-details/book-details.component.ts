import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import { IBook } from '../book';
import { Observable } from 'rxjs';

@Component({
  selector: 'hurz-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  $book: Observable<IBook>;
  constructor(private service: BooksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.service.getBook(params.isbn).subscribe(data => (this.book = data));
    // });

    this.$book = this.route.params.pipe(
      mergeMap(params => this.service.getBook(params.isbn))
    );
  }
}
