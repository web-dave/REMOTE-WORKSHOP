import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'hurz-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  $book: Observable<IBook>;
  constructor(private service: BooksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.$book = this.route.params.pipe(
      mergeMap(params => this.service.getBook(params.isbn))
    );
  }
  save(book) {
    this.service.updateBook(book).subscribe();
  }
}
